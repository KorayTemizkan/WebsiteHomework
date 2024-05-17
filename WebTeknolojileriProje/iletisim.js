function validateForm() {
    var form = document.forms["Form"];
    var firstName = form["fname"].value.trim();
    var lastName = form["lname"].value.trim();
    var date = form["date"].value.trim();
    var email = form["email"].value.trim();
    var gender = form["gender"].value.trim();
    var address = form["adress"].value.trim();
    var education = form["education"].value.trim();
    var phone = form["phone"].value.trim();
    var age = form["age"].value;
    var color = form["color"].value.trim();
    var photo = form["photo"].value.trim();

    if (firstName === "" || lastName === "" || date === "" || email === "" || phone === "" || gender === "" || address === "" || education === "Seçiniz" || age === "" || color === "" || photo === "") {
        window.alert('Lütfen eksik yer bırakmayınız!');
        return false;
    }

    var nameDuzen = /^[a-zA-ZğüşöçİĞÜŞÖÇ]+$/;
    if (!nameDuzen.test(firstName) || !nameDuzen.test(lastName)) {
        window.alert('Ad-Soyad alanında yalnızca harf olmalıdır');
        return false;
    }

    var emailDuzen = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailDuzen.test(email)) {
        window.alert("Geçersiz e-mail");
        return false;
    }
    
    var phoneDuzen = /^(\+?90|0)?\s*5\d{2}\s*\d{3}\s*\d{2}\s*\d{2}$/;
    if (!phoneDuzen.test(phone)) {
        window.alert("Geçersiz telefon numarası");
        return false;
    }

    if (isNaN(age) || age < 10 || age > 100) {
        window.alert("Geçersiz yaş");
        return false;
    }

    var simdikiTarih = new Date();
    var secilenTarih = new Date(date);
    if (secilenTarih < simdikiTarih) {
        window.alert("Yalnızca gelecek tarih secilebilir");
        return false;
    }
}
