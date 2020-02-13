let progress = 50; 
$("#my-progress-bar").width(progress + "%")

const Button1 = document.getElementById('Button1');
Button1.addEventListener('click', plus1);
function plus1(){
  progress = progress + 1;
  console.log(progress + "%");
  $("#my-progress-bar").width(progress + "%")
}

const Button3 = document.getElementById('Button3');
Button3.addEventListener('click', plus3);
function plus3(){
  progress = progress + 3;
  console.log(progress + "%");
  $("#my-progress-bar").width(progress + "%")
}

const Button7 = document.getElementById('Button7');
Button7.addEventListener('click', plus7);
function plus7(){
  progress = progress + 7;
  console.log(progress + "%");
  $("#my-progress-bar").width(progress + "%")
}