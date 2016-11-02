function runningLogger(){
  console.log("I am running!")
}

function multiplyByTen(val) { //val has to be an integer
  if (typeof val == "number"){
  return val*10;
  }
}

function stringReturnOne(){
  return "Coding"
}

function stringReturnTwo(){
  return "Dojo"
}


function caller(x){
  if (typeof x === "function"){
    x();
  }
}

function myDoubleConsoleLog(x,y){
  if (typeof x === "function" && typeof y === "function"){
    console.log(x(),y());
  }
}

myDoubleConsoleLog(stringReturnOne,stringReturnTwo);

function caller2(x){//outer scope
  console.log('starting');
  setTimeout( function(){//inner scope
    if (typeof x === 'function'){
      x(stringReturnOne,stringReturnTwo);
    }
    return undefined;
  }, 2000);
  console.log("ending?")
  return "interesting"
}
caller2(myDoubleConsoleLog);
