let names = [
  //이름  + 성
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

//map => 반환값을 배열(Array)에 담아 리턴!
let nameList = names.map((item) => {
  return item;
});
console.log(nameList);
console.log(typeof nameList);

//1.모든 이름을 대문자로 바꾸어 출력 => toUpperCase()
let upperCaseName = names.map((item) => item.toUpperCase());
console.log(upperCaseName);

//2.성을 제외한 이름만 출력 (ex ["Steven","Bill"])
let firstNames = names.map((item) => {
  return item.split(" ", 1); //0 => 빈배열 1=>1개 2=>2개
});
console.log(firstNames);

//3.이름의 이셜만 출력(ex ["SPJ","BG","MEZ"..] ) =>이중for?
let initialOnly = names.map((item) => {
  let name = item.split(" ");
  let initial = "";
  name.forEach((element) => {
    initial += element[0];
    //let result = element.substring(0, 1);
    //initial += result;
  });
  return initial;
});
console.log(initialOnly);

//filter() : 조건에 해당하는 값을 배열(Array)에 담아서 반환

//1.이름에 a포함한 사람들 출력
let includeA = names.filter((item) => {
  return item.includes("a");
});
console.log(includeA);

//2.이름에 같은 글자가 연속해서 들어간 사람 출력(ex tt,ff,ll 이런글자들)
let doubleLetter = names.filter((item) => {
  splitName = item.split("");
  //console.log(splitName);
  return splitName.some((element, index) => {
    //console.log(element, index);
    return element == splitName[index + 1];
  });
});
console.log(doubleLetter);

//some() : 배열에 조건에 해당하는 값이 하나라도 있으면 true, 아니면 false 반환

//1.전체 이름의 길이가 20자 이상인 사람 있는가?
let some1 = names.some((item) => {
  return item.length >= 20;
});
console.log(some1);

//2.성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관x)
let some2 = names.some((item) => {
  let nameSplit = item.split(" ");
  //console.log(nameSplit); // ['Steven', 'Paul', 'Jobs']
  let result = nameSplit.pop();
  //console.log(result);
  // console.log(nameSplit);
  let includeP = nameSplit.some((eachName) => {
    return eachName.toLowerCase().includes("p");
  });
  return includeP;
});
console.log(some2);

//every() :배열의 모든아이템들이 조건을 충족하면 true, 아니면 false 반환

//1.모두의 전체 이름의 길이가 20자 이상인가?
let every1 = names.every((item) => {
  return item.length >= 20;
});
console.log(every1);

//2.모두의 이름에 a가 포함되어 있는가?
let every2 = names.every((item) => {
  return item.includes("a");
});
console.log(every2);

//find() :조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)

//1.전체 이름의 길이가 20자 이상인 사람
let find1 = names.find((item) => {
  return item.length >= 20;
});
console.log(find1);

//2.미들네임이 포함되어있는 사람 (ex. Steven Paul Jobs)
let find2 = names.find((item) => {
  return item.split(" ").length >= 3;
});
console.log(find2);

//findIndex() :조건에 충족하는 아이템의 인덱스값 반환(여러개라면 첫번째 아이템의 인덱스번호만 반환)

//1.전체이름의 길이가 20자 이상인 사람의 인덱스 번호 찾으시오
let findIndex1 = names.findIndex((item) => {
  return item.length >= 20;
});
console.log(findIndex1);

//2.미들네임이 포함되어있는 살마의 인덱스 번호 찾으시오
let findIndex2 = names.findIndex((item) => item.split(" ").length >= 3);
console.log(findIndex2);
