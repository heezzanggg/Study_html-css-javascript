// 1.박스 2개 만들기 =>html
// 2.드랍다운 리스트 만들기
// 3.환율정보가져오기
// 4.드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 5.금액 입력하면 환전됨
// 6.드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전 됨

// 7.반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용됨
// 8.숫자 한국어로 읽는법

let currencyRatio = {
  USD: {
    KRW: 1320.82,
    USD: 1,
    VND: 23447.5,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00076,
    VND: 17.75,
    unit: "원",
  },
  VND: {
    KRW: 0.056,
    USD: 0.000043,
    VND: 1,
    unit: "동",
  },
};

// console.log("currencyRatio.USD.unit:"+currencyRatio.USD.unit)
// console.log(currencyRatio['VND']['unit'])

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1.버튼 가져오기 : document.getElementById("from-button")
    //2.버튼값 바꾸기
    document.getElementById("from-button").textContent = this.textContent;
    //3.선택된 currency값을 변수에 저장
    fromCurrency = this.textContent;
    console.log("fromCurrency" + fromCurrency);
    //드랍다운 리스트에 값이 바뀔때마다 다시 환전
    convert("from");
  })
);

//console.log(document.querySelectorAll('#to-currency-list a'))

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1.버튼가져오기 : document.getElementById('to-button')
    //2.버튼값 바꾸기
    document.getElementById("to-button").textContent = this.textContent;
    //3.선택된 currency값을 변수에 저장
    toCurrency = this.textContent;
    console.log("toCurrency:" + toCurrency);
    //드랍다운 리스트에 값이 바뀔때마다 다시 환전
    convert("from");
  })
);

//1.키 입력하는 순간
//2.환전되어서
//3.환전된 값 보임

function convert(type) {
  //환전
  //가지고있는 돈 금액, 가지고있는 돈 종류, 바꾸고자하는 돈 종류
  //=>돈*환율 = 환전한값
  console.log(type);
  let amount = 0;
  if (type == "from") {
    console.log("1");
    //입력값 받기
    amount = document.getElementById("from-input").value;
    //환율
    let ratio = currencyRatio[fromCurrency][toCurrency]; //currencyRatio.fromCurrency.toCurrency;
    //환전한 값
    let convertedAmount = amount * ratio;
    console.log("환전결과" + convertedAmount);

    document.getElementById("to-input").value = convertedAmount;
  } else {
    console.log("2");
    //입력값 받기
    amount = document.getElementById("to-input").value;
    console.log("convert2_amount: " + amount);
    //환율
    let ratio = currencyRatio[toCurrency][fromCurrency];
    //환전한 값
    let convertAmount = amount * ratio;
    console.log("환전결과: " + convertAmount);

    document.getElementById("from-input").value = convertAmount;
  }
}

function readUnit() {
  console.log("2222" + document.querySelectorAll("#fromUnit").textContent);
}
