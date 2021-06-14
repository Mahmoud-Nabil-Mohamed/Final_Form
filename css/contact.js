window.onload = pageLoad;

function pageLoad() {
    var contactForm = document.getElementById("contact");
    contactForm.onsubmit = validate;
}

function validate() {
    var check = true;
    var name = document.getElementById("fname").value;
    var name1 = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("num").value;
    var sub = document.getElementById("subject").value;


    if (name == "") {
        alert('Name is required !');
        check = false;
    } else if (name1 == "") {
        alert('last-Name is required !');
        check = false;
    } else if (mail == "") {
        alert('E-mail is required !');
        check = false;
    } else if (phone == "") {
        alert('Number is required !');
        check = false;
    } else if (sub == "") {
        alert('Your Complaint is required !');
        check = false;
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
    } else if (!phone.match(/^[0-9]{11}$/)) {

        alert("Phone is not valid");
        check = false;
    }
    if (check == true) {
        alert("Thank you for your support we will run on it ");
    }

    return check;


}