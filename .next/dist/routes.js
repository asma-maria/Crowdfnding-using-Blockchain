'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/rewards', '/campaigns/rewards/index').add('/campaigns/:address/contributes', '/campaigns/contributes/index').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFJQSxPQUNDLEFBREQsSUFDSyxBQURMLGtCQUN1QixBQUR2QixrQkFFQyxBQUZELElBRUssQUFGTCx1QkFFNEIsQUFGNUIsbUJBR0MsQUFIRCxJQUdLLEFBSEwsK0JBR21DLEFBSG5DLDRCQUlDLEFBSkQsSUFJSyxBQUpMLG1DQUl1QyxBQUp2QyxnQ0FNQyxBQU5ELElBTUssQUFOTCxnQ0FNb0MsQUFOcEMsNkJBT0MsQUFQRCxJQU9LLEFBUEwsb0NBT3dDLEFBUHhDOztBQVNBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiRDovQ3Jvd2RGdW5kaW5nIn0=