(function () {

  angular.module('pokemon')
    .component('loginComponent', {
      templateUrl: 'app/components/pokemon/login/login.html',
      controller: LoginController
    })

    LoginController.$inject = ['PokedexService', '$state'];

  function LoginController(PokedexService, $state) {
    var lc = this;
    lc.loggedIn = PokedexService.getOwner();

    this.login = function (username) {
      PokedexService.setOwner(username);
      lc.loggedIn = true;
      $state.go('play')
    }

    this.logout = function () {
      PokedexService.logout();
      lc.loggedIn = false;
      $state.go('home')
    }
  }

} ())