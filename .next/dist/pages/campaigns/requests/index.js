'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _BackButton = require('../../../components/BackButton');

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