
const button = document.querySelector('button');

let modal;
let backdrop;



button.addEventListener('click', showModalHandler);

const inputSearch = document.getElementById('visitorSearch');
inputSearch.addEventListener('click', searchUser);

function showModalHandler() {

  if (modal) {
    console.log("modal");
    return;
  }
  buildForm();

}
function searchUser() {
  
  let visitor = document.getElementById('visitorUserName').value; 
  let obj = listOfClients.find(o => o.name === visitor); 
  let vs = document.getElementById('visitorList');
  vs.style = "display:block";
  console.log(obj); 
  if (typeof obj !== 'undefined') {
    
    console.log("ssssssssssssssssssssssssssss")
    document.getElementById('visitorName').innerHTML = "<strong>Nombre: </strong> " + obj.name;
    document.getElementById('visitorLastName').innerHTML = "<strong>Apellido: </strong> " + obj.lastname;
    document.getElementById('visitorEmail').innerHTML = "<strong>Email: </strong> " + obj.email;
    document.getElementById('visitorPhone').innerHTML = "<strong>Celular: </strong> " + obj.phone;
    document.getElementById('visitorMotive').innerHTML = "<strong>Motivo: </strong> " + obj.motive;
  } else {
    vs.style = "display:none";
  }


}



class ClientData {
  constructor() {
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var motive = document.getElementById('motive').value;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.motive = motive;


  }
}

var listOfClients = [];


function submitModalHandler() {

  let nameView = document.getElementById('name').value;
  let emailView = document.getElementById('email').value;
  let phoneView = document.getElementById('phone').value;
  var clientData;

  var re = /\S+@\S+\.\S+/;
  var rePhone = /\d*/;
  if (!re.test(emailView)) {
    alert("error mail incorrecto");

  } else {

    if (!rePhone.test(phoneView)) {
      alert("Formato de celular incorrecto");
    }else{
      var client = new ClientData();
      listOfClients.push(client);
      alert("Datos ingresados correctamente");
    }
   

  }

  

}

function buildForm() {

  modal = document.createElement('div');
  modal.className = 'modal ';

  const formDiv = document.createElement('div');
  formDiv.className = 'flex flex-row';

  const sidebarPopUp = document.createElement('div');
  sidebarPopUp.className = 'content w-full formCustom formCustomRow bg-gradient-to-b from-indigo-300 dark:bg-black via-green-300   to-whitel  ';

  const sidebarPopUp2 = document.createElement('div');
  sidebarPopUp2.className = 'content w-full formCustomRow bg-gradient-to-b from-indigo-300 dark:bg-black via-green-300   to-whitel  ';

  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'flex justify-center';

  var form = document.createElement("form");

  form.method = "POST";
  form.action = "index.html";


  const LabelName = document.createElement('label');
  LabelName.textContent = 'Nombre';
  LabelName.style = "display: block";

  const inputName = document.createElement('input');
  inputName.id = 'name';
  inputName.name = 'name';
  inputName.required = "true";
  inputName.style = "display: block";

  const LabellastName = document.createElement('label');
  LabellastName.textContent = 'Apellido';
  LabellastName.style = "display: block";
  const inputLastName = document.createElement('input');
  inputLastName.id = 'lastname';
  inputLastName.name = 'lastname';
  inputLastName.style = "display: block";


  const LabelEmail = document.createElement('label');
  LabelEmail.textContent = 'Email';
  LabelEmail.style = "display: block";
  const inputEmail = document.createElement('input');
  inputEmail.id = 'email';
  inputEmail.name = 'email';
  inputEmail.style = "display: block";
  inputEmail.required = "true";



  const LabelPhone = document.createElement('label');
  LabelPhone.textContent = 'Celular';
  LabelPhone.style = "display: block";
  const inputPhone = document.createElement('input');
  inputPhone.id = 'phone';
  inputPhone.name = 'phone';
  inputPhone.style = "display: block";


  const Labelmotive = document.createElement('label');
  Labelmotive.textContent = 'Motivo';
  Labelmotive.style = "display: block";
  const inputMotive = document.createElement('textarea');
  inputMotive.id = 'motive';
  inputMotive.name = 'motive';
  inputMotive.style = "display: block";



  const modalText = document.createElement('legend');
  modalText.className = "formTitle";
  modalText.textContent = 'Ingresa tus datos';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancelar';
  modalCancelAction.className = 'button cancel';
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Confirmar';
  modalConfirmAction.className = 'button';
  modalConfirmAction.type = "submit";
  modalConfirmAction.value = "Submit";
  modalConfirmAction.addEventListener('click', submitModalHandler);


  const modalCleanAction = document.createElement('button');
  modalCleanAction.textContent = 'Resetear';
  modalCleanAction.className = 'button';
  modalCleanAction.addEventListener('click', cleanModalHandler);

  form.submit();
  //form.appendChild(fieldset);

  sidebarPopUp.append(LabelName);
  sidebarPopUp.append(inputName);
  sidebarPopUp2.append(LabellastName);
  sidebarPopUp2.append(inputLastName);
  sidebarPopUp.append(LabelEmail);
  sidebarPopUp.append(inputEmail);
  sidebarPopUp2.append(LabelPhone);
  sidebarPopUp2.append(inputPhone);
  sidebarPopUp.append(Labelmotive);
  sidebarPopUp.append(inputMotive);

  formDiv.append(sidebarPopUp);
  formDiv.append(sidebarPopUp2);
  form.append(modalText);
  form.append(formDiv);
  modal.append(form);
  modal.append(buttonDiv);
  buttonDiv.append(modalCancelAction);
  buttonDiv.append(modalConfirmAction);
  buttonDiv.append(modalCleanAction);

  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler);

  document.body.append(backdrop);

}



function closeModalHandler() {

  modal.remove();
  modal = null;
  backdrop.remove();
  backdrop = null;

}
function cleanModalHandler() {

  document.getElementById('name').value = "";
  document.getElementById('lastname').value = "";
  document.getElementById('email').value = "";
  document.getElementById('phone').value = "";
  document.getElementById('motive').value = "";

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





