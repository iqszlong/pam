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

      // $( document ).on("click",'.navbar-form',function(){
      //   $('.search-field').focus();
      // });

      //console.log(1);

      $(".fancybox").fancybox({
          //openEffect  : 'none',
          //closeEffect : 'none',
          nextEffect  : 'none',
          prevEffect  : 'none',
          padding     : 5,
          margin      : [20, 60, 20, 60],
          helpers:  {
                title : {
                    type : 'outside'
                },
                buttons : {},
                // thumbs  : {
                //   width : 50,
                //   height  : 50
                // },
                overlay : {
                    showEarly : false
                }
          }
      });


     //
      Pace.on('hide', function(){
        console.log('hide');
        //$('.loading-layer').addClass('hidden');
        $('.content-box').removeClass('hidden');
      });

      
});



(function() {

  var app = angular.module('webSite', ['ui.router','ngAnimate','webSiteCtrl']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');
    $urlRouterProvider.when('', '/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'home.htm',
                    controller:'homeCtrl'
                }
            }
        })
        .state('album', {
            url: '/album',
            views: {
                '': {
                    templateUrl: 'album.htm',
                    controller:'albumCtrl'
                }
            }
        })
        .state('404', {
            url: '/404',
            views: {
                '': {
                    templateUrl: '404.htm'
                }
            }
        })
  })

  // var app = angular.module('webSite', ['ngRoute','ngAnimate','webSiteCtrl']);

  // app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
  //   $routeProvider.when('/', {
  //         templateUrl: 'home.htm',
  //         controller:'homeCtrl'
  //       }).when('/album', {
  //         templateUrl: 'album.htm',
  //         controller:'albumCtrl'
  //       }).when('/notice', {
  //         templateUrl: 'notice.htm',
  //         controller:function(){
           
  //         }
  //       }).when('/notice/:id', {
  //         templateUrl: 'notice_detail.htm',
  //         controller:function($scope, $routeParams){
            
  //            $scope.id = $routeParams.id;
  //         }
  //       }).when('/download', {
  //         templateUrl: 'download.htm',
  //         controller:function(){
            
  //         }
  //       }).when('/log', {
  //         templateUrl: 'log.htm',
  //         controller:function(){
            
  //         }
  //       }).when('/demo', {
  //         controller:function(){
           
  //         }
  //       }).when('/service', {
  //         templateUrl: 'service.htm',
  //         controller:function(){
            
  //         }
  //       }).when('/apps', {
  //         templateUrl: 'apps.htm',
  //         controller:function(){
           
  //         }
  //       }).when('/appreciation', {
  //         templateUrl: 'appreciation.htm',
  //         controller:function(){
           
  //         }
  //       }).otherwise({templateUrl: '404.htm'});
  //       // $locationProvider.html5Mode(true);
  //       // $locationProvider.hashPrefix('!');
  // }]);
  


  // app.directive('navBar',function(){
  //     return{
  //       restrict :'E',
  //       templateUrl: "nav-bar.htm",
  //       controller:function(){
  //         this.navActive = 1;
  //         this.selectNav = function(setNav) {
  //             this.navActive = setNav;

  //         };
  //         this.isSelected = function(checkNav){
  //           return this.navActive === checkNav;
  //         };
  //       },
  //       controllerAs: 'navSelect'
  //     };
  //   });


  // app.directive('footerBar',function(){
  //     return{
  //       restrict :'E',
  //       templateUrl: "footer-bar.htm"
  //     };
  // });


  app.directive('contentBoxList', function(){
    return {
      restrict: 'E',
      templateUrl: 'content-box-list.htm',
      controller: 'imgListCtrl',
      controllerAs: 'img'
    };
  });


  app.directive('albumList', function(){
    return {
      restrict: 'E',
      templateUrl: 'album-list.htm',
      controller: 'albumListCtrl',
      controllerAs: 'album'
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

  

  
  



  var webSiteCtrl = angular.module('webSiteCtrl',[]);

  webSiteCtrl.controller('imgListCtrl',['$http',function($http){
      var features = this;
      features.items = [];
      $http.get('img-list.json').success(function(data){
          features.items = data;
      });
  }]);

  webSiteCtrl.controller('albumListCtrl',['$http',function($http){
      var features = this;
      features.items = [];
      $http.get('ztzj.json').success(function(data){
          features.items = data;
      });
  }]);

  webSiteCtrl.controller('homeCtrl',['$scope',function($scope){
    $scope.pageClass='home';
      $scope.scaleValue = '1x1';
      $scope.is16x9 = false;
      $scope.is4x3 = false;
      $scope.is2x3 = false;
      $scope.is1x1 = true;
      $scope.sideisVisible =false;
      $scope.positionValue = "cover";
      $scope.isCover = true;

      //
      $scope.setScale = function(scale){
        $scope.scaleValue = scale;
        switch(scale){
          case '16x9':
            $scope.is16x9 = true;
            $scope.is4x3 = false;
            $scope.is2x3 = false;
            $scope.is1x1 = false;
            break;
          case '4x3': 
            $scope.is4x3 = true;
            $scope.is16x9 = false;
            $scope.is2x3 = false;
            $scope.is1x1 = false;
            break;
          case '2x3': 
            $scope.is2x3 = true;
            $scope.is16x9 = false;
            $scope.is4x3 = false;
            $scope.is1x1 = false;
            break;
          case '1x1': 
            $scope.is1x1 = true;
            $scope.is16x9 = false;
            $scope.is4x3 = false;
            $scope.is2x3 = false;
            break; 
        }
    };

      //
      $scope.setPosition = function(position){
        //console.log(position);
        $scope.positionValue = position;
        if (position == 'cover'){
          $scope.isCover = true;
          $scope.isContain = false;
        }else{
          $scope.isCover = false;
          $scope.isContain = true;
        }
        
      }



      $scope.sideNavToggle = function(){
        $scope.sideisVisible = !$scope.sideisVisible;
      };

      $scope.rightNavToggle = function(){
        $scope.rightisVisible = !$scope.rightisVisible;
      };
     

  }]);

  webSiteCtrl.controller('albumCtrl',['$scope',function($scope){
    $scope.pageClass='album';
    $scope.scaleValue = '2x3';
      $scope.is16x9 = false;
      $scope.is4x3 = false;
      $scope.is2x3 = true;
      $scope.is1x1 = false;
      $scope.sideisVisible =false;
      $scope.positionValue = "cover";
      $scope.isCover = true;


    $scope.setScale = function(scale){
        $scope.scaleValue = scale;
        switch(scale){
          case '16x9':
            $scope.is16x9 = true;
            $scope.is4x3 = false;
            $scope.is2x3 = false;
            $scope.is1x1 = false;
            break;
          case '4x3': 
            $scope.is4x3 = true;
            $scope.is16x9 = false;
            $scope.is2x3 = false;
            $scope.is1x1 = false;
            break;
          case '2x3': 
            $scope.is2x3 = true;
            $scope.is16x9 = false;
            $scope.is4x3 = false;
            $scope.is1x1 = false;
            break;
          case '1x1': 
            $scope.is1x1 = true;
            $scope.is16x9 = false;
            $scope.is4x3 = false;
            $scope.is2x3 = false;
            break; 
        }
    };
     


      //
      $scope.setPosition = function(position){
        //console.log(position);
        $scope.positionValue = position;
        if (position == 'cover'){
          $scope.isCover = true;
          $scope.isContain = false;
        }else{
          $scope.isCover = false;
          $scope.isContain = true;
        }
        
      }
      
    $scope.sideNavToggle = function(){
      $scope.sideisVisible = !$scope.sideisVisible;
    };

    $scope.rightNavToggle = function(){
        $scope.rightisVisible = !$scope.rightisVisible;
      };
      
  }]);


  
  


})();