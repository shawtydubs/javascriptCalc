angular.module('calcApp', []).controller('numController', function($scope) {
    $scope.displayNum = [];
    $scope.numTotal = 0;

    $scope.makeNum = function(value) {
        $scope.displayNum.push(value);
    }

    $scope.addNum = function() {
        performOperation();
        $scope.operation = '+';
    }

    $scope.subNum = function() {
        performOperation();
        $scope.operation = '-';
    }

    $scope.multNum = function() {
        performOperation();
        $scope.operation = '*';
    }

    $scope.divNum = function() {
        performOperation();
        $scope.operation = '/';
    }

    $scope.equals = function() {
        performOperation();
        $scope.operation = '=';
    }

    $scope.clearOne = function() {
        $scope.displayNum = [];
    }

    $scope.allClear = function() {
        $scope.numTotal = 0;
        $scope.operation = undefined;
        $scope.displayNum = [];
    }

    performOperation = function() {
        if ($scope.numTotal == 0) {
            $scope.numTotal = parseFloat($scope.displayNum.join(''));
        } else if ($scope.operation != '=') {
            $scope.numTotal = calculateTotal($scope.numTotal, parseFloat($scope.displayNum.join('')));
        }
        $scope.displayNum = [];
    }

    calculateTotal = function(numOne, numTwo) {
        if ($scope.operation == '+') {
            return numOne + numTwo;
        } else if ($scope.operation == '-') {
            return numOne - numTwo;
        } else if ($scope.operation == '*') {
            return numOne * numTwo;
        } else if ($scope.operation == '/') {
            return numOne / numTwo;
        }
    }
});
