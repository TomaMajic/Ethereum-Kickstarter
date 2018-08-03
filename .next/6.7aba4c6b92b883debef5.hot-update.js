webpackHotUpdate(6,{

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(741);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(451);

var _routes = __webpack_require__(475);

var _campaign = __webpack_require__(682);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(527);

var _web2 = _interopRequireDefault(_web);

var _RequestRow = __webpack_require__(1200);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _BackButton = __webpack_require__(1197);

var _BackButton2 = _interopRequireDefault(_BackButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomamajic/Desktop/Toma/Dev/udemy/kickstarter/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_React$Component) {
	(0, _inherits3.default)(RequestIndex, _React$Component);

	function RequestIndex() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestIndex);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderTableBody = function () {
			return _this.props.requests.map(function (request, index) {
				return _react2.default.createElement(_RequestRow2.default, {
					key: index,
					id: index,
					request: request,
					address: _this.props.address,
					contributorsCount: _this.props.contributorsCount,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				});
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestIndex, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement(_BackButton2.default, { route: '/campaigns/' + this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}), _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, 'Requests for ', this.props.address), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				floated: 'right',
				style: { marginBottom: '10px' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Create request')), _react2.default.createElement(_semanticUiReact.Table, { celled: true, padded: true, textAlign: 'center', __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(_semanticUiReact.Table.Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(_semanticUiReact.Table.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'ID'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Amount'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Recipient'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, 'Description'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, 'Approval Count'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, 'Approve'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, 'Finalize'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, this.renderTableBody())), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, 'Found ', this.props.requestCount + (this.props.requestCount > 1 ? ' Requests.' : ' Request.')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, campaign, requestCount, contributorsCount, requests;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								campaign = (0, _campaign2.default)(address);
								_context.next = 4;
								return campaign.methods.getRequestsCount().call();

							case 4:
								requestCount = _context.sent;
								_context.next = 7;
								return campaign.methods.contributorsCount().call();

							case 7:
								contributorsCount = _context.sent;
								_context.next = 10;
								return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
									return campaign.methods.requests(index).call();
								}));

							case 10:
								requests = _context.sent;
								return _context.abrupt('return', { address: address, campaign: campaign, requests: requests, requestCount: requestCount, contributorsCount: contributorsCount });

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestIndex;
}(_react2.default.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJCYWNrQnV0dG9uIiwiUmVxdWVzdEluZGV4IiwicmVuZGVyVGFibGVCb2R5IiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImFkZHJlc3MiLCJjb250cmlidXRvcnNDb3VudCIsIm1hcmdpbkJvdHRvbSIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7OztzTkFpQkwsQSxrQkFBa0IsWUFBTSxBQUN2QjtnQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2xEOzJCQUFPLEFBQUM7VUFBRCxBQUNELEFBQ0w7U0FGTSxBQUVGLEFBQ0o7Y0FITSxBQUdHLEFBQ1Q7Y0FBUyxNQUFBLEFBQUssTUFKUixBQUljLEFBQ3BCO3dCQUFtQixNQUFBLEFBQUssTUFMbEIsQUFLd0I7O2dCQUx4QjtrQkFBUCxBQUFPLEFBT1A7QUFQTztBQUNOLEtBRE07QUFEUixBQUFPLEFBU1AsSUFUTztBOzs7OzsyQkFXQyxBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDLHNDQUFXLHVCQUFxQixLQUFBLEFBQUssTUFBdEMsQUFBNEM7ZUFBNUM7aUJBREQsQUFDQyxBQUNBO0FBREE7dUJBQ0EsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFBa0Isc0JBQUEsQUFBSyxNQUZ4QixBQUVDLEFBQTZCLEFBRTdCLDBCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDO2FBQUQsQUFFQzthQUZELEFBRVMsQUFDUjtXQUFPLEVBQUMsY0FIVCxBQUdRLEFBQWU7O2VBSHZCO2lCQUFBO0FBQUE7QUFDQyxNQU5ILEFBSUMsQUFDQyxBQVNELG9DQUFBLEFBQUMsd0NBQU0sUUFBUCxNQUFjLFFBQWQsTUFBcUIsV0FBckIsQUFBZ0M7ZUFBaEM7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsdUJBQUEsQUFBTzs7ZUFBUDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx1QkFBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUE7QUFBQTtBQUFBLE1BRkQsQUFFQyxBQUNBLDJCQUFDLGNBQUQsdUJBQUEsQUFBTzs7ZUFBUDtpQkFBQTtBQUFBO0FBQUEsTUFIRCxBQUdDLEFBQ0EsOEJBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBO0FBQUE7QUFBQSxNQUpELEFBSUMsQUFDQSxnQ0FBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUE7QUFBQTtBQUFBLE1BTEQsQUFLQyxBQUNBLG1DQUFDLGNBQUQsdUJBQUEsQUFBTzs7ZUFBUDtpQkFBQTtBQUFBO0FBQUEsTUFORCxBQU1DLEFBQ0EsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBO0FBQUE7QUFBQSxNQVRILEFBQ0MsQUFDQyxBQU9DLEFBSUYsK0JBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0U7QUFERjtBQUFBLFdBM0JGLEFBY0MsQUFhQyxBQUNFLEFBQUssQUFJUixxQ0FBQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUFVLGVBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBWCxBQUEwQixJQUExQixBQUE4QixlQWpDckUsQUFDQyxBQWdDQyxBQUFVLEFBQXdFLEFBR3BGOzs7Ozt5R0FoRTRCLEE7Ozs7O1lBQ3RCO0Esa0JBQVUsTUFBQSxBQUFNLE0sQUFBTSxBQUN0QjtBLG1CQUFXLHdCLEFBQUEsQUFBUzs7ZUFDQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixtQkFBakIsQUFBb0MsQTs7WUFBekQ7QTs7ZUFDMEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsb0JBQWpCLEFBQXFDLEE7O1lBQS9EO0E7O2lDQUVpQixBQUFRLFVBQ3hCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDNUQ7Z0JBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN4QztBQUhxQixBQUN0QixBLFNBQUEsQ0FEc0I7O1lBQWpCO0E7eUNBTUMsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixVQUFyQixVQUErQixjQUEvQixjQUE2QyxtQkFBN0MsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWRrQixnQkFBTSxBLEFBcUVqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvdWRlbXkva2lja3N0YXJ0ZXIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/tomamajic/Desktop/Toma/Dev/udemy/kickstarter/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/tomamajic/Desktop/Toma/Dev/udemy/kickstarter/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43YWJhNGM2YjkyYjg4M2RlYmVmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzI1MzM0MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQmFja0J1dHRvbic7XG5cbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuXHRcdGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xuXHRcdGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG5cdFx0Y29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuXHRcdGNvbnN0IGNvbnRyaWJ1dG9yc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRvcnNDb3VudCgpLmNhbGwoKTtcblxuXHRcdGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0XHRBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuXHRcdFx0fSlcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHsgYWRkcmVzcywgY2FtcGFpZ24sIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIGNvbnRyaWJ1dG9yc0NvdW50IH1cblx0fVxuXG5cdHJlbmRlclRhYmxlQm9keSA9ICgpID0+IHtcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gPFJlcXVlc3RSb3cgXG5cdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdGlkPXtpbmRleH1cblx0XHRcdFx0cmVxdWVzdD17cmVxdWVzdH0gXG5cdFx0XHRcdGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cblx0XHRcdFx0Y29udHJpYnV0b3JzQ291bnQ9e3RoaXMucHJvcHMuY29udHJpYnV0b3JzQ291bnR9XG5cdFx0XHQvPlxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxCYWNrQnV0dG9uIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc31gfSAvPlxuXHRcdFx0XHQ8aDM+UmVxdWVzdHMgZm9yIHt0aGlzLnByb3BzLmFkZHJlc3N9PC9oMz5cblxuXHRcdFx0XHQ8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuXHRcdFx0XHRcdDxCdXR0b24gXG5cdFx0XHRcdFx0XHRwcmltYXJ5IFxuXHRcdFx0XHRcdFx0ZmxvYXRlZD0ncmlnaHQnIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxMHB4J319XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0Q3JlYXRlIHJlcXVlc3Rcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdDxUYWJsZSBjZWxsZWQgcGFkZGVkIHRleHRBbGlnbj17J2NlbnRlcid9PlxuXHRcdFx0XHRcdDxUYWJsZS5IZWFkZXI+XG5cdFx0XHRcdFx0XHQ8VGFibGUuUm93PlxuXHRcdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbD5JRDwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PFRhYmxlLkhlYWRlckNlbGw+QW1vdW50PC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbD5SZWNpcGllbnQ8L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHRcdDxUYWJsZS5IZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PFRhYmxlLkhlYWRlckNlbGw+QXBwcm92ZTwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdFx0PFRhYmxlLkhlYWRlckNlbGw+RmluYWxpemU8L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHQ8L1RhYmxlLlJvdz5cblx0XHRcdFx0XHQ8L1RhYmxlLkhlYWRlcj5cblxuXHRcdFx0XHRcdDxUYWJsZS5Cb2R5PlxuXHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyVGFibGVCb2R5KCl9XG5cdFx0XHRcdFx0PC9UYWJsZS5Cb2R5PlxuXHRcdFx0XHQ8L1RhYmxlPlxuXG5cdFx0XHRcdDxwPkZvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3RDb3VudCArICh0aGlzLnByb3BzLnJlcXVlc3RDb3VudCA+IDEgPyAnIFJlcXVlc3RzLicgOiAnIFJlcXVlc3QuJyl9PC9wPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBT0E7Ozs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUhBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7O0FBS0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUE1REE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUVBO0FBREE7QUFDQTtBQUZBOztBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWZBO0FBQ0E7QUFvRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==