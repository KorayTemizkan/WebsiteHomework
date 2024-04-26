<?php

$mailGirdisi = $_POST['mailAdresi'];
$sifreGirdisi = $_POST['sifre'];

$mesaj = "Hoş geldiniz $mailGirdisi --> Devam etmek için 'Tamam'a tıklayınız";

if (($mailGirdisi == "B231210010" || $mailGirdisi == "b231210010") && $sifreGirdisi == "2003")
{
    echo $mesaj;
    header('Location: anaMenu.html');
    exit;
}

?>