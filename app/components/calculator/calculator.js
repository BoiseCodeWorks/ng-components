(function(){

  angular.module('calculator', [])
    .component('calculatorComponent', {
      templateUrl: 'app/components/calculator/calculator.html',
      controller: CalculatorController 
    })

    function CalculatorController(){
      var cc = this
      this.myFavNum = 43-1;

      this.formulas = {
        addX: function(x){
          cc.myFavNum = x + cc.myFavNum;
        },
        subX: function(x){
          cc.myFavNum = cc.myFavNum - x;
        },
        mulX: function(x){
          cc.myFavNum = x * cc.myFavNum;
        },
        divX: function(x){
          cc.myFavNum = cc.myFavNum / x;
        }
      }

    }

}())