(function customersControllerIIFE(){
  var CustomersController = function($scope){

    // 3. Define customers data in the ViewModel customers property
    $scope.customers = [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];

    $scope.sortBy = "name";
    $scope.reverse = false;

    // 4. Define a sort click handlers
    $scope.doSort = function(propName){
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    }; // end Constructor function where I define the Customers Controller
  };
    // Prevent the minifier from breaking dependency injection.
    CustomersController.$inject = ['$scope'];

    // The Controller is part of the module.
    // Create a controller inside of this application's module
    // The controller's name, how we refer to it later, will be 'customersController'
    //This controller name will refer to the function we defined above, CustomerController
  angular.module('customersApp').controller('customersController', CustomersController);
  // above takes in two arguments, a string and a function

  })(); // end IIFE

