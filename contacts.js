var app = angular.module('myApp', []);

app.controller( 'mainController', function($scope) {
  $scope.firstname = '';
  $scope.lastname = '';
  $scope.nickname = '';
  $scope.defaultPhoto = 'defaultPhoto';
  $scope.contacts = [{id:0, firstname:"Hannah",lastname:"Williams",photo:"woman1",telephone:"07542 246 985",email:"hannah.williams@gmail.com",group:"Family",nickname:"",website:"http://www.smashingmagazine.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"",location:"Cardiff, UK"},
                    {id:1, firstname:"John",lastname:"Hancock",photo:"man4",telephone:"07789 577 895",email:"john.h@outlook.com",group:"Friends",nickname:"",website:"http://www.logopond.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"",location:"Manchester,UK"},
                    {id:2, firstname:"Christian",lastname:"Jefferies",photo:"",telephone:"+447812 542 958",email:"christian.jefferies@gmail.com",group:"Colleagues",nickname:"C.J",website:"http://www.welie.com/patterns/",notes:"",organisation:"Twitter",location:"Seville,ES"},
                    {id:3, firstname:"Estelle",lastname:"Garcia",photo:"woman7",telephone:"+44 (0) 7796 411 256",email:"estelle@mycompany.co.uk",group:"",nickname:"",website:"http://www.iconfinder.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"",location:"Rome,IT"},
                    {id:4, firstname:"Poppy",lastname:"Lewis",photo:"woman11",telephone:"",email:"poppy-lewis@weareact.com",group:"Friends",nickname:"",website:"http://www.getbootstrap.com/",notes:"",organisation:"Apple",location:"New York, US"},
                    {id:5, firstname:"Eric",lastname:"Baxter",photo:"man3",telephone:"07795 445 666",email:"baxter.eric@myemail.com",group:"Friends",nickname:"",website:"http://www.modern.ie/en-us",notes:"",organisation:"Microsoft",location:"Los Angeles,US"},
                    {id:6, firstname:"Liam",lastname:"Cuthbert",photo:"man5",telephone:"",email:"laim@weareact.com",group:"Colleagues",nickname:"",website:"http://www.telerik.com/kendo-ui",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"Facebook",location:"Berlin,DE"},
                    {id:7, firstname:"Elizabeth",lastname:"Plum",photo:"woman16",telephone:"07785 549 624",email:"lizzy.plum@gmail.com",group:"Family",nickname:"Lizzy",website:"http://www.nngroup.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"",location:"Paris,FR"},
                    {id:8, firstname:"Catherine",lastname:"Brancher",photo:"woman5",telephone:"07980 298 745",email:"cat.b@outlook.com",group:"Colleagues",nickname:"Cat",website:"http://www.uxbooth.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"LinkedIn",location:"Toronto,CA"},
                    {id:9, firstname:"Patrick",lastname:"Manning",photo:"man1",telephone:"",email:"pat.manning@weareact.com",group:"Family",nickname:"Pat",website:"http://www.jquery.com/",notes:"",organisation:"Google",location:"Melbourne,AU"}];
  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false;
  $scope.hideform = true;
  $scope.editContact = function(id) {
    $scope.hideform = false;
    if( id == 'new' )
    {
      $scope.edit = true;
      $scope.incomplete = true;
      $scope.firstname = '';
      $scope.lastname = '';
      $scope.nickname = '';
    }
    else
    {
      $scope.edit = false;
      $scope.firstname = $scope.contacts[ id ].firstname;
      $scope.lastname = $scope.contacts[ id ].lastname;
      $scope.nickname = $scope.contacts[ id ].nickname;
    }
  };

  $scope.cancelEdit = function() {
    $scope.hideform = true;
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.nickname = '';
  };

  $scope.$watch( 'firstname', function() { $scope.test(); } );
  $scope.$watch( 'lastname', function() { $scope.test(); } );
  $scope.$watch( 'nickname', function() { $scope.test(); } );

  $scope.test = function()
  {
    $scope.incomplete = false;
    if( $scope.edit && ( !$scope.firstname.length || !$scope.lastname.length || !$scope.nickname.length ) )
    {
      $scope.incomplete = true;
    }
  };

} );
