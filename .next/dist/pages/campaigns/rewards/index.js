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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Winner = require('../../../components/Winner');

var _Winner2 = _interopRequireDefault(_Winner);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\CrowdFunding\\pages\\campaigns\\rewards\\index.js?entry';


var CForm = function (_Component) {
  (0, _inherits3.default)(CForm, _Component);

  function CForm() {
    (0, _classCallCheck3.default)(this, CForm);

    return (0, _possibleConstructorReturn3.default)(this, (CForm.__proto__ || (0, _getPrototypeOf2.default)(CForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(CForm, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_Winner2.default, { address: this.props.address,
        contributors: this.props.approversCount,
        manager: this.props.manager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  title: summary[0],
                  purpose: summary[1],
                  challange: summary[2],
                  minimumContribution: summary[3],
                  balance: summary[4],
                  requestsCount: summary[5],
                  approversCount: summary[6],
                  manager: summary[7]

                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CForm;
}(_react.Component);

exports.default = CForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJld2FyZHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiV2lubmVyIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ0Zvcm0iLCJwcm9wcyIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsInRpdGxlIiwicHVycG9zZSIsImNoYWxsYW5nZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7OzZCQXFCSSxBQUVOOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLEFBQUMsa0NBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsQUFDNUI7c0JBQWMsS0FBQSxBQUFLLE1BRG5CLEFBQ3lCLEFBQ3pCO2lCQUFTLEtBQUEsQUFBSyxNQUZkLEFBRW9COztvQkFGcEI7c0JBRkYsQUFDRSxBQUNBLEFBTUg7QUFORzs7Ozs7OzJHLEFBdkJ5Qjs7Ozs7bUJBQ3JCO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE0sQUFBZixBQUFxQjs7dUJBRWhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O21CQUE5QztBOzsyQkFHSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjt5QkFBTSxRQUZELEFBRUMsQUFBUSxBQUNkOzJCQUFRLFFBSEgsQUFHRyxBQUFRLEFBQ2hCOzZCQUFVLFFBSkwsQUFJSyxBQUFRLEFBQ2xCO3VDQUFxQixRQUxoQixBQUtnQixBQUFRLEFBQzdCOzJCQUFTLFFBTkosQUFNSSxBQUFRLEFBQ2pCO2lDQUFlLFFBUFYsQUFPVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQVJYLEFBUVcsQUFBUSxBQUN4QjsyQkFBUyxRLEFBVEosQUFTSSxBQUFROztBQVRaLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQk4sQSxBQW5Db0I7O2tCQW1DcEIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Dcm93ZEZ1bmRpbmcifQ==