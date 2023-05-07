//document.getElementById("????").???? = "????";
document.getElementById("hello").innerHTML = "안녕";
document.getElementById("hello").style.fontSize = "30px";
document.getElementById("hello").style.color = "red";
document.getElementById("hi").innerHTML = "올때바밤바";

//function 이름(){ 코드~ }

function alertShow() {
  document.getElementById("alert").style.display = "block";
}

function alertClose() {
  document.getElementById("alert").style.display = "none";
}

function alert(result) {
  document.getElementById("alert-title").innerHTML = "Alert 박스";
  document.getElementById("alert").style.display = result;
}

function alertTest(text, btn) {
  document.getElementById("alert-title").innerHTML = text;
  //document.getElementsByClassName("alert-box")[0].innerHTML = text;
  document.getElementById("alert").style.display = btn;
}

document.getElementById("close-btn").addEventListener("click", function () {
  console.log("x기능");
  document.getElementById("alert").style.display = "none";
});

document.getElementById("btn3").addEventListener("mouseover", function () {
  document.getElementById("alert-title").innerHTML = "버튼4";
  document.getElementById("alert").style.display = "block";
});
