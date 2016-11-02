var myobject = {
  sum: function(x,y){
   var sum = ((y-x + 1 ) * (x+y))/2
   return sum;
 },
  findMin:function (arr){
    var min = 0;
    for(var i = 0; i < arr.length ;i++){
      if(min > arr[i]){
        min = arr[i];
      }
    }
    return min;
  },
  average:function(arr){
    var sum = 0;
    for(var i = 0; i <arr.length;i++){
      sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    return avg;
  }
}

console.log(myobject.sum(0,10))
console.log(myobject.findMin([1,2,5,6,9,-2]))
console.log(myobject.average([1,2,3,4,5]))

var obj = {
  name: "Justin",
  distance_traveled: 0,
  say_name: function(){
    console.log(obj.name);
  },
  say_something: function(param){
    console.log(obj.name, "says", param);
  },
  walk: function(){
    console.log(obj.name, "is walking");
    obj.distance_traveled += 3;
  },
  run: function(){
    console.log(obj.name, "is running");
    obj.distance_traveled += 10;
  },
  walk: function(){
    console.log(obj.name, "is crawling");
    obj.distance_traveled += 1;
  }
}

obj.walk();
console.log(obj.distance_traveled);
