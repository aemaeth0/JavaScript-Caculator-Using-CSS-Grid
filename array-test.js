/*
var numels = [];

numels.push('1');
numels.push('3');
numels.push('5');

for(var i=0; i<numels.length; i++) {
  document.write(numels[i]);
}
*/

/*
var numels = [];

numels.push('1');
numels.push('2');
numels.push('1');
numels.push('4');
numels.push('2');


  var upperLimit = numels.length;



  while(upperLimit > 0){
    var ans = document.getElementById('array-test');
    ans.textContent += numels.shift();
    upperLimit--;
  }
*/


/*
var nums = [
1,
3
];

var ops = [
  '+'
]

var len = nums.length;
console.log(len);


  var num1 = nums.pop();
  console.log(num1);
  var num2 = nums.pop();
  console.log(num2);

var op = ops.pop();

  switch (op) {

  case '+':
      document.getElementById('array-test').innerHTML = num1 + num2;
      break;

  case '-':
      document.getElementById('array-test').innerHTML = num1 - num2;
      break;

  case '/':
      var ans = num1 / num2;
      document.write(ans);
      break;

  case '*':
      var ans = num1  * num2;
      document.write(ans);
      break;

  default:
    document.getElementById('array-test').innerHTML = "blah";
  }
*/


var nums = [5, 3, 2];

for(var i=0; i<nums.length; i++) {
  document.write(nums[i]);
  console.log(nums[i]);
}
