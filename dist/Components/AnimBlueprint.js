"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFeather = require("react-feather");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lightModePallete = {
  node: {
    background: '#4C566A',
    color: '#D8DEE9',
    border: '#00e5ff',
    boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
  },
  line: {
    stroke: '#81A1C1'
  },
  grid: {
    background: '#e0e0e0',
    smallGrid: '#ccd1db',
    bigGrid: '#c7ccd6'
  },
  tooltip: {
    background: 'rgba(77, 78, 87, 0.95)',
    color: '#D8DEE9',
    colorSpan: '#c5e3fc',
    boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
  }
};
var darkModePallete = {
  node: {
    background: '#51565c',
    color: '#eeeeee',
    border: '#7fc2c9',
    boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
  },
  line: {
    stroke: '#dddddd'
  },
  grid: {
    background: '#27272e',
    smallGrid: '#222222',
    bigGrid: '#1f1f1f'
  },
  tooltip: {
    background: 'rgba(152, 156, 166, 0.95)',
    color: '#27272e',
    colorSpan: '#0c274e'
  }
};

var colors = _objectSpread({}, darkModePallete);

var wordSplitUpper = function wordSplitUpper(str) {
  var newstr = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newstr += " ".concat(str[i]);
    } else newstr += str[i].toUpperCase();
  }

  return newstr;
};

var Vec = {
  normalize: function normalize(vec) {
    var len = Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2)) || 1;
    return [vec[0] / len, vec[1] / len];
  },
  add: function add(vec1, vec2) {
    return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
  },
  subtract: function subtract(vec1, vec2) {
    return [vec1[0] - vec2[0], vec1[1] - vec2[1]];
  },
  multiply: function multiply(vec, factor) {
    return [vec[0] * factor, vec[1] * factor];
  }
};

var Line = function Line(_ref) {
  var onHover = _ref.onHover,
      onLeave = _ref.onLeave,
      props = _objectWithoutProperties(_ref, ["onHover", "onLeave"]);

  var start = props.start,
      end = props.end;

  var _useState = (0, _react.useState)(3),
      _useState2 = _slicedToArray(_useState, 2),
      strokeWidth = _useState2[0],
      setStrokeWidth = _useState2[1];

  return _react.default.createElement("line", _extends({
    x1: start ? start[0] : '50%',
    y1: start ? start[1] : "50%",
    x2: end ? end[0] : 0,
    y2: end ? end[1] : 0,
    style: {
      transition: '100ms'
    },
    stroke: colors.line.stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }, props, {
    onMouseEnter: function onMouseEnter(e) {
      setStrokeWidth(6);
      if (onHover) onHover(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      setStrokeWidth(3);
      if (onLeave) onLeave(e);
    }
  }));
};

var PxtoNum = function PxtoNum(pxString) {
  return Number(pxString.match(/(.*)px/)[1]);
};

var rule = {
  scale: function scale(string) {
    if (string) return Number(string.match(/scale\(([^)]+)\)/)[1]);
    return 1;
  },
  translate: function translate(string) {
    if (string) {
      var strSplit = string.match(/translate\(([^)]+)\)/)[1].split(', ');
      return [PxtoNum(strSplit[0]), PxtoNum(strSplit[1])];
    }

    return [1, 1];
  }
};

var Blueprint =
/*#__PURE__*/
function (_Component) {
  _inherits(Blueprint, _Component);

  function Blueprint(props) {
    var _this;

    _classCallCheck(this, Blueprint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Blueprint).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: true,
      darkMode: true
    });

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      _this.initWidth = _this.wrapper.getBoundingClientRect().width;
      _this.initHeight = _this.wrapper.getBoundingClientRect().height;
      _this.containerWidth = _this.container.getBoundingClientRect().width;
      _this.containerHeight = _this.container.getBoundingClientRect().height;
      _this.originX = (_this.window.innerWidth - _this.initWidth) / 2;
      _this.originY = (_this.window.innerHeight - _this.initHeight) / 2;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (e) {
      e = e || _this.window.event;
      e.preventDefault();
      e.stopPropagation();
      _this.deltaX = _this.mouseX - e.clientX;
      _this.deltaY = _this.mouseY - e.clientY;
      _this.mouseX = e.clientX;
      _this.mouseY = e.clientY;
      var maxTop = (_this.scale - 1) * _this.initHeight / 2;
      var maxLeft = (_this.scale - 1) * _this.initWidth / 2;

      var minLeft = maxLeft - _this.wrapper.getBoundingClientRect().width + _this.containerWidth;

      var minTop = maxTop - _this.wrapper.getBoundingClientRect().height + _this.containerHeight;

      _this.wrapper.style.top = Math.min(Math.max(_this.wrapper.offsetTop - _this.deltaY, minTop), maxTop) + 'px';
      _this.wrapper.style.left = Math.min(Math.max(_this.wrapper.offsetLeft - _this.deltaX, minLeft), maxLeft) + 'px';
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (e) {
      e = e || _this.window.event;
      e.preventDefault();
      e.stopPropagation();
      if (_this.props.onClick) _this.props.onClick();
      _this.mouseX = e.clientX;
      _this.mouseY = e.clientY;
      _this.window.document.onmousemove = _this.handleMouseMove;
      _this.window.document.onmouseup = _this.handleMouseUp;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
      _this.window.document.onmousemove = null;
      _this.window.document.onmouseup = null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseWheel", function (e) {
      if (e.altKey) {
        _this.scale = Math.max(rule.scale(_this.wrapper.style.transform) - 0.0005 * e.deltaY, 0.3);
        _this.wrapper.style.transform = "scale(".concat(_this.scale, ")");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setTooltip", function (data, x, y) {
      if (!data) _this.tooltipBar.style.display = 'none';else _this.tooltipBar.style.display = 'flex';
      if (_typeof(data) === 'object') data = _this._tooltipToHTML(data);
      _this.tooltipBar.innerHTML = data;
      _this.tooltipBar.style.top = y - 30;
      _this.tooltipBar.style.left = x + 30;
    });

    _defineProperty(_assertThisInitialized(_this), "_tooltipToHTML", function (json) {
      return Object.keys(json).map(function (key) {
        return "<div style=\"width:90%; font-weight: 700;\"> ".concat(wordSplitUpper(key), " : <span style=\"color:").concat(colors.tooltip.colorSpan, "; font-size:14; font-weight: 600;float: right\"> ").concat(json[key], " <span> </div>");
      }).join('');
    });

    _defineProperty(_assertThisInitialized(_this), "renderTooltip", function () {
      return _react.default.createElement("div", {
        style: {
          pointerEvents: 'none',
          position: 'absolute',
          boxShadow: colors.tooltip.boxShadow,
          minWidth: 150,
          minHeight: 100,
          color: colors.tooltip.color,
          background: colors.tooltip.background,
          zIndex: 1,
          userSelect: 'none',
          display: 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderRadius: 5,
          fontSize: 12,
          paddingLeft: 5
        },
        ref: function ref(_ref2) {
          return _this.tooltipBar = _ref2;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderBtnCenterNav", function () {
      var darkMode = _this.state.darkMode;
      return _react.default.createElement("div", {
        style: {
          margin: 2,
          boxShadow: '0 1px 5px rgba(0,0,0,0.5)',
          cursor: 'pointer',
          zIndex: 1,
          userSelect: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          fontSize: 12,
          padding: 10
        },
        onClick: function onClick(e) {
          _this.wrapper.style.transform = 'scale(1)';
          _this.wrapper.style.top = _this.originY;
          _this.wrapper.style.left = _this.originX;
        },
        ref: function ref(_ref3) {
          return _this.centerNav = _ref3;
        }
      }, _react.default.createElement(_reactFeather.Move, {
        stroke: darkMode ? '#eeeeee' : '#333333'
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderDarkLightSwitch", function () {
      var darkMode = _this.state.darkMode;
      return _react.default.createElement("div", {
        style: {
          margin: 2,
          boxShadow: '0 1px 5px rgba(0,0,0,0.5)',
          background: darkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
          cursor: 'pointer',
          zIndex: 1,
          userSelect: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          fontSize: 12,
          padding: 10
        },
        onClick: function onClick() {
          if (_this.state.darkMode) colors = _objectSpread({}, lightModePallete);else colors = _objectSpread({}, darkModePallete);

          _this.setState({
            darkMode: !_this.state.darkMode
          });
        }
      }, _this.state.darkMode ? _react.default.createElement(_reactFeather.Sun, {
        fill: "#eeeeee",
        stroke: "#eeeeee"
      }) : _react.default.createElement(_reactFeather.Moon, {
        fill: "#333333",
        stroke: "#333333"
      }));
    });

    _this.window = props.window;
    _this.deltaX = 0;
    _this.deltaY = 0;
    _this.mouseX = 0;
    _this.mouseY = 0;
    _this.scale = 1;
    _this.x = 1;
    return _this;
  }

  _createClass(Blueprint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.window.document.onmousemove = null;
      this.window.document.onmouseup = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        style: _objectSpread({
          top: 0,
          left: 0,
          zIndex: 0,
          background: 'rgba(0,0,0,1)',
          position: 'absolute'
        }, this.props.style, {
          overflow: 'hidden',
          width: '100%',
          height: '100%'
        }),
        ref: function ref(_ref5) {
          return _this2.container = _ref5;
        }
      }, _react.default.createElement("div", {
        style: {
          position: 'fixed',
          top: 5,
          right: 5,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          zIndex: 1
        }
      }, this.renderDarkLightSwitch(), this.renderBtnCenterNav()), this.renderTooltip(), _react.default.createElement("div", {
        style: {
          position: 'relative',
          minWidth: '1000%',
          minHeight: '1000%',
          cursor: 'move',
          top: '-450%',
          // - (totalHeight - clientHeight) / 2
          left: '-450%',
          // - (totalWidth  - clientWidth) / 2
          transform: 'scale(1)',
          transformOrigin: '50% 50%',
          background: colors.grid.background,
          zIndex: 0
        },
        ref: function ref(_ref4) {
          return _this2.wrapper = _ref4;
        },
        onWheel: this.handleMouseWheel,
        onMouseDown: this.handleMouseDown
      }, _react.default.createElement("svg", {
        width: "100%",
        height: "100%",
        style: {
          maxHeight: '100%',
          position: 'absolute',
          zIndex: -1,
          width: '100%'
        }
      }, _react.default.createElement("defs", null, _react.default.createElement("pattern", {
        id: "smallGrid",
        width: "8",
        height: "8",
        patternUnits: "userSpaceOnUse"
      }, _react.default.createElement("path", {
        d: "M 8 0 L 0 0 0 8",
        fill: "none",
        stroke: colors.grid.smallGrid,
        strokeWidth: "0.5"
      })), _react.default.createElement("pattern", {
        id: "grid",
        width: "80",
        height: "80",
        patternUnits: "userSpaceOnUse"
      }, _react.default.createElement("rect", {
        width: "80",
        height: "80",
        fill: "url(#smallGrid)"
      }), _react.default.createElement("path", {
        d: "M 80 0 L 0 0 0 80",
        fill: "none",
        stroke: colors.grid.bigGrid,
        strokeWidth: "1"
      }))), _react.default.createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "url(#grid)"
      })), this.props.children)));
    }
  }]);

  return Blueprint;
}(_react.Component);

var Node =
/*#__PURE__*/
function (_Component2) {
  _inherits(Node, _Component2);

  function Node(props) {
    var _this3;

    _classCallCheck(this, Node);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this, props));

    _defineProperty(_assertThisInitialized(_this3), "handleMouseMove", function (e) {
      _this3.scale = rule.scale(_this3.wrapper.parentNode.style.transform);
      e = e || _this3.window.event;
      e.preventDefault();
      e.stopPropagation();
      _this3.deltaX = _this3.mouseX - e.clientX;
      _this3.deltaY = _this3.mouseY - e.clientY;
      _this3.mouseX = e.clientX;
      _this3.mouseY = e.clientY;
      _this3.wrapper.style.top = _this3.wrapper.offsetTop - _this3.deltaY / _this3.scale + 'px';
      _this3.wrapper.style.left = _this3.wrapper.offsetLeft - _this3.deltaX / _this3.scale + 'px';
    });

    _defineProperty(_assertThisInitialized(_this3), "handleMouseDown", function (e) {
      e = e || _this3.window.event;
      e.preventDefault();
      e.stopPropagation();
      _this3.mouseX = e.clientX;
      _this3.mouseY = e.clientY;
      _this3.window.document.onmousemove = _this3.handleMouseMove;
      _this3.window.document.onmouseup = _this3.handleMouseUp;
    });

    _defineProperty(_assertThisInitialized(_this3), "handleMouseUp", function () {
      _this3.window.document.onmousemove = null;
      _this3.window.document.onmouseup = null;
    });

    _defineProperty(_assertThisInitialized(_this3), "getLocation", function () {
      _this3.scale = rule.scale(_this3.wrapper.parentNode.style.transform);

      var x = _this3.wrapper.offsetLeft + _this3.wrapper.getBoundingClientRect().width / 2 / _this3.scale + _this3.translate[0];

      var y = _this3.wrapper.offsetTop + _this3.wrapper.getBoundingClientRect().height / 2 / _this3.scale + _this3.translate[1];

      return [x, y];
    });

    _this3.window = props.window;
    _this3.pos1 = 0;
    _this3.deltaY = 0;
    _this3.mouseX = 0;
    _this3.mouseY = 0;
    _this3.scale = 1;
    return _this3;
  }

  _createClass(Node, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.window.document.onmousemove = null;
      this.window.document.onmouseup = null;
      this.wrapper.style.transform = "translate(".concat(this.props.x, "px, ").concat(this.props.y, "px)");
      this.translate = rule.translate(this.wrapper.style.transform);
      this.wrapper.style.top = this.wrapper.offsetTop;
      this.wrapper.style.left = this.wrapper.offsetLeft;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.window.document.onmousemove = null;
      this.window.document.onmouseup = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          onLeave = _this$props.onLeave,
          onHover = _this$props.onHover;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        style: _objectSpread({
          borderRadius: 2,
          borderStyle: 'solid',
          position: 'absolute',
          padding: 10,
          zIndex: 1,
          minWidth: 100,
          minHeight: 50,
          color: colors.node.color,
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box',
          alignItems: 'center',
          top: '50%',
          left: '50%',
          background: colors.node.background,
          boxShadow: colors.node.boxShadow,
          scale: '',
          transform: '',
          userSelect: 'none'
        }, this.props.style),
        onMouseDown: this.handleMouseDown,
        onMouseEnter: function onMouseEnter(e) {
          if (onHover) onHover(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          if (onLeave) onLeave(e);
        },
        ref: function ref(_ref6) {
          return _this4.wrapper = _ref6;
        }
      }, this.props.title));
    }
  }]);

  return Node;
}(_react.Component);

_defineProperty(Node, "defaultProps", {
  initX: 0,
  initY: 0
});

var AnimBlueprint =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnimBlueprint, _React$Component);

  function AnimBlueprint(props) {
    var _this5;

    _classCallCheck(this, AnimBlueprint);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(AnimBlueprint).call(this, props));

    _defineProperty(_assertThisInitialized(_this5), "state", {
      selected: ''
    });

    _defineProperty(_assertThisInitialized(_this5), "setActiveNode", function (node) {
      _this5.activeNode = node.name;
    });

    _defineProperty(_assertThisInitialized(_this5), "initNodes", function () {
      var animNodes = _this5.props.animNodes;
      return animNodes.map(function (node) {
        return _react.default.createElement(Node, {
          key: node.getName(),
          window: _this5.window,
          x: Math.random() * 100,
          y: Math.random() * 50,
          ref: function ref(_ref7) {
            return _this5[_this5.NODE_PREFIX + node.getName()] = _ref7;
          },
          title: node.getName(),
          onHover: function onHover(e) {
            _this5.Blueprint.setTooltip(_objectSpread({
              'Id': node.getName()
            }, node.getData()), e.clientX, e.clientY);
          },
          onLeave: function onLeave(e) {
            return _this5.Blueprint.setTooltip('');
          },
          style: {
            border: _this5.activeNode === node.getName() ? "3px solid ".concat(colors.node.border) : '3px solid transparent'
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this5), "initLines", function () {
      var transitions = _this5.props.transitions;
      return transitions.map(function (transition) {
        var startPoint = _this5.state[_this5.NODE_POS_PREFIX + transition.fromAnim];
        var endPoint = _this5.state[_this5.NODE_POS_PREFIX + transition.toAnim];

        if (startPoint && endPoint) {
          var vecDir = Vec.normalize([startPoint[0] - endPoint[0], startPoint[1] - endPoint[1]]);
          endPoint = Vec.add(endPoint, Vec.multiply(vecDir, 70 - 25 * Math.abs(vecDir[1])));
          var offset = transition.paired ? [-vecDir[1] * 7, vecDir[0] * 7] : [0, 0];
          startPoint = Vec.add(_this5.state[_this5.NODE_POS_PREFIX + transition.fromAnim], offset);
          endPoint = Vec.add(endPoint, offset);
          return _react.default.createElement(Line, {
            window: _this5.window,
            key: transition.fromAnim + transition.toAnim,
            start: startPoint,
            end: endPoint,
            markerEnd: "url(#triangle)",
            onHover: function onHover(e) {
              _this5.Blueprint.setTooltip({
                id: transition.fromAnim + ' to ' + transition.toAnim,
                Condition: transition.condition.toString().replace('() =>', ' ')
              }, e.clientX, e.clientY);
            },
            onLeave: function onLeave() {
              _this5.Blueprint.setTooltip('');
            }
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this5), "loop", function () {
      _this5.props.animNodes.map(function (node) {
        _this5.setState(_defineProperty({}, _this5.NODE_POS_PREFIX + node.getName(), _this5[_this5.NODE_PREFIX + node.getName()].getLocation()));
      });

      _this5.window.requestAnimationFrame(_this5.loop);
    });

    _this5.NODE_PREFIX = 'NODE_';
    _this5.NODE_POS_PREFIX = 'NODE_POS_';
    _this5.window = props.window;
    return _this5;
  }

  _createClass(AnimBlueprint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          initClientWidth = _this$props2.initClientWidth,
          initClientHeight = _this$props2.initClientHeight;
      this.originX = Math.max(this.svgGrid.width.animVal.value / 2, (initClientWidth * 10 - initClientWidth) / 2);
      this.originY = Math.max(this.svgGrid.height.animVal.value / 2, (initClientHeight * 10 - initClientHeight) / 2);
      this.loop();
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return _react.default.createElement(Blueprint, {
        ref: function ref(_ref10) {
          return _this6.Blueprint = _ref10;
        },
        window: this.window,
        style: {
          minWidth: this.props.initClientWidth,
          minHeight: this.props.initClientHeight
        }
      }, this.initNodes(), _react.default.createElement("svg", {
        ref: function ref(_ref9) {
          return _this6.svgGrid = _ref9;
        },
        width: "100%",
        height: "100%"
      }, _react.default.createElement("defs", null, _react.default.createElement("marker", {
        id: "triangle",
        viewBox: "0 0 10 10",
        refX: "1",
        refY: "5",
        markerUnits: "strokeWidth",
        markerWidth: "4",
        markerHeight: "4",
        orient: "auto"
      }, _react.default.createElement("path", {
        d: "M 0 0 L 10 5 L 0 10 z",
        fill: colors.line.stroke
      })), _react.default.createElement("marker", {
        id: "mid_arrow",
        markerWidth: "2",
        markerHeight: "2",
        viewBox: "-1 -1 2 2",
        orient: "auto"
      }, _react.default.createElement("path", {
        fill: "blue",
        d: "M-1,-1 L1,0 -1,1 z"
      }))), _react.default.createElement("circle", {
        cx: this.originX,
        cy: this.originY,
        r: 10,
        fill: colors.line.stroke,
        stroke: colors.node.background,
        strokeWidth: 3,
        ref: function ref(_ref8) {
          return _this6.origin = _ref8;
        }
      }), _react.default.createElement(Line, {
        start: [this.originX, this.originY],
        end: this.state[this.NODE_POS_PREFIX + 'flyright']
      }), this.initLines()));
    }
  }]);

  return AnimBlueprint;
}(_react.default.Component);

_defineProperty(AnimBlueprint, "propTypes", {
  animNodes: _propTypes.default.array,
  transitions: _propTypes.default.array
});

var _default = AnimBlueprint;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL0FuaW1CbHVlcHJpbnQuanMiXSwibmFtZXMiOlsibGlnaHRNb2RlUGFsbGV0ZSIsIm5vZGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJsaW5lIiwic3Ryb2tlIiwiZ3JpZCIsInNtYWxsR3JpZCIsImJpZ0dyaWQiLCJ0b29sdGlwIiwiY29sb3JTcGFuIiwiZGFya01vZGVQYWxsZXRlIiwiY29sb3JzIiwid29yZFNwbGl0VXBwZXIiLCJzdHIiLCJuZXdzdHIiLCJpIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJWZWMiLCJub3JtYWxpemUiLCJ2ZWMiLCJsZW4iLCJNYXRoIiwic3FydCIsImFkZCIsInZlYzEiLCJ2ZWMyIiwic3VidHJhY3QiLCJtdWx0aXBseSIsImZhY3RvciIsIkxpbmUiLCJvbkhvdmVyIiwib25MZWF2ZSIsInByb3BzIiwic3RhcnQiLCJlbmQiLCJzdHJva2VXaWR0aCIsInNldFN0cm9rZVdpZHRoIiwidHJhbnNpdGlvbiIsImUiLCJQeHRvTnVtIiwicHhTdHJpbmciLCJOdW1iZXIiLCJtYXRjaCIsInJ1bGUiLCJzY2FsZSIsInN0cmluZyIsInRyYW5zbGF0ZSIsInN0clNwbGl0Iiwic3BsaXQiLCJCbHVlcHJpbnQiLCJvcGVuIiwiZGFya01vZGUiLCJpbml0V2lkdGgiLCJ3cmFwcGVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJpbml0SGVpZ2h0IiwiaGVpZ2h0IiwiY29udGFpbmVyV2lkdGgiLCJjb250YWluZXIiLCJjb250YWluZXJIZWlnaHQiLCJvcmlnaW5YIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9yaWdpblkiLCJpbm5lckhlaWdodCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWx0YVgiLCJtb3VzZVgiLCJjbGllbnRYIiwiZGVsdGFZIiwibW91c2VZIiwiY2xpZW50WSIsIm1heFRvcCIsIm1heExlZnQiLCJtaW5MZWZ0IiwibWluVG9wIiwic3R5bGUiLCJ0b3AiLCJtaW4iLCJtYXgiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9uQ2xpY2siLCJkb2N1bWVudCIsIm9ubW91c2Vtb3ZlIiwiaGFuZGxlTW91c2VNb3ZlIiwib25tb3VzZXVwIiwiaGFuZGxlTW91c2VVcCIsImFsdEtleSIsInRyYW5zZm9ybSIsImRhdGEiLCJ4IiwieSIsInRvb2x0aXBCYXIiLCJkaXNwbGF5IiwiX3Rvb2x0aXBUb0hUTUwiLCJpbm5lckhUTUwiLCJqc29uIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImpvaW4iLCJwb2ludGVyRXZlbnRzIiwicG9zaXRpb24iLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInpJbmRleCIsInVzZXJTZWxlY3QiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJwYWRkaW5nTGVmdCIsInJlZiIsInN0YXRlIiwibWFyZ2luIiwiY3Vyc29yIiwicGFkZGluZyIsImNlbnRlck5hdiIsInNldFN0YXRlIiwiaW5pdCIsIm92ZXJmbG93IiwicmlnaHQiLCJhbGlnbkNvbnRlbnQiLCJyZW5kZXJEYXJrTGlnaHRTd2l0Y2giLCJyZW5kZXJCdG5DZW50ZXJOYXYiLCJyZW5kZXJUb29sdGlwIiwidHJhbnNmb3JtT3JpZ2luIiwiaGFuZGxlTW91c2VXaGVlbCIsImhhbmRsZU1vdXNlRG93biIsIm1heEhlaWdodCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiTm9kZSIsInBhcmVudE5vZGUiLCJwb3MxIiwiYm9yZGVyU3R5bGUiLCJib3hTaXppbmciLCJ0aXRsZSIsImluaXRYIiwiaW5pdFkiLCJBbmltQmx1ZXByaW50Iiwic2VsZWN0ZWQiLCJhY3RpdmVOb2RlIiwibmFtZSIsImFuaW1Ob2RlcyIsImdldE5hbWUiLCJyYW5kb20iLCJOT0RFX1BSRUZJWCIsInNldFRvb2x0aXAiLCJnZXREYXRhIiwidHJhbnNpdGlvbnMiLCJzdGFydFBvaW50IiwiTk9ERV9QT1NfUFJFRklYIiwiZnJvbUFuaW0iLCJlbmRQb2ludCIsInRvQW5pbSIsInZlY0RpciIsImFicyIsIm9mZnNldCIsInBhaXJlZCIsImlkIiwiQ29uZGl0aW9uIiwiY29uZGl0aW9uIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0TG9jYXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsb29wIiwiaW5pdENsaWVudFdpZHRoIiwiaW5pdENsaWVudEhlaWdodCIsInN2Z0dyaWQiLCJhbmltVmFsIiwidmFsdWUiLCJpbml0Tm9kZXMiLCJvcmlnaW4iLCJpbml0TGluZXMiLCJSZWFjdCIsInByb3BUeXBlcyIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUc7QUFDckJDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxVQUFVLEVBQUUsU0FEVjtBQUVGQyxJQUFBQSxLQUFLLEVBQUUsU0FGTDtBQUdGQyxJQUFBQSxNQUFNLEVBQUUsU0FITjtBQUlGQyxJQUFBQSxTQUFTLEVBQUU7QUFKVCxHQURlO0FBT3JCQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsTUFBTSxFQUFFO0FBRE4sR0FQZTtBQVVyQkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZOLElBQUFBLFVBQVUsRUFBRSxTQURWO0FBRUZPLElBQUFBLFNBQVMsRUFBRSxTQUZUO0FBR0ZDLElBQUFBLE9BQU8sRUFBRTtBQUhQLEdBVmU7QUFlckJDLEVBQUFBLE9BQU8sRUFBRTtBQUNMVCxJQUFBQSxVQUFVLEVBQUUsd0JBRFA7QUFFTEMsSUFBQUEsS0FBSyxFQUFFLFNBRkY7QUFHTFMsSUFBQUEsU0FBUyxFQUFFLFNBSE47QUFJTFAsSUFBQUEsU0FBUyxFQUFFO0FBSk47QUFmWSxDQUF6QjtBQXVCQSxJQUFNUSxlQUFlLEdBQUc7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QUUsRUFBRSxLQUFLRyxPQUFuQztBQUE0QyxRQUFBLENBQUMsRUFBRSxFQUEvQztBQUFtRCxRQUFBLElBQUksRUFBRXRELE1BQU0sQ0FBQ1IsSUFBUCxDQUFZQyxNQUFyRTtBQUE2RSxRQUFBLE1BQU0sRUFBRU8sTUFBTSxDQUFDYixJQUFQLENBQVlDLFVBQWpHO0FBQTZHLFFBQUEsV0FBVyxFQUFFLENBQTFIO0FBQTZILFFBQUEsR0FBRyxFQUFFLGFBQUF5SCxLQUFHO0FBQUEsaUJBQUksTUFBSSxDQUFDOEQsTUFBTCxHQUFjOUQsS0FBbEI7QUFBQTtBQUFySSxRQWpCSixFQWtCSSw2QkFBQyxJQUFEO0FBQU0sUUFBQSxLQUFLLEVBQUUsQ0FBQyxLQUFLMUQsT0FBTixFQUFlLEtBQUtHLE9BQXBCLENBQWI7QUFBMkMsUUFBQSxHQUFHLEVBQUUsS0FBS3dELEtBQUwsQ0FBVyxLQUFLdUMsZUFBTCxHQUF1QixVQUFsQztBQUFoRCxRQWxCSixFQW1CSyxLQUFLdUIsU0FBTCxFQW5CTCxDQUZHLENBQVA7QUF5Qkg7Ozs7RUFqSHVCQyxlQUFNN0MsUzs7Z0JBQTVCUyxhLGVBWWlCO0FBQ2ZJLEVBQUFBLFNBQVMsRUFBRWlDLG1CQUFVQyxLQUROO0FBRWY1QixFQUFBQSxXQUFXLEVBQUUyQixtQkFBVUM7QUFGUixDOztlQXdHUnRDLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1N1biwgTW9vbiwgTW92ZX0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuY29uc3QgbGlnaHRNb2RlUGFsbGV0ZSA9IHtcbiAgICBub2RlOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjNEM1NjZBJyxcbiAgICAgICAgY29sb3I6ICcjRDhERUU5JyxcbiAgICAgICAgYm9yZGVyOiAnIzAwZTVmZicsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNSknXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICAgIHN0cm9rZTogJyM4MUExQzEnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZTBlMGUwJyxcbiAgICAgICAgc21hbGxHcmlkOiAnI2NjZDFkYicsXG4gICAgICAgIGJpZ0dyaWQ6ICcjYzdjY2Q2J1xuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg3NywgNzgsIDg3LCAwLjk1KScsXG4gICAgICAgIGNvbG9yOiAnI0Q4REVFOScsXG4gICAgICAgIGNvbG9yU3BhbjogJyNjNWUzZmMnLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDFweCA1cHggcmdiYSgwLDAsMCwwLjUpJ1xuICAgIH1cbn1cblxuY29uc3QgZGFya01vZGVQYWxsZXRlID0ge1xuICAgIG5vZGU6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyM1MTU2NWMnLFxuICAgICAgICBjb2xvcjogJyNlZWVlZWUnLFxuICAgICAgICBib3JkZXI6ICcjN2ZjMmM5JyxcbiAgICAgICAgYm94U2hhZG93OiAnMCAxcHggNXB4IHJnYmEoMCwwLDAsMC41KSdcbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgICAgc3Ryb2tlOiAnI2RkZGRkZCdcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyMyNzI3MmUnLFxuICAgICAgICBzbWFsbEdyaWQ6ICcjMjIyMjIyJyxcbiAgICAgICAgYmlnR3JpZDogJyMxZjFmMWYnXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDE1MiwgMTU2LCAxNjYsIDAuOTUpJyxcbiAgICAgICAgY29sb3I6ICcjMjcyNzJlJyxcbiAgICAgICAgY29sb3JTcGFuOiAnIzBjMjc0ZSdcbiAgICB9XG59XG52YXIgY29sb3JzID0ge1xuICAgIC4uLmRhcmtNb2RlUGFsbGV0ZVxufVxuXG5jb25zdCB3b3JkU3BsaXRVcHBlciA9IChzdHIpID0+IHtcbiAgICB2YXIgbmV3c3RyID0gJydcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RyW2ldID09PSBzdHJbaV0udG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgbmV3c3RyICs9IGAgJHtzdHJbaV19YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgbmV3c3RyICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpXG4gICAgfVxuICAgIHJldHVybiBuZXdzdHJcbn1cbmNvbnN0IFZlYyA9IHtcbiAgICBub3JtYWxpemU6ICh2ZWMpID0+IHtcbiAgICAgICAgdmFyIGxlbiA9IE1hdGguc3FydCh2ZWNbMF0gKiogMiArIHZlY1sxXSAqKiAyKSB8fCAxXG4gICAgICAgIHJldHVybiBbdmVjWzBdIC8gbGVuLCB2ZWNbMV0gLyBsZW5dXG4gICAgfSxcbiAgICBhZGQ6ICh2ZWMxLCB2ZWMyKSA9PiB7XG4gICAgICAgIHJldHVybiBbdmVjMVswXSArIHZlYzJbMF0sIHZlYzFbMV0gKyB2ZWMyWzFdXVxuICAgIH0sXG4gICAgc3VidHJhY3Q6ICh2ZWMxLCB2ZWMyKSA9PiB7XG4gICAgICAgIHJldHVybiBbdmVjMVswXSAtIHZlYzJbMF0sIHZlYzFbMV0gLSB2ZWMyWzFdXVxuICAgIH0sXG4gICAgbXVsdGlwbHk6ICh2ZWMsIGZhY3RvcikgPT4ge1xuICAgICAgICByZXR1cm4gW3ZlY1swXSAqIGZhY3RvciwgdmVjWzFdICogZmFjdG9yXVxuICAgIH1cbn1cblxuY29uc3QgTGluZSA9ICh7IG9uSG92ZXIsIG9uTGVhdmUsIC4uLnByb3BzIH0pID0+IHtcbiAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHByb3BzXG4gICAgY29uc3QgW3N0cm9rZVdpZHRoLCBzZXRTdHJva2VXaWR0aF0gPSB1c2VTdGF0ZSgzKVxuICAgIHJldHVybiA8bGluZSB4MT17c3RhcnQgPyBzdGFydFswXSA6ICc1MCUnfSB5MT17c3RhcnQgPyBzdGFydFsxXSA6IFwiNTAlXCJ9XG4gICAgICAgIHgyPXtlbmQgPyBlbmRbMF0gOiAwfSB5Mj17ZW5kID8gZW5kWzFdIDogMH1cbiAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogJzEwMG1zJyB9fVxuICAgICAgICBzdHJva2U9e2NvbG9ycy5saW5lLnN0cm9rZX0gc3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7IHNldFN0cm9rZVdpZHRoKDYpOyBpZiAob25Ib3Zlcikgb25Ib3ZlcihlKSB9fVxuICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7IHNldFN0cm9rZVdpZHRoKDMpOyBpZiAob25MZWF2ZSkgb25MZWF2ZShlKSB9fVxuXG4gICAgLz5cbn1cblxuY29uc3QgUHh0b051bSA9IChweFN0cmluZykgPT4geyByZXR1cm4gTnVtYmVyKHB4U3RyaW5nLm1hdGNoKC8oLiopcHgvKVsxXSkgfVxuXG5jb25zdCBydWxlID0ge1xuICAgIHNjYWxlOiAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChzdHJpbmcpIHJldHVybiBOdW1iZXIoc3RyaW5nLm1hdGNoKC9zY2FsZVxcKChbXildKylcXCkvKVsxXSlcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9LFxuICAgIHRyYW5zbGF0ZTogKHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3RyU3BsaXQgPSBzdHJpbmcubWF0Y2goL3RyYW5zbGF0ZVxcKChbXildKylcXCkvKVsxXS5zcGxpdCgnLCAnKVxuICAgICAgICAgICAgcmV0dXJuIFtQeHRvTnVtKHN0clNwbGl0WzBdKSwgUHh0b051bShzdHJTcGxpdFsxXSldXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsxLCAxXVxuICAgIH1cbn1cblxuXG5cblxuY2xhc3MgQmx1ZXByaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICBkYXJrTW9kZTogdHJ1ZSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy53aW5kb3cgPSBwcm9wcy53aW5kb3dcbiAgICAgICAgdGhpcy5kZWx0YVggPSAwXG4gICAgICAgIHRoaXMuZGVsdGFZID0gMFxuICAgICAgICB0aGlzLm1vdXNlWCA9IDBcbiAgICAgICAgdGhpcy5tb3VzZVkgPSAwXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxXG4gICAgICAgIHRoaXMueCA9IDFcbiAgICAgICAgXG4gICAgfVxuXG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0V2lkdGggPSB0aGlzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICAgICAgdGhpcy5pbml0SGVpZ2h0ID0gdGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICAgICAgdGhpcy5jb250YWluZXJIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICAgICAgICB0aGlzLm9yaWdpblggPSAodGhpcy53aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuaW5pdFdpZHRoKSAvIDJcbiAgICAgICAgdGhpcy5vcmlnaW5ZID0gKHRoaXMud2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5pbml0SGVpZ2h0KSAvIDJcbiAgICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmluaXQoKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgICBlID0gZSB8fCB0aGlzLndpbmRvdy5ldmVudFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmRlbHRhWCA9IHRoaXMubW91c2VYIC0gZS5jbGllbnRYO1xuICAgICAgICB0aGlzLmRlbHRhWSA9IHRoaXMubW91c2VZIC0gZS5jbGllbnRZO1xuICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WFxuICAgICAgICB0aGlzLm1vdXNlWSA9IGUuY2xpZW50WVxuICAgICAgICB2YXIgbWF4VG9wID0gKHRoaXMuc2NhbGUgLSAxKSAqIHRoaXMuaW5pdEhlaWdodCAvIDJcbiAgICAgICAgdmFyIG1heExlZnQgPSAodGhpcy5zY2FsZSAtIDEpICogdGhpcy5pbml0V2lkdGggLyAyXG4gICAgICAgIHZhciBtaW5MZWZ0ID0gbWF4TGVmdCAtIHRoaXMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIHRoaXMuY29udGFpbmVyV2lkdGhcbiAgICAgICAgdmFyIG1pblRvcCA9IG1heFRvcCAtIHRoaXMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUudG9wID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy53cmFwcGVyLm9mZnNldFRvcCAtIHRoaXMuZGVsdGFZLCBtaW5Ub3ApLCBtYXhUb3ApICsgJ3B4J1xuICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUubGVmdCA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMud3JhcHBlci5vZmZzZXRMZWZ0IC0gdGhpcy5kZWx0YVgsIG1pbkxlZnQpLCBtYXhMZWZ0KSArICdweCdcblxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgICAgIGUgPSBlIHx8IHRoaXMud2luZG93LmV2ZW50XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB0aGlzLnByb3BzLm9uQ2xpY2soKVxuICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WFxuICAgICAgICB0aGlzLm1vdXNlWSA9IGUuY2xpZW50WVxuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMuaGFuZGxlTW91c2VNb3ZlXG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuaGFuZGxlTW91c2VVcFxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbFxuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNldXAgPSBudWxsXG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy53aW5kb3cuZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsXG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGxcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZVdoZWVsID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gTWF0aC5tYXgocnVsZS5zY2FsZSh0aGlzLndyYXBwZXIuc3R5bGUudHJhbnNmb3JtKSAtIDAuMDAwNSAqIGUuZGVsdGFZLCAwLjMpXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7dGhpcy5zY2FsZX0pYFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VG9vbHRpcCA9IChkYXRhLCB4LCB5KSA9PiB7XG4gICAgICAgIGlmICghZGF0YSkgdGhpcy50b29sdGlwQmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgZWxzZSB0aGlzLnRvb2x0aXBCYXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSBkYXRhID0gdGhpcy5fdG9vbHRpcFRvSFRNTChkYXRhKVxuICAgICAgICB0aGlzLnRvb2x0aXBCYXIuaW5uZXJIVE1MID0gZGF0YVxuICAgICAgICB0aGlzLnRvb2x0aXBCYXIuc3R5bGUudG9wID0geSAtIDMwXG4gICAgICAgIHRoaXMudG9vbHRpcEJhci5zdHlsZS5sZWZ0ID0geCArIDMwXG5cbiAgICB9XG5cbiAgICBfdG9vbHRpcFRvSFRNTCA9IChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhqc29uKS5tYXAoa2V5ID0+IHsgcmV0dXJuIGA8ZGl2IHN0eWxlPVwid2lkdGg6OTAlOyBmb250LXdlaWdodDogNzAwO1wiPiAke3dvcmRTcGxpdFVwcGVyKGtleSl9IDogPHNwYW4gc3R5bGU9XCJjb2xvcjoke2NvbG9ycy50b29sdGlwLmNvbG9yU3Bhbn07IGZvbnQtc2l6ZToxNDsgZm9udC13ZWlnaHQ6IDYwMDtmbG9hdDogcmlnaHRcIj4gJHtqc29uW2tleV19IDxzcGFuPiA8L2Rpdj5gIH0pLmpvaW4oJycpXG4gICAgfVxuXG4gICAgcmVuZGVyVG9vbHRpcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYm94U2hhZG93OiBjb2xvcnMudG9vbHRpcC5ib3hTaGFkb3csXG4gICAgICAgICAgICBtaW5XaWR0aDogMTUwLCBtaW5IZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMudG9vbHRpcC5jb2xvciwgYmFja2dyb3VuZDogY29sb3JzLnRvb2x0aXAuYmFja2dyb3VuZCwgekluZGV4OiAxLCB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywgYm9yZGVyUmFkaXVzOiA1LCBmb250U2l6ZTogMTIsIHBhZGRpbmdMZWZ0OiA1XG4gICAgICAgIH19IHJlZj17cmVmID0+IHRoaXMudG9vbHRpcEJhciA9IHJlZn0+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIHJlbmRlckJ0bkNlbnRlck5hdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge2RhcmtNb2RlfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNSknLFxuICAgICAgICAgICAgY3Vyc29yOidwb2ludGVyJyxcbiAgICAgICAgICAgIHpJbmRleDogMSwgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYm9yZGVyUmFkaXVzOiAnNTAlJywgZm9udFNpemU6IDEyLCBwYWRkaW5nOjEwXG4gICAgICAgIH19ICBcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7ICB0aGlzLndyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJzsgdGhpcy53cmFwcGVyLnN0eWxlLnRvcCA9IHRoaXMub3JpZ2luWTsgdGhpcy53cmFwcGVyLnN0eWxlLmxlZnQgPSB0aGlzLm9yaWdpblh9fVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5jZW50ZXJOYXYgPSByZWZ9PlxuICAgICAgICAgICAgPE1vdmUgc3Ryb2tlPXtkYXJrTW9kZSA/ICcjZWVlZWVlJyA6ICcjMzMzMzMzJ30+PC9Nb3ZlPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG4gICAgcmVuZGVyRGFya0xpZ2h0U3dpdGNoID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7ZGFya01vZGV9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxcHggNXB4IHJnYmEoMCwwLDAsMC41KScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrTW9kZSA/ICdyZ2JhKDAsMCwwLDAuNSknIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICAgICAgICBjdXJzb3I6J3BvaW50ZXInLFxuICAgICAgICAgICAgekluZGV4OiAxLCB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBmb250U2l6ZTogMTIsIFxuICAgICAgICAgICAgcGFkZGluZzoxMFxuICAgICAgICB9fSAgXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IFxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZGFya01vZGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IHsgLi4ubGlnaHRNb2RlUGFsbGV0ZSB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSB7IC4uLmRhcmtNb2RlUGFsbGV0ZSB9XG4gICAgICAgICAgICA7dGhpcy5zZXRTdGF0ZSh7ZGFya01vZGU6ICF0aGlzLnN0YXRlLmRhcmtNb2RlfSk7IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXJrTW9kZSA/IDxTdW4gZmlsbD0nI2VlZWVlZScgc3Ryb2tlPScjZWVlZWVlJz48L1N1bj4gOiA8TW9vbiBmaWxsPScjMzMzMzMzJyBzdHJva2U9JyMzMzMzMzMnLz59XG4gICAgICAgIDwvZGl2PlxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLCBsZWZ0OiAwLCB6SW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDEpJywgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5jb250YWluZXIgPSByZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246J2ZpeGVkJywgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNSwgcmlnaHQ6IDUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBhbGlnbkNvbnRlbnQ6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6MSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRGFya0xpZ2h0U3dpdGNoKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJCdG5DZW50ZXJOYXYoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUb29sdGlwKCl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICcxMDAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJy00NTAlJywgIC8vIC0gKHRvdGFsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0KSAvIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICctNDUwJScsIC8vIC0gKHRvdGFsV2lkdGggIC0gY2xpZW50V2lkdGgpIC8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JpZC5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAwXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLndyYXBwZXIgPSByZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbldoZWVsPXt0aGlzLmhhbmRsZU1vdXNlV2hlZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMTAwJScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IC0xLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXR0ZXJuIGlkPVwic21hbGxHcmlkXCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiOFwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSA4IDAgTCAwIDAgMCA4XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9e2NvbG9ycy5ncmlkLnNtYWxsR3JpZH0gc3Ryb2tlV2lkdGg9XCIwLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdHRlcm4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXR0ZXJuIGlkPVwiZ3JpZFwiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiBmaWxsPVwidXJsKCNzbWFsbEdyaWQpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDgwIDAgTCAwIDAgMCA4MFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPXtjb2xvcnMuZ3JpZC5iaWdHcmlkfSBzdHJva2VXaWR0aD1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdHRlcm4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwidXJsKCNncmlkKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY2xhc3MgTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGluaXRYOiAwLFxuICAgICAgICBpbml0WTogMFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLndpbmRvdyA9IHByb3BzLndpbmRvd1xuICAgICAgICB0aGlzLnBvczEgPSAwXG4gICAgICAgIHRoaXMuZGVsdGFZID0gMFxuICAgICAgICB0aGlzLm1vdXNlWCA9IDBcbiAgICAgICAgdGhpcy5tb3VzZVkgPSAwXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxXG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGxcbiAgICAgICAgdGhpcy53aW5kb3cuZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbFxuICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMucHJvcHMueH1weCwgJHt0aGlzLnByb3BzLnl9cHgpYFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9IHJ1bGUudHJhbnNsYXRlKHRoaXMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0pXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS50b3AgPSB0aGlzLndyYXBwZXIub2Zmc2V0VG9wXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5sZWZ0ID0gdGhpcy53cmFwcGVyLm9mZnNldExlZnRcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuXG4gICAgICAgIHRoaXMuc2NhbGUgPSBydWxlLnNjYWxlKHRoaXMud3JhcHBlci5wYXJlbnROb2RlLnN0eWxlLnRyYW5zZm9ybSlcbiAgICAgICAgZSA9IGUgfHwgdGhpcy53aW5kb3cuZXZlbnRcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuZGVsdGFYID0gdGhpcy5tb3VzZVggLSBlLmNsaWVudFg7XG4gICAgICAgIHRoaXMuZGVsdGFZID0gdGhpcy5tb3VzZVkgLSBlLmNsaWVudFk7XG4gICAgICAgIHRoaXMubW91c2VYID0gZS5jbGllbnRYO1xuICAgICAgICB0aGlzLm1vdXNlWSA9IGUuY2xpZW50WTtcblxuICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUudG9wID0gKHRoaXMud3JhcHBlci5vZmZzZXRUb3AgLSB0aGlzLmRlbHRhWSAvIHRoaXMuc2NhbGUpICsgJ3B4J1xuICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUubGVmdCA9ICh0aGlzLndyYXBwZXIub2Zmc2V0TGVmdCAtIHRoaXMuZGVsdGFYIC8gdGhpcy5zY2FsZSkgKyAncHgnXG5cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgICAgICBlID0gZSB8fCB0aGlzLndpbmRvdy5ldmVudFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5tb3VzZVggPSBlLmNsaWVudFhcbiAgICAgICAgdGhpcy5tb3VzZVkgPSBlLmNsaWVudFlcbiAgICAgICAgdGhpcy53aW5kb3cuZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLmhhbmRsZU1vdXNlTW92ZVxuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNldXAgPSB0aGlzLmhhbmRsZU1vdXNlVXBcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGxcbiAgICAgICAgdGhpcy53aW5kb3cuZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbFxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbFxuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNldXAgPSBudWxsXG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBydWxlLnNjYWxlKHRoaXMud3JhcHBlci5wYXJlbnROb2RlLnN0eWxlLnRyYW5zZm9ybSlcbiAgICAgICAgdmFyIHggPSB0aGlzLndyYXBwZXIub2Zmc2V0TGVmdCArXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyIC8gdGhpcy5zY2FsZSArIHRoaXMudHJhbnNsYXRlWzBdXG4gICAgICAgIHZhciB5ID0gdGhpcy53cmFwcGVyLm9mZnNldFRvcCArXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMiAvIHRoaXMuc2NhbGUgKyB0aGlzLnRyYW5zbGF0ZVsxXVxuICAgICAgICByZXR1cm4gW3gsIHldXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG9uTGVhdmUsIG9uSG92ZXIgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMubm9kZS5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMubm9kZS5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBjb2xvcnMubm9kZS5ib3hTaGFkb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZSA9PiB7IGlmIChvbkhvdmVyKSBvbkhvdmVyKGUpIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZSA9PiB7IGlmIChvbkxlYXZlKSBvbkxlYXZlKGUpIH19XG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMud3JhcHBlciA9IHJlZn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY2xhc3MgQW5pbUJsdWVwcmludCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuTk9ERV9QUkVGSVggPSAnTk9ERV8nO1xuICAgICAgICB0aGlzLk5PREVfUE9TX1BSRUZJWCA9ICdOT0RFX1BPU18nO1xuICAgICAgICB0aGlzLndpbmRvdyA9IHByb3BzLndpbmRvd1xuICAgIH1cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0ZWQ6ICcnXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYW5pbU5vZGVzOiBwcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIHRyYW5zaXRpb25zOiBwcm9wVHlwZXMuYXJyYXksXG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBpbml0Q2xpZW50V2lkdGgsIGluaXRDbGllbnRIZWlnaHQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgdGhpcy5vcmlnaW5YID0gTWF0aC5tYXgodGhpcy5zdmdHcmlkLndpZHRoLmFuaW1WYWwudmFsdWUgLyAyLCAoaW5pdENsaWVudFdpZHRoICogMTAgLSBpbml0Q2xpZW50V2lkdGgpIC8gMilcbiAgICAgICAgdGhpcy5vcmlnaW5ZID0gTWF0aC5tYXgodGhpcy5zdmdHcmlkLmhlaWdodC5hbmltVmFsLnZhbHVlIC8gMiwgKGluaXRDbGllbnRIZWlnaHQgKiAxMCAtIGluaXRDbGllbnRIZWlnaHQpIC8gMilcbiAgICAgICAgdGhpcy5sb29wKCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlTm9kZSA9IChub2RlKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlTm9kZSA9IG5vZGUubmFtZVxuICAgIH1cblxuICAgIGluaXROb2RlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhbmltTm9kZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1Ob2Rlcy5tYXAobm9kZSA9PlxuICAgICAgICAgICAgPE5vZGUga2V5PXtub2RlLmdldE5hbWUoKX1cbiAgICAgICAgICAgICAgICB3aW5kb3c9e3RoaXMud2luZG93fVxuICAgICAgICAgICAgICAgIHg9e01hdGgucmFuZG9tKCkgKiAxMDB9IHk9e01hdGgucmFuZG9tKCkgKiA1MH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzW3RoaXMuTk9ERV9QUkVGSVggKyBub2RlLmdldE5hbWUoKV0gPSByZWZ9XG4gICAgICAgICAgICAgICAgdGl0bGU9e25vZGUuZ2V0TmFtZSgpfVxuICAgICAgICAgICAgICAgIG9uSG92ZXI9eyhlKSA9PiB7IHRoaXMuQmx1ZXByaW50LnNldFRvb2x0aXAoeyAnSWQnOiBub2RlLmdldE5hbWUoKSwgLi4ubm9kZS5nZXREYXRhKCkgfSwgZS5jbGllbnRYLCBlLmNsaWVudFkpIH19XG4gICAgICAgICAgICAgICAgb25MZWF2ZT17KGUpID0+IHRoaXMuQmx1ZXByaW50LnNldFRvb2x0aXAoJycpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogdGhpcy5hY3RpdmVOb2RlID09PSBub2RlLmdldE5hbWUoKSA/IGAzcHggc29saWQgJHtjb2xvcnMubm9kZS5ib3JkZXJ9YCA6ICczcHggc29saWQgdHJhbnNwYXJlbnQnIH19XG4gICAgICAgICAgICAvPilcbiAgICB9XG5cbiAgICBpbml0TGluZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHJhbnNpdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zLm1hcCh0cmFuc2l0aW9uID0+IHtcbiAgICAgICAgICAgIHZhciBzdGFydFBvaW50ID0gdGhpcy5zdGF0ZVt0aGlzLk5PREVfUE9TX1BSRUZJWCArIHRyYW5zaXRpb24uZnJvbUFuaW1dXG4gICAgICAgICAgICB2YXIgZW5kUG9pbnQgPSB0aGlzLnN0YXRlW3RoaXMuTk9ERV9QT1NfUFJFRklYICsgdHJhbnNpdGlvbi50b0FuaW1dXG4gICAgICAgICAgICBpZiAoc3RhcnRQb2ludCAmJiBlbmRQb2ludCkge1xuICAgICAgICAgICAgICAgIHZhciB2ZWNEaXIgPSBWZWMubm9ybWFsaXplKFtzdGFydFBvaW50WzBdIC0gZW5kUG9pbnRbMF0sIHN0YXJ0UG9pbnRbMV0gLSBlbmRQb2ludFsxXV0pXG4gICAgICAgICAgICAgICAgZW5kUG9pbnQgPSBWZWMuYWRkKGVuZFBvaW50LCBWZWMubXVsdGlwbHkodmVjRGlyLCA3MCAtIDI1ICogTWF0aC5hYnModmVjRGlyWzFdKSkpXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRyYW5zaXRpb24ucGFpcmVkID8gWy12ZWNEaXJbMV0gKiA3LCB2ZWNEaXJbMF0gKiA3XSA6IFswLCAwXVxuICAgICAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBWZWMuYWRkKHRoaXMuc3RhdGVbdGhpcy5OT0RFX1BPU19QUkVGSVggKyB0cmFuc2l0aW9uLmZyb21BbmltXSwgb2Zmc2V0KVxuICAgICAgICAgICAgICAgIGVuZFBvaW50ID0gVmVjLmFkZChlbmRQb2ludCwgb2Zmc2V0KVxuICAgICAgICAgICAgICAgIHJldHVybiA8TGluZVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3c9e3RoaXMud2luZG93fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RyYW5zaXRpb24uZnJvbUFuaW0gKyB0cmFuc2l0aW9uLnRvQW5pbX1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ9e3N0YXJ0UG9pbnR9XG4gICAgICAgICAgICAgICAgICAgIGVuZD17ZW5kUG9pbnR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlckVuZD0ndXJsKCN0cmlhbmdsZSknXG4gICAgICAgICAgICAgICAgICAgIG9uSG92ZXI9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJsdWVwcmludC5zZXRUb29sdGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRyYW5zaXRpb24uZnJvbUFuaW0gKyAnIHRvICcgKyB0cmFuc2l0aW9uLnRvQW5pbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZGl0aW9uOiB0cmFuc2l0aW9uLmNvbmRpdGlvbi50b1N0cmluZygpLnJlcGxhY2UoJygpID0+JywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25MZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5CbHVlcHJpbnQuc2V0VG9vbHRpcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBsb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmFuaW1Ob2Rlcy5tYXAobm9kZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3RoaXMuTk9ERV9QT1NfUFJFRklYICsgbm9kZS5nZXROYW1lKCldOiB0aGlzW3RoaXMuTk9ERV9QUkVGSVggKyBub2RlLmdldE5hbWUoKV0uZ2V0TG9jYXRpb24oKSB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiA8Qmx1ZXByaW50IHJlZj17cmVmID0+IHRoaXMuQmx1ZXByaW50ID0gcmVmfSB3aW5kb3c9e3RoaXMud2luZG93fSBzdHlsZT17eyBtaW5XaWR0aDogdGhpcy5wcm9wcy5pbml0Q2xpZW50V2lkdGgsIG1pbkhlaWdodDogdGhpcy5wcm9wcy5pbml0Q2xpZW50SGVpZ2h0IH19PlxuICAgICAgICAgICAge3RoaXMuaW5pdE5vZGVzKCl9XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5zdmdHcmlkID0gcmVmfVxuICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgPG1hcmtlciBpZD1cInRyaWFuZ2xlXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZYPVwiMVwiIHJlZlk9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlclVuaXRzPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyV2lkdGg9XCI0XCIgbWFya2VySGVpZ2h0PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnQ9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAwIDAgTCAxMCA1IEwgMCAxMCB6XCIgZmlsbD17Y29sb3JzLmxpbmUuc3Ryb2tlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L21hcmtlcj5cbiAgICAgICAgICAgICAgICAgICAgPG1hcmtlciBpZD1cIm1pZF9hcnJvd1wiIG1hcmtlcldpZHRoPVwiMlwiIG1hcmtlckhlaWdodD1cIjJcIiB2aWV3Qm94PVwiLTEgLTEgMiAyXCIgb3JpZW50PVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImJsdWVcIiBkPVwiTS0xLC0xIEwxLDAgLTEsMSB6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXJrZXI+XG4gICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3RoaXMub3JpZ2luWH0gY3k9e3RoaXMub3JpZ2luWX0gcj17MTB9IGZpbGw9e2NvbG9ycy5saW5lLnN0cm9rZX0gc3Ryb2tlPXtjb2xvcnMubm9kZS5iYWNrZ3JvdW5kfSBzdHJva2VXaWR0aD17M30gcmVmPXtyZWYgPT4gdGhpcy5vcmlnaW4gPSByZWZ9IC8+XG4gICAgICAgICAgICAgICAgPExpbmUgc3RhcnQ9e1t0aGlzLm9yaWdpblgsIHRoaXMub3JpZ2luWV19IGVuZD17dGhpcy5zdGF0ZVt0aGlzLk5PREVfUE9TX1BSRUZJWCArICdmbHlyaWdodCddfSA+PC9MaW5lPlxuICAgICAgICAgICAgICAgIHt0aGlzLmluaXRMaW5lcygpfVxuICAgICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgPC9CbHVlcHJpbnQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltQmx1ZXByaW50OyJdfQ==