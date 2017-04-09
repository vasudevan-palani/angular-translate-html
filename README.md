## Synopsis

This is an Angular directive which provides html placeholder ability to angular-translate.

## Code Example

```html
<translate-html translation-id="ID1">
</translate-html>
<script type="text/ng-template" id="TERM_VAL">
  <a href="/"><span translate="ID2"></span></a>
</script>
<script type="text/ng-template" id="NEXT_VAL">
 <span translate="ID3"></span>
 <translate-html translation-id="ID4"></translate-html>
</script>
<script type="text/ng-template" id="SIMPLE">
 <translate-html translation-id="ID5"></translate-html>
</script>
<script type="text/ng-template" id="TEST">
 <span translate="ID6"></span>
</script>
```

```javascript
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
ID5:"Test"
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

```

## Installation

Step1 :
```
include the angular-translate-html.js in your web app
```

Step2 :

include angular-translate-html module in your angular module and start using the directive

## License

MIT License.
