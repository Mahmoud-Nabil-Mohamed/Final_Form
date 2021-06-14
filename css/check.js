window.onload = pageLoad;

function pageLoad() {
    var contactForm = document.getElementById("check_info");
    contactForm.onsubmit = validate;
}

function validate() {
    var check = true;
    var name = document.getElementById("fname").value;
    var name1 = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("num").value;
    var password = document.getElementById("pass").value;


    if (name == "") {
        alert('Name is required !');
        check = false;
    } else if (name1 == "") {
        alert('last-Name is required !');
        check = false;
    } else if (address == "") {
        alert('address is required !');
        check = false;
    } else if (mail == "") {
        alert('E-mail is required !');
        check = false;
    } else if (password == "") {
        alert('Password is required !');
        check = false;
    } else if (phone == "") {

        alert('Phone is required !');
    }


    if (!name.match(/^[A-Za-z ]+$/)) { //space------------------------------
        alert("only letters or space allowed in name field");
        check = false;
    } else if (!name1.match(/^[A-Za-z ]+$/)) { //space------------------------------
        alert("only letters or space allowed in name field");
        check = false;
    } else if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
        alert("Email is Not Valid");
        check = false;
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
        alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
        check = false;
    } else if (!phone.match(/^[0-9]{11}$/)) {

        alert("Phone is not valid");
        check = false;
    }
    if (check == true) {
        alert("successful regestration");
    }

    return check;


}