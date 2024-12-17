let temp = document.querySelector("#temp"),
  place = document.querySelector("#place"),
  wind = document.querySelector("#wind"),
  des = document.querySelector("#des"),
  //   icon = document.querySelector("#icon");
  iconBox = document.querySelector("#icon");

let btn1 = document.querySelector(".bt1"),
  btn2 = document.querySelector(".bt2"),
  btn3 = document.querySelector(".bt3"),
  btn4 = document.querySelector(".bt4");
let API_key = "99aeedfd1e8e734ae419e32d018469b3";
lang = "kr";
btn1.addEventListener("click", function () {
  cityname = "seoul";
  getWeather();
  playButton();

  btn1.style.background = "steelBlue";
  btn1.style.color = "white";
});
btn2.addEventListener("click", function () {
  cityname = "busan";
  getWeather();
  playButton();
  btn2.style.background = "steelBlue";
  btn2.style.color = "white";
});
btn3.addEventListener("click", function () {
  cityname = "incheon";
  getWeather();
  playButton();
  btn3.style.background = "steelBlue";
  btn3.style.color = "white";
});
btn4.addEventListener("click", function () {
  cityname = "daegu";
  getWeather();
  playButton();
  btn4.style.background = "steelBlue";
  btn4.style.color = "white";
});

let playButton = () => {
  btn1.style.background = "white";
  btn1.style.color = "black";
  btn2.style.background = "white";
  btn2.style.color = "black";
  btn3.style.background = "white";
  btn3.style.color = "black";
  btn4.style.background = "white";
  btn4.style.color = "black";
};
const getWeather = async () => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}&lang=${lang}`
  ); //async와 await는 무조건 함께 사용
  //fetch()에 가지고 올 주소 입력
  //   console.log(response);

  let data = await response.json();
  console.log(data); //기상청에 대한 날씨정보가 data에 들어감
  temp.textContent = `${parseInt(data.main.temp - 273.15)}°C`;
  place.textContent = data.name;
  wind.textContent = data.wind.speed;
  des.textContent = data.weather[0].description;

  //아이콘
  icon = data.weather[0].icon;
  console.log(icon);
  iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  console.log(iconUrl);

  iconBox.setAttribute("src", iconUrl);

  //내가 원하는 이미지 넣기
  let sun;

  if (icon == "01n") {
    sun =
      "https://cdn2.iconfinder.com/data/icons/hobbies-misc-1/512/weather___sun_sunny_solar_forecast_day_season_heat_hot.png";
  } else if (icon == "02n") {
    sun =
      "https://cdn2.iconfinder.com/data/icons/hobbies-misc-1/512/weather___cloudy_partly_forecast_sunny_season_sun_day.png";
  } else if (icon == "03d") {
    sun =
      "https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_storage_weather___cloud_cloudy_forecast_data_database.png";
  } else if (icon == "09n" || "10n") {
    sun =
      "https://cdn2.iconfinder.com/data/icons/hobbies-misc-1/512/weather___rain_raining_cloud_cloudy_raindrops_forecast_season.png";
  } else if (icon == "13n") {
    sun =
      "https://cdn3.iconfinder.com/data/icons/winter-holiday-10/512/Snowflake_Single_4.png";
  } else if (icon == "11n") {
    sun =
      "https://cdn0.iconfinder.com/data/icons/weather-forecast-element-3d/256/storm_230424.png";
  }
  imgWrap.src = sun;
};
