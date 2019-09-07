"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimNode = exports.AnimTransition = exports.default = exports.creatAnimation = void 0;

var _animejs = _interopRequireDefault(require("animejs"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _AnimBlueprint = _interopRequireDefault(require("./AnimBlueprint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var creatAnimation = function creatAnimation(animName, animProps, onEnter, onExit) {
  return new AnimNode(animName, animProps, onEnter, onExit);
};

exports.creatAnimation = creatAnimation;

var AnimStateMachine = function AnimStateMachine(target) {
  var _this = this;

  _classCallCheck(this, AnimStateMachine);

  _defineProperty(this, "addAnim", function (name, animeJsObject, onEnter, onExit) {
    _this.animGraph.push(new AnimNode(name, animeJsObject, onEnter, onExit));

    if (!_this.currentPlayingAnim) _this.currentPlayingAnim = name;
  });

  _defineProperty(this, "addTransition", function (fromAnim, toAnim, condition) {
    for (var i = 0; i < _this.animGraph.length; i++) {
      if (_this.animGraph[i].getName() === fromAnim) {
        var transit = _this.animGraph[i].addTransition(toAnim, condition);

        if (_this._checkTransitionReverse(fromAnim, toAnim)) transit.paired = true;

        _this.transitGraph.push(transit);
      }
    }
  });

  _defineProperty(this, "getCurrentPlayingAnim", function () {
    //return AnimNode Instance
    return _this.getAnimNodeByName(_this.currentPlayingAnim);
  });

  _defineProperty(this, "getAnimNodeByName", function (name) {
    //return AnimNode.name
    for (var i = 0; i < _this.animGraph.length; i++) {
      if (_this.animGraph[i].getName() === name) return _this.animGraph[i];
    }
  });

  _defineProperty(this, "start", function () {
    _this.playAnim = _this.getCurrentPlayingAnim().getAnimeInstance(_this.target);

    _this.loop();
  });

  _defineProperty(this, "loop", function (t) {
    var animToPlay = _this.getAnimNodeByName(_this.getCurrentPlayingAnim().getNextAnim(_this.playAnim));

    if (animToPlay.getName() !== _this.currentPlayingAnim) {
      _this.playAnim = animToPlay.getAnimeInstance(_this.target);
      _this.currentPlayingAnim = animToPlay.getName();
    }

    if (_this.AnimBlueprint) _this.AnimBlueprint.setActiveNode(_this.getAnimNodeByName(_this.currentPlayingAnim));

    _this.playAnim.tick(t);

    _this.newWindow.requestAnimationFrame(_this.loop);
  });

  _defineProperty(this, "enableWindowProfiling", function () {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;

    if (!_this.newWindow) {
      _this.newWindow = window.open('', 'ASM', "width=".concat(width, ",height=").concat(height));
      _this.newWindow.document.body.style.overflow = 'hidden';

      var blueprint = _this.newWindow.document.createElement('div');

      blueprint.setAttribute('id', 'blueprint-node-anim');

      _this.newWindow.document.body.append(blueprint);

      _reactDom.default.render(_react.default.createElement(_AnimBlueprint.default, {
        window: _this.newWindow,
        initClientWidth: width,
        initClientHeight: height,
        ref: function ref(_ref) {
          return _this.AnimBlueprint = _ref;
        },
        animNodes: _this.animGraph,
        transitions: _this.transitGraph
      }, " "), _this.newWindow.document.getElementById('blueprint-node-anim'));
    }

    _this.newWindow.focus();
  });

  _defineProperty(this, "_checkTransitionReverse", function (fromAnim, toAnim) {
    for (var i = 0; i < _this.transitGraph.length; i++) {
      if (_this.transitGraph[i].id === toAnim + ' ' + fromAnim) {
        _this.transitGraph[i].paired = true;
        return true;
      }
    }

    return false;
  });

  this.target = target;
  this.animGraph = [];
  this.transitGraph = [];
  this.currentPlayingAnim = '';
};

exports.default = AnimStateMachine;

var AnimTransition = function AnimTransition(from, to, condition) {
  var _this2 = this;

  _classCallCheck(this, AnimTransition);

  _defineProperty(this, "conditionEvaluate", function (timeRatio) {
    if (_this2.condition instanceof String || typeof _this2.condition === 'string') {
      return timeRatio === 1 ? _this2.toAnim : _this2.fromAnim;
    }

    return _this2.condition() ? _this2.toAnim : _this2.fromAnim;
  });

  this.fromAnim = from;
  this.toAnim = to;
  this.condition = condition;
};

exports.AnimTransition = AnimTransition;

var AnimNode = function AnimNode(name, animeJsProps, onEnter, onExit) {
  var _this3 = this;

  _classCallCheck(this, AnimNode);

  _defineProperty(this, "getName", function () {
    return _this3.name;
  });

  _defineProperty(this, "getData", function () {
    return _this3.animeJsProps;
  });

  _defineProperty(this, "addTransition", function (toAnim, condition) {
    var transition = new AnimTransition(_this3.name, toAnim, condition);
    transition.id = _this3.name + ' ' + toAnim;

    _this3.transitions.push(transition);

    return transition;
  });

  _defineProperty(this, "getNextAnim", function (anim) {
    for (var i = 0; i < _this3.transitions.length; i++) {
      var animName = _this3.transitions[i].conditionEvaluate(anim.currentTime / anim.duration);

      if (animName !== _this3.name) return animName;
    }

    return _this3.name;
  });

  _defineProperty(this, "getAnimeInstance", function (target) {
    return (0, _animejs.default)(_objectSpread({
      targets: target,
      begin: _this3.onEnter
    }, _this3.animeJsProps, {
      autoplay: false,
      complete: function complete() {
        if (_this3.onExit) _this3.onExit();
      }
    }));
  });

  this.name = name;
  this.animeJsProps = animeJsProps;
  this.transitions = [];
  this.onEnter = onEnter;
  this.onExit = onExit;
};

exports.AnimNode = AnimNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL0FuaW1TdGF0ZU1hY2hpbmUuanMiXSwibmFtZXMiOlsiY3JlYXRBbmltYXRpb24iLCJhbmltTmFtZSIsImFuaW1Qcm9wcyIsIm9uRW50ZXIiLCJvbkV4aXQiLCJBbmltTm9kZSIsIkFuaW1TdGF0ZU1hY2hpbmUiLCJ0YXJnZXQiLCJuYW1lIiwiYW5pbWVKc09iamVjdCIsImFuaW1HcmFwaCIsInB1c2giLCJjdXJyZW50UGxheWluZ0FuaW0iLCJmcm9tQW5pbSIsInRvQW5pbSIsImNvbmRpdGlvbiIsImkiLCJsZW5ndGgiLCJnZXROYW1lIiwidHJhbnNpdCIsImFkZFRyYW5zaXRpb24iLCJfY2hlY2tUcmFuc2l0aW9uUmV2ZXJzZSIsInBhaXJlZCIsInRyYW5zaXRHcmFwaCIsImdldEFuaW1Ob2RlQnlOYW1lIiwicGxheUFuaW0iLCJnZXRDdXJyZW50UGxheWluZ0FuaW0iLCJnZXRBbmltZUluc3RhbmNlIiwibG9vcCIsInQiLCJhbmltVG9QbGF5IiwiZ2V0TmV4dEFuaW0iLCJBbmltQmx1ZXByaW50Iiwic2V0QWN0aXZlTm9kZSIsInRpY2siLCJuZXdXaW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsIndpbmRvdyIsIm9wZW4iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiYmx1ZXByaW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwicmVmIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImlkIiwiQW5pbVRyYW5zaXRpb24iLCJmcm9tIiwidG8iLCJ0aW1lUmF0aW8iLCJTdHJpbmciLCJhbmltZUpzUHJvcHMiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJhbmltIiwiY29uZGl0aW9uRXZhbHVhdGUiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwidGFyZ2V0cyIsImJlZ2luIiwiYXV0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RUFBVTtBQUNwQixTQUFLLElBQUkvQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLE1BQUksQ0FBQzhDLFdBQUwsQ0FBaUI3QyxNQUFyQyxFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtBQUM5QyxVQUFJZixRQUFRLEdBQUcsTUFBSSxDQUFDNkQsV0FBTCxDQUFpQjlDLENBQWpCLEVBQW9CZ0QsaUJBQXBCLENBQXNDRCxJQUFJLENBQUNFLFdBQUwsR0FBbUJGLElBQUksQ0FBQ0csUUFBOUQsQ0FBZjs7QUFDQSxVQUFJakUsUUFBUSxLQUFLLE1BQUksQ0FBQ08sSUFBdEIsRUFBNEIsT0FBT1AsUUFBUDtBQUMvQjs7QUFDRCxXQUFPLE1BQUksQ0FBQ08sSUFBWjtBQUNILEdBekJnRDs7QUFBQSw0Q0EyQjlCLFVBQUNELE1BQUQsRUFBWTtBQUMzQixXQUFPO0FBQ0g0RCxNQUFBQSxPQUFPLEVBQUU1RCxNQUROO0FBRUg2RCxNQUFBQSxLQUFLLEVBQUUsTUFBSSxDQUFDakU7QUFGVCxPQUdBLE1BQUksQ0FBQ3lELFlBSEw7QUFJSFMsTUFBQUEsUUFBUSxFQUFFLEtBSlA7QUFLSEMsTUFBQUEsUUFBUSxFQUFFLG9CQUFNO0FBQ1osWUFBRyxNQUFJLENBQUNsRSxNQUFSLEVBQWdCLE1BQUksQ0FBQ0EsTUFBTDtBQUNuQjtBQVBFLE9BQVA7QUFTSCxHQXJDZ0Q7O0FBQzdDLE9BQUtJLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtvRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLE9BQUtFLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxPQUFLM0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltQmx1ZXByaW50IGZyb20gJy4vQW5pbUJsdWVwcmludCdcblxuXG5leHBvcnQgY29uc3QgY3JlYXRBbmltYXRpb24gPSAoYW5pbU5hbWUsIGFuaW1Qcm9wcywgb25FbnRlciwgb25FeGl0KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBBbmltTm9kZShhbmltTmFtZSwgYW5pbVByb3BzLCBvbkVudGVyLCBvbkV4aXQpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbVN0YXRlTWFjaGluZSB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgIHRoaXMuYW5pbUdyYXBoID0gW11cbiAgICAgICAgdGhpcy50cmFuc2l0R3JhcGggPSBbXVxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5aW5nQW5pbSA9ICcnXG4gICAgfVxuXG4gICAgYWRkQW5pbSA9IChuYW1lLCBhbmltZUpzT2JqZWN0LCBvbkVudGVyLCBvbkV4aXQpID0+IHtcbiAgICAgICAgdGhpcy5hbmltR3JhcGgucHVzaChuZXcgQW5pbU5vZGUobmFtZSwgYW5pbWVKc09iamVjdCwgb25FbnRlciwgb25FeGl0KSlcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQbGF5aW5nQW5pbSlcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXlpbmdBbmltID0gbmFtZVxuICAgIH1cblxuICAgIGFkZFRyYW5zaXRpb24gPSAoZnJvbUFuaW0sIHRvQW5pbSwgY29uZGl0aW9uKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbmltR3JhcGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1HcmFwaFtpXS5nZXROYW1lKCkgPT09IGZyb21BbmltKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zaXQgPSB0aGlzLmFuaW1HcmFwaFtpXS5hZGRUcmFuc2l0aW9uKHRvQW5pbSwgY29uZGl0aW9uKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1RyYW5zaXRpb25SZXZlcnNlKGZyb21BbmltLCB0b0FuaW0pKSB0cmFuc2l0LnBhaXJlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRHcmFwaC5wdXNoKHRyYW5zaXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UGxheWluZ0FuaW0gPSAoKSA9PiB7XG4gICAgICAgIC8vcmV0dXJuIEFuaW1Ob2RlIEluc3RhbmNlXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFuaW1Ob2RlQnlOYW1lKHRoaXMuY3VycmVudFBsYXlpbmdBbmltKVxuICAgIH1cblxuICAgIGdldEFuaW1Ob2RlQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgLy9yZXR1cm4gQW5pbU5vZGUubmFtZVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYW5pbUdyYXBoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltR3JhcGhbaV0uZ2V0TmFtZSgpID09PSBuYW1lKSByZXR1cm4gdGhpcy5hbmltR3JhcGhbaV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnBsYXlBbmltID0gdGhpcy5nZXRDdXJyZW50UGxheWluZ0FuaW0oKS5nZXRBbmltZUluc3RhbmNlKHRoaXMudGFyZ2V0KVxuICAgICAgICB0aGlzLmxvb3AoKVxuICAgIH1cblxuICAgIGxvb3AgPSAodCkgPT4ge1xuICAgICAgICB2YXIgYW5pbVRvUGxheSA9IHRoaXMuZ2V0QW5pbU5vZGVCeU5hbWUodGhpcy5nZXRDdXJyZW50UGxheWluZ0FuaW0oKS5nZXROZXh0QW5pbSh0aGlzLnBsYXlBbmltKSlcbiAgICAgICAgaWYgKGFuaW1Ub1BsYXkuZ2V0TmFtZSgpICE9PSB0aGlzLmN1cnJlbnRQbGF5aW5nQW5pbSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSA9IGFuaW1Ub1BsYXkuZ2V0QW5pbWVJbnN0YW5jZSh0aGlzLnRhcmdldClcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXlpbmdBbmltID0gYW5pbVRvUGxheS5nZXROYW1lKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5BbmltQmx1ZXByaW50KSB0aGlzLkFuaW1CbHVlcHJpbnQuc2V0QWN0aXZlTm9kZSh0aGlzLmdldEFuaW1Ob2RlQnlOYW1lKHRoaXMuY3VycmVudFBsYXlpbmdBbmltKSlcblxuXG4gICAgICAgIHRoaXMucGxheUFuaW0udGljayh0KVxuICAgICAgICB0aGlzLm5ld1dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKVxuICAgIH1cblxuICAgIGVuYWJsZVdpbmRvd1Byb2ZpbGluZyA9ICh3aWR0aCA9IDgwMCwgaGVpZ2h0ID0gNjAwKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5uZXdXaW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMubmV3V2luZG93ID0gd2luZG93Lm9wZW4oJycsICdBU00nLCBgd2lkdGg9JHt3aWR0aH0saGVpZ2h0PSR7aGVpZ2h0fWApXG4gICAgICAgICAgICB0aGlzLm5ld1dpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB2YXIgYmx1ZXByaW50ID0gdGhpcy5uZXdXaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJsdWVwcmludC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JsdWVwcmludC1ub2RlLWFuaW0nKVxuICAgICAgICAgICAgdGhpcy5uZXdXaW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmQoYmx1ZXByaW50KVxuICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKDxBbmltQmx1ZXByaW50IHdpbmRvdz17dGhpcy5uZXdXaW5kb3d9IGluaXRDbGllbnRXaWR0aD17d2lkdGh9IGluaXRDbGllbnRIZWlnaHQ9e2hlaWdodH0gcmVmPXtyZWYgPT4gdGhpcy5BbmltQmx1ZXByaW50ID0gcmVmfSBhbmltTm9kZXM9e3RoaXMuYW5pbUdyYXBofSB0cmFuc2l0aW9ucz17dGhpcy50cmFuc2l0R3JhcGh9PiA8L0FuaW1CbHVlcHJpbnQ+LCB0aGlzLm5ld1dpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZXByaW50LW5vZGUtYW5pbScpKVxuXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5ld1dpbmRvdy5mb2N1cygpXG5cbiAgICB9XG5cbiAgICBfY2hlY2tUcmFuc2l0aW9uUmV2ZXJzZSA9IChmcm9tQW5pbSwgdG9BbmltKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmFuc2l0R3JhcGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRHcmFwaFtpXS5pZCA9PT0gdG9BbmltICsgJyAnICsgZnJvbUFuaW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRHcmFwaFtpXS5wYWlyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQW5pbVRyYW5zaXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoZnJvbSwgdG8sIGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmZyb21BbmltID0gZnJvbVxuICAgICAgICB0aGlzLnRvQW5pbSA9IHRvXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uXG4gICAgfVxuXG4gICAgY29uZGl0aW9uRXZhbHVhdGUgPSAodGltZVJhdGlvKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmNvbmRpdGlvbiBpbnN0YW5jZW9mIFN0cmluZyB8fCB0eXBlb2YgdGhpcy5jb25kaXRpb24gPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIHJldHVybiB0aW1lUmF0aW8gPT09IDEgPyB0aGlzLnRvQW5pbSA6IHRoaXMuZnJvbUFuaW1cbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbigpID8gdGhpcy50b0FuaW0gOiB0aGlzLmZyb21BbmltXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBbmltTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhbmltZUpzUHJvcHMsIG9uRW50ZXIsIG9uRXhpdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuYW5pbWVKc1Byb3BzID0gYW5pbWVKc1Byb3BzXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbnMgPSBbXVxuICAgICAgICB0aGlzLm9uRW50ZXIgPSBvbkVudGVyXG4gICAgICAgIHRoaXMub25FeGl0ID0gb25FeGl0XG4gICAgfVxuXG4gICAgZ2V0TmFtZSA9ICgpID0+IHRoaXMubmFtZVxuXG4gICAgZ2V0RGF0YSA9ICgpID0+IHRoaXMuYW5pbWVKc1Byb3BzXG5cbiAgICBhZGRUcmFuc2l0aW9uID0gKHRvQW5pbSwgY29uZGl0aW9uKSA9PiB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gbmV3IEFuaW1UcmFuc2l0aW9uKHRoaXMubmFtZSwgdG9BbmltLCBjb25kaXRpb24pO1xuICAgICAgICB0cmFuc2l0aW9uLmlkID0gdGhpcy5uYW1lICsgJyAnICsgdG9BbmltXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbnMucHVzaCh0cmFuc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25cbiAgICB9XG5cbiAgICBnZXROZXh0QW5pbSA9IChhbmltKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmFuc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGFuaW1OYW1lID0gdGhpcy50cmFuc2l0aW9uc1tpXS5jb25kaXRpb25FdmFsdWF0ZShhbmltLmN1cnJlbnRUaW1lIC8gYW5pbS5kdXJhdGlvbilcbiAgICAgICAgICAgIGlmIChhbmltTmFtZSAhPT0gdGhpcy5uYW1lKSByZXR1cm4gYW5pbU5hbWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgZ2V0QW5pbWVJbnN0YW5jZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFuaW1lKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRhcmdldCxcbiAgICAgICAgICAgIGJlZ2luOiB0aGlzLm9uRW50ZXIsXG4gICAgICAgICAgICAuLi50aGlzLmFuaW1lSnNQcm9wcyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5vbkV4aXQpIHRoaXMub25FeGl0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==