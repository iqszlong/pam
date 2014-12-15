$(function(){
//返回顶部
    $(window).scroll(function(){
      if ($(window).scrollTop()>100){
        $("#top").fadeIn();
      }
      else
      {
        $("#top").fadeOut();
      }
      });
      //当点击跳转链接后，回到页面顶部位置
      $( document ).on( "click", "#top", function() {
        $('body,html').animate({scrollTop:0},500);
         return false;
      }); 

      $( document ).on("click",'.navbar-form',function(){
        $('.search-field').focus();
      });

      console.log(1);
});

(function() {
  var app = angular.module('webSite', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
          templateUrl: 'home.htm',
          controller:function(){
            
          }
        }).when('/notice', {
          templateUrl: 'notice.htm',
          controller:function(){
           
          }
        }).when('/notice/:id', {
          templateUrl: 'notice_detail.htm',
          controller:function($scope, $routeParams){
            
             $scope.id = $routeParams.id;
          }
        }).when('/download', {
          templateUrl: 'download.htm',
          controller:function(){
            
          }
        }).when('/log', {
          templateUrl: 'log.htm',
          controller:function(){
            
          }
        }).when('/demo', {
          controller:function(){
           
          }
        }).when('/service', {
          templateUrl: 'service.htm',
          controller:function(){
            
          }
        }).when('/apps', {
          templateUrl: 'apps.htm',
          controller:function(){
           
          }
        }).when('/appreciation', {
          templateUrl: 'appreciation.htm',
          controller:function(){
           
          }
        }).
        otherwise({templateUrl: '404.htm'});
  }]);
  


  app.directive('navBar',function(){
      return{
        restrict :'E',
        templateUrl: "nav-bar.htm",
        controller:function(){
          this.navActive = 1;
          this.selectNav = function(setNav) {
              this.navActive = setNav;

          };
          this.isSelected = function(checkNav){
            return this.navActive === checkNav;
          };
        },
        controllerAs: 'navSelect'
      };
    });


  app.directive('footerBar',function(){
      return{
        restrict :'E',
        templateUrl: "footer-bar.htm"
      };
  });


  app.directive('contentBoxList', function(){
    return {
      restrict: 'E',
      templateUrl: 'content-box-list.htm',
      controller:['$http',function($http){
          var features = this;
          features.items = [];
          $http.get('img-list.json').success(function(data){
              features.items = data;
          });
      }],
      controllerAs: 'img'
    };
  });

  // app.directive('productFeatureMedia', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'product-feature-media.htm',
  //     controller:['$http',function($http){
  //         var features = this;
  //         features.items = [];
  //         $http.get('features.json').success(function(data){
  //             features.items = data;
  //         });
  //     }],
  //     controllerAs: 'features'
  //   };
  // });


  // app.controller('tabController', function(){
  //   this.tab = 1;
  //   this.selectTab = function(setTab) {
  //       this.tab = setTab;

  //   };
  //   this.isSelected = function(checkTab){
  //     return this.tab === checkTab;
  //   };
  // });





})();