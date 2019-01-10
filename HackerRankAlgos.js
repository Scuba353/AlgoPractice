//Find the ratio of positive, negative, zero of given array.  Give the result as a desmil to a fixed length.

function plusMinus(arr) {
    var plus=0
    var minus=0
    var zero=0
    for(var i=0; i< arr.length; i++){
        if(arr[i]== 0){zero +=1}
        if(arr[i]< 0){minus +=1}
        if(arr[i]> 0){plus +=1}
    }
    console.log((plus/arr.length).toFixed(6))
    console.log((minus/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))

}

//print a staircase of given size (n) using space " " and "#"

function StairCase(n) {
    var s = '';
    for (var i = 1; i <= n; i++) {
            s += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
    }
    return console.log(s);
}


//given an array of 5 positive integers, find the lowest sum of four of the five and the max sum of four of the five values.

function miniMaxSum(arr) {
    var min= arr[0]
    var max= arr[0]
    var sum= arr[0]
    for(var i=1; i<arr.length; i++){
        if(arr[i]< min){min=arr[i]};
        if(arr[i]> max){max=arr[i]};
        sum+=arr[i]
    }
    console.log((sum-max)+ " "+ (sum-min))
}


//Given an array of height of candles on a birthday cake, determine how many candles will be blown out if only the tallest ones are blown out. (ie; [4,4,3,1] return 2 because only the two candles at height 4 will be blown out)

function birthdayCakeCandles(ar) {
    var max= ar[0];
    var count= 1;
    for(var i=1; i<ar.length; i++){
        if(ar[i]==max){count+=1}
        if(ar[i]>max){max=ar[i]; count=1}
    }
    return count

}

// Grades range 0-100, any grde less than 40 is failing.  
// If the difference between the grade and the next multiple of 5 is less than 3 the grade is rounded up to that multiple of 5.  
// If it =3 or is greater than 3 its left the same.  any grade less than 38 there is no rounding.
function gradingStudents(grades) {
    for(var i=0; i<grades.length; i++){
        if(grades[i]<38){
            // console.log(grades[i])
            continue;
        }
        if(5-grades[i]%5 >= 3){
            // console.log(grades[i])
            continue;
        }
        if(5-grades[i]%5 < 3){
           grades[i]=(grades[i]+(5-grades[i]%5))
        }
    }
   return grades
}

// If Kangaroo 1 starts at x1 and jumps v1 meters and Kangaroo 2 starts at x2 and jumps v2 meters
// will they ever land on the same position?

function kangaroo(x1, v1, x2, v2) {
    var K1position= x1;
    var K2position= x2;
    var result = ""
    
    if(x2>x1 && v2>v1){
        result="NO"
        return result
    }
    
    while(K1position <=100000000 && K2position <=100000000){
        //discussion said this loop is not ideal... but this isnt working correctly
        //while(K1position < K2position){ 
        if(K1position!=K2position){
            K1position=K1position+v1
            K2position=K2position+v2
            continue;
        }
        else{
            result= "YES"
            return result
        }
    }
    result= "NO"
    return result

}

