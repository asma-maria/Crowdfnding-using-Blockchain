"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\CrowdFunding\\components\\Winner.js";


var Winner = function (_Component) {
  (0, _inherits3.default)(Winner, _Component);

  function Winner() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Winner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Winner.__proto__ || (0, _getPrototypeOf2.default)(Winner)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      list: "",
      winner: "",
      hidden: true,
      errorMessage: "",
      loading: false,
      value: ""
    }, _this.payWinner = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context.sent;

              _this.setState({ message: 'Waiting on transaction success...' });

              _context.next = 6;
              return campaign.methods.contribute().send({
                from: accounts[0]
              });

            case 6:

              _this.setState({ message: 'A winner has been picked' });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.showWinner = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var campaignn, winnerAddress, addresss;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                campaignn = (0, _campaign2.default)(_this.props.address);
                _context2.prev = 1;
                _context2.next = 4;
                return campaignn.methods.showWinnerAddress().call();

              case 4:
                winnerAddress = _context2.sent;

                console.log(winnerAddress);
                addresss = String(winnerAddress);

                _this.setState({
                  winner: addresss.split(",").join(" ")
                });
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);

                _this.setState({
                  hidden: true,
                  winner: "not found"
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 10]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.showAddress = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var campaignn, winnerAddress, addresss;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                campaignn = (0, _campaign2.default)(_this.props.address);
                _context3.prev = 1;
                _context3.next = 4;
                return campaignn.methods.showAddress().call();

              case 4:
                winnerAddress = _context3.sent;

                //console.log(winnerAddress);
                addresss = String(winnerAddress);

                _this.setState({
                  list: addresss.split(",").join(" Address:")
                  // list:addresss.replace(/,/gi,"\n")
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);

                _this.setState({
                  hidden: true,
                  list: "not found"
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[1, 9]]);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Winner, [{
    key: "componentDidMount",
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var manager, balance;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return campaign.methods.manager().call();

              case 2:
                manager = _context4.sent;
                _context4.next = 5;
                return _web2.default.eth.getBalance(campaign.options.address);

              case 5:
                balance = _context4.sent;

                this.setState({ manager: manager, contributers: contributers, balance: balance });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidMount;
    }()

    // selectWinner = async (event) => {
    //   const campaignn = Campaign(this.props.address);
    //   try {
    //     await campaignn.methods.pickWinner().call();
    //   } catch (err) {
    //     this.setState({
    //       winner: "Cannot select winner",
    //     });
    //   }
    // };

  }, {
    key: "render",
    value: function render() {
      var style = {
        color: "white",
        wrap: "hard"
      };

      var style1 = {
        color: "white",
        border: '10px outset rgb(255, 153, 153)',

        backgroundColor: 'rgb(255, 102, 102)',
        wrap: "hard"

      };
      var divStyle2 = {
        border: '5px solid rgb(179, 0, 0)',
        color: 'green',
        fontSize: '30px',
        fontFamily: ' serif'
      };

      var divStyle3 = {
        border: '2px solid rgb(255, 190, 153)',
        color: 'white',
        fontSize: '25px',
        //backgroundColor:'black',
        fontFamily: ' serif'
      };
      return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement("h1", { style: divStyle3, __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "Reward")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: "blue", style: { marginBottom: 20 }, onClick: this.showWinner, floated: "right", animated: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "Show Winner Address"), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "map", __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }))), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: "green", style: { marginBottom: 20 }, onClick: this.showAddress, floated: "left", animated: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, " Campaign Address List"), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "file", __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }))), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement("h2", { style: { fontFamily: ' serif', color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "There are ", this.props.contributors, " contributors.")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), _react2.default.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement("h3", { style: { fontFamily: 'serif', color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "The Address of the Campaign is ", this.props.address)), _react2.default.createElement("h3", { style: { fontFamily: ' serif', color: "white", border: '5px outset rgb(165,42,42)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, this.state.winner), _react2.default.createElement("h2", { style: { fontFamily: 'serif', color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "Congratulations!!You will get a Reward from Manager of this Campaign"), _react2.default.createElement("h2", { style: { fontFamily: ' serif', color: "white" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "The List of the addresses of this campaign:"), _react2.default.createElement("h3", { style: { fontFamily: ' serif', color: "white", border: '5px outset rgb(165,42,42)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, this.state.list), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "blue", basic: true, style: { marginTop: 20 }, animated: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "Go back to details"), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "arrow left", __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })))))));
    }
  }]);

  return Winner;
}(_react.Component);

exports.default = Winner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdpbm5lci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndlYjMiLCJCdXR0b24iLCJHcmlkIiwiQ2FyZCIsIkNvbnRhaW5lciIsIkljb24iLCJDYW1wYWlnbiIsIkxpbmsiLCJSb3V0ZXIiLCJXaW5uZXIiLCJzdGF0ZSIsImxpc3QiLCJ3aW5uZXIiLCJoaWRkZW4iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwidmFsdWUiLCJwYXlXaW5uZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwic2hvd1dpbm5lciIsImV2ZW50IiwiY2FtcGFpZ25uIiwicHJvcHMiLCJhZGRyZXNzIiwic2hvd1dpbm5lckFkZHJlc3MiLCJjYWxsIiwid2lubmVyQWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzcyIsIlN0cmluZyIsInNwbGl0Iiwiam9pbiIsInNob3dBZGRyZXNzIiwibWFuYWdlciIsImdldEJhbGFuY2UiLCJvcHRpb25zIiwiYmFsYW5jZSIsImNvbnRyaWJ1dGVycyIsInN0eWxlIiwiY29sb3IiLCJ3cmFwIiwic3R5bGUxIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZGl2U3R5bGUyIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZGl2U3R5bGUzIiwibWFyZ2luQm90dG9tIiwiY29udHJpYnV0b3JzIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU8sQUFBSyxBQUFNLEFBQVU7O0FBQ3BDLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBYzs7Ozs7OztJLEFBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSjtZ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QXZEO3NCQUFBLEFBQXNGO0FBQXRGO2NBQXNGLEFBQUssTUE1QmhHLEFBNEJLLEFBQWlHLEFBRWpHLHVCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNDO0FBREQ7eUJBQ0MsY0FBQTs7b0JBQUE7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixPQUFPLEVBQUMsV0FBbkMsQUFBa0MsQUFBWSxNQUFLLFVBQW5EO29CQUFBO3NCQUFBLEFBQ1k7QUFEWjt5QkFDYSxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtvQkFBQTtzQkFBQTtBQUFBO1NBRFosQUFDWSxBQUNJLHVDQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO29CQUFBO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkF0Q3hCLEFBRUUsQUFDQSxBQThCSyxBQUNDLEFBQ0EsQUFFZ0IsQUFDQSxBQVl6QjtBQVp5Qjs7Ozs7O0EsQUFsS1AsQUFpTHJCOztrQkFBQSxBQUFlIiwiZmlsZSI6Ildpbm5lci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Dcm93ZEZ1bmRpbmcifQ==