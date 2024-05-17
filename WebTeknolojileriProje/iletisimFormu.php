<?php

echo "Adınız : " . $_POST['fname'] . "<br>";

echo "Soyadınız : " . $_POST['lname'] . "<br>";

echo "Randevu tarihiniz : " . $_POST['date'] . "<br>";

echo "E-mail : " . $_POST['email'] . "<br>";

echo "Telefon numaranız : " . $_POST['phone'] . "<br>";

echo "Cinsiyetiniz : " . $_POST['gender'] . "<br>";

echo "Adresiniz : " . $_POST['adress'] . "<br>";

echo "Eğitim durumun : " . $_POST['education'] . "<br>";

echo "Yaşınız : " . $_POST['age'] . "<br>";

echo "Beni seviyor musun ? : " . "<br>";
if(isset($_POST['hobby'])) {
    if($_POST['hobby'] == 'on') {
        echo "Evet" . "<br>";
    }
}

echo "Ena sevdiğiniz renk : " . $_POST['color'] . "<br>";

echo "<p> <a href='anaMenu.html'>&lt;Ana Sayfaya git&gt;</a></p>";

?>