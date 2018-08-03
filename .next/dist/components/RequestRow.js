'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomamajic/Desktop/Toma/Dev/udemy/kickstarter/components/RequestRow.js';


var RequestRow = function (_React$Component) {
	(0, _inherits3.default)(RequestRow, _React$Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loadingApprove: false,
			loadingFinalize: false,
			errorMessage: ''
		}, _this.onApprove = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								campaign = (0, _campaign2.default)(_this.props.address);
								_context.next = 4;
								return _web2.default.eth.getAccounts();

							case 4:
								accounts = _context.sent;

								_this.setState({ loadingApprove: true, errorMessage: '' });

								_context.prev = 6;
								_context.next = 9;
								return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

							case 9:

								_routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](6);

								_this.setState({ errorMessage: _context.t0.message });

							case 15:

								_this.setState({ loadingApprove: false });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[6, 12]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _this.onFinalize = function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								event.preventDefault();
								campaign = (0, _campaign2.default)(_this.props.address);
								_context2.next = 4;
								return _web2.default.eth.getAccounts();

							case 4:
								accounts = _context2.sent;

								_this.setState({ loadingFinalize: true, errorMessage: '' });

								_context2.prev = 6;
								_context2.next = 9;
								return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

							case 9:

								_routes.Router.replaceRoute('/campaigns/' + _this.props.address + '/requests');
								_context2.next = 15;
								break;

							case 12:
								_context2.prev = 12;
								_context2.t0 = _context2['catch'](6);

								_this.setState({ errorMessage: _context2.t0.message });

							case 15:

								_this.setState({ loadingFinalize: false });

							case 16:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2, [[6, 12]]);
			}));

			return function (_x2) {
				return _ref3.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: 'render',
		value: function render() {
			var readyToFinalize = this.props.request.approvalCount > this.props.contributorsCount / 2;

			return _react2.default.createElement(_semanticUiReact.Table.Row, { disabled: this.props.request.complete, positive: readyToFinalize && !this.props.request.complete, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, this.props.id + 1), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _web2.default.utils.fromWei(this.props.request.amount, 'ether') + ' ETH'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, this.props.request.recipient), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, this.props.request.description), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, this.props.request.approvalCount, '/', this.props.contributorsCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
				color: 'green',
				onClick: this.onApprove,
				loading: this.state.loadingApprove,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, 'Approve')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				onClick: this.onFinalize,
				loading: this.state.loadingFinalize,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, 'Finalize')));
		}
	}]);

	return RequestRow;
}(_react2.default.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhbXBhaWduIiwid2ViMyIsIkJ1dHRvbiIsIlRhYmxlIiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwibG9hZGluZ0FwcHJvdmUiLCJsb2FkaW5nRmluYWxpemUiLCJlcnJvck1lc3NhZ2UiLCJvbkFwcHJvdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZWFkeVRvRmluYWxpemUiLCJyZXF1ZXN0IiwiYXBwcm92YWxDb3VudCIsImNvbnRyaWJ1dG9yc0NvdW50IiwiY29tcGxldGUiLCJ1dGlscyIsImZyb21XZWkiLCJhbW91bnQiLCJyZWNpcGllbnQiLCJkZXNjcmlwdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OztrTixBQUNMO21CQUFRLEFBQ1MsQUFDaEI7b0JBRk8sQUFFVSxBQUNqQjtpQkFITyxBQUdPLEE7QUFIUCxBQUNQLFdBS0QsQTt3RkFBWSxpQkFBQSxBQUFPLE9BQVA7a0JBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNYO2NBQUEsQUFBTSxBQUNBO0FBRkssbUJBRU0sd0JBQVMsTUFBQSxBQUFLLE1BRnBCLEFBRU0sQUFBb0I7d0JBRjFCO2VBR1ksY0FBQSxBQUFLLElBSGpCLEFBR1ksQUFBUzs7WUFBMUI7QUFISyw0QkFLWDs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxnQkFBRixBQUFrQixNQUFNLGNBTDNCLEFBS1gsQUFBYyxBQUFzQzs7d0JBTHpDO3dCQUFBO2VBUUosU0FBQSxBQUFTLFFBQVQsQUFDSixlQUFlLE1BQUEsQUFBSyxNQURoQixBQUNzQixJQUR0QixBQUVKLEtBQUssRUFBQyxNQUFNLFNBVkosQUFRSixBQUVDLEFBQU8sQUFBUzs7WUFFdkI7O3VCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQUF2QyxBQUE2QyxVQVpuQzt3QkFBQTtBQUFBOztZQUFBO3dCQUFBO3dDQWNWOztjQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFkcEIsQUFjVixBQUFjLEFBQW9COztZQUduQzs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxnQkFqQkwsQUFpQlgsQUFBYyxBQUFrQjs7WUFqQnJCO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7YSxBQXFCWjt3RkFBYSxrQkFBQSxBQUFPLE9BQVA7a0JBQUE7b0VBQUE7ZUFBQTt5Q0FBQTtZQUNaO2NBQUEsQUFBTSxBQUNBO0FBRk0sbUJBRUssd0JBQVMsTUFBQSxBQUFLLE1BRm5CLEFBRUssQUFBb0I7eUJBRnpCO2VBR1csY0FBQSxBQUFLLElBSGhCLEFBR1csQUFBUzs7WUFBMUI7QUFITSw2QkFLWjs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxpQkFBRixBQUFtQixNQUFNLGNBTDNCLEFBS1osQUFBYyxBQUF1Qzs7eUJBTHpDO3lCQUFBO2VBUUwsU0FBQSxBQUFTLFFBQVQsQUFDSixnQkFBZ0IsTUFBQSxBQUFLLE1BRGpCLEFBQ3VCLElBRHZCLEFBRUosS0FBSyxFQUFDLE1BQU0sU0FWSCxBQVFMLEFBRUMsQUFBTyxBQUFTOztZQUV2Qjs7dUJBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BQXZDLEFBQTZDLFVBWmxDO3lCQUFBO0FBQUE7O1lBQUE7eUJBQUE7MENBY1g7O2NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxhQWRuQixBQWNYLEFBQWMsQUFBb0I7O1lBR25DOztjQUFBLEFBQUssU0FBUyxFQUFFLGlCQWpCSixBQWlCWixBQUFjLEFBQW1COztZQWpCckI7WUFBQTt5QkFBQTs7QUFBQTs4QkFBQTtBOzs7Ozs7Ozs7OzJCQW9CSixBQUNSO09BQU0sa0JBQWtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBZ0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxvQkFBdEUsQUFBMEYsQUFFMUY7OzBCQUNFLGNBQUQsdUJBQUEsQUFBTyxPQUFJLFVBQVUsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFoQyxBQUF3QyxVQUFVLFVBQVUsbUJBQW1CLENBQUMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUEzRixBQUFtRztlQUFuRztpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDRSxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FDRSxBQUFLLE1BQUwsQUFBVyxLQUZkLEFBQ0MsQUFDa0IsQUFFbEIsb0JBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0U7QUFERjtBQUFBLG9CQUNFLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUE5QixBQUFzQyxRQUF0QyxBQUE4QyxXQUxqRCxBQUlDLEFBQzJELEFBRTNELHlCQUFDLGNBQUQsdUJBQUEsQUFBTzs7ZUFBUDtpQkFBQSxBQUNFO0FBREY7QUFBQSxXQUNFLEFBQUssTUFBTCxBQUFXLFFBUmQsQUFPQyxBQUNxQixBQUVyQiw0QkFBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FDRSxBQUFLLE1BQUwsQUFBVyxRQVhkLEFBVUMsQUFDcUIsQUFFckIsOEJBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQ0UsQUFBSyxNQUFMLEFBQVcsUUFEYixBQUNxQixlQUFnQixVQUFBLEFBQUssTUFkM0MsQUFhQyxBQUNnRCxBQUVoRCxvQ0FBQyxjQUFELHVCQUFBLEFBQU87O2VBQVA7aUJBQUEsQUFDRztBQURIO0FBQUEsV0FDRyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHVCQUFTLEFBQUM7V0FBRCxBQUNsQyxBQUNOO2FBQVMsS0FGK0IsQUFFMUIsQUFDZDthQUFTLEtBQUEsQUFBSyxNQUgwQixBQUdwQjs7ZUFIb0I7aUJBQUE7QUFBQTtBQUN4QyxJQUR3QyxFQWpCM0MsQUFnQkMsQUFDMEMsQUFTMUMsNkJBQUMsY0FBRCx1QkFBQSxBQUFPOztlQUFQO2lCQUFBLEFBQ0c7QUFESDtBQUFBLFdBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFBUSxBQUFDO2FBQUQsQUFFdEM7YUFBUyxLQUY2QixBQUV4QixBQUNkO2FBQVMsS0FBQSxBQUFLLE1BSHdCLEFBR2xCOztlQUhrQjtpQkFBQTtBQUFBO0FBQ3RDLElBRHNDLEVBNUIzQyxBQUNDLEFBMEJDLEFBQ3lDLEFBVzNDOzs7OztFQTFGdUIsZ0JBQU0sQSxBQTZGL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvdWRlbXkva2lja3N0YXJ0ZXIifQ==