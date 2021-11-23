var button = document.querySelector('button');
var modal;
var backdrop;
function bluidExperience(json) {
    var experience = document.createElement('h3');
    experience.textContent = 'Empresa X'; //aca cargo respuesta Rest
    var section = document.createElement('section');
    section.className = 'mb-6';
    var sidebarPopUp = document.createElement('div');
    sidebarPopUp.className = 'content w-full formCustom formCustomRow bg-gradient-to-b from-indigo-300 dark:bg-black via-green-300   to-whitel  ';
    var sidebarPopUp2 = document.createElement('div');
    sidebarPopUp2.className = 'content w-full formCustomRow bg-gradient-to-b from-indigo-300 dark:bg-black via-green-300   to-whitel  ';
    var buttonDiv = document.createElement('div');
    buttonDiv.className = 'flex justify-center';
    var form = document.createElement("form");
}
function addClient() {
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var motive = document.getElementById('motive').value;
    var data = {
        nombreContacto: name,
        email: email,
        lastname: lastname,
        phone: phone,
        motive: motive
    };
    fetch('https://PW2021-APINode-DiegoCapelli.diegocapelli.repl.co/enviar-formulario', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        var emailView = document.getElementById('email').value;
        var phoneView = document.getElementById('phone').value;
        // var re = new RegExp('/\S+@\S+\.\S+$/');
        //var re = new RegExp('^\\S+@\\S+$');
        var re = '^\\S+@\\S+$';
        var nameView = document.getElementById('name').value;
        if (nameView == '') {
            var alert_1 = document.getElementById('alert_id');
            alert_1.textContent = "El campo Nombre es obligatorio";
            alert_1.style = "display: block;color: red";
            var vs = document.getElementById('visitorList');
            vs.style = "display:block";
        }
        else {
            var rePhone = new RegExp('^\\d*$');
            if (!rePhone.test(phoneView)) {
                var alert_2 = document.getElementById('alert_id');
                alert_2.textContent = "Formato de celular incorrecto";
                alert_2.style = "display: block;color: red";
            }
            else {
                var client = new ClientData();
                listOfClients.push(client);
                localStorage.setItem("users", JSON.stringify(listOfClients));
                var result = response.json();
                return result;
            }
        }
        console.log(response.json());
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        var alert = document.getElementById('alert_id');
        alert.textContent = data;
        alert.style = "display: block;color: green";
    })["catch"](function (data) {
        console.log("error acacaca en chact");
        var alert = document.getElementById('alert_id');
        alert.textContent = data.json();
        alert.style = "display: block;color: red";
    });
}
button.addEventListener('click', showModalHandler);
function showModalHandler() {
    if (modal) {
        return;
    }
    buildForm();
}
var ClientData = /** @class */ (function () {
    function ClientData() {
        this.name = document.getElementById('name').value;
        this.lastname = document.getElementById('lastname').value;
        this.email = document.getElementById('email').value;
        this.phone = document.getElementById('phone').value;
        this.motive = document.getElementById('motive').value;
    }
    return ClientData;
}());
var listOfClients = [];
function submitModalHandler() {
    var emailView = document.getElementById('email').value;
    var re = new RegExp(/^\S+@\S+\.\S+$/);
    //var re = new RegExp('^\\S+@\\S+$');
    if (emailView != '') {
        if (!re.test(emailView)) {
            var alert_3 = document.getElementById('alert_id');
            alert_3.textContent = "Error mail incorrecto";
            alert_3.style = "display: block;color: red";
            var vs = document.getElementById('visitorList');
            vs.style = "display:block";
        }
        else {
            addClient();
        }
    }
    else {
        addClient();
    }
    var clientData;
}
function buildForm() {
    modal = document.createElement('div');
    modal.className = 'modal ';
    var formDiv = document.createElement('div');
    formDiv.className = 'flex flex-row';
    var sidebarPopUp = document.createElement('div');
    sidebarPopUp.className = 'content w-full formCustom formCustomRow bg-gradient-to-b from-indigo-300 dark:bg-black via-green-300   to-whitel  ';
    var sidebarPopUp2 = document.createElement('div');
    sidebarPopUp2.className = 'content w-full formCustomRow bg-gradient-to-b from-indigo-300 dark:bg-black via-green-300   to-whitel  ';
    var buttonDiv = document.createElement('div');
    buttonDiv.className = 'flex justify-center';
    var form = document.createElement("form");
    form.method = "POST";
    form.action = "index.html";
    var LabelName = document.createElement('label');
    LabelName.textContent = 'Nombre';
    LabelName.style = "display: block";
    var inputName = document.createElement('input');
    inputName.id = 'name';
    inputName.name = 'name';
    inputName.required = "true";
    inputName.style = "display: block";
    var LabellastName = document.createElement('label');
    LabellastName.textContent = 'Apellido';
    LabellastName.style = "display: block";
    var inputLastName = document.createElement('input');
    inputLastName.id = 'lastname';
    inputLastName.name = 'lastname';
    inputLastName.style = "display: block";
    var LabelEmail = document.createElement('label');
    LabelEmail.textContent = 'Email';
    LabelEmail.style = "display: block";
    var inputEmail = document.createElement('input');
    inputEmail.id = 'email';
    inputEmail.name = 'email';
    inputEmail.style = "display: block";
    inputEmail.required = "true";
    var LabelPhone = document.createElement('label');
    LabelPhone.textContent = 'Celular';
    LabelPhone.style = "display: block";
    var inputPhone = document.createElement('input');
    inputPhone.id = 'phone';
    inputPhone.name = 'phone';
    inputPhone.style = "display: block";
    var Labelmotive = document.createElement('label');
    Labelmotive.textContent = 'Motivo';
    Labelmotive.style = "display: block";
    var inputMotive = document.createElement('textarea');
    inputMotive.id = 'motive';
    inputMotive.name = 'motive';
    inputMotive.style = "display: block";
    var modalText = document.createElement('legend');
    modalText.className = "formTitle";
    modalText.textContent = 'Ingresa tus datos';
    var modalCancelAction = document.createElement('button');
    modalCancelAction.textContent = 'Cancelar';
    modalCancelAction.className = 'button cancel';
    modalCancelAction.addEventListener('click', closeModalHandler);
    var modalConfirmAction = document.createElement('button');
    modalConfirmAction.textContent = 'Confirmar';
    modalConfirmAction.className = 'button';
    modalConfirmAction.type = "submit";
    //modalConfirmAction.value = "Submit";
    modalConfirmAction.addEventListener('click', submitModalHandler);
    var modalCleanAction = document.createElement('button');
    modalCleanAction.textContent = 'Resetear';
    modalCleanAction.className = 'button';
    var alertMessage = document.createElement('label');
    alertMessage.textContent = '';
    alertMessage.style = "display: none";
    alertMessage.className = "TextCenter";
    alertMessage.id = "alert_id";
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
    form.append(alertMessage);
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
    var name = document.getElementById('name').value;
    name = "";
    var lastname = document.getElementById('lastname').value;
    lastname = "";
    var email = document.getElementById('email').value;
    email = "";
    var phone = document.getElementById('phone').value;
    phone = "";
    var motive = document.getElementById('motive').value;
    motive = "";
    var alert = document.getElementById('alert_id');
    alert.style = "display: none;color: green";
}
