x = [3,5,'Dojo', 'rocks', 'Michael','Sensei'];
for(var i = 0; i < x.length; i++){
  console.log(x[i]);
}

x.push(100);
console.log(x[i]);

x = ['hello', 'world','javascript is fun']
console.log(x)

var sum = 0;
for(var x = 1; x <=500; x++){
  sum = sum + x;
}
console.log(sum)


var arr = [1,5,90,25,-3,0];
var max = 0;
var min = 0;
for(var i = 0; i < arr.length;i++){
  if(max < arr[i]){
    max = arr[i];
  }
  if(min > arr[i]){
    min = arr[i];
  }
}
console.log("Max = ", max)
console.log('min = ', min)



var arr = [1,5,90,25,-3,0];
var sum = 0;
for(var i = 0; i <arr.length;i++){
  sum = sum + arr[i]
}
var avg = sum / arr.length
console.log("The Average is ", avg)
