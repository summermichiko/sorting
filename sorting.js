// var bubble = function(array) {
//     if(array.length < 2) {
//         return array;
//     }
//     for(x=0; x < array.length +1; x++) {
//         if(array[x] > array[x+1]) {
//             var temp = array[x];
//             array[x] = array[x+1];
//             array[x+1] = temp;
//         };
//     }
//     return array;
// };

var bubble = function(arr){
 if (arr.length < 2) return arr;
 var hasSwapped=true;
 var swaps = 0;
 var comparisons = 0;
 var limbo;

 for (var n = 0; n < arr.length * arr.length; n++){
   for (var i = 0; i < arr.length-1; i++) {

     comparisons++;
     if (arr[i] > arr[i+1]){
       // swaps++;
       hasSwapped=true;
       limbo = arr[i];
       arr[i]= arr[i+1];
       arr[i+1] = limbo;
     }
   };
 }
 return arr;
}


// var merge = function(left, right) {
//         var resultArray = [];
//         var a = 0;
//         var b = 0;
//         while(a < left.length && b < right.length) {
//         if(left[a] < right[b]) {
//             resultArray.push(left[a]);
//             a++;
//         } else {
//             resultArray.push(right[b]);
//             b++;
//         }
//     }
//     return resultArray.concat(left.slice(a)).concat(right.slice(b));
// }

var merge = function(left, right) { //merge function takes two arrays
 var result = [];
 var length = left.length + right.length + 1;
 for(var i = 0; i < length; i++) {
   if (left.length && right.length) {
     if(left[0] < right[0]) {
       result.push(left.shift());
     } else {
       result.push(right.shift());
     }
   }
   else if (left.length) {
     result.push(left.shift());
   }
   else if (right.length) {
     result.push(right.shift());
   }
 }
 return result;
};

var mergeSort = function(array) {
    
    if (array.length < 2) {
        return array;
    }

    var left, right, middle, finalLeft, finalRight;
    middle = Math.round(array.length / 2);  //rounds to the nearest whole number
    
    //console.log(middle);
    left = array.slice(0, middle); //chops the array and returns another array
    right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};




