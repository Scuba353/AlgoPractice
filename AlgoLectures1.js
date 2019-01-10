//Link to join live lectures: https://codingdojo.zoom.us/j/319516868
//Link to join discussions: academy.codingdojo.com

// //pushFront
// function pushFront(arr, val){
//     for(var i=arr.length; i>0; i--){
//         arr[i] =arr[i-1]
//     }
//     arr[0]= val;
//     return arr
// }
// console.log(pushFront([2,3,4], 1))

//popFront
// function popFront(arr2){
//     var returnVal= arr2[0]
//     for(var i=0; i<arr2.length-1; i++){
//         arr2[i]= arr2[i+1]
//     }
//     arr2.pop()
//     console.log(arr2)
//     return returnVal
// }
// console.log(popFront([1,2,3,4]))

// //insertAt
// function insertAt(arr, idx, val){
//     for(var i=arr.length; i>0; i--){
//        arr[i] =arr[i-1] 
//        if(arr[i] == idx){
//             arr[i]= val;
//             break;
  
//         }
//     }
//     return arr
// }
// console.log(insertAt([1,2,4,5,6], 2, 3))

// //RemoveAt
// function removeAt(arr, idx){
//     var returnVal= arr[idx];
//     for(var i=idx; i<arr.length-1; i++){
//         arr[i]= arr[i+1]
//     }
//     arr.pop()
//     console.log(arr)
//     return returnVal
// }
// console.log(removeAt([1,2,3,4,5],2))

//swapPairs
// function swapPairs(arr){
//     for(var i=0; i<arr.length; i+=2){
//         if(arr[i+1]== undefined){
//             break;
//         }
//         var temp = arr[i];
//         arr[i]= arr[i+1];
//         arr[i+1]= temp;
//     }
//     return arr
// }
// console.log(swapPairs([1,2,3,4,5]))

// //removeDups (given sorted array)
// function removeDups(arr){
//     var arrPosition= 1
//     var temp= arr[0]
//     for(var i=1; i<arr.length; i++){
//         if(arr[i] == temp){
//             continue;
//         }
//         else{
//             temp= arr[i];
//             arr[arrPosition]=temp;
//             console.log(arr)
//             arrPosition++
//         }
//     }
//     arr.length=arrPosition
//     return arr
// }
// console.log(removeDups(['a', 'a', 'a', 'b', 'c', 'c', 'd', 'd', 'd']))

// //ArrayMintoFront
// function MintoFront(arr){
// 	var min= arr[0];
// 	var position= 0
// 	for(var i= 1; i<arr.length; i++){
// 		if(arr[i]<min){
// 			min = arr[i]
// 			position= i 
// 		}
// 	}
// 	for(var k= position; k>=0; k--){
// 		arr[k] = arr[k-1]
// 	}
// 	arr[0]= min
// 	return arr   
// }
// console.log(MintoFront([4, 2, 1, 3, 5]))

// //Array Reverse (numerical array, working inplace)
// function ReverseArr(arr){
// 	var endposition= arr.length-1
// 	for(var i=0; i<arr.length/2; i++){
// 		var temp = arr[i]
// 		arr[i]=arr[endposition]
// 		arr[endposition]=temp
// 		endposition--
// 	}
// 	return arr
// }
// console.log(ReverseArr([5, 4, 3, 2, 1]))

//Array Rotate (accepts an array and offset, shift array by offset and wrap around end values)
function ArrayShift(arr, shiftby){
	    
}


















