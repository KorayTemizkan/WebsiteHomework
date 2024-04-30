function Start() {
    let count = 0;
    let veri = document.querySelectorAll(".veri");


    veri.forEach((veriler) => {

        if (veriler.value == "") {
            veriler.style.color = "red";
            veriler.value = "Eksik giriş!";
        }
    })
}