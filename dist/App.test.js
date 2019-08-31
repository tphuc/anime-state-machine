"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom.default.render(_react.default.createElement(_App.default, null), div);

  _reactDom.default.unmountComponentAtNode(div);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudGVzdC5qcyJdLCJuYW1lcyI6WyJpdCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBQSxFQUFFLENBQUMsMEJBQUQsRUFBNkIsWUFBTTtBQUNuQyxNQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaOztBQUNBQyxvQkFBU0MsTUFBVCxDQUFnQiw2QkFBQyxZQUFELE9BQWhCLEVBQXlCSixHQUF6Qjs7QUFDQUcsb0JBQVNFLHNCQUFULENBQWdDTCxHQUFoQztBQUNELENBSkMsQ0FBRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5pdCgncmVuZGVycyB3aXRob3V0IGNyYXNoaW5nJywgKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRpdik7XG4gIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcbn0pO1xuIl19