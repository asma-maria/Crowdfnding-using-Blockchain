'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

//  import Web3 from 'web3';
//  let web3;
//  if(typeof window!=='undefined'&& typeof window.web3!=='undefined'){
//  //we are in the browser and metamask is running
//  web3 = new Web3(window.web3.currentProvider);
//  }
//  else{
//      //we are on the server and  the user is not running metamask
//      const provider = new Web3.providers.HttpProvider(
//          'https://rinkeby.infura.io/v3/49feba3f12f5485ca8b8a46e23113726'
//      );
//      web3=new Web3(provider);
// }
//  export default web3; 


var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 != 'undefined') {
    // we are in the browser and metamask is running
    web3 = new _web2.default(window.web3.currentProvider);

    window.addEventListener('load', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        window.ethereum.autoRefreshOnNetworkChange = false;
                        // Modern dapp browsers...

                        if (!window.ethereum) {
                            _context.next = 13;
                            break;
                        }

                        window.web3 = new _web2.default(window.ethereum);
                        _context.prev = 3;
                        _context.next = 6;
                        return window.ethereum.enable();

                    case 6:
                        // Acccounts now exposed
                        web3.eth.sendTransaction({/* ... */});
                        _context.next = 11;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](3);

                    case 11:
                        _context.next = 14;
                        break;

                    case 13:
                        // Legacy dapp browsers...
                        if (window.web3) {
                            window.web3 = new _web2.default(web3.currentProvider);
                            // Acccounts always exposed
                            web3.eth.sendTransaction({/* ... */});
                        }
                        // Non-dapp browsers...
                        else {
                                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
                            }

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this, [[3, 9]]);
    })));
} else {
    // we are on the server OR the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/49feba3f12f5485ca8b8a46e23113726');

    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV0aGVyZXVtIiwiYXV0b1JlZnJlc2hPbk5ldHdvcmtDaGFuZ2UiLCJlbmFibGUiLCJldGgiLCJzZW5kVHJhbnNhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0MsQUFBTzs7Ozs7Ozs7QUFkUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQyxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFFBQWxELEFBQTBELGFBQVksQUFDbEU7QUFDQTtXQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFHaEM7O1dBQUEsQUFBTyxpQkFBUCxBQUF3QixpRkFBUSxtQkFBQTtzRUFBQTtzQkFBQTtpREFBQTt5QkFDNUI7K0JBQUEsQUFBTyxTQUFQLEFBQWdCLDZCQUFoQixBQUE2QyxBQUM3QztBQUY0Qjs7NkJBR3hCLE9BSHdCLEFBR2pCLFVBSGlCOzRDQUFBO0FBQUE7QUFJeEI7OytCQUFBLEFBQU8sT0FBTyxBQUFJLGtCQUFLLE9BSkMsQUFJeEIsQUFBYyxBQUFnQjt3Q0FKTjt3Q0FBQTsrQkFPZCxPQUFBLEFBQU8sU0FQTyxBQU9kLEFBQWdCOzt5QkFDdEI7QUFDQTs2QkFBQSxBQUFLLElBQUwsQUFBUyxnQkFBZ0IsQ0FUTCxBQVNwQixBQUF5QixBQUFDO3dDQVROO0FBQUE7O3lCQUFBO3dDQUFBO3dEQUFBOzt5QkFBQTt3Q0FBQTtBQUFBOzt5QkFjNUI7QUFDSzs0QkFBSSxPQUFKLEFBQVcsTUFBTSxBQUNsQjttQ0FBQSxBQUFPLE9BQU8sQUFBSSxrQkFBSyxLQUF2QixBQUFjLEFBQWMsQUFDNUI7QUFDQTtpQ0FBQSxBQUFLLElBQUwsQUFBUyxnQkFBZ0IsQ0FBekIsQUFBeUIsQUFBQyxBQUM3QjtBQUNEO0FBTEs7NkJBTUEsQUFDRDt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNmO0FBdkIyQjs7eUJBQUE7eUJBQUE7d0NBQUE7O0FBQUE7Z0NBQUE7QUFBaEMsQUEwQkM7QUEvQkQsT0ErQkssQUFDRDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2IsQUFHSjs7V0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNuQjtBQUVGOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRDovQ3Jvd2RGdW5kaW5nIn0=