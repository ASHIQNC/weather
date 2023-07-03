function searchData() {
  whether = searchcontent.value;
  // country name vech aaanu search cheyyandath
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${whether}&appid=5fe36b192ffd1c36dffb6752bc1722b2`
  )
    .then((data) => data.json())
    .then((res) => {
      displayData(res);
      console.log(res);
    })
    .catch((err) => console.log(err));
}

function displayData(cdata) {
  let kelvin = cdata.main.temp;
  let celsius = (kelvin - 273.15).toFixed(1);
  console.log("hghg", celsius);

  temperature.innerHTML = `
  <p>${celsius}°C ${cdata.weather[0].description}</p>
  
  `;
  cityname.innerHTML = `
  <p>${cdata.name}</p>
  `;

  date.innerHTML = `
  <p>${Date()}</p>
  `;

  feels.innerHTML = `
  <p>feels like ${cdata.main.feels_like}</p>
  `;
  country.innerHTML = `
    <p style="color: black">${cdata.sys.country}</p>`;
  humidity.innerHTML = `
    <p style="color: black">${cdata.main.humidity}%</p>`;
  wind.innerHTML = `
    <p style="color: black"> ${cdata.wind.speed} kmph</p>`;
  pressure.innerHTML = `
    <p  style="color: black">${cdata.main.pressure}</p>`;
}

function clearData() {
  searchcontent.value = "";

  country.innerHTML = "";
  humidity.innerHTML = "";
  wind.innerHTML = "";
  pressure.innerHTML = "";
  feels.innerHTML = "";
  cityname.innerHTML = "";
  date.innerHTML = "";
  temperature.innerHTML = "";
}

function myevent(event) {
  console.log(event);
  if (event.code == "Enter") {
    searchData();
  }
}
