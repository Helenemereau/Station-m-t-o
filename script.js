
let ville  ;



let changer = document.querySelector("#changer");

changer.addEventListener("click", () => {
  ville = prompt("Entrer une ville");

  if(ville){
    let span = document.querySelector("span");
    span.textContent = ville;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=f96bd92c071517e9b660880da08f1fc9&units=metric`;

  let requete = new XMLHttpRequest();
  requete.open("GET", url); 
  requete.responseType = "json";
  
  requete.onload = function() {
    if (requete.status === 200) {
      const data = requete.response;
      let temp = data.main.temp;
      document.querySelector("#temperature").textContent =temp;
  
      console.log(data);

     
    } else {
      console.error('Erreur de requête');
    }
  };
  
  
  requete.send();
  }
  });



