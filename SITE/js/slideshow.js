var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0; //슬라이드 번호 저장할 인덱스 변수

console.log("시작...?");
console.log(prev);

showSlides(current); //현재 이미지 표시
prev.onclick = prevSlide; //이전 이미지 표시
next.onclick = nextSlide; //다음 이미지 표시

//현재 이미지 표시 할 함수 선언
function showSlides(n) {
  for(var i =0 ; i<slides.length; i++){
    slides[i].style.display = "none"; //모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = "block"; //n번째 이미지만 화면에 표시 
}

//이전 이미지 표시 할 함수 선언
function prevSlide(){
  if(current > 0) current -=1; //current 값이 0 보다 크면 이전 위치로
  else current = slides.length -1;//그렇지 않으면 (첫번째 이미지이므로) 마지막 위치로
    showSlides(current); //이동한 위치의 이미지 표시
}

//다음 이미지 표시 할 함수 선언
function nextSlide(){
  if(current < 2) current +=1;//current값이 2보다 작으면 다음 위치로
  else current = 0;//그렇지 않으면(마지막 이미지이므로) 첫번째 위치로
    showSlides(current);//이동한 위치의 이미지 표시
}