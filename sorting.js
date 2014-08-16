// var bubble = function(array) {
//     if (array.length < 2) {
//         return array;
//     }
//     var done = false;
//     while(!done) { //while it's not false
//         done = true;
//         for(i=0; i < array.length; i++) {
//             if(array[i] > array[i+1]){
//                 var temp = arr[i]; //temp = 7
//                 arr[i] = arr[i+1]; //7 is now equal to index 1
//                 arr[i+1] = temp; //index 1 is now temp
//             }
//         }
//     }
//     return array;
// };

var bubble = function(array) {
    var switchHappened = false;
    if(array.length < 2) {
        return array;
    }
    for(x=0; x < array.length; x++) {
        if(array[x] > array[x+1]) {
            var temp = array[x];
            array[x] = array[x+1];
            array[x+1] = temp;
            switchHappened = true;
        }; 
    }
    if(switchHappened) {
       bubble(array); 
    }  
    return array;
};


var merge = function(left, right) { //takes two arrays
 var result = [];
 var totalLength = left.length + right.length;
 for(var i = 0; i < totalLength; i++) {
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
}

var mergeSort = function(array) {
    if (array.length < 2) {
        return array;
    }
    var left, right, middle, finalLeft, finalRight;
    middle = Math.round(array.length / 2);  //rounds to the nearest whole number
    left = array.slice(0, middle); //array from 0 to middle
    right = array.slice(middle); //array from middle to end
    return merge(mergeSort(left), mergeSort(right));
}





