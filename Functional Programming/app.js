function mapForEach(arr, fn) {

    var newArr = [];
    // loop over the new arr
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            // function
            fn(arr[1])
        )
    };
    return newArr; 
}
var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arr3);

var arr4 = mapForEach(arr2, function(item) {
    return item > 3;
})
console.log(arr4);

// 2 into a variable
var checkPastLimit = function(limiter, item) {
   return item > limiter; 
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplified = function (limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);