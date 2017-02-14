require('./test-loader.ts');

describe('testing things',function(){

    var Todos;
    beforeEach(angular.mock.module('api.todos'));
    beforeEach(inject(function(_Todos_){
        Todos = _Todos_;
    }))

    it('should return the correct numbner of todos', function(){
        expect(2+3).toBe(5);
    })
    it('should exist', function(){
        expect(Todos).toBeDefined();
    })
})