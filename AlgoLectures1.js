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

// //Array Rotate (accepts an array and offset, shift array by offset and wrap around end values)
// function ArrayShift(arr, shiftby){







// }

// //Array: Filter Range (retain only values in a given range, in place, return original array)
// function FilterRange(arr, min, max){
// 	var position = 0
// 	for(var i=0; i<arr.length; i++){
// 		if(arr[i]>=min && arr[i]<=max){
// 			arr[position]=arr[i]
// 			position++
// 		}
// 	}
// 	arr.length= position 
// 	return arr
// }
// console.log(FilterRange([20, 4, 16, 8, 10, 5, 20], 1, 9))

// //Array: Concat (create a function that accepts two arrays, return one array. with  all elements from the first array, followed by all elements from second. Do not alter original arrays)
// function Concat(arr1, arr2){
// 	var NewArray= []
// 	for(var i= 0; i<arr1.length; i++){
// 		NewArray.push(arr1[i])
// 	}
// 	for(var j= 0; j<arr2.length; j++){
// 		NewArray.push(arr2[j])
// 	}

// 	return NewArray
// }
// console.log(Concat(["a", "b", "c"], [1, 2]))

// //Skyline Heights
// function Skyline(arr){
// 	var position = 0
// 	var baseline= 0
// 	console.log(baseline)
// 	for(var i= 0; i<arr.length; i++){
// 		if(arr[i] > baseline){
// 			console.log("arri",arr[i])
// 			console.log("baseline", baseline)
// 			baseline= arr[i]
// 			arr[position]= baseline
// 			position++
// 		}
// 	}
// 	arr.length= position
// 	return arr
// }
// console.log(Skyline([-1, 1, 1, 7, 3]))

// //Array: Remove Negatives
// function RemoveNeg(arr){
// 	var position= 0
// 	for(var i=0; i<arr.length; i++){
// 		if(arr[i]<0){
// 			continue;
// 		}
// 		else{
// 			arr[position]=arr[i]
// 			position++
// 		}
// 	}
// 	arr.length=position
// 	return arr
// }
// console.log(RemoveNeg([-1, 2, 4, -10, 12]))

// //Array: Second to Last
// function SecondToLast(arr){
// 	if(arr.length<2){
// 		return null
// 	}
// 	else{
// 		return arr[arr.length-2]
// 	}
// }
// console.log(SecondToLast([42, true, 4, "Kate", 7]))

// //Array: Nth-to-last
// function NToLast(arr, idx){
// 	if(arr.length<idx){
// 		return null
// 	}
// 	else{
// 		return arr[(arr.length-idx)]
// 	}
// }
// console.log(NToLast([42, true, 4, "Kate", 7], 3))

// //Array: Second Largest Value
// function SecondLargest(arr){
// 	if(arr.length<2){
// 		return null;
// 	}
// 	for(var i=0; i<arr.length; i++){
// 		if(arr[i]>arr[i+1]){
// 			var temp = arr[i];
// 			arr[i]=arr[i+1];
// 			arr[i+1]= temp;
// 		}
// 	}
// 	return arr[arr.length-2]
// }
// console.log(SecondLargest([42, 1, 4, 3.14, 7]))

// //Array: Nth-Largest
// function NLargest(arr, idx){
// 	if(arr.length<idx){
// 		return null;
// 	}
// 	for(var i=0; i<arr.length; i++){
// 		if(arr[i]>arr[i+1]){
// 			var temp = arr[i];
// 			arr[i]=arr[i+1];
// 			arr[i+1]= temp;
// 		}
// 	}
// 	return arr[arr.length-idx]
// }
// console.log(NLargest([42, 1, 4, 3.14, 7], 3))

//Credit Card Validation
// accept an array of digits of the card (13-19 numbers long)
// Luhn Formula:
// 1) Set aside the last digit; do not include it in these caculations until step 5
// 2) Starting from the back, multiply the digits in odd positions (last, third to last ect) by 2 
// 3) If any results are larger than 9, subtract 9 from them
// 4) Add all numbers (not just odds) together
// 5) Now add the last digit back in- the sum should be a multiple of 10
function isCreditCardValid(digitArr){
	//step 1
	var last= digitArr[digitArr.length-1];
	digitArr.length= digitArr.length-1;
	//step 2
	for(var i=digitArr.length-1; i> 0; i-2){
		digitArr[i]=digitArr[i]*2
		if(digitArr[i]>9){
			digitArr[i]=digitArr[i]-9
		}
		console.log(digitArr)
	}
}
isCreditCardValid([5, 2, 2, 8, 2])








