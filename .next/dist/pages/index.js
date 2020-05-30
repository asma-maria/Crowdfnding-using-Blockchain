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

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\CrowdFunding\\pages\\index.js?entry';


var src = '/images/wireframe/white-image.png';

var divStyle1 = {
    border: '10px outset rgb(255, 170, 128)',
    backgroundColor: 'rgb(128, 0, 0)',
    marginTop: '20px'
};

var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {

                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    }, ' ', _react2.default.createElement(_semanticUiReact.Button, { color: 'black', floated: 'left', basic: true, animated: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    }, 'Campaign Details'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'folder open', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    }))))),
                    fluid: true,
                    meta: 'Campaign Address'
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { style: divStyle1, items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('h1', { style: { fontFamily: "serif", color: "white", marginTop: 50, marginBottom: 30 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, ' ', _react2.default.createElement('center', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, ' Welcome to CrowFund ')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('div', { 'class': 'ui animated fade button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('div', { 'class': 'visible content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('button', { 'class': 'ui inverted brown button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Create New Campaign')), _react2.default.createElement('div', { 'class': 'hidden content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('button', { 'class': 'ui inverted red button', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Think Innovatively ')))), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiZmFjdG9yeSIsIkxheW91dCIsIkxpbmsiLCJzcmMiLCJkaXZTdHlsZTEiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibWV0YSIsImZvbnRGYW1pbHkiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFNLEFBQU87O0FBQ3JCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOzs7Ozs7O0FBRW5CLElBQU0sTUFBTixBQUFZOztBQUVaLElBQU07WUFBWSxBQUNOLEFBQ1I7cUJBRmMsQUFFRSxBQUNoQjtlQUhKLEFBQWtCLEFBR0o7QUFISSxBQUNkOztJLEFBSUU7Ozs7Ozs7Ozs7OzBDQU9lLEFBQ2I7Z0JBQU0sYUFBTSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVMsQUFFMUM7Ozs0QkFBTSxBQUNJLEFBQ1A7aURBQ0ksQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtzQ0FBM0I7d0NBQUEsQUFDSjtBQURJO3FCQUFBLGtCQUNKLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFBSSxxQkFBQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLFNBQXRCLEFBQThCLFFBQU8sT0FBckMsTUFBMkMsVUFBM0M7c0NBQUE7d0NBQUEsQUFDWTtBQURaO3VDQUNhLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCO3NDQUFBO3dDQUFBO0FBQUE7dUJBRFosQUFDWSxBQUNDLHFDQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO3NDQUFBO3dDQUFBLEFBQ0E7QUFEQTt1Q0FDQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztzQ0FBWDt3Q0FQZCxBQUdDLEFBQ0osQUFBSSxBQUVhLEFBQ0EsQUFLakI7QUFMaUI7OzJCQVBkLEFBWUcsQUFDTjswQkFiSCxBQUFNLEFBYUcsQUFFWjtBQWZTLEFBQ0g7QUFIUCxBQUFZLEFBbUJaLGFBbkJZOztpREFtQkwsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQixXQUFXLE9BQTlCLEFBQXFDOzhCQUFyQztnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVILEFBQ1I7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSjtBQURJO0FBQUEsYUFBQSxrQkFDSixjQUFBOzs4QkFBQTtnQ0FBQSxBQUVJO0FBRko7QUFBQSwrQkFFSSxjQUFBLFFBQUksT0FBTyxFQUFFLFlBQUYsQUFBYSxTQUFRLE9BQXJCLEFBQTJCLFNBQVMsV0FBcEMsQUFBOEMsSUFBSSxjQUE3RCxBQUFXLEFBQStEOzhCQUExRTtnQ0FBQTtBQUFBO2VBQWdGLHFCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZwRixBQUVJLEFBQWdGLEFBRWpGLDJDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBRUs7QUFGTDsrQkFFSyxjQUFBLFNBQUssU0FBTCxBQUFXOzhCQUFYO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBLFNBQUssU0FBTCxBQUFXOzhCQUFYO2dDQUFBLEFBRUk7QUFGSjsrQkFFSSxjQUFBLFlBQVEsU0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFISixBQUNBLEFBRUksQUFFSix5Q0FBQSxjQUFBLFNBQUssU0FBTCxBQUFXOzhCQUFYO2dDQUFBLEFBR0k7QUFISjsrQkFHSSxjQUFBLFlBQVEsU0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFkWixBQUlHLEFBRUssQUFLQSxBQUdJLEFBS047OzhCQUFBO2dDQW5CTixBQW1CTSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBcEJOLEFBb0JNLEFBQ1Q7QUFEUztBQUFBLHFCQXRCTixBQUNJLEFBQ0osQUFxQkgsQUFBSyxBQUtEOzs7Ozs7Ozs7Ozs7dUNBdkQyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O2lDQUF6RDtBO2lFQUNDLEVBQUMsVyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RmLEEsQUE1RDRCOztrQkE0RDVCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovQ3Jvd2RGdW5kaW5nIn0=