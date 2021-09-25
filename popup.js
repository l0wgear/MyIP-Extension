let ip_text = document.getElementById("ip");
let country_text = document.getElementById("country");

function setIP() {
  const request = new Request("https://api.myip.com");

  clearText(ip_text, country_text);

  fetch(request)
    .then((response) => {
      return response.json();
    })
    .then((dataIP) => {
      let ip = dataIP.ip;
      let country = dataIP.country;
      ip_text.innerHTML = ip;
      country_text.innerHTML = country;
      ip_text.style.display = "initial";
      country_text.style.display = "initial";
    });
}

function clearText(...fields) {
  for (let field of fields) {
    field.innerText = "";
    field.style.display = "none";
  }
}

let getIP = document.getElementById("getIP");
getIP.addEventListener("click", setIP);
