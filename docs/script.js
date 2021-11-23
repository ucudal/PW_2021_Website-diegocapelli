const inputSearch = document.getElementById('visitorSearch');
inputSearch.addEventListener('click', searchUser);
const inputLoadExp = document.getElementById('loadExp');
inputLoadExp.addEventListener('click', getDataclient);

/*
function getDataclient() {
 console.log(localStorage.getItem("exp"));
 const userAction = async () => {
   const response = await fetch('https://PW2021-APINode-DiegoCapelli.diegocapelli.repl.co/experiencia-laboral');
   const myJson = await response.json(); //extract JSON from the http response

   var experienceArray = myJson['experiencia-laboral'];

   console.log("estoy aca");
   buildExperience(experienceArray);
 }
 var data = userAction();

}*/

function getDataclient() {

  var body = document.getElementsByTagName('body')[0];
  var addLoading = function () {
    
    setTimeout(function () {
     body.className = body.className.replace(/loading2/, 'loading');
     
    }, 3);
    setTimeout(function () {
      body.className = body.className.replace(/loading/, 'loading2');
      
     }, 1000);
     
  };
 

  addLoading();


  fetch('https://PW2021-APINode-DiegoCapelli.diegocapelli.repl.co/experiencia-laboral'
  ).then(response => {
    let result = response.json();
    var exp = document.getElementById('exp');
    exp.innerHTML = '';
    return result;

  }

  )
    .then(data => { 
      var experienceArray = data['experiencia-laboral'];
      buildExperience(experienceArray); 
    })
    .catch(data => {

    })
  
}
 
function searchUser() {

  let visitor = document.getElementById('visitorUserName').value;

  var listOfClients2 = JSON.parse(localStorage.getItem("users"));
  console.log(listOfClients2);
  let obj = listOfClients2.find(o => o.name === visitor);
  console.log(obj);
  let vs = document.getElementById('visitorList');
  vs.style = "display:block";

  if (typeof obj !== 'undefined') {
    document.getElementById('errorSearch').innerHTML = "";
    document.getElementById('visitorName').innerHTML = "<strong>Nombre: </strong> " + obj.name;
    document.getElementById('visitorLastName').innerHTML = "<strong>Apellido: </strong> " + obj.lastname;
    document.getElementById('visitorEmail').innerHTML = "<strong>Email: </strong> " + obj.email;
    document.getElementById('visitorPhone').innerHTML = "<strong>Celular: </strong> " + obj.phone;
    document.getElementById('visitorMotive').innerHTML = "<strong>Motivo: </strong> " + obj.motive;
  } else {

    document.getElementById('errorSearch').innerHTML = "No se encontraron resultados </br>";
    vs.style = "display:none";
  }


}


function buildExperience(experienceArray) {


  for (var indice in experienceArray) {

    var exp = document.getElementById('exp');
    console.log("dentro div");
    console.log(exp);
    window["titleExperience" + indice] = document.createElement('h3');
    window["titleExperience" + indice].className = 'mb-6';
    window["titleExperience" + indice].textContent = experienceArray[indice].empresa;


    window["firtsSection" + indice] = document.createElement('div');
    window["firtsSection" + indice].className = 'mb-6';

    window["divFirtsSectionOne" + indice] = document.createElement('div');
    window["divFirtsSectionOne" + indice].className = 'lg:inline-block lg:w-3/12 lg:align-top italic mb-2';
    console.log(experienceArray[indice]);
    let fechaIn =  experienceArray[indice].fechaInicio;
    console.log(fechaIn);
    const fecha1 = fechaIn.split("T");
    let fechaFin =  experienceArray[indice].fechaFin;
    console.log(fechaFin);
    const fecha2 = fechaFin.split("T");
    window["divFirtsSectionOne" + indice].textContent = fecha1[0]+ ' - ' + fecha2[0] ;
    window["divFirtsSectionOne" + indice].style="font-size: 14px;";
    window["divFirtsSectionTwo" + indice] = document.createElement('div');
    window["divFirtsSectionTwo" + indice].className = 'lg:inline-block lg:w-8/12 w-full';
    window["divFirtsSectionTwo" + indice].textContent = experienceArray[indice].puesto;
    window["secondSection" + indice] = document.createElement('div');
    window["secondSection" + indice].className = 'mb-6';


    window["divSecondSectionOne" + indice] = document.createElement('div');
    window["divSecondSectionOne" + indice].className = 'lg:inline-block lg:w-3/12 lg:align-top italic mb-2';
    window["divSecondSectionOne" + indice].textContent = 'Tareas';
    window["divSecondSectionTwo" + indice] = document.createElement('div');
    window["divSecondSectionTwo" + indice].className = 'lg:inline-block lg:w-8/12 w-full';
    window["divSecondSectionTwo" + indice].textContent = experienceArray[indice].descripcion;

    exp.append(window["titleExperience" + indice]);
    exp.append(window["firtsSection" + indice]);
    exp.append(window["secondSection" + indice]);
    window["firtsSection" + indice].append(window["divFirtsSectionOne" + indice]);
    window["firtsSection" + indice].append(window["divFirtsSectionTwo" + indice]);
    window["secondSection" + indice].append(window["divSecondSectionOne" + indice]);
    window["secondSection" + indice].append(window["divSecondSectionTwo" + indice]);
    localStorage.setItem("exp", "yes");
  }

}



$("#js-skill-JQ").animate({
  'value': '70',
  'opacity': '1'
}, 1000);
$("#java-spring").animate({
  'value': '75',
  'opacity': '1'
}, 1000);
$("#jsp-jsf").animate({
  'value': '80',
  'opacity': '1'
}, 1000);
$("#primefaces").animate({
  'value': '78',
  'opacity': '1'
}, 1000);
$("#php").animate({
  'value': '77',
  'opacity': '1'
}, 1000);
$("#oracle").animate({
  'value': '70',
  'opacity': '1'
}, 1000);
