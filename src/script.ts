
const button: any = document.querySelector('button');

let modal: any;
let backdrop: any;


function bluidExperience(json: any) {


    var experience = document.createElement('h3');
    experience.textContent = 'Empresa X';//aca cargo respuesta Rest

    var section = document.createElement('section');

    section.className = 'mb-6';

    const sidebarPopUp = document.createElement('div');
    sidebarPopUp.className = 'content w-full formCustom formCustomRow bg-gradient-to-b from-indigo-300 dark:bg-black via-green-300   to-whitel  ';

    const sidebarPopUp2 = document.createElement('div');
    sidebarPopUp2.className = 'content w-full formCustomRow bg-gradient-to-b from-indigo-300 dark:bg-black via-green-300   to-whitel  ';

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'flex justify-center';

    var form = document.createElement("form");

}

function addClient() {

    var name: string | null = (<HTMLInputElement>document.getElementById('name')).value;

    var lastname: string | null = (<HTMLInputElement>document.getElementById('lastname')).value;
    var email: string | null = (<HTMLInputElement>document.getElementById('email')).value;
    var phone: string | null = (<HTMLInputElement>document.getElementById('phone')).value;
    var motive: string | null = (<HTMLInputElement>document.getElementById('motive')).value;

    var data = {
        nombreContacto: name,
        email: email,
        lastname: lastname,
        phone: phone,
        motive: motive
    };


    fetch('https://PW2021-APINode-DiegoCapelli.diegocapelli.repl.co/enviar-formulario',
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),

        }).then(response => {
         
            let emailView: string = (<HTMLInputElement>document.getElementById('email')).value;
            let phoneView: string = (<HTMLInputElement>document.getElementById('phone')).value;
          
            // var re = new RegExp('/\S+@\S+\.\S+$/');
            //var re = new RegExp('^\\S+@\\S+$');

            var re = '^\\S+@\\S+$';
            let nameView = (<HTMLInputElement>document.getElementById('name')).value;

            if (nameView == '') {
                let alert: any = document.getElementById('alert_id');
                alert.textContent = "El campo Nombre es obligatorio";
                alert.style = "display: block;color: red";
                let vs: any = document.getElementById('visitorList');
                vs.style = "display:block";
            } else {

                var rePhone = new RegExp('^\\d*$');
                if (!rePhone.test(phoneView)) {
                    let alert: any = document.getElementById('alert_id');
                    alert.textContent = "Formato de celular incorrecto";
                    alert.style = "display: block;color: red";

                } else {
                    var client: any = new ClientData();
                    listOfClients.push(client);

                    localStorage.setItem("users", JSON.stringify(listOfClients));
                    var result: any = response.json()
                    return result;
                }

            }
            return result;

        }

        )
        .then(data => { 
            let alert: any = document.getElementById('alert_id');
            alert.textContent = data;
            alert.style = "display: block;color: green"; 
        })
        .catch(data => { 
            let alert: any = document.getElementById('alert_id');
            alert.textContent = "Error interno, por favor intente mas tarde";
            alert.style = "display: block;color: red"; 
        })

}
 
button.addEventListener('click', showModalHandler);
 
function showModalHandler() {

    if (modal) {

        return;
    }
    buildForm();

}


class ClientData {

    name: string = (<HTMLInputElement>document.getElementById('name')).value;
    lastname: string = (<HTMLInputElement>document.getElementById('lastname')).value;
    email: string = (<HTMLInputElement>document.getElementById('email')).value;
    phone: string = (<HTMLInputElement>document.getElementById('phone')).value;
    motive: string = (<HTMLInputElement>document.getElementById('motive')).value;


}

var listOfClients: any = [];


function submitModalHandler() {

    let emailView:string = (<HTMLInputElement>document.getElementById('email')).value;
 
    var re = new RegExp(/^\S+@\S+\.\S+$/);
    //var re = new RegExp('^\\S+@\\S+$');
    if (emailView != '') {
        if (!re.test(emailView)) {
            let alert:any = document.getElementById('alert_id');
            alert.textContent = "Error mail incorrecto";
            alert.style = "display: block;color: red";
            let vs:any = document.getElementById('visitorList');
            vs.style = "display:block";
        } else {

            addClient();
        }
    } else {

        addClient();

    }


    var clientData;

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


    const LabelName:any = document.createElement('label');
    LabelName.textContent = 'Nombre';
    LabelName.style = "display: block";

    const inputName:any = document.createElement('input');
    inputName.id = 'name';
    inputName.name = 'name';
    inputName.required = "true";
    inputName.style = "display: block";

    const LabellastName:any = document.createElement('label');
    LabellastName.textContent = 'Apellido';
    LabellastName.style = "display: block";
    const inputLastName:any = document.createElement('input');
    inputLastName.id = 'lastname';
    inputLastName.name = 'lastname';
    inputLastName.style = "display: block";


    const LabelEmail:any = document.createElement('label');
    LabelEmail.textContent = 'Email';
    LabelEmail.style = "display: block";
    const inputEmail:any = document.createElement('input');
    inputEmail.id = 'email';
    inputEmail.name = 'email';
    inputEmail.style = "display: block";
    inputEmail.required = "true";



    const LabelPhone:any = document.createElement('label');
    LabelPhone.textContent = 'Celular';
    LabelPhone.style = "display: block";
    const inputPhone:any = document.createElement('input');
    inputPhone.id = 'phone';
    inputPhone.name = 'phone';
    inputPhone.style = "display: block";


    const Labelmotive:any = document.createElement('label');
    Labelmotive.textContent = 'Motivo';
    Labelmotive.style = "display: block";
    const inputMotive:any = document.createElement('textarea');
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
    //modalConfirmAction.value = "Submit";
    modalConfirmAction.addEventListener('click', submitModalHandler);


    const modalCleanAction = document.createElement('button');
    modalCleanAction.textContent = 'Resetear';
    modalCleanAction.className = 'button';

    const alertMessage:any = document.createElement('label');
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
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    name = "";
    let lastname= (<HTMLInputElement>document.getElementById('lastname')).value;
    lastname = "";
    let email = (<HTMLInputElement>document.getElementById('email')).value ;
    email = "";
    let phone = (<HTMLInputElement>document.getElementById('phone')).value;
    phone = "";
    let motive =  (<HTMLInputElement>document.getElementById('motive')).value;
    motive = "";
    let alert:any = document.getElementById('alert_id');
    alert.style = "display: none;color: green";

}








