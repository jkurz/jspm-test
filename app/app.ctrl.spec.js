import angular from 'angular';
import mocks from 'angular-mocks'

describe('Index Ctrl', function() {
    var $controller,
        scope;

    beforeEach(module('app'));

    beforeEach(inject(function($injector) {
        scope = {};
        $controller = $injector.get('$controller')('AppCtrl', { $scope: scope });
    }));

    it('should create a new app object', function() {
        expect(Object.keys($controller).length).not.toEqual(0);
    });

    it('should contian a hello variable', function() {
        expect($controller.hello).toEqual('say hello');
    });
});
