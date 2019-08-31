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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLTEvQW5pbUJsdWVwcmludC5qcyJdLCJuYW1lcyI6WyJsaWdodE1vZGVQYWxsZXRlIiwibm9kZSIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsImxpbmUiLCJzdHJva2UiLCJncmlkIiwic21hbGxHcmlkIiwiYmlnR3JpZCIsInRvb2x0aXAiLCJjb2xvclNwYW4iLCJkYXJrTW9kZVBhbGxldGUiLCJjb2xvcnMiLCJ3b3JkU3BsaXRVcHBlciIsInN0ciIsIm5ld3N0ciIsImkiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsIlZlYyIsIm5vcm1hbGl6ZSIsInZlYyIsImxlbiIsIk1hdGgiLCJzcXJ0IiwiYWRkIiwidmVjMSIsInZlYzIiLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiZmFjdG9yIiwiTGluZSIsIm9uSG92ZXIiLCJvbkxlYXZlIiwicHJvcHMiLCJzdGFydCIsImVuZCIsInN0cm9rZVdpZHRoIiwic2V0U3Ryb2tlV2lkdGgiLCJ0cmFuc2l0aW9uIiwiZSIsIlB4dG9OdW0iLCJweFN0cmluZyIsIk51bWJlciIsIm1hdGNoIiwicnVsZSIsInNjYWxlIiwic3RyaW5nIiwidHJhbnNsYXRlIiwic3RyU3BsaXQiLCJzcGxpdCIsIkJsdWVwcmludCIsIm9wZW4iLCJkYXJrTW9kZSIsImluaXRXaWR0aCIsIndyYXBwZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImluaXRIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJXaWR0aCIsImNvbnRhaW5lciIsImNvbnRhaW5lckhlaWdodCIsIm9yaWdpblgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib3JpZ2luWSIsImlubmVySGVpZ2h0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImRlbHRhWCIsIm1vdXNlWCIsImNsaWVudFgiLCJkZWx0YVkiLCJtb3VzZVkiLCJjbGllbnRZIiwibWF4VG9wIiwibWF4TGVmdCIsIm1pbkxlZnQiLCJtaW5Ub3AiLCJzdHlsZSIsInRvcCIsIm1pbiIsIm1heCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0Iiwib25DbGljayIsImRvY3VtZW50Iiwib25tb3VzZW1vdmUiLCJoYW5kbGVNb3VzZU1vdmUiLCJvbm1vdXNldXAiLCJoYW5kbGVNb3VzZVVwIiwiYWx0S2V5IiwidHJhbnNmb3JtIiwiZGF0YSIsIngiLCJ5IiwidG9vbHRpcEJhciIsImRpc3BsYXkiLCJfdG9vbHRpcFRvSFRNTCIsImlubmVySFRNTCIsImpzb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Iiwiam9pbiIsInBvaW50ZXJFdmVudHMiLCJwb3NpdGlvbiIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiekluZGV4IiwidXNlclNlbGVjdCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsInBhZGRpbmdMZWZ0IiwicmVmIiwic3RhdGUiLCJtYXJnaW4iLCJjdXJzb3IiLCJwYWRkaW5nIiwiY2VudGVyTmF2Iiwic2V0U3RhdGUiLCJpbml0Iiwib3ZlcmZsb3ciLCJyaWdodCIsImFsaWduQ29udGVudCIsInJlbmRlckRhcmtMaWdodFN3aXRjaCIsInJlbmRlckJ0bkNlbnRlck5hdiIsInJlbmRlclRvb2x0aXAiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlTW91c2VEb3duIiwibWF4SGVpZ2h0IiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJOb2RlIiwicGFyZW50Tm9kZSIsInBvczEiLCJib3JkZXJTdHlsZSIsImJveFNpemluZyIsInRpdGxlIiwiaW5pdFgiLCJpbml0WSIsIkFuaW1CbHVlcHJpbnQiLCJzZWxlY3RlZCIsImFjdGl2ZU5vZGUiLCJuYW1lIiwiYW5pbU5vZGVzIiwiZ2V0TmFtZSIsInJhbmRvbSIsIk5PREVfUFJFRklYIiwic2V0VG9vbHRpcCIsImdldERhdGEiLCJ0cmFuc2l0aW9ucyIsInN0YXJ0UG9pbnQiLCJOT0RFX1BPU19QUkVGSVgiLCJmcm9tQW5pbSIsImVuZFBvaW50IiwidG9BbmltIiwidmVjRGlyIiwiYWJzIiwib2Zmc2V0IiwicGFpcmVkIiwiaWQiLCJDb25kaXRpb24iLCJjb25kaXRpb24iLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJnZXRMb2NhdGlvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxvb3AiLCJpbml0Q2xpZW50V2lkdGgiLCJpbml0Q2xpZW50SGVpZ2h0Iiwic3ZnR3JpZCIsImFuaW1WYWwiLCJ2YWx1ZSIsImluaXROb2RlcyIsIm9yaWdpbiIsImluaXRMaW5lcyIsIlJlYWN0IiwicHJvcFR5cGVzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRztBQUNyQkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFVBQVUsRUFBRSxTQURWO0FBRUZDLElBQUFBLEtBQUssRUFBRSxTQUZMO0FBR0ZDLElBQUFBLE1BQU0sRUFBRSxTQUhOO0FBSUZDLElBQUFBLFNBQVMsRUFBRTtBQUpULEdBRGU7QUFPckJDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxNQUFNLEVBQUU7QUFETixHQVBlO0FBVXJCQyxFQUFBQSxJQUFJLEVBQUU7QUFDRk4sSUFBQUEsVUFBVSxFQUFFLFNBRFY7QUFFRk8sSUFBQUEsU0FBUyxFQUFFLFNBRlQ7QUFHRkMsSUFBQUEsT0FBTyxFQUFFO0FBSFAsR0FWZTtBQWVyQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ0xULElBQUFBLFVBQVUsRUFBRSx3QkFEUDtBQUVMQyxJQUFBQSxLQUFLLEVBQUUsU0FGRjtBQUdMUyxJQUFBQSxTQUFTLEVBQUUsU0FITjtBQUlMUCxJQUFBQSxTQUFTLEVBQUU7QUFKTjtBQWZZLENBQXpCO0FBdUJBLElBQU1RLGVBQWUsR0FBRztB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RSxFQUFFLEtBQUtHLE9BQW5DO0FBQTRDLFFBQUEsQ0FBQyxFQUFFLEVBQS9DO0FBQW1ELFFBQUEsSUFBSSxFQUFFdEQsTUFBTSxDQUFDUixJQUFQLENBQVlDLE1BQXJFO0FBQTZFLFFBQUEsTUFBTSxFQUFFTyxNQUFNLENBQUNiLElBQVAsQ0FBWUMsVUFBakc7QUFBNkcsUUFBQSxXQUFXLEVBQUUsQ0FBMUg7QUFBNkgsUUFBQSxHQUFHLEVBQUUsYUFBQXlILEtBQUc7QUFBQSxpQkFBSSxNQUFJLENBQUM4RCxNQUFMLEdBQWM5RCxLQUFsQjtBQUFBO0FBQXJJLFFBakJKLEVBa0JJLDZCQUFDLElBQUQ7QUFBTSxRQUFBLEtBQUssRUFBRSxDQUFDLEtBQUsxRCxPQUFOLEVBQWUsS0FBS0csT0FBcEIsQ0FBYjtBQUEyQyxRQUFBLEdBQUcsRUFBRSxLQUFLd0QsS0FBTCxDQUFXLEtBQUt1QyxlQUFMLEdBQXVCLFVBQWxDO0FBQWhELFFBbEJKLEVBbUJLLEtBQUt1QixTQUFMLEVBbkJMLENBRkcsQ0FBUDtBQXlCSDs7OztFQWpIdUJDLGVBQU03QyxTOztnQkFBNUJTLGEsZUFZaUI7QUFDZkksRUFBQUEsU0FBUyxFQUFFaUMsbUJBQVVDLEtBRE47QUFFZjVCLEVBQUFBLFdBQVcsRUFBRTJCLG1CQUFVQztBQUZSLEM7O2VBd0dSdEMsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U3VuLCBNb29uLCBNb3ZlfSBmcm9tICdyZWFjdC1mZWF0aGVyJ1xuXG5jb25zdCBsaWdodE1vZGVQYWxsZXRlID0ge1xuICAgIG5vZGU6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyM0QzU2NkEnLFxuICAgICAgICBjb2xvcjogJyNEOERFRTknLFxuICAgICAgICBib3JkZXI6ICcjMDBlNWZmJyxcbiAgICAgICAgYm94U2hhZG93OiAnMCAxcHggNXB4IHJnYmEoMCwwLDAsMC41KSdcbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgICAgc3Ryb2tlOiAnIzgxQTFDMSdcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNlMGUwZTAnLFxuICAgICAgICBzbWFsbEdyaWQ6ICcjY2NkMWRiJyxcbiAgICAgICAgYmlnR3JpZDogJyNjN2NjZDYnXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDc3LCA3OCwgODcsIDAuOTUpJyxcbiAgICAgICAgY29sb3I6ICcjRDhERUU5JyxcbiAgICAgICAgY29sb3JTcGFuOiAnI2M1ZTNmYycsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNSknXG4gICAgfVxufVxuXG5jb25zdCBkYXJrTW9kZVBhbGxldGUgPSB7XG4gICAgbm9kZToge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnIzUxNTY1YycsXG4gICAgICAgIGNvbG9yOiAnI2VlZWVlZScsXG4gICAgICAgIGJvcmRlcjogJyM3ZmMyYzknLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDFweCA1cHggcmdiYSgwLDAsMCwwLjUpJ1xuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgICBzdHJva2U6ICcjZGRkZGRkJ1xuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnIzI3MjcyZScsXG4gICAgICAgIHNtYWxsR3JpZDogJyMyMjIyMjInLFxuICAgICAgICBiaWdHcmlkOiAnIzFmMWYxZidcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMTUyLCAxNTYsIDE2NiwgMC45NSknLFxuICAgICAgICBjb2xvcjogJyMyNzI3MmUnLFxuICAgICAgICBjb2xvclNwYW46ICcjMGMyNzRlJ1xuICAgIH1cbn1cbnZhciBjb2xvcnMgPSB7XG4gICAgLi4uZGFya01vZGVQYWxsZXRlXG59XG5cbmNvbnN0IHdvcmRTcGxpdFVwcGVyID0gKHN0cikgPT4ge1xuICAgIHZhciBuZXdzdHIgPSAnJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzdHJbaV0gPT09IHN0cltpXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBuZXdzdHIgKz0gYCAke3N0cltpXX1gXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBuZXdzdHIgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKClcbiAgICB9XG4gICAgcmV0dXJuIG5ld3N0clxufVxuY29uc3QgVmVjID0ge1xuICAgIG5vcm1hbGl6ZTogKHZlYykgPT4ge1xuICAgICAgICB2YXIgbGVuID0gTWF0aC5zcXJ0KHZlY1swXSAqKiAyICsgdmVjWzFdICoqIDIpIHx8IDFcbiAgICAgICAgcmV0dXJuIFt2ZWNbMF0gLyBsZW4sIHZlY1sxXSAvIGxlbl1cbiAgICB9LFxuICAgIGFkZDogKHZlYzEsIHZlYzIpID0+IHtcbiAgICAgICAgcmV0dXJuIFt2ZWMxWzBdICsgdmVjMlswXSwgdmVjMVsxXSArIHZlYzJbMV1dXG4gICAgfSxcbiAgICBzdWJ0cmFjdDogKHZlYzEsIHZlYzIpID0+IHtcbiAgICAgICAgcmV0dXJuIFt2ZWMxWzBdIC0gdmVjMlswXSwgdmVjMVsxXSAtIHZlYzJbMV1dXG4gICAgfSxcbiAgICBtdWx0aXBseTogKHZlYywgZmFjdG9yKSA9PiB7XG4gICAgICAgIHJldHVybiBbdmVjWzBdICogZmFjdG9yLCB2ZWNbMV0gKiBmYWN0b3JdXG4gICAgfVxufVxuXG5jb25zdCBMaW5lID0gKHsgb25Ib3Zlciwgb25MZWF2ZSwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gcHJvcHNcbiAgICBjb25zdCBbc3Ryb2tlV2lkdGgsIHNldFN0cm9rZVdpZHRoXSA9IHVzZVN0YXRlKDMpXG4gICAgcmV0dXJuIDxsaW5lIHgxPXtzdGFydCA/IHN0YXJ0WzBdIDogJzUwJSd9IHkxPXtzdGFydCA/IHN0YXJ0WzFdIDogXCI1MCVcIn1cbiAgICAgICAgeDI9e2VuZCA/IGVuZFswXSA6IDB9IHkyPXtlbmQgPyBlbmRbMV0gOiAwfVxuICAgICAgICBzdHlsZT17eyB0cmFuc2l0aW9uOiAnMTAwbXMnIH19XG4gICAgICAgIHN0cm9rZT17Y29sb3JzLmxpbmUuc3Ryb2tlfSBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHsgc2V0U3Ryb2tlV2lkdGgoNik7IGlmIChvbkhvdmVyKSBvbkhvdmVyKGUpIH19XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHsgc2V0U3Ryb2tlV2lkdGgoMyk7IGlmIChvbkxlYXZlKSBvbkxlYXZlKGUpIH19XG5cbiAgICAvPlxufVxuXG5jb25zdCBQeHRvTnVtID0gKHB4U3RyaW5nKSA9PiB7IHJldHVybiBOdW1iZXIocHhTdHJpbmcubWF0Y2goLyguKilweC8pWzFdKSB9XG5cbmNvbnN0IHJ1bGUgPSB7XG4gICAgc2NhbGU6IChzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHN0cmluZykgcmV0dXJuIE51bWJlcihzdHJpbmcubWF0Y2goL3NjYWxlXFwoKFteKV0rKVxcKS8pWzFdKVxuICAgICAgICByZXR1cm4gMVxuICAgIH0sXG4gICAgdHJhbnNsYXRlOiAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdHJTcGxpdCA9IHN0cmluZy5tYXRjaCgvdHJhbnNsYXRlXFwoKFteKV0rKVxcKS8pWzFdLnNwbGl0KCcsICcpXG4gICAgICAgICAgICByZXR1cm4gW1B4dG9OdW0oc3RyU3BsaXRbMF0pLCBQeHRvTnVtKHN0clNwbGl0WzFdKV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzEsIDFdXG4gICAgfVxufVxuXG5cblxuXG5jbGFzcyBCbHVlcHJpbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIGRhcmtNb2RlOiB0cnVlLFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLndpbmRvdyA9IHByb3BzLndpbmRvd1xuICAgICAgICB0aGlzLmRlbHRhWCA9IDBcbiAgICAgICAgdGhpcy5kZWx0YVkgPSAwXG4gICAgICAgIHRoaXMubW91c2VYID0gMFxuICAgICAgICB0aGlzLm1vdXNlWSA9IDBcbiAgICAgICAgdGhpcy5zY2FsZSA9IDFcbiAgICAgICAgdGhpcy54ID0gMVxuICAgICAgICBcbiAgICB9XG5cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXRXaWR0aCA9IHRoaXMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgICAgICB0aGlzLmluaXRIZWlnaHQgPSB0aGlzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgICAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXG4gICAgICAgIHRoaXMub3JpZ2luWCA9ICh0aGlzLndpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5pbml0V2lkdGgpIC8gMlxuICAgICAgICB0aGlzLm9yaWdpblkgPSAodGhpcy53aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLmluaXRIZWlnaHQpIC8gMlxuICAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgIGUgPSBlIHx8IHRoaXMud2luZG93LmV2ZW50XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuZGVsdGFYID0gdGhpcy5tb3VzZVggLSBlLmNsaWVudFg7XG4gICAgICAgIHRoaXMuZGVsdGFZID0gdGhpcy5tb3VzZVkgLSBlLmNsaWVudFk7XG4gICAgICAgIHRoaXMubW91c2VYID0gZS5jbGllbnRYXG4gICAgICAgIHRoaXMubW91c2VZID0gZS5jbGllbnRZXG4gICAgICAgIHZhciBtYXhUb3AgPSAodGhpcy5zY2FsZSAtIDEpICogdGhpcy5pbml0SGVpZ2h0IC8gMlxuICAgICAgICB2YXIgbWF4TGVmdCA9ICh0aGlzLnNjYWxlIC0gMSkgKiB0aGlzLmluaXRXaWR0aCAvIDJcbiAgICAgICAgdmFyIG1pbkxlZnQgPSBtYXhMZWZ0IC0gdGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgdGhpcy5jb250YWluZXJXaWR0aFxuICAgICAgICB2YXIgbWluVG9wID0gbWF4VG9wIC0gdGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIHRoaXMuY29udGFpbmVySGVpZ2h0XG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS50b3AgPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLndyYXBwZXIub2Zmc2V0VG9wIC0gdGhpcy5kZWx0YVksIG1pblRvcCksIG1heFRvcCkgKyAncHgnXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5sZWZ0ID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy53cmFwcGVyLm9mZnNldExlZnQgLSB0aGlzLmRlbHRhWCwgbWluTGVmdCksIG1heExlZnQpICsgJ3B4J1xuXG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcbiAgICAgICAgZSA9IGUgfHwgdGhpcy53aW5kb3cuZXZlbnRcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHRoaXMucHJvcHMub25DbGljaygpXG4gICAgICAgIHRoaXMubW91c2VYID0gZS5jbGllbnRYXG4gICAgICAgIHRoaXMubW91c2VZID0gZS5jbGllbnRZXG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmVcbiAgICAgICAgdGhpcy53aW5kb3cuZG9jdW1lbnQub25tb3VzZXVwID0gdGhpcy5oYW5kbGVNb3VzZVVwXG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy53aW5kb3cuZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsXG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGxcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGxcbiAgICAgICAgdGhpcy53aW5kb3cuZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbFxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlV2hlZWwgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBNYXRoLm1heChydWxlLnNjYWxlKHRoaXMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0pIC0gMC4wMDA1ICogZS5kZWx0YVksIDAuMylcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHt0aGlzLnNjYWxlfSlgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUb29sdGlwID0gKGRhdGEsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKCFkYXRhKSB0aGlzLnRvb2x0aXBCYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBlbHNlIHRoaXMudG9vbHRpcEJhci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIGRhdGEgPSB0aGlzLl90b29sdGlwVG9IVE1MKGRhdGEpXG4gICAgICAgIHRoaXMudG9vbHRpcEJhci5pbm5lckhUTUwgPSBkYXRhXG4gICAgICAgIHRoaXMudG9vbHRpcEJhci5zdHlsZS50b3AgPSB5IC0gMzBcbiAgICAgICAgdGhpcy50b29sdGlwQmFyLnN0eWxlLmxlZnQgPSB4ICsgMzBcblxuICAgIH1cblxuICAgIF90b29sdGlwVG9IVE1MID0gKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGpzb24pLm1hcChrZXkgPT4geyByZXR1cm4gYDxkaXYgc3R5bGU9XCJ3aWR0aDo5MCU7IGZvbnQtd2VpZ2h0OiA3MDA7XCI+ICR7d29yZFNwbGl0VXBwZXIoa2V5KX0gOiA8c3BhbiBzdHlsZT1cImNvbG9yOiR7Y29sb3JzLnRvb2x0aXAuY29sb3JTcGFufTsgZm9udC1zaXplOjE0OyBmb250LXdlaWdodDogNjAwO2Zsb2F0OiByaWdodFwiPiAke2pzb25ba2V5XX0gPHNwYW4+IDwvZGl2PmAgfSkuam9pbignJylcbiAgICB9XG5cbiAgICByZW5kZXJUb29sdGlwID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBib3hTaGFkb3c6IGNvbG9ycy50b29sdGlwLmJveFNoYWRvdyxcbiAgICAgICAgICAgIG1pbldpZHRoOiAxNTAsIG1pbkhlaWdodDogMTAwLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50b29sdGlwLmNvbG9yLCBiYWNrZ3JvdW5kOiBjb2xvcnMudG9vbHRpcC5iYWNrZ3JvdW5kLCB6SW5kZXg6IDEsIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLCBib3JkZXJSYWRpdXM6IDUsIGZvbnRTaXplOiAxMiwgcGFkZGluZ0xlZnQ6IDVcbiAgICAgICAgfX0gcmVmPXtyZWYgPT4gdGhpcy50b29sdGlwQmFyID0gcmVmfT5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxuXG4gICAgcmVuZGVyQnRuQ2VudGVyTmF2ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7ZGFya01vZGV9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxcHggNXB4IHJnYmEoMCwwLDAsMC41KScsXG4gICAgICAgICAgICBjdXJzb3I6J3BvaW50ZXInLFxuICAgICAgICAgICAgekluZGV4OiAxLCB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBmb250U2l6ZTogMTIsIHBhZGRpbmc6MTBcbiAgICAgICAgfX0gIFxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgIHRoaXMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknOyB0aGlzLndyYXBwZXIuc3R5bGUudG9wID0gdGhpcy5vcmlnaW5ZOyB0aGlzLndyYXBwZXIuc3R5bGUubGVmdCA9IHRoaXMub3JpZ2luWH19XG4gICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLmNlbnRlck5hdiA9IHJlZn0+XG4gICAgICAgICAgICA8TW92ZSBzdHJva2U9e2RhcmtNb2RlID8gJyNlZWVlZWUnIDogJyMzMzMzMzMnfT48L01vdmU+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbiAgICByZW5kZXJEYXJrTGlnaHRTd2l0Y2ggPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtkYXJrTW9kZX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDFweCA1cHggcmdiYSgwLDAsMCwwLjUpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtNb2RlID8gJ3JnYmEoMCwwLDAsMC41KScgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICAgICAgICAgIGN1cnNvcjoncG9pbnRlcicsXG4gICAgICAgICAgICB6SW5kZXg6IDEsIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlclJhZGl1czogJzUwJScsIGZvbnRTaXplOiAxMiwgXG4gICAgICAgICAgICBwYWRkaW5nOjEwXG4gICAgICAgIH19ICBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5kYXJrTW9kZSlcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzID0geyAuLi5saWdodE1vZGVQYWxsZXRlIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycyA9IHsgLi4uZGFya01vZGVQYWxsZXRlIH1cbiAgICAgICAgICAgIDt0aGlzLnNldFN0YXRlKHtkYXJrTW9kZTogIXRoaXMuc3RhdGUuZGFya01vZGV9KTsgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhcmtNb2RlID8gPFN1biBmaWxsPScjZWVlZWVlJyBzdHJva2U9JyNlZWVlZWUnPjwvU3VuPiA6IDxNb29uIGZpbGw9JyMzMzMzMzMnIHN0cm9rZT0nIzMzMzMzMycvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsIGxlZnQ6IDAsIHpJbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMSknLCBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLmNvbnRhaW5lciA9IHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjonZml4ZWQnLCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1LCByaWdodDogNSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIGFsaWduQ29udGVudDonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDoxLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJEYXJrTGlnaHRTd2l0Y2goKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJ0bkNlbnRlck5hdigpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRvb2x0aXAoKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzEwMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnLTQ1MCUnLCAgLy8gLSAodG90YWxIZWlnaHQgLSBjbGllbnRIZWlnaHQpIC8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJy00NTAlJywgLy8gLSAodG90YWxXaWR0aCAgLSBjbGllbnRXaWR0aCkgLyAyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5ncmlkLmJhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMud3JhcHBlciA9IHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uV2hlZWw9e3RoaXMuaGFuZGxlTW91c2VXaGVlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHpJbmRleDogLTEsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdHRlcm4gaWQ9XCJzbWFsbEdyaWRcIiB3aWR0aD1cIjhcIiBoZWlnaHQ9XCI4XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDggMCBMIDAgMCAwIDhcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT17Y29sb3JzLmdyaWQuc21hbGxHcmlkfSBzdHJva2VXaWR0aD1cIjAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdHRlcm4gaWQ9XCJncmlkXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIGZpbGw9XCJ1cmwoI3NtYWxsR3JpZClcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gODAgMCBMIDAgMCAwIDgwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9e2NvbG9ycy5ncmlkLmJpZ0dyaWR9IHN0cm9rZVdpZHRoPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ1cmwoI2dyaWQpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaW5pdFg6IDAsXG4gICAgICAgIGluaXRZOiAwXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMud2luZG93ID0gcHJvcHMud2luZG93XG4gICAgICAgIHRoaXMucG9zMSA9IDBcbiAgICAgICAgdGhpcy5kZWx0YVkgPSAwXG4gICAgICAgIHRoaXMubW91c2VYID0gMFxuICAgICAgICB0aGlzLm1vdXNlWSA9IDBcbiAgICAgICAgdGhpcy5zY2FsZSA9IDFcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbFxuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNldXAgPSBudWxsXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy5wcm9wcy54fXB4LCAke3RoaXMucHJvcHMueX1weClgXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gcnVsZS50cmFuc2xhdGUodGhpcy53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSlcbiAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLnRvcCA9IHRoaXMud3JhcHBlci5vZmZzZXRUb3BcbiAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLmxlZnQgPSB0aGlzLndyYXBwZXIub2Zmc2V0TGVmdFxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XG5cbiAgICAgICAgdGhpcy5zY2FsZSA9IHJ1bGUuc2NhbGUodGhpcy53cmFwcGVyLnBhcmVudE5vZGUuc3R5bGUudHJhbnNmb3JtKVxuICAgICAgICBlID0gZSB8fCB0aGlzLndpbmRvdy5ldmVudFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5kZWx0YVggPSB0aGlzLm1vdXNlWCAtIGUuY2xpZW50WDtcbiAgICAgICAgdGhpcy5kZWx0YVkgPSB0aGlzLm1vdXNlWSAtIGUuY2xpZW50WTtcbiAgICAgICAgdGhpcy5tb3VzZVggPSBlLmNsaWVudFg7XG4gICAgICAgIHRoaXMubW91c2VZID0gZS5jbGllbnRZO1xuXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS50b3AgPSAodGhpcy53cmFwcGVyLm9mZnNldFRvcCAtIHRoaXMuZGVsdGFZIC8gdGhpcy5zY2FsZSkgKyAncHgnXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5sZWZ0ID0gKHRoaXMud3JhcHBlci5vZmZzZXRMZWZ0IC0gdGhpcy5kZWx0YVggLyB0aGlzLnNjYWxlKSArICdweCdcblxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgICAgIGUgPSBlIHx8IHRoaXMud2luZG93LmV2ZW50XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WFxuICAgICAgICB0aGlzLm1vdXNlWSA9IGUuY2xpZW50WVxuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMuaGFuZGxlTW91c2VNb3ZlXG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuaGFuZGxlTW91c2VVcFxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbFxuICAgICAgICB0aGlzLndpbmRvdy5kb2N1bWVudC5vbm1vdXNldXAgPSBudWxsXG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy53aW5kb3cuZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsXG4gICAgICAgIHRoaXMud2luZG93LmRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGxcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHJ1bGUuc2NhbGUodGhpcy53cmFwcGVyLnBhcmVudE5vZGUuc3R5bGUudHJhbnNmb3JtKVxuICAgICAgICB2YXIgeCA9IHRoaXMud3JhcHBlci5vZmZzZXRMZWZ0ICtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDIgLyB0aGlzLnNjYWxlICsgdGhpcy50cmFuc2xhdGVbMF1cbiAgICAgICAgdmFyIHkgPSB0aGlzLndyYXBwZXIub2Zmc2V0VG9wICtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyIC8gdGhpcy5zY2FsZSArIHRoaXMudHJhbnNsYXRlWzFdXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgb25MZWF2ZSwgb25Ib3ZlciB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9ycy5ub2RlLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5ub2RlLmJhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGNvbG9ycy5ub2RlLmJveFNoYWRvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtlID0+IHsgaWYgKG9uSG92ZXIpIG9uSG92ZXIoZSkgfX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtlID0+IHsgaWYgKG9uTGVhdmUpIG9uTGVhdmUoZSkgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy53cmFwcGVyID0gcmVmfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jbGFzcyBBbmltQmx1ZXByaW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5OT0RFX1BSRUZJWCA9ICdOT0RFXyc7XG4gICAgICAgIHRoaXMuTk9ERV9QT1NfUFJFRklYID0gJ05PREVfUE9TXyc7XG4gICAgICAgIHRoaXMud2luZG93ID0gcHJvcHMud2luZG93XG4gICAgfVxuICAgIHN0YXRlID0ge1xuICAgICAgICBzZWxlY3RlZDogJydcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhbmltTm9kZXM6IHByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgdHJhbnNpdGlvbnM6IHByb3BUeXBlcy5hcnJheSxcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGluaXRDbGllbnRXaWR0aCwgaW5pdENsaWVudEhlaWdodCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICB0aGlzLm9yaWdpblggPSBNYXRoLm1heCh0aGlzLnN2Z0dyaWQud2lkdGguYW5pbVZhbC52YWx1ZSAvIDIsIChpbml0Q2xpZW50V2lkdGggKiAxMCAtIGluaXRDbGllbnRXaWR0aCkgLyAyKVxuICAgICAgICB0aGlzLm9yaWdpblkgPSBNYXRoLm1heCh0aGlzLnN2Z0dyaWQuaGVpZ2h0LmFuaW1WYWwudmFsdWUgLyAyLCAoaW5pdENsaWVudEhlaWdodCAqIDEwIC0gaW5pdENsaWVudEhlaWdodCkgLyAyKVxuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVOb2RlID0gKG5vZGUpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbm9kZS5uYW1lXG4gICAgfVxuXG4gICAgaW5pdE5vZGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGFuaW1Ob2RlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gYW5pbU5vZGVzLm1hcChub2RlID0+XG4gICAgICAgICAgICA8Tm9kZSBrZXk9e25vZGUuZ2V0TmFtZSgpfVxuICAgICAgICAgICAgICAgIHdpbmRvdz17dGhpcy53aW5kb3d9XG4gICAgICAgICAgICAgICAgeD17TWF0aC5yYW5kb20oKSAqIDEwMH0geT17TWF0aC5yYW5kb20oKSAqIDUwfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXNbdGhpcy5OT0RFX1BSRUZJWCArIG5vZGUuZ2V0TmFtZSgpXSA9IHJlZn1cbiAgICAgICAgICAgICAgICB0aXRsZT17bm9kZS5nZXROYW1lKCl9XG4gICAgICAgICAgICAgICAgb25Ib3Zlcj17KGUpID0+IHsgdGhpcy5CbHVlcHJpbnQuc2V0VG9vbHRpcCh7ICdJZCc6IG5vZGUuZ2V0TmFtZSgpLCAuLi5ub2RlLmdldERhdGEoKSB9LCBlLmNsaWVudFgsIGUuY2xpZW50WSkgfX1cbiAgICAgICAgICAgICAgICBvbkxlYXZlPXsoZSkgPT4gdGhpcy5CbHVlcHJpbnQuc2V0VG9vbHRpcCgnJyl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiB0aGlzLmFjdGl2ZU5vZGUgPT09IG5vZGUuZ2V0TmFtZSgpID8gYDNweCBzb2xpZCAke2NvbG9ycy5ub2RlLmJvcmRlcn1gIDogJzNweCBzb2xpZCB0cmFuc3BhcmVudCcgfX1cbiAgICAgICAgICAgIC8+KVxuICAgIH1cblxuICAgIGluaXRMaW5lcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0cmFuc2l0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnMubWFwKHRyYW5zaXRpb24gPT4ge1xuICAgICAgICAgICAgdmFyIHN0YXJ0UG9pbnQgPSB0aGlzLnN0YXRlW3RoaXMuTk9ERV9QT1NfUFJFRklYICsgdHJhbnNpdGlvbi5mcm9tQW5pbV1cbiAgICAgICAgICAgIHZhciBlbmRQb2ludCA9IHRoaXMuc3RhdGVbdGhpcy5OT0RFX1BPU19QUkVGSVggKyB0cmFuc2l0aW9uLnRvQW5pbV1cbiAgICAgICAgICAgIGlmIChzdGFydFBvaW50ICYmIGVuZFBvaW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHZlY0RpciA9IFZlYy5ub3JtYWxpemUoW3N0YXJ0UG9pbnRbMF0gLSBlbmRQb2ludFswXSwgc3RhcnRQb2ludFsxXSAtIGVuZFBvaW50WzFdXSlcbiAgICAgICAgICAgICAgICBlbmRQb2ludCA9IFZlYy5hZGQoZW5kUG9pbnQsIFZlYy5tdWx0aXBseSh2ZWNEaXIsIDcwIC0gMjUgKiBNYXRoLmFicyh2ZWNEaXJbMV0pKSlcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdHJhbnNpdGlvbi5wYWlyZWQgPyBbLXZlY0RpclsxXSAqIDcsIHZlY0RpclswXSAqIDddIDogWzAsIDBdXG4gICAgICAgICAgICAgICAgc3RhcnRQb2ludCA9IFZlYy5hZGQodGhpcy5zdGF0ZVt0aGlzLk5PREVfUE9TX1BSRUZJWCArIHRyYW5zaXRpb24uZnJvbUFuaW1dLCBvZmZzZXQpXG4gICAgICAgICAgICAgICAgZW5kUG9pbnQgPSBWZWMuYWRkKGVuZFBvaW50LCBvZmZzZXQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5lXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdz17dGhpcy53aW5kb3d9XG4gICAgICAgICAgICAgICAgICAgIGtleT17dHJhbnNpdGlvbi5mcm9tQW5pbSArIHRyYW5zaXRpb24udG9BbmltfVxuICAgICAgICAgICAgICAgICAgICBzdGFydD17c3RhcnRQb2ludH1cbiAgICAgICAgICAgICAgICAgICAgZW5kPXtlbmRQb2ludH1cbiAgICAgICAgICAgICAgICAgICAgbWFya2VyRW5kPSd1cmwoI3RyaWFuZ2xlKSdcbiAgICAgICAgICAgICAgICAgICAgb25Ib3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQmx1ZXByaW50LnNldFRvb2x0aXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdHJhbnNpdGlvbi5mcm9tQW5pbSArICcgdG8gJyArIHRyYW5zaXRpb24udG9BbmltLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25kaXRpb246IHRyYW5zaXRpb24uY29uZGl0aW9uLnRvU3RyaW5nKCkucmVwbGFjZSgnKCkgPT4nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkJsdWVwcmludC5zZXRUb29sdGlwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYW5pbU5vZGVzLm1hcChub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbdGhpcy5OT0RFX1BPU19QUkVGSVggKyBub2RlLmdldE5hbWUoKV06IHRoaXNbdGhpcy5OT0RFX1BSRUZJWCArIG5vZGUuZ2V0TmFtZSgpXS5nZXRMb2NhdGlvbigpIH0pO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIDxCbHVlcHJpbnQgcmVmPXtyZWYgPT4gdGhpcy5CbHVlcHJpbnQgPSByZWZ9IHdpbmRvdz17dGhpcy53aW5kb3d9IHN0eWxlPXt7IG1pbldpZHRoOiB0aGlzLnByb3BzLmluaXRDbGllbnRXaWR0aCwgbWluSGVpZ2h0OiB0aGlzLnByb3BzLmluaXRDbGllbnRIZWlnaHQgfX0+XG4gICAgICAgICAgICB7dGhpcy5pbml0Tm9kZXMoKX1cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnN2Z0dyaWQgPSByZWZ9XG4gICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICA8bWFya2VyIGlkPVwidHJpYW5nbGVcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZlg9XCIxXCIgcmVmWT1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyVW5pdHM9XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJXaWR0aD1cIjRcIiBtYXJrZXJIZWlnaHQ9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDAgMCBMIDEwIDUgTCAwIDEwIHpcIiBmaWxsPXtjb2xvcnMubGluZS5zdHJva2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbWFya2VyPlxuICAgICAgICAgICAgICAgICAgICA8bWFya2VyIGlkPVwibWlkX2Fycm93XCIgbWFya2VyV2lkdGg9XCIyXCIgbWFya2VySGVpZ2h0PVwiMlwiIHZpZXdCb3g9XCItMSAtMSAyIDJcIiBvcmllbnQ9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiYmx1ZVwiIGQ9XCJNLTEsLTEgTDEsMCAtMSwxIHpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L21hcmtlcj5cbiAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17dGhpcy5vcmlnaW5YfSBjeT17dGhpcy5vcmlnaW5ZfSByPXsxMH0gZmlsbD17Y29sb3JzLmxpbmUuc3Ryb2tlfSBzdHJva2U9e2NvbG9ycy5ub2RlLmJhY2tncm91bmR9IHN0cm9rZVdpZHRoPXszfSByZWY9e3JlZiA9PiB0aGlzLm9yaWdpbiA9IHJlZn0gLz5cbiAgICAgICAgICAgICAgICA8TGluZSBzdGFydD17W3RoaXMub3JpZ2luWCwgdGhpcy5vcmlnaW5ZXX0gZW5kPXt0aGlzLnN0YXRlW3RoaXMuTk9ERV9QT1NfUFJFRklYICsgJ2ZseXJpZ2h0J119ID48L0xpbmU+XG4gICAgICAgICAgICAgICAge3RoaXMuaW5pdExpbmVzKCl9XG4gICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICA8L0JsdWVwcmludD5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1CbHVlcHJpbnQ7Il19