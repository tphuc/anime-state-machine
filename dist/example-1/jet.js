"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./jet.scss");

var ASM = _interopRequireWildcard(require("./AnimStateMachine"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Rocket =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rocket, _React$Component);

  function Rocket(props) {
    var _this;

    _classCallCheck(this, Rocket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rocket).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      clicked: false,
      animation: {
        transtateX: 100
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseGestResponse", function () {
      _this.x += (_this.lFollowX - _this.x) * _this.friction;
      _this.y += (_this.lFollowY - _this.y) * _this.friction;
      var a = "translate(".concat(_this.x, "px, ").concat(_this.y - 0, "px) scale(1)");
      _this.rocket.style.transform = a;
      requestAnimationFrame(_this.mouseGestResponse);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (e) {
      _this.lFollowX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX)) / 5;
      _this.lFollowY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY)) / 5;
    });

    _this.lFollowX = 0;
    _this.lFollowY = 0;
    _this.x = 0;
    _this.y = 0;
    _this.friction = 0.01;
    _this.animating = false;
    window.addEventListener('mousemove', _this.handleMouseMove);
    return _this;
  }

  _createClass(Rocket, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //creating Animation State Machine
      this.AnimStateMachine = new ASM.AnimStateMachine(this.rocket); //Adding animations

      this.AnimStateMachine.addAnim('flyright', {
        translateX: 300,
        rotateY: 0,
        duration: 1000
      });
      this.AnimStateMachine.addAnim('flyleft', {
        translateX: -300,
        rotateY: 90,
        duration: 5000
      }); //adding transition

      this.AnimStateMachine.addTransition('flyright', 'flyleft', function () {
        return window.scrollY > 500;
      });
      this.AnimStateMachine.addTransition('flyleft', 'flyright', function () {
        return window.scrollY < 10;
      }); //start

      this.AnimStateMachine.enableWindowProfiling();
      this.AnimStateMachine.start();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        style: {
          width: '100%',
          height: window.innerHeight * 2
        }
      }, _react.default.createElement("div", {
        className: "rocket",
        ref: function ref(_ref) {
          return _this2.rocket = _ref;
        },
        style: {
          position: 'fixed'
        }
      }, _react.default.createElement("div", {
        className: "rocket-body"
      }, _react.default.createElement("div", {
        className: "body"
      }), _react.default.createElement("div", {
        className: "fin fin-left"
      }), _react.default.createElement("div", {
        className: "fin fin-right"
      }), _react.default.createElement("div", {
        className: "window"
      })), _react.default.createElement("div", {
        className: "exhaust-flame"
      })));
    }
  }]);

  return Rocket;
}(_react.default.Component);

exports.default = Rocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLTEvamV0LmpzIl0sIm5hbWVzIjpbIlJvY2tldCIsInByb3BzIiwiY2xpY2tlZCIsImFuaW1hdGlvbiIsInRyYW5zdGF0ZVgiLCJ4IiwibEZvbGxvd1giLCJmcmljdGlvbiIsInkiLCJsRm9sbG93WSIsImEiLCJyb2NrZXQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdXNlR2VzdFJlc3BvbnNlIiwiZSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50WCIsImlubmVySGVpZ2h0IiwiY2xpZW50WSIsImFuaW1hdGluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZU1vdmUiLCJBbmltU3RhdGVNYWNoaW5lIiwiQVNNIiwiYWRkQW5pbSIsInRyYW5zbGF0ZVgiLCJyb3RhdGVZIiwiZHVyYXRpb24iLCJhZGRUcmFuc2l0aW9uIiwic2Nyb2xsWSIsImVuYWJsZVdpbmRvd1Byb2ZpbGluZyIsInN0YXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiLCJwb3NpdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxNOzs7OztBQVNqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGdGQUFNQSxLQUFOOztBQURlLDREQVBYO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRSxLQURMO0FBRUpDLE1BQUFBLFNBQVMsRUFBRTtBQUNQQyxRQUFBQSxVQUFVLEVBQUU7QUFETDtBQUZQLEtBT1c7O0FBQUEsd0VBd0NDLFlBQU07QUFDdEIsWUFBS0MsQ0FBTCxJQUFVLENBQUMsTUFBS0MsUUFBTCxHQUFnQixNQUFLRCxDQUF0QixJQUEyQixNQUFLRSxRQUExQztBQUNBLFlBQUtDLENBQUwsSUFBVSxDQUFDLE1BQUtDLFFBQUwsR0FB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O0FBQVY7QUFBOUQsU0FDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsUUFESixFQUVJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixRQUZKLEVBR0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFFBSEosRUFJSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsUUFKSixDQURKLEVBT0k7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFFBUEosQ0FEQSxDQURKO0FBYUg7Ozs7RUE5RStCQyxlQUFNQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9qZXQuc2Nzcyc7XG5pbXBvcnQgKiBhcyBBU00gZnJvbSAnLi9BbmltU3RhdGVNYWNoaW5lJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvY2tldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY2xpY2tlZDogZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgdHJhbnN0YXRlWDogMTAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmxGb2xsb3dYID0gMDtcbiAgICAgICAgdGhpcy5sRm9sbG93WSA9IDA7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuZnJpY3Rpb24gPSAwLjAxO1xuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIC8vY3JlYXRpbmcgQW5pbWF0aW9uIFN0YXRlIE1hY2hpbmVcbiAgICAgICAgdGhpcy5BbmltU3RhdGVNYWNoaW5lID0gbmV3IEFTTS5BbmltU3RhdGVNYWNoaW5lKHRoaXMucm9ja2V0KVxuXG4gICAgICAgIC8vQWRkaW5nIGFuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5BbmltU3RhdGVNYWNoaW5lLmFkZEFuaW0oJ2ZseXJpZ2h0Jywge1xuICAgICAgICAgICAgdHJhbnNsYXRlWDogMzAwLFxuICAgICAgICAgICAgcm90YXRlWTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuQW5pbVN0YXRlTWFjaGluZS5hZGRBbmltKCdmbHlsZWZ0Jywge1xuICAgICAgICAgICAgdHJhbnNsYXRlWDogLTMwMCxcbiAgICAgICAgICAgIHJvdGF0ZVk6IDkwLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIC8vYWRkaW5nIHRyYW5zaXRpb25cbiAgICAgICAgdGhpcy5BbmltU3RhdGVNYWNoaW5lLmFkZFRyYW5zaXRpb24oJ2ZseXJpZ2h0JywgJ2ZseWxlZnQnLCAoKSA9PiB3aW5kb3cuc2Nyb2xsWSA+IDUwMClcbiAgICAgICAgdGhpcy5BbmltU3RhdGVNYWNoaW5lLmFkZFRyYW5zaXRpb24oJ2ZseWxlZnQnLCAnZmx5cmlnaHQnLCAoKSA9PiB3aW5kb3cuc2Nyb2xsWSA8IDEwKVxuXG4gICAgICAgIC8vc3RhcnRcbiAgICAgICAgdGhpcy5BbmltU3RhdGVNYWNoaW5lLmVuYWJsZVdpbmRvd1Byb2ZpbGluZygpXG4gICAgICAgIHRoaXMuQW5pbVN0YXRlTWFjaGluZS5zdGFydCgpXG5cbiAgICB9XG5cbiAgICBtb3VzZUdlc3RSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy54ICs9ICh0aGlzLmxGb2xsb3dYIC0gdGhpcy54KSAqIHRoaXMuZnJpY3Rpb24gXG4gICAgICAgIHRoaXMueSArPSAodGhpcy5sRm9sbG93WSAtIHRoaXMueSkgKiB0aGlzLmZyaWN0aW9uO1xuICAgICAgICB2YXIgYSA9IGB0cmFuc2xhdGUoJHt0aGlzLnh9cHgsICR7dGhpcy55LTB9cHgpIHNjYWxlKDEpYFxuICAgICAgICB0aGlzLnJvY2tldC5zdHlsZS50cmFuc2Zvcm0gPSBhO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3VzZUdlc3RSZXNwb25zZSlcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgIHRoaXMubEZvbGxvd1ggPSBNYXRoLm1heCgtMTAwLCBNYXRoLm1pbigxMDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGUuY2xpZW50WCkpIC8gNTtcbiAgICAgICB0aGlzLmxGb2xsb3dZID0gTWF0aC5tYXgoLTEwMCwgTWF0aC5taW4oMTAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gZS5jbGllbnRZKSkgLyA1O1xuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6d2luZG93LmlubmVySGVpZ2h0KjJ9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9ja2V0XCIgcmVmPXtyZWYgPT4gdGhpcy5yb2NrZXQgPSByZWZ9IHN0eWxlPXt7cG9zaXRpb246J2ZpeGVkJ319PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9ja2V0LWJvZHlcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW4gZmluLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW4gZmluLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luZG93XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGhhdXN0LWZsYW1lXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ==