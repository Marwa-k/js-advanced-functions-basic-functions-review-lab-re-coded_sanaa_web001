// Your code here

function saturdayFun(activity="roller-skate")
{
  return `This Saturday, I want to ${activity}!`;
}


 console.log(saturdayFun());
 console.log(saturdayFun("bath my dog"));

function mondayWork(activity="go to the office")
{
  return`This Monday, I will ${activity}.`;
}

  console.log(mondayWork());
  console.log(mondayWork("work from home"));

  function wrapAdjective(m="*")
   {
      return function(s="special")
      {
        return `You are ${m}${s}${m}!`;
      }

   }

   let result = wrapAdjective()
   let emphatic = result("a hard worker")
   console.log(result())



   let  Calculator={

   };
  Calculator.add=function()
  {
     return 1+3;
  };
  Calculator.subtract=function()
  {
    return 1-3;
  }

  Calculator.multiply=function()
  {
    return 1*3;
  }
  Calculator.divide=function()
  {
    return 10/5;
  }




//????//
arr = [
    function(a){ return  a* 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ] ;
  /*
 function actionApplyer(n,arr)
 {
    //return n ;
    //return n*2+1000 % 7
  let message=console.log("13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result");

    return n ;
  console.log(`${arr}+${message}`);
 }
 /*for (i = 0; i < arr.length; i++)
 {
    arr[i]();
}*/

 function actionApplyer(arr, input)
 {
   arr.reduce((accumulatedOutput, fun) => fun(accumulatedOutput), input);
 }
 console.log(actionApplyer(arr, 13));
