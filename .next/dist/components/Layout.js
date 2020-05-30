'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\CrowdFunding\\components\\Layout.js';

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_reactHelmet.Helmet, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('style', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, 'body { background-color: rgb(26, 9, 0); }')), _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), props.children, _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }), _react2.default.createElement('footer', { className: 'footer text-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('center', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('h4', { style: { fontFamily: ' serif', color: "white" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, ' \xA92020 Crowd Fund-All rights reserved'), ' '))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkNhcmQiLCJHcmlkIiwiSGVhZCIsIkhlbG1ldCIsInByb3BzIiwiY2hpbGRyZW4iLCJmb250RmFtaWx5IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBUSxBQUFXLEFBQU07O0FBQ3pCLEFBQVE7Ozs7QUFDUixBQUFRLEFBRVI7Ozs7OztrQkFBZSxpQkFBTyxBQUNsQjsyQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUVLO0FBRkw7QUFBQSxLQUFBLGtCQUVLLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0c7QUFESDtBQUFBLHVCQUNHLGNBQUE7O3NCQUFBO3dCQUFBLEFBQVE7QUFBUjtBQUFBLE9BSFIsQUFFSyxBQUNHLEFBRUosK0RBQUEsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDUTtBQURSO0FBQUE7YUFDUSxBQUNLLEFBQ0g7Y0FGRixBQUVPOztzQkFGUDt3QkFOWixBQUtJLEFBQ1EsQUFLZjtBQUxlO0FBQ0MseUJBSWhCLEFBQUM7O3NCQUFEO3dCQVhHLEFBV0gsQUFHUTtBQUhSO0FBQUEsY0FYRyxBQWNXLEFBQ1A7O3NCQUFBO3dCQWZKLEFBZUksQUFDQTtBQURBO0FBQUE7O3NCQUNBO3dCQWhCSixBQWdCSSxBQUNBO0FBREE7QUFBQTs7c0JBQ0E7d0JBakJKLEFBaUJJLEFBQ0E7QUFEQTtBQUFBOztzQkFDQTt3QkFsQkosQUFrQkksQUFDQTtBQURBO0FBQUE7O3NCQUNBO3dCQW5CSixBQW1CSSxBQUNGO0FBREU7QUFBQSx3QkFDRixjQUFBLFlBQVEsV0FBUixBQUFrQjtzQkFBbEI7d0JBQUEsQUFDQTtBQURBO3VCQUNBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ007QUFETjtBQUFBLHVCQUNNLGNBQUE7O3NCQUFBO3dCQUFBLEFBQVE7QUFBUjtBQUFBLHVCQUFRLGNBQUEsUUFBSSxPQUFPLEVBQUUsWUFBRixBQUFhLFVBQVMsT0FBakMsQUFBVyxBQUE0QjtzQkFBdkM7d0JBQUE7QUFBQTtPQUFSLEFBQVEsNkNBdkJwQixBQUNJLEFBb0JFLEFBQ0EsQUFDTSxBQVFmO0FBaENEIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Dcm93ZEZ1bmRpbmcifQ==