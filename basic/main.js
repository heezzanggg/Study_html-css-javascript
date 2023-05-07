let infoCity = [
  {
    code: "02",
    name: "서울",
    region: ["서초", "강남"],
  },
  {
    code: "064",
    name: "제주",
    region: ["제주시", "서귀포시"],
  },
  {
    code: "051",
    name: "부산",
    region: ["해운대", "동래"],
  },
];

function regist() {
  let name = document.getElementById("name").value;
  let cityName = document.getElementById("city")
  console.log($("#city").val());
  console.log(name + "," + cityName);
}

//JS Version
// //1.도시 변경되면
// function changeCity() {
//   let cityCode = document.getElementById("city").value;
//   //2.도시에 맞는 동네도 변경
//   document.getElementById("region_02").style.display = "none";
//   document.getElementById("region_064").style.display = "none";

//   // if (cityCode == "02") {
//   //   document.getElementById("region_02").style.display = "";
//   // } else document.getElementById("region_064").style.display = "";

//   document.getElementById("region_" + cityCode).style.display = "";
// }

//JQuery Version
function changeCity() {
  let cityCode = $("#city").val();

  //$("#region_02").css("display", "none");
  // $("#region_02").hide();
  // $("#region_064").hide();
  // $("#region_051").hide();

  infoCity.forEach((element) => {
    $("#region_" + element.code).hide();
  });

  //$("#region_" + cityCode).css("display", "block");
  $("#region_" + cityCode).show();
}

// function changeCity() {
//   let cityCode = $("#city").val();
//   console.log(document.getElementById("region").childNodes);
//   let remove = document.getElementsByClassName("fix-region");
//   document.getElementById("region").removeChild(remove[0]);
//   document.getElementById("region").removeChild(remove[1]);
//   // infoCity.forEach((element) => {
//   //   if (cityCode == 02) {
//   //     element.region.forEach((item) => {
//   //       $("#region").append("<option selected>" + item + "</option>");
//   //     });
//   //   } else {
//   //     element.region.forEach((item) => {
//   //       $("#region").append("<option>" + item + "</option>");
//   //     });
//   //   }
//   // });
//   // console.log(infoCity.code);
// }

function loadCity() {
  infoCity.forEach((element) => {
    if (element.code == 02) {
      $("#city").append(
        '<option value="' +
          element.code +
          '" selected>' +
          element.name +
          "</option>"
      );

      // infoCity[0].region.forEach((item) => {
      //   console.log(item);
      //   $("#region").append('<option value="" >' + item + "</option>");
      // });
    } else {
      $("#city").append(
        '<option value="' + element.code + '">' + element.name + "</option>"
      );
    }
  });
}

loadCity();
