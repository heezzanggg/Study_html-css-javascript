let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

let ceoList = [
  { name: "Larry Page", age: 23, ceo: true },
  { name: "Tim Cook", age: 40, ceo: true },
  { name: "Elon Musk", age: 55, ceo: false },
];

//for
console.log("----for----");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//forEach : 반환값이 없다, 단순  for문과 동일
console.log("----foreach1----");
function printName(item) {
  console.log(item);
}
names.forEach(printName);

console.log("----foreach2----");
names.forEach(function (item) {
  console.log(item);
});

console.log("----foreach3-1----");
names.forEach((item) => {
  console.log(item);
});

console.log("----foreach3-2----");
names.forEach((item, index) => {
  console.log(index, item);
});

//map => 반환값을 배열(Array)에 담아 리턴!
console.log("----map----");
let data = names.map((item) => {
  return item;
});

console.log(data);
console.log(data[0]); //data의 값이 배열이므로 인덱스[0]에 해당하는 값만 추출 가능

let ceoData = ceoList.map((item) => {
  //return item.name;
  return item.age;
});
console.log(ceoData);

//filter() : 조건에 해당하는 값을 배열(Array)에 담아서 반환
console.log("----filter----");
let data1 = ceoList.filter((item) => {
  return item.age == 23;
});
console.log(data1);

let data2 = names.filter((item) => {
  return item.startsWith("L"); //조건에 해당하는 값 반환
});
console.log(data2);

//some() : 배열에 조건에 해당하는 값이 하나라도 있으면 true, 아니면 false 반환
console.log("----some----");
let data3 = names.some((item) => {
  //names 배열에 L로 시작하는것이 있느냐???
  return item.startsWith("L"); //조건에 해당하는 값 있으면 true / 없으면 false
});
console.log("some(): " + data3);

//every() :배열의 모든아이템들이 조건을 충족하면 true, 아니면 false 반환
console.log("----every----");
let data4 = names.every((item) => {
  //names 배열에 모든 항목들이 A로 시작하느냐??
  return item.startsWith("A"); // 조건에 해당하면 true / 아니면 false
});
console.log("every(): " + data4);

//find() :조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
//(filter vs find :정확한값 하나만)
console.log("----find----");
let data5 = names.find((item) => {
  return item == "Larry Page";
});
console.log("find(): " + data5);

//findIndex() :조건에 충족하는 아이템의 인덱스값 반환(여러개라면 첫번째 아이템의 인덱스번호만 반환)
console.log("----findIndex----");
let data6 = names.findIndex((item) => {
  return item == "Larry Page";
});
console.log("findIndex(): " + data6);
