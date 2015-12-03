var app = angular.module('contactsApp', []);

app.controller( 'mainController', function($scope) {

  $scope.sortType = 'firstname';
  $scope.sortReverse = false;
  $scope.searchString = '';
  $scope.defaultPhoto = 'defaultPhoto';
  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false;
  $scope.hideform = true;
  $scope.selectedContact = null;

  $scope.firstname = '';
  $scope.lastname = '';
  $scope.nickname = '';
  $scope.telephone = '';
  $scope.email = '';
  $scope.website = '';
  $scope.location = '';
  $scope.flagImgSrc = '';
  $scope.group = '';
  $scope.organistion = '';
  $scope.notes = '';

  $scope.contacts = [{firstname:"Hannah",lastname:"Williams",photo:"woman1",telephone:"07542 246 985",email:"hannah.williams@gmail.com",group:"Family",nickname:"",website:"http://www.smashingmagazine.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"",location:"Cardiff, UK"},
                    {firstname:"John",lastname:"Hancock",photo:"man4",telephone:"07789 577 895",email:"john.h@outlook.com",group:"Friends",nickname:"",website:"http://www.logopond.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"",location:"Manchester,UK"},
                    {firstname:"Christian",lastname:"Jefferies",photo:"",telephone:"+447812 542 958",email:"christian.jefferies@gmail.com",group:"Colleagues",nickname:"C.J",website:"http://www.welie.com/patterns/",notes:"",organisation:"Twitter",location:"Seville,ES"},
                    {firstname:"Estelle",lastname:"Garcia",photo:"woman7",telephone:"+44 (0) 7796 411 256",email:"estelle@mycompany.co.uk",group:"",nickname:"",website:"http://www.iconfinder.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"",location:"Rome,IT"},
                    {firstname:"Poppy",lastname:"Lewis",photo:"woman11",telephone:"",email:"poppy-lewis@weareact.com",group:"Friends",nickname:"",website:"http://www.getbootstrap.com/",notes:"",organisation:"Apple",location:"New York, US"},
                    {firstname:"Eric",lastname:"Baxter",photo:"man3",telephone:"07795 445 666",email:"baxter.eric@myemail.com",group:"Friends",nickname:"",website:"http://www.modern.ie/en-us",notes:"",organisation:"Microsoft",location:"Los Angeles,US"},
                    {firstname:"Liam",lastname:"Cuthbert",photo:"man5",telephone:"",email:"laim@weareact.com",group:"Colleagues",nickname:"",website:"http://www.telerik.com/kendo-ui",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"Facebook",location:"Berlin,DE"},
                    {firstname:"Elizabeth",lastname:"Plum",photo:"woman16",telephone:"07785 549 624",email:"lizzy.plum@gmail.com",group:"Family",nickname:"Lizzy",website:"http://www.nngroup.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"",location:"Paris,FR"},
                    {firstname:"Catherine",lastname:"Brancher",photo:"woman5",telephone:"07980 298 745",email:"cat.b@outlook.com",group:"Colleagues",nickname:"Cat",website:"http://www.uxbooth.com/",notes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nisi id posuere molestie. Integer vulputate leo et lacus tempor, vel facilisis nisi porta. Morbi erat dui, laoreet eu nisi dictum, porta ultricies ante.",organisation:"LinkedIn",location:"Toronto,CA"},
                    {firstname:"Patrick",lastname:"Manning",photo:"man1",telephone:"",email:"pat.manning@weareact.com",group:"Family",nickname:"Pat",website:"http://www.jquery.com/",notes:"",organisation:"Google",location:"Melbourne,AU"}];

  $scope.viewContact = function( contact )
  {
      $scope.selectedContact = contact;
      $scope.editContact( contact );
  };

  $scope.editContact = function( contact )
  {
    $scope.hideform = false;

    if( contact == 'new' )
    {
      $scope.edit = true;
      $scope.incomplete = true;
      $scope.selectedContact = null;

      $scope.clearEditForm();
    }
    else
    {
      $scope.edit = false;

      $scope.firstname = $scope.selectedContact.firstname;
      $scope.lastname = $scope.selectedContact.lastname;
      $scope.nickname = $scope.selectedContact.nickname;
      $scope.telephone = $scope.selectedContact.telephone;
      $scope.email = $scope.selectedContact.email;
      $scope.website = $scope.selectedContact.website;
      $scope.location = $scope.selectedContact.location;
      $scope.group = $scope.selectedContact.group;
      $scope.organistion = $scope.selectedContact.organistion;
      $scope.notes = $scope.selectedContact.notes;
    }
  };

  $scope.cancelEdit = function()
  {
    $scope.hideform = true;
    $scope.edit = true;
    $scope.incomplete = true;

    $scope.selectedContact = null;

    $scope.clearEditForm();
  };

  $scope.clearEditForm = function()
  {
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.nickname = '';
    $scope.telephone = '';
    $scope.email = '';
    $scope.website = '';
    $scope.location = '';
    $scope.flagImgSrc = '';
    $scope.group = '';
    $scope.organistion = '';
    $scope.notes = '';
  };


  $scope.saveContact = function()
  {
      if( $scope.selectedContact )
      {
          $scope.selectedContact.firstname = $scope.firstname;
          $scope.selectedContact.lastname = $scope.lastname;
          $scope.selectedContact.nickname = $scope.nickname;
          $scope.selectedContact.telephone = $scope.telephone;
          $scope.selectedContact.email = $scope.email;
          $scope.selectedContact.website = $scope.website;
          $scope.selectedContact.location = $scope.location;
          $scope.selectedContact.group = $scope.group;
          $scope.selectedContact.organistion = $scope.organistion;
          $scope.selectedContact.notes = $scope.notes;
      }
      else
      {
          $scope.contacts.push( {
              firstname: $scope.firstname,
              lastname: $scope.lastname,
              nickname: $scope.nickname,
              telephone: $scope.telephone,
              email: $scope.email,
              website: $scope.website,
              location: $scope.location,
              group: $scope.group,
              organistion: $scope.organistion,
              notes: $scope.notes
          } );
      }

      $scope.cancelEdit();
  };

  $scope.deleteSelectedContact = function()
  {
      var index = $scope.contacts.indexOf( $scope.selectedContact );
      $scope.contacts.splice( index, 1 );

      $scope.cancelEdit();
  };

  $scope.sortTable = function( clickedType )
  {
    if( clickedType == $scope.sortType )
    {
      $scope.sortReverse=!$scope.sortReverse;
    }
    else
    {
      $scope.sortType = clickedType;
    }
  };

  $scope.$watch( 'firstname', function() { $scope.checkMinReqs(); } );
  $scope.$watch( 'lastname', function() { $scope.checkMinReqs(); } );
  $scope.$watch( 'location', function() { $scope.changeFlagImage(); } );

  $scope.changeFlagImage = function()
  {
    var isoCode = $scope.location.split( "," )[ 1 ];
    if( typeof isoCode === 'undefined' ) return;

    $scope.flagImgSrc = isoCode.toLowerCase().trim() + ".png";
    console.log( $scope.flagImgSrc );
  };

  $scope.checkMinReqs = function()
  {
    $scope.incomplete = false;
    if( $scope.edit && ( !$scope.firstname.length || !$scope.lastname.length ) )
    {
      $scope.incomplete = true;
    }
  };

} );
