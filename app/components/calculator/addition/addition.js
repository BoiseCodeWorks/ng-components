(function(){

  angular.module('wat')
    .component('mathComponent', {
      templateUrl: 'app/components/calculator/addition/addition.html',
      controller: AdditionController,
      bindings: {
        bwa: '<',
        formula: '<',
        formulaName: '<'
      } 
    })

    function AdditionController(){

    }

}())