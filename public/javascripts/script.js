var app = angular.module("quotesApp", []);

app.controller("MainCtrl", function($scope) {
  console.log("test");
  $scope.usersList = [];
  $scope.meals = [];
  $scope.editMeal= ''
  $scope.addUser = function () {
    console.log(this);
    $scope.usersList.unshift( {
      user: $scope.name,
      weight: $scope.weight,
      age: $scope.age,
      height: $scope.height,
      gender: $scope.gender,
      unit: $scope.unit,
      bmi: ($scope.weight * 703) / Math.pow($scope.height, 2)
    })
    $scope.name = "";
    $scope.weight = "";
    $scope.age = "";
    $scope.height = "";
    $scope.gender = "";
    $scope.unit = "";
    console.log($scope.usersList)
  }
  $scope.addMeal = function () {
    console.log(this);
    $scope.meals.unshift( {
      desc: $scope.desc,
      meal: $scope.meal,
      calories: $scope.calories,
      servings: $scope.servings,
      date: new Date()
    })
    console.log($scope.meals)
  }
});
