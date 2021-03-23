const request = new Request('https://api.myip.com');

let ip_text = document.getElementById("ip");
let country_text = document.getElementById("country");

function setIP() {
    
    //ip_text.innerHTML = "ip";
    //country_text.innerHTML = "country";

    fetch(request)
        .then(response => {
            return response.json();
        })
        .then(dataIP => {
            
            let ip = dataIP.ip;
            let country = dataIP.country;
            ip_text.innerHTML = ip;
            country_text.innerHTML = country;
        });
    
}

let getIP = document.getElementById("getIP");
getIP.addEventListener("click", setIP);


