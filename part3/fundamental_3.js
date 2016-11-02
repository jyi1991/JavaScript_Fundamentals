// function personConstructor(name){
//   var obj = {};
//
//   obj.name = name;
//   obj.distance_traveled = 0;
//   obj.say_name= function(){
//     console.log(obj.name);
//     return obj;
//   }
//   obj.say_something = function(param){
//     console.log(obj.name, "says", param);
//     return obj;
//   }
//   obj.walk = function(){
//     obj.distance_traveled += 3;
//     console.log(obj.name, "is walking",obj.distance_traveled);
//     return obj;
//   }
//   obj.run = function(){
//     obj.distance_traveled += 10;
//     console.log(obj.name, "is running",obj.distance_traveled);
//     return obj;
//   }
//   obj.crawl = function(){
//     obj.distance_traveled += 1;
//     console.log(obj.name, "is crawl",obj.distance_traveled);
//     return obj;
//   }
//   return obj;
// }
// var justin = personConstructor("Justin");
// justin.run().run().walk().run();


function ninjaConstructor(name,cohort){
  var ninjaObj= {};
  var belts = ['yellow','red','black'];
  ninjaObj.name = name;
  ninjaObj.cohort = cohort;
  ninjaObj.beltLevel = 0;
  ninjaObj.level = function(){
    for(i = 0; i < 3;i++){
      if(ninja.belt < 2){
        ninjaObj.belt = belts[ninjaObj.beltLevel];
      }
    }
    return ninjaObj;
  }
  ninjaObj.belt = belts[ninjaObj.beltLevel]
  console.log(ninjaObj)
  return ninjaObj;
}
var x = ninjaConstructor("Justin","mean")
