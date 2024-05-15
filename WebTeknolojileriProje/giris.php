<?php

$mailGirdisi = $_POST['mailAdresi'];
$sifreGirdisi = $_POST['sifre'];

$message = "Hoş geldiniz ". $mailGirdisi;

if (($mailGirdisi == "B231210010" || $mailGirdisi == "b231210010") && $sifreGirdisi == "2003")
{
    echo "<script type='text/javascript'>
    var message = \"$message\";
    window.alert(message);
    window.location.href = 'anaMenu.html';
    </script>";
}

else
{
    echo "<script type='text/javascript'>
    window.alert('Yanlış bilgi girişi , yeniden deneyiniz');
    window.location.href = 'giris.html';
    </script>";
}

?>
