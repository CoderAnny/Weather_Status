var ip = document.querySelector("input");
var btn = document.getElementById("b");
var n = document.getElementById("name");
var m = document.getElementById("country");
var p = document.getElementById("temp");
var q = document.getElementById("hum");
var r = document.getElementById("pre");

var y = document.querySelector(".result-div");
var z = document.querySelector(".main-div");
var h = document.querySelector("header");



btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      ip.value +
      "&appid=84346e3b1246ae841929bb0cfc9ad06d"
  )
    .then((response) => response.json())
    .then((data) => {
      var nameIs = data["name"];
      var country = data["sys"]["country"];
      var tempIs = data["main"]["temp"];
      var humIS = data["main"]["humidity"];
      var preIS = data["main"]["pressure"];

      n.innerHTML = nameIs;
      m.innerHTML = country;
      var temp = Math.round((tempIs/10));
      p.innerHTML = `${temp}°C`;
      q.innerHTML = `${humIS}kg<sup>-1</sup>`;
      r.innerHTML = `${preIS}Pa`;
      console.log(window.screen.width);
      if (window.screen.width > 698) {
        y.style.display = "flex";
      } else {
        y.style.display = "block";
      }
      document.title = "Current Weather Report";
    })
    .catch((err) => {
      console.log(err);
      alert(`------- ERROR -------\n\nNo country named : ${ip.value}`);
      window.location.reload();
    });
});
