//Algo Practice from Coding Dojo book


//Chapter 3: Arrays
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

	// //swapPairs
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

	// //Credit Card Validation
	// // accept an array of digits of the card (13-19 numbers long)
	// // Luhn Formula:
	// // 1) Set aside the last digit; do not include it in these caculations until step 5
	// // 2) Starting from the back, multiply the digits in odd positions (last, third to last ect) by 2 
	// // 3) If any results are larger than 9, subtract 9 from them
	// // 4) Add all numbers (not just odds) together
	// // 5) Now add the last digit back in- the sum should be a multiple of 10
		// function isCreditCardValid(digitArr){
		// 	var sum=0;
		// 	//step 1
		// 	var last= digitArr[digitArr.length-1];
		// 	digitArr.length= digitArr.length-1;
		// 	//step 2
		// 	for(var i=digitArr.length-1; i>=0; i= i-2){
		// 		digitArr[i]=digitArr[i]*2
		// 		if(digitArr[i]>9){
		// 			digitArr[i]=digitArr[i]-9
		// 		}
		// 		//console.log(digitArr)
		// 	}
		// 	for(var a=0; a<digitArr.length; a++){
		// 		sum+= digitArr[a]
		// 		//console.log(sum)
		// 	}
		// 	sum+= last
		// 	//console.log(sum)
		// 	if(sum%10 == 0){
		// 		return true
		// 	}
		// 	else{
		// 		return false
		// 	}
		// }
		// isCreditCardValid([5, 2, 2, 8, 2])

	// //Array Shuffle
		// function Shuffle(arr){
		// 	for(var i =0; i<arr.length; i++){
		// 		var randspot= Math.floor(Math.random() * arr.length); 
		// 		var temp= arr[i]
		// 		arr[i]= arr[randspot]
		// 		arr[randspot]= temp
		// 	}
		// 	return arr
		// }
		// console.log(Shuffle([1, 2, 3, 4, 5]))

	// //Array: Remove Range (remove all values falling in the index range provided)
		// function RemoveRange(arr, min, max){
		// 	var maxEnd= max+1
		// 	for(var i=min; maxEnd<arr.length; i++){
		// 		arr[i]= arr[maxEnd]
		// 		maxEnd++
		// 	}
		// 	arr.length= max-min+1
		// 	return arr
		// }
		// console.log(RemoveRange([20, 30, 40, 50, 60, 70], 2, 4))

	// //Intermediate Sums (after every 10th element add an additional element with the sum of the previous 10, add one final element at the end to include any remaining values)
		// function IntermediateSums(arr){
		// 	var countValuesAdded= 0;
		// 	var position= 0;
		// 	var sum= 0;
		// 	for(var i=0; i< arr.length; i++){
		// 		if(countValuesAdded == 10){
		// 			//add element and shift all right
		// 			for(var j= arr.length-1; j>=position; j--){
		// 				arr[j+1]= arr[j]
		// 			}
		// 			arr[position]=sum
		// 			countValuesAdded= 0
		// 			sum =0 
		// 			position++
		// 		}
		// 		else{
		// 			sum += arr[i]
		// 			countValuesAdded++
		// 			position++ 
		// 		}
		// 	}
		// 	arr[arr.length]=sum
		// 	return arr
		// }
		// console.log(IntermediateSums([ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]))
		// console.log(IntermediateSums([ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]))
		// console.log(IntermediateSums([ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0]))

	// //Double Trouble: given an array return array with each element listed twice in original order
		// function DoubleTrouble(arr){
		// 	arr.length= arr.length*2
		// 	var position= arr.length
		// 	//add element and shift all right
		// 	for(var j= arr.length/2 -1; j>=0; j--){
		// 		arr[position-1]= arr[j]
		// 		arr[position-2]= arr[j]
		// 		position=position -2
		// 	}
		// 	return arr
		// }
		// console.log(DoubleTrouble([4, "boo", 42, true]))

	// //ZipIt; combind values from two arrays sequentially (both array idx 0, both idx 1... ect), create a new array
		// function Zip(arr, arr2){
		// 	var combind= []
		// 	//track the length of the longest array and save it as a variable
		// 	var longest= (arr.length>arr2.length ? arr.length: arr2.length)
		// 	console.log('long', longest)
		// 	//Loop up to the length of the longest array as to cover all values in both arrays
		// 	for(var i=0; i<longest; i++){
		// 		//compare i to the length of individual array and push if there is a value left
		// 		if(i< arr.length){
		// 			combind.push(arr[i])
		// 		}
		// 		if(i<arr2.length){
		// 			combind.push(arr2[i])	
		// 		}	
		// 	}
		// 	return combind
		// }
		// console.log(Zip([1, 2], [10, 20, 30,40]))

//Chapter 4: Strings and Associative Arrays

	// //String: Remove Blanks
		// function RemoveBlanks(someString){
		// 	var words= someString.split(" ")
		// 	console.log("words", words)
		// 	var join= words.join("")
		// 	console.log("joined", join)
		// 	// return words
		// }
		// console.log(RemoveBlanks(" Pl ayTha tF unkyM usi    c  "))

	// //String: Get Digits (given a string return the integer made of the string digits)
		// function getDigits(craystring){
		// 	var splitString= craystring.split("")
		// 	var ints= ""
		// 	for(var i=0; i<splitString.length; i++){
		// 		if(splitString[i]%1 ==0){
		// 			ints+=splitString[i]
		// 		}
		// 	}
		// 	return ints
		// }
		// console.log(getDigits("0s1a3y5e7g9h2k4k6l8!0"))


	// //Acronyms: return the first letter of each word in a given string. 
		// function Acronym(words){
		// 	var splitString= words.split(" ")
		// 	var firstletters= ""
		// 	for(var i=0; i<splitString.length; i++){
		// 		if(splitString[i] == ""){
		// 			continue
		// 		}
		// 		var indword= splitString[i].split("")
		// 		firstletters+=(indword[0])
		// 	}
		// 	return firstletters.toUpperCase()
		// }
		// //console.log(Acronym("Live from New York, it's Saturday Night!"))
		// console.log(Acronym(" there's no free Lunch - gotta pay yer way. "))

	// //Count Non-Spaces (In a given string count all characters that are not spaces)
		// function noSpaces(str){
		// 	var splitString= str.split(" ")
		// 	var joinString= splitString.join("")
		// 	return joinString.length
		// }
		// console.log(noSpaces("Honey pie, you are drivingme crazy!"))

	// //Remove Shorter strings (given a string array and value, remove all strings shorter in length than the value)
		// function RemoveShort(str, len){




		// }

	// //String: Reverse
		// function ReverseString(str){
		// 	var splitString= str.split("")
		// 	var endposition= splitString.length-1 
		// 	for(var i=0; i<splitString.length/2; i++){
		// 		var temp = splitString[i];
		// 		splitString[i]=splitString[endposition]
		// 		splitString[endposition]= temp
		// 		endposition--
		// 	}
		// 	var rejoin= splitString.join("")
		// 	return rejoin
		// }
		// console.log(ReverseString("creature"))

	// //Remove even-length strings 
	// ["Nope!", "its", "kris", "starting", "with", "k!", "(instead", "of", "Chris", "with", "c)", "."]
	// becomes ["Nope!", "its", "Chris", "."]
		// function RemoveEven(strArray){
		// 	var count= 0
		// 	for(var i=0; i<strArray.length; i++){
		// 		if(strArray[i].length% 2 != 0){
		// 			strArray[count]=strArray[i]
		// 			count ++
		// 		}
		// 		else{
		// 			continue
		// 		}
		// 	}
		// 	strArray.length= count
		// 	return strArray
		// }
		// console.log(RemoveEven(["Nope!", "its", "kris", "starting", "with", "k!", "(instead", "of", "Chris", "with", "c)", "."]))

	// //Integer to Roman Numeral
	// positive integer 1-4000
	// I= 1, V=5, X=10, L=50, C=100, D=500, M=1000
		// function IntToRoman(int){
		// 	var romanNum= ""
		// 	var RomanKey= {M:1000, D:500, C:100, L:50, X:10, V:5, IV:4, I:1}
		// 	for(var i in RomanKey){
		// 		while(int>= RomanKey[i]){
		// 			romanNum += i;
		// 			int -= RomanKey[i]
		// 		}
		// 	}
		// 	return romanNum
		// }
		// console.log(IntToRoman(444))

	// //Parens Valid (always open before they close)
	// function ParensValid(str){
	// 	var position=0;
	// 	var ticker= 0;
	// 	// console.log(str[position])
	// 	// console.log(str.length)
	// 	while(position<str.length){
	// 		if(str[position]== "("){
	// 			// console.log("adding one")
	// 			ticker++
	// 		}
	// 		if(str[position]== ")"){
	// 			// console.log("subtracting one")
	// 			ticker--		
	// 			if(ticker== -1){
	// 				// console.log("fast failing")
	// 				return false
	// 			}
	// 		}
	// 		position++
	// 	}
	// 	var result= (ticker == 0) ? true : false;
	// 	return result
	// }
	// console.log(ParensValid("(AB)(C)"))
	// console.log(ParensValid(")AB)(C)"))
	// console.log(ParensValid("((AB))(C)"))
	// console.log(ParensValid("(AB()C)"))


	// //Balanced Brackets (determin if (){}[] in a string expression are balanced)
	// 	function BracketsValid(str){
	// 	var braces=[];
	// 	var position= 0;
	// 	// console.log(str[position])
	// 	// console.log(str.length)
	// 	while(position<str.length){
	// 		if(str[position]== "(" || str[position]== "{" || str[position]== "[" ){
	// 			braces.push(str[position])
	// 		}
	// 		if(str[position]== ")"){
	// 			if(braces[braces.length-1]== "("){
	// 				braces.pop()
	// 			}
	// 			else{
	// 				return false
	// 			}
	// 		}
	// 		if(str[position]== "}"){
	// 			if(braces[braces.length-1]== "{"){
	// 				braces.pop()
	// 			}
	// 			else{
	// 				return false
	// 			}
	// 		}
	// 		if(str[position]== "]"){
	// 			if(braces[braces.length-1]== "["){
	// 				braces.pop()
	// 			}
	// 			else{
	// 				return false
	// 			}
	// 		}
	// 		position++
	// 	}
	// 	var result= (braces.length == 0) ? true : false;
	// 	return result
	// }

	// console.log(BracketsValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
	// console.log(BracketsValid("D(i{a}l[ t]o)n{e"))
	// console.log(BracketsValid("A(l)s[O(n]O{t) O}k"))

	// //Palindrome 
	// function Palindrome(str){
	// 	var endposition= str.length-1
	// 	for(var i=0; i<str.length/2; i++){
	// 		console.log(i)
	// 		if(str[i]== str[endposition]){
	// 			console.log(str[i])
	// 			console.log(str[str.length-1])
	// 			endposition--
	// 			continue;
	// 		}
	// 		else{
	// 			return false
	// 		}
	// 	}
	// 	return true
	// }
	// console.log(Palindrome("racecar"))  //true
	// console.log(Palindrome("oho!"))	//false
	// console.log(Palindrome("Dud"))	//false
	// console.log(Palindrome("a x a"))	//true

	// //Longest Palindrome in a given string 
	// function LongestPal(str){




	// }

	// //Is Word Alphabetical (are all vowels in alphabetical order) 
	//assumptions made: double letters in succession are ok ex) athameiou --> true,  airline --> false
	// function WordAlpha(str){
	// 	var vowels= ["a", "e", "i", "o", "u"]
	// 	var volposition= 0;
	// 	for(var i=0; i<str.length; i++){
	// 		if(str[i]== vowels[volposition]){
	// 			volposition++
	// 		}
	// 	}
	// 	//only reliable if all 5 vowels are present
	// 	var result= (volposition==5) ? true : false
	// 	return result
	// }
	// console.log(WordAlpha("athameiou"))

	// //D gets Jiggy (accept a string name, rearrance ex: Dylan --> "Ylan to the D")
	// function NameGreeting(str){
	// 	var nameSplit= str.split("")
	// 	var firstletter= nameSplit[0]
	// 	var newName= []
	// 	for(var i=1; i<str.length; i++){
	// 		newName.push(str[i])
	// 	}
	// 	newName[0]= newName[0].toUpperCase()
	// 	var joinName= newName.join("")

	// 	return  joinName + " to the " + firstletter
	// }
	// console.log(NameGreeting("Dylan"))

	// //Common Suffix (find the longest common suffix between given words)
	// function CommonSuffix(){
		
	// }

	// //Book Index (given sorted array [1, 13, 14, 15, 37, 38, 70] return an "index string" "1, 13-15, 37-38, 70")
	// function BookIndex(){
		
	// }

	// //Coin Change with Object
	// function coinChange(cents){
	// 	var US= {quarter: 25, dime: 10, nickle: 5, penny: 1}
	// 	var change= {quarter:0, dime:0, nickle:0, penny:0}
	// 	console.log(US["quarter"])
	// 		var howMany= Math.floor(cents/(US["quarter"]))
	// 		change["quarter"]=howMany
	// 		cents= cents%US["quarter"]
	// 		var howMany= Math.floor(cents/(US["dime"]))
	// 		change["dime"]=howMany
	// 		cents= cents%US["dime"]
	// 		var howMany= Math.floor(cents/(US["nickle"]))
	// 		change["nickle"]=howMany
	// 		cents= cents%US["nickle"]
	// 		var howMany= Math.floor(cents/(US["penny"]))
	// 		change["penny"]=howMany
	// 		cents= cents%US["penny"]
	// 		return change
	// }
	// console.log(coinChange(54))

	// //Max-Min-Avg with object
	// function ObjMaxMinAvg(arr){
	// 	var summary= {max: arr[0], min: arr[0], avg: arr[0]}
	// 	for(var i=1; i<arr.length; i++){
	// 		if(arr[i]> summary["max"]){
	// 			summary["max"]=arr[i]
	// 		}
	// 		if(arr[i]< summary["min"]){
	// 			summary["min"]=arr[i]
	// 		}
	// 		summary["avg"]+=arr[i]
	// 	}
	// 	summary["avg"]= summary["avg"]/arr.length
	// 	return summary
	// }
	// console.log(ObjMaxMinAvg([1, 2, 3, 4, 5]))



//Chapter 5: Linked List 










