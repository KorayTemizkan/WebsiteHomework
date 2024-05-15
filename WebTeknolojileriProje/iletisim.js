function validateForm() {
    var firstName = document.forms["Form"]["fname"].value;
    var lastName = document.forms["Form"]["lname"].value;
    var date = document.forms["Form"]["date"].value;
    var email = document.forms["Form"]["email"].value;
    var gender = document.forms["Form"]["gender"].value;
    var adress = document.forms["Form"]["adress"].value;
    var education = document.forms["Form"]["education"].value;
    var phone = document.forms["Form"]["phone"].value;
    var age = parseInt(document.forms["Form"]["age"].value);
    var color = document.forms["Form"]["color"].value;
    var file = document.forms["Form"]["color"].value;

    if (firstName == "" || lastName == "" || date == "" || email == "" || phone == "" || gender == "" || adress == "" || education == "Seçiniz" || age == "" || color == "" || file == "") {
        window.alert('Lütfen eksik yer bırakmayınız !');
        return false;
    }

    if (!isNaN(firstName) || !isNaN(lastName)) {
        window.alert('Ad-Soyad alanında yalnızca harf olmalıdır');
        return false;
    }

    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");

    if (at < 1 || dot < at + 2 || dot2 >= email.length) {
        window.alert("Geçersiz e-mail");
        return false;
    }
}