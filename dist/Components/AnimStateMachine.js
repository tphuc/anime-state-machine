"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimNode = exports.AnimTransition = exports.AnimStateMachine = exports.creatAnimation = void 0;

var _animejs = _interopRequireDefault(require("animejs"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _AnimBlueprint = _interopRequireDefault(require("../example-1/AnimBlueprint"));

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
    var animToPlay = _this.getAnimNodeByName(_this.getCurrentPlayingAnim().getNextAnim());

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

exports.AnimStateMachine = AnimStateMachine;

var AnimTransition = function AnimTransition(from, to, condition) {
  var _this2 = this;

  _classCallCheck(this, AnimTransition);

  _defineProperty(this, "conditionEvaluate", function () {
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

  _defineProperty(this, "getNextAnim", function () {
    for (var i = 0; i < _this3.transitions.length; i++) {
      var animName = _this3.transitions[i].conditionEvaluate();

      if (_this3.transitions[i].conditionEvaluate() !== _this3.name) return animName;
    }

    return _this3.name;
  });

  _defineProperty(this, "getAnimeInstance", function (target) {
    return (0, _animejs.default)(_objectSpread({
      targets: target,
      begin: _this3.onEnter
    }, _this3.animeJsProps, {
      autoplay: false,
      complete: _this3.onExit
    }));
  });

  this.name = name;
  this.animeJsProps = animeJsProps;
  this.transitions = [];
  this.onEnter = onEnter;
  this.onExit = onExit;
};

exports.AnimNode = AnimNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL0FuaW1TdGF0ZU1hY2hpbmUuanMiXSwibmFtZXMiOlsiY3JlYXRBbmltYXRpb24iLCJhbmltTmFtZSIsImFuaW1Qcm9wcyIsIm9uRW50ZXIiLCJvbkV4aXQiLCJBbmltTm9kZSIsIkFuaW1TdGF0ZU1hY2hpbmUiLCJ0YXJnZXQiLCJuYW1lIiwiYW5pbWVKc09iamVjdCIsImFuaW1HcmFwaCIsInB1c2giLCJjdXJyZW50UGxheWluZ0FuaW0iLCJmcm9tQW5pbSIsInRvQW5pbSIsImNvbmRpdGlvbiIsImkiLCJsZW5ndGgiLCJnZXROYW1lIiwidHJhbnNpdCIsImFkZFRyYW5zaXRpb24iLCJfY2hlY2tUcmFuc2l0aW9uUmV2ZXJzZSIsInBhaXJlZCIsInRyYW5zaXRHcmFwaCIsImdldEFuaW1Ob2RlQnlOYW1lIiwicGxheUFuaW0iLCJnZXRDdXJyZW50UGxheWluZ0FuaW0iLCJnZXRBbmltZUluc3RhbmNlIiwibG9vcCIsInQiLCJhbmltVG9QbGF5IiwiZ2V0TmV4dEFuaW0iLCJBbmltQmx1ZXByaW50Iiwic2V0QWN0aXZlTm9kZSIsInRpY2siLCJuZXdXaW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsIndpbmRvdyIsIm9wZW4iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiYmx1ZXByaW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwicmVmIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImlkIiwiQW5pbVRyYW5zaXRpb24iLCJmcm9tIiwidG8iLCJhbmltZUpzUHJvcHMiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjb25kaXRpb25FdmFsdWF0ZSIsInRhcmdldHMiLCJiZWdpbiIsImF1dG9wbGF5IiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFD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LE9BQU9QLFFBQVA7QUFDOUQ7O0FBQ0QsV0FBTyxNQUFJLENBQUNPLElBQVo7QUFDSCxHQXpCZ0Q7O0FBQUEsNENBMkI5QixVQUFDRCxNQUFELEVBQVk7QUFDM0IsV0FBTztBQUNIdUQsTUFBQUEsT0FBTyxFQUFFdkQsTUFETjtBQUVId0QsTUFBQUEsS0FBSyxFQUFFLE1BQUksQ0FBQzVEO0FBRlQsT0FHQSxNQUFJLENBQUN1RCxZQUhMO0FBSUhNLE1BQUFBLFFBQVEsRUFBRSxLQUpQO0FBS0hDLE1BQUFBLFFBQVEsRUFBRSxNQUFJLENBQUM3RDtBQUxaLE9BQVA7QUFPSCxHQW5DZ0Q7O0FBQzdDLE9BQUtJLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtrRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLE9BQUtFLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxPQUFLekQsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltQmx1ZXByaW50IGZyb20gJy4uL2V4YW1wbGUtMS9BbmltQmx1ZXByaW50J1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdEFuaW1hdGlvbiA9IChhbmltTmFtZSwgYW5pbVByb3BzLCBvbkVudGVyLCBvbkV4aXQpID0+IHtcbiAgICByZXR1cm4gbmV3IEFuaW1Ob2RlKGFuaW1OYW1lLCBhbmltUHJvcHMsIG9uRW50ZXIsIG9uRXhpdClcbn1cblxuXG5leHBvcnQgY2xhc3MgQW5pbVN0YXRlTWFjaGluZSB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgIHRoaXMuYW5pbUdyYXBoID0gW11cbiAgICAgICAgdGhpcy50cmFuc2l0R3JhcGggPSBbXVxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5aW5nQW5pbSA9ICcnXG4gICAgfVxuXG4gICAgYWRkQW5pbSA9IChuYW1lLCBhbmltZUpzT2JqZWN0LCBvbkVudGVyLCBvbkV4aXQpID0+IHtcbiAgICAgICAgdGhpcy5hbmltR3JhcGgucHVzaChuZXcgQW5pbU5vZGUobmFtZSwgYW5pbWVKc09iamVjdCwgb25FbnRlciwgb25FeGl0KSlcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQbGF5aW5nQW5pbSlcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXlpbmdBbmltID0gbmFtZVxuICAgIH1cblxuICAgIGFkZFRyYW5zaXRpb24gPSAoZnJvbUFuaW0sIHRvQW5pbSwgY29uZGl0aW9uKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbmltR3JhcGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1HcmFwaFtpXS5nZXROYW1lKCkgPT09IGZyb21BbmltKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zaXQgPSB0aGlzLmFuaW1HcmFwaFtpXS5hZGRUcmFuc2l0aW9uKHRvQW5pbSwgY29uZGl0aW9uKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGVja1RyYW5zaXRpb25SZXZlcnNlKGZyb21BbmltLCB0b0FuaW0pKSB0cmFuc2l0LnBhaXJlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRHcmFwaC5wdXNoKHRyYW5zaXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UGxheWluZ0FuaW0gPSAoKSA9PiB7XG4gICAgICAgIC8vcmV0dXJuIEFuaW1Ob2RlIEluc3RhbmNlXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFuaW1Ob2RlQnlOYW1lKHRoaXMuY3VycmVudFBsYXlpbmdBbmltKVxuICAgIH1cblxuICAgIGdldEFuaW1Ob2RlQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgLy9yZXR1cm4gQW5pbU5vZGUubmFtZVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYW5pbUdyYXBoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltR3JhcGhbaV0uZ2V0TmFtZSgpID09PSBuYW1lKSByZXR1cm4gdGhpcy5hbmltR3JhcGhbaV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnBsYXlBbmltID0gdGhpcy5nZXRDdXJyZW50UGxheWluZ0FuaW0oKS5nZXRBbmltZUluc3RhbmNlKHRoaXMudGFyZ2V0KVxuICAgICAgICB0aGlzLmxvb3AoKVxuICAgIH1cblxuICAgIGxvb3AgPSAodCkgPT4ge1xuICAgICAgICB2YXIgYW5pbVRvUGxheSA9IHRoaXMuZ2V0QW5pbU5vZGVCeU5hbWUodGhpcy5nZXRDdXJyZW50UGxheWluZ0FuaW0oKS5nZXROZXh0QW5pbSgpKVxuICAgICAgICBpZiAoYW5pbVRvUGxheS5nZXROYW1lKCkgIT09IHRoaXMuY3VycmVudFBsYXlpbmdBbmltKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltID0gYW5pbVRvUGxheS5nZXRBbmltZUluc3RhbmNlKHRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWluZ0FuaW0gPSBhbmltVG9QbGF5LmdldE5hbWUoKVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuQW5pbUJsdWVwcmludCkgdGhpcy5BbmltQmx1ZXByaW50LnNldEFjdGl2ZU5vZGUodGhpcy5nZXRBbmltTm9kZUJ5TmFtZSh0aGlzLmN1cnJlbnRQbGF5aW5nQW5pbSkpXG5cblxuICAgICAgICB0aGlzLnBsYXlBbmltLnRpY2sodClcbiAgICAgICAgdGhpcy5uZXdXaW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcClcbiAgICB9XG5cbiAgICBlbmFibGVXaW5kb3dQcm9maWxpbmcgPSAod2lkdGggPSA4MDAsIGhlaWdodCA9IDYwMCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubmV3V2luZG93KSB7XG4gICAgICAgICAgICB0aGlzLm5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnQVNNJywgYHdpZHRoPSR7d2lkdGh9LGhlaWdodD0ke2hlaWdodH1gKVxuICAgICAgICAgICAgdGhpcy5uZXdXaW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgdmFyIGJsdWVwcmludCA9IHRoaXMubmV3V2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBibHVlcHJpbnQuc2V0QXR0cmlidXRlKCdpZCcsICdibHVlcHJpbnQtbm9kZS1hbmltJylcbiAgICAgICAgICAgIHRoaXMubmV3V2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kKGJsdWVwcmludClcbiAgICAgICAgICAgIFJlYWN0RE9NLnJlbmRlcig8QW5pbUJsdWVwcmludCB3aW5kb3c9e3RoaXMubmV3V2luZG93fSBpbml0Q2xpZW50V2lkdGg9e3dpZHRofSBpbml0Q2xpZW50SGVpZ2h0PXtoZWlnaHR9IHJlZj17cmVmID0+IHRoaXMuQW5pbUJsdWVwcmludCA9IHJlZn0gYW5pbU5vZGVzPXt0aGlzLmFuaW1HcmFwaH0gdHJhbnNpdGlvbnM9e3RoaXMudHJhbnNpdEdyYXBofT4gPC9BbmltQmx1ZXByaW50PiwgdGhpcy5uZXdXaW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWVwcmludC1ub2RlLWFuaW0nKSlcblxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXdXaW5kb3cuZm9jdXMoKVxuXG4gICAgfVxuXG4gICAgX2NoZWNrVHJhbnNpdGlvblJldmVyc2UgPSAoZnJvbUFuaW0sIHRvQW5pbSkgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNpdEdyYXBoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2l0R3JhcGhbaV0uaWQgPT09IHRvQW5pbSArICcgJyArIGZyb21BbmltKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0R3JhcGhbaV0ucGFpcmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1UcmFuc2l0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGZyb20sIHRvLCBjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5mcm9tQW5pbSA9IGZyb21cbiAgICAgICAgdGhpcy50b0FuaW0gPSB0b1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvblxuICAgIH1cblxuICAgIGNvbmRpdGlvbkV2YWx1YXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb24oKSA/IHRoaXMudG9BbmltIDogdGhpcy5mcm9tQW5pbVxuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQW5pbU5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYW5pbWVKc1Byb3BzLCBvbkVudGVyLCBvbkV4aXQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmFuaW1lSnNQcm9wcyA9IGFuaW1lSnNQcm9wc1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25zID0gW11cbiAgICAgICAgdGhpcy5vbkVudGVyID0gb25FbnRlclxuICAgICAgICB0aGlzLm9uRXhpdCA9IG9uRXhpdFxuICAgIH1cblxuICAgIGdldE5hbWUgPSAoKSA9PiB0aGlzLm5hbWVcblxuICAgIGdldERhdGEgPSAoKSA9PiB0aGlzLmFuaW1lSnNQcm9wc1xuXG4gICAgYWRkVHJhbnNpdGlvbiA9ICh0b0FuaW0sIGNvbmRpdGlvbikgPT4ge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IG5ldyBBbmltVHJhbnNpdGlvbih0aGlzLm5hbWUsIHRvQW5pbSwgY29uZGl0aW9uKTtcbiAgICAgICAgdHJhbnNpdGlvbi5pZCA9IHRoaXMubmFtZSArICcgJyArIHRvQW5pbVxuICAgICAgICB0aGlzLnRyYW5zaXRpb25zLnB1c2godHJhbnNpdGlvbik7XG4gICAgICAgIHJldHVybiB0cmFuc2l0aW9uXG4gICAgfVxuXG4gICAgZ2V0TmV4dEFuaW0gPSAoKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmFuc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGFuaW1OYW1lID0gdGhpcy50cmFuc2l0aW9uc1tpXS5jb25kaXRpb25FdmFsdWF0ZSgpXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2l0aW9uc1tpXS5jb25kaXRpb25FdmFsdWF0ZSgpICE9PSB0aGlzLm5hbWUpIHJldHVybiBhbmltTmFtZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBnZXRBbmltZUluc3RhbmNlID0gKHRhcmdldCkgPT4ge1xuICAgICAgICByZXR1cm4gYW5pbWUoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGFyZ2V0LFxuICAgICAgICAgICAgYmVnaW46IHRoaXMub25FbnRlcixcbiAgICAgICAgICAgIC4uLnRoaXMuYW5pbWVKc1Byb3BzLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMub25FeGl0LFxuICAgICAgICB9KVxuICAgIH1cblxuXG59Il19