angular.module("angular-translate-html", []).directive("translateHtml", ["$translate", "$timeout", "$templateCache", "$compile", "$rootScope", function($translate, $timeout, $templateCache, $compile, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'translate-html.html',
        scope: {},
        link: function(scope, elm, attrs) {
            scope.elm = elm;
            scope.attrs = attrs;
        },
        controller: ["$scope", function($scope) {

            $scope.exec = function() {
                $timeout(function() {
                    var elm = $scope.elm;
                    elm.html('');
                    var attrs = $scope.attrs;
                    var content = $translate.instant(attrs.translationId);
                    var re = /--(\w*)--/g;
                    var match;
                    while ((match = re.exec(content)) !== null) {
                        content = content.replace("--" + match[1] + "--", $templateCache.get(match[1]));
                    }
                    elm.html(content);
                    $compile(elm.contents())($scope);

                });

            }

            $rootScope.$on('$translateChangeSuccess', function() {
                $scope.exec();
            });

            $scope.exec();
        }]
    }
}]);


angular.module("angular-translate-html").directive("translateImg", ["$translate","$rootScope", function($translate, $rootScope) {
    return {
        restrict: 'A',
        link : function(scope,elm,attr){
          scope.attr = attr;
          scope.elm = elm;
        },
        controller: ["$scope","$timeout", function($scope,$timeout) {
            $scope.exec = function(key) {
                $timeout(function() {
                    if(angular.isDefined($scope.attr[key])){
                      var elm = $scope.elm;
                      var attr = $scope.attr;
                      elm.attr('src',attr[key]);
                      $scope.$apply();
                    }
                });
            }

            $rootScope.$on('$translateChangeSuccess', function(event,key) {
                $scope.exec(key.language);
            });
            $scope.exec($translate.preferredLanguage());
        }]
    }
}]);
