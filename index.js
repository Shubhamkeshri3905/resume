function addNewWEField() {
    // console.log("adding a textarea");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here ');
    newNode.setAttribute('rows', 3);
    //isse div mai add karna hai
    let weOb = document.getElementById('we');
    // isse phle humko ek textarea add krna hai 
    let weAddButtonOb = document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    // console.log("adding a textarea");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here ');
    newNode.setAttribute('rows', 3);
    //isse div mai add karna hai
    let weOb = document.getElementById('aq');
    // isse phle humko ek textarea add krna hai 
    let weAddButtonOb = document.getElementById('aqAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}
//generating cv 
function generateCV() {
    // console.log("generating CV");

    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;

    let nameT2 = document.getElementById('nameT2');
    nameT2.innerHTML = nameField;

    let contactField = document.getElementById('contactField').value;
    let contactT = document.getElementById('contactT');
    contactT.innerHTML = contactField;

    let addressField = document.getElementById('addressField').value;
    let addressT = document.getElementById('addressT');
    addressT.innerHTML = addressField;

    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    //we
    let wes = document.getElementsByClassName('weField');
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //adcademic

    let aq = document.getElementsByClassName('eqField');
    let str2 = "";
    for (let e of aq) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str2;

    //code for setting image
    let file = document.getElementById('imgField').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        document.getElementById('imgTemplate').src = reader.result;
    }

    //display the cv and hide form
    document.getElementById('cv-form').style.display = 'none';
    //display generated cv
    document.getElementById('cv-template').style.display = 'block';
}
function printCV() {
    // console.log("printing CV");

    window.print();


}
