angular.module("app",['pascalprecht.translate','angular-translate-html']).controller('test',function($scope,$filter,$translate,$interpolate,$rootScope){

  $scope.lang = function(){
    $translate.use("es");
  }
});

var translations = {
ID1:"Please accept the --TERM_VAL-- before continuing with the process.--NEXT_VAL--",
ID2:"Family Mobile Terms and Conditions",
ID3:"By Vasu",
ID4:"This is a --SIMPLE--",
ID5:"simple --TEST--",
ID6:"test"
};

var translations1 = {
ID1:"Antes de continuar con el proceso, por favor acepta los --TERM_VAL--. --NEXT_VAL--",
ID2:"Términos y Condiciones de Family Mobile",
ID3:"se Vas",
ID4:"Se is a --SIMPLE--",
ID5:"simpsdfsfdle --TEST--",
ID6:"tesdsft"
};

angular.module("app").config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider
    .translations('en', translations)
    .preferredLanguage('en');
  $translateProvider
    .translations('es', translations1)
    .preferredLanguage('en');
}]);
