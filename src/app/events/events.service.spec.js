/* global inject beforeEach it describe expect */

(function() {
  'use strict';

  describe('Events Service', function() {
    beforeEach(module('microServicesGui'));

    var service;
    var $httpBackend;

    beforeEach(inject(function(_msdEventsService_, _$httpBackend_) {
      service = _msdEventsService_;
      $httpBackend = _$httpBackend_;
    }));

    it('request() should call /events endpoint', function() {
      $httpBackend.expectGET('http://localhost:8080/events').respond(200);
      service.request();
      $httpBackend.flush();
    });

    it('setEventList() should set the local event list state', function() {
      var eventList = service.getEventList();
      expect(eventList).toBeUndefined();

      var newList = _mockList;
      service.setEventList(newList);
      expect(service.getEventList()).toBe(newList);
    });
  });

  var _mockList = [{ 'message': 'Exception 404 Not Found for url http://localhost:8089/customer-group/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=309, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'customer-group' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/fat-jar-test with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=298, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'fat-jar-test' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/admin with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=291, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'admin' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/user-preferences/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=311, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'user-preferences' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/fat-jar-test/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=307, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'fat-jar-test' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/zuul with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=290, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'zuul' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/customer-addresses with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=304, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'customer-addresses' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/billing-payments/health with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=309, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'billing-payments' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/order-processor/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=310, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'order-processor' }, { 'message': 'Exception 500 Server Error for url http://localhost:8089/admin/health with headers [Content-Type=application/vnd.error+json;charset=UTF-8, Server=Jetty(9.2.16.v20160414), content-length=2375]', 'throwable': null, 'nodeId': 'admin' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/encryption with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=296, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'encryption' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/fat-jar-test/health with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=305, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'fat-jar-test' }, { 'message': 'Exception 500 Server Error for url http://localhost:8089/user-preferences with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=541, Connection=close, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'user-preferences' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/customer-base/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=308, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'customer-base' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/customer-addresses/health with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=311, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'customer-addresses' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/admin/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=300, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'admin' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/loyalty-program/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=310, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'loyalty-program' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/customer-addresses/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=313, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'customer-addresses' }, { 'message': 'Exception 500 Server Error for url http://localhost:8089/agenda with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=521, Connection=close, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'agenda' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/billing-accounts with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=302, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'billing-accounts' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/customer-management/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=314, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'customer-management' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/user-billing-structure with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=308, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'user-billing-structure' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/customer-administrators with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=309, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'customer-administrators' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/customer-management/health with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=312, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'customer-management' }, { 'message': 'Exception 404 Not Found for url http://localhost:8089/billing-payments/mappings with headers [Cache-Control=must-revalidate,no-cache,no-store, Content-Type=text/html; charset=ISO-8859-1, Content-Length=311, Server=Jetty(9.2.16.v20160414)]', 'throwable': null, 'nodeId': 'billing-payments' }];
})();
