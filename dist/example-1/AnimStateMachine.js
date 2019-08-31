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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLTEvQW5pbVN0YXRlTWFjaGluZS5qcyJdLCJuYW1lcyI6WyJjcmVhdEFuaW1hdGlvbiIsImFuaW1OYW1lIiwiYW5pbVByb3BzIiwib25FbnRlciIsIm9uRXhpdCIsIkFuaW1Ob2RlIiwiQW5pbVN0YXRlTWFjaGluZSIsInRhcmdldCIsIm5hbWUiLCJhbmltZUpzT2JqZWN0IiwiYW5pbUdyYXBoIiwicHVzaCIsImN1cnJlbnRQbGF5aW5nQW5pbSIsImZyb21BbmltIiwidG9BbmltIiwiY29uZGl0aW9uIiwiaSIsImxlbmd0aCIsImdldE5hbWUiLCJ0cmFuc2l0IiwiYWRkVHJhbnNpdGlvbiIsIl9jaGVja1RyYW5zaXRpb25SZXZlcnNlIiwicGFpcmVkIiwidHJhbnNpdEdyYXBoIiwiZ2V0QW5pbU5vZGVCeU5hbWUiLCJwbGF5QW5pbSIsImdldEN1cnJlbnRQbGF5aW5nQW5pbSIsImdldEFuaW1lSW5zdGFuY2UiLCJsb29wIiwidCIsImFuaW1Ub1BsYXkiLCJnZXROZXh0QW5pbSIsIkFuaW1CbHVlcHJpbnQiLCJzZXRBY3RpdmVOb2RlIiwidGljayIsIm5ld1dpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93Iiwib3BlbiIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJibHVlcHJpbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiUmVhY3RET00iLCJyZW5kZXIiLCJyZWYiLCJnZXRFbGVtZW50QnlJZCIsImZvY3VzIiwiaWQiLCJBbmltVHJhbnNpdGlvbiIsImZyb20iLCJ0byIsImFuaW1lSnNQcm9wcyIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNvbmRpdGlvbkV2YWx1YXRlIiwidGFyZ2V0cyIsImJlZ2luIiwiYXV0b3BsYXkiLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNB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T0FBT1AsUUFBUDtBQUM5RDs7QUFDRCxXQUFPLE1BQUksQ0FBQ08sSUFBWjtBQUNILEdBekJnRDs7QUFBQSw0Q0EyQjlCLFVBQUNELE1BQUQsRUFBWTtBQUMzQixXQUFPO0FBQ0h1RCxNQUFBQSxPQUFPLEVBQUV2RCxNQUROO0FBRUh3RCxNQUFBQSxLQUFLLEVBQUUsTUFBSSxDQUFDNUQ7QUFGVCxPQUdBLE1BQUksQ0FBQ3VELFlBSEw7QUFJSE0sTUFBQUEsUUFBUSxFQUFFLEtBSlA7QUFLSEMsTUFBQUEsUUFBUSxFQUFFLE1BQUksQ0FBQzdEO0FBTFosT0FBUDtBQU9ILEdBbkNnRDs7QUFDN0MsT0FBS0ksSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS2tELFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsT0FBS0UsV0FBTCxHQUFtQixFQUFuQjtBQUNBLE9BQUt6RCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1CbHVlcHJpbnQgZnJvbSAnLi4vZXhhbXBsZS0xL0FuaW1CbHVlcHJpbnQnXG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0QW5pbWF0aW9uID0gKGFuaW1OYW1lLCBhbmltUHJvcHMsIG9uRW50ZXIsIG9uRXhpdCkgPT4ge1xuICAgIHJldHVybiBuZXcgQW5pbU5vZGUoYW5pbU5hbWUsIGFuaW1Qcm9wcywgb25FbnRlciwgb25FeGl0KVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBbmltU3RhdGVNYWNoaW5lIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXRcbiAgICAgICAgdGhpcy5hbmltR3JhcGggPSBbXVxuICAgICAgICB0aGlzLnRyYW5zaXRHcmFwaCA9IFtdXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXlpbmdBbmltID0gJydcbiAgICB9XG5cbiAgICBhZGRBbmltID0gKG5hbWUsIGFuaW1lSnNPYmplY3QsIG9uRW50ZXIsIG9uRXhpdCkgPT4ge1xuICAgICAgICB0aGlzLmFuaW1HcmFwaC5wdXNoKG5ldyBBbmltTm9kZShuYW1lLCBhbmltZUpzT2JqZWN0LCBvbkVudGVyLCBvbkV4aXQpKVxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBsYXlpbmdBbmltKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWluZ0FuaW0gPSBuYW1lXG4gICAgfVxuXG4gICAgYWRkVHJhbnNpdGlvbiA9IChmcm9tQW5pbSwgdG9BbmltLCBjb25kaXRpb24pID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFuaW1HcmFwaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbUdyYXBoW2ldLmdldE5hbWUoKSA9PT0gZnJvbUFuaW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNpdCA9IHRoaXMuYW5pbUdyYXBoW2ldLmFkZFRyYW5zaXRpb24odG9BbmltLCBjb25kaXRpb24pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NoZWNrVHJhbnNpdGlvblJldmVyc2UoZnJvbUFuaW0sIHRvQW5pbSkpIHRyYW5zaXQucGFpcmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdEdyYXBoLnB1c2godHJhbnNpdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnRQbGF5aW5nQW5pbSA9ICgpID0+IHtcbiAgICAgICAgLy9yZXR1cm4gQW5pbU5vZGUgSW5zdGFuY2VcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QW5pbU5vZGVCeU5hbWUodGhpcy5jdXJyZW50UGxheWluZ0FuaW0pXG4gICAgfVxuXG4gICAgZ2V0QW5pbU5vZGVCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICAvL3JldHVybiBBbmltTm9kZS5uYW1lXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbmltR3JhcGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1HcmFwaFtpXS5nZXROYW1lKCkgPT09IG5hbWUpIHJldHVybiB0aGlzLmFuaW1HcmFwaFtpXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucGxheUFuaW0gPSB0aGlzLmdldEN1cnJlbnRQbGF5aW5nQW5pbSgpLmdldEFuaW1lSW5zdGFuY2UodGhpcy50YXJnZXQpXG4gICAgICAgIHRoaXMubG9vcCgpXG4gICAgfVxuXG4gICAgbG9vcCA9ICh0KSA9PiB7XG4gICAgICAgIHZhciBhbmltVG9QbGF5ID0gdGhpcy5nZXRBbmltTm9kZUJ5TmFtZSh0aGlzLmdldEN1cnJlbnRQbGF5aW5nQW5pbSgpLmdldE5leHRBbmltKCkpXG4gICAgICAgIGlmIChhbmltVG9QbGF5LmdldE5hbWUoKSAhPT0gdGhpcy5jdXJyZW50UGxheWluZ0FuaW0pIHtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW0gPSBhbmltVG9QbGF5LmdldEFuaW1lSW5zdGFuY2UodGhpcy50YXJnZXQpXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5aW5nQW5pbSA9IGFuaW1Ub1BsYXkuZ2V0TmFtZSgpXG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5BbmltQmx1ZXByaW50KSB0aGlzLkFuaW1CbHVlcHJpbnQuc2V0QWN0aXZlTm9kZSh0aGlzLmdldEFuaW1Ob2RlQnlOYW1lKHRoaXMuY3VycmVudFBsYXlpbmdBbmltKSlcblxuXG4gICAgICAgIHRoaXMucGxheUFuaW0udGljayh0KVxuICAgICAgICB0aGlzLm5ld1dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKVxuICAgIH1cblxuICAgIGVuYWJsZVdpbmRvd1Byb2ZpbGluZyA9ICh3aWR0aCA9IDgwMCwgaGVpZ2h0ID0gNjAwKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5uZXdXaW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMubmV3V2luZG93ID0gd2luZG93Lm9wZW4oJycsICdBU00nLCBgd2lkdGg9JHt3aWR0aH0saGVpZ2h0PSR7aGVpZ2h0fWApXG4gICAgICAgICAgICB0aGlzLm5ld1dpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB2YXIgYmx1ZXByaW50ID0gdGhpcy5uZXdXaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJsdWVwcmludC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JsdWVwcmludC1ub2RlLWFuaW0nKVxuICAgICAgICAgICAgdGhpcy5uZXdXaW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmQoYmx1ZXByaW50KVxuICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKDxBbmltQmx1ZXByaW50IHdpbmRvdz17dGhpcy5uZXdXaW5kb3d9IGluaXRDbGllbnRXaWR0aD17d2lkdGh9IGluaXRDbGllbnRIZWlnaHQ9e2hlaWdodH0gcmVmPXtyZWYgPT4gdGhpcy5BbmltQmx1ZXByaW50ID0gcmVmfSBhbmltTm9kZXM9e3RoaXMuYW5pbUdyYXBofSB0cmFuc2l0aW9ucz17dGhpcy50cmFuc2l0R3JhcGh9PiA8L0FuaW1CbHVlcHJpbnQ+LCB0aGlzLm5ld1dpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZXByaW50LW5vZGUtYW5pbScpKVxuXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5ld1dpbmRvdy5mb2N1cygpXG5cbiAgICB9XG5cbiAgICBfY2hlY2tUcmFuc2l0aW9uUmV2ZXJzZSA9IChmcm9tQW5pbSwgdG9BbmltKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmFuc2l0R3JhcGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRHcmFwaFtpXS5pZCA9PT0gdG9BbmltICsgJyAnICsgZnJvbUFuaW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRHcmFwaFtpXS5wYWlyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQW5pbVRyYW5zaXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoZnJvbSwgdG8sIGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmZyb21BbmltID0gZnJvbVxuICAgICAgICB0aGlzLnRvQW5pbSA9IHRvXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uXG4gICAgfVxuXG4gICAgY29uZGl0aW9uRXZhbHVhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbigpID8gdGhpcy50b0FuaW0gOiB0aGlzLmZyb21BbmltXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBbmltTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhbmltZUpzUHJvcHMsIG9uRW50ZXIsIG9uRXhpdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuYW5pbWVKc1Byb3BzID0gYW5pbWVKc1Byb3BzXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbnMgPSBbXVxuICAgICAgICB0aGlzLm9uRW50ZXIgPSBvbkVudGVyXG4gICAgICAgIHRoaXMub25FeGl0ID0gb25FeGl0XG4gICAgfVxuXG4gICAgZ2V0TmFtZSA9ICgpID0+IHRoaXMubmFtZVxuXG4gICAgZ2V0RGF0YSA9ICgpID0+IHRoaXMuYW5pbWVKc1Byb3BzXG5cbiAgICBhZGRUcmFuc2l0aW9uID0gKHRvQW5pbSwgY29uZGl0aW9uKSA9PiB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gbmV3IEFuaW1UcmFuc2l0aW9uKHRoaXMubmFtZSwgdG9BbmltLCBjb25kaXRpb24pO1xuICAgICAgICB0cmFuc2l0aW9uLmlkID0gdGhpcy5uYW1lICsgJyAnICsgdG9BbmltXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbnMucHVzaCh0cmFuc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25cbiAgICB9XG5cbiAgICBnZXROZXh0QW5pbSA9ICgpID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyYW5zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYW5pbU5hbWUgPSB0aGlzLnRyYW5zaXRpb25zW2ldLmNvbmRpdGlvbkV2YWx1YXRlKClcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25zW2ldLmNvbmRpdGlvbkV2YWx1YXRlKCkgIT09IHRoaXMubmFtZSkgcmV0dXJuIGFuaW1OYW1lXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGdldEFuaW1lSW5zdGFuY2UgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIHJldHVybiBhbmltZSh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0YXJnZXQsXG4gICAgICAgICAgICBiZWdpbjogdGhpcy5vbkVudGVyLFxuICAgICAgICAgICAgLi4udGhpcy5hbmltZUpzUHJvcHMsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5vbkV4aXQsXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbn0iXX0=