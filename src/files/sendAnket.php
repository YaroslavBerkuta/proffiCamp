<meta http-equiv='refresh' content='10; url=http://thecode.local/'>
<meta charset="UTF-8" />
<?php
header('Access-Control-Allow-Origin: http://localhost:3000/anketa.html'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
// Получаем значения переменных из пришедших данных
$surnameChildren=$_POST['surnameChildren'];
$nameChildren=$_POST['nameChildren'];
$fatherChildren = $_POST['fatherChildren'];
$sex = $_POST['sex'];
$birthday = $_POST['birthday'];
$sity = $_POST['sity'];
$heith= $_POST['heith'];
$vaga = $_POST['vaga'];
$dosvid = $_POST['dosvid'];
$comand = $_POST['comand'];
$phone = $_POST['phone'];
$fatherSurname = $_POST['fatherSurname'];
$fatherName = $_POST['fatherName'];
$fatherPhone = $_POST['fatherPhone'];
$fatherEmail = $_POST['fatherEmail'];
$message = $_POST['message'];
$dopInfo = $_POST['dopInfo'];
$zmina = $_POST['zmina'];
$tarif = $_POST['tarif'];
$order = $_POST['order'];
$data = $_POST['data'];
$ofert = $_POST['ofert'];

$headers = 'From: yaroslavberkuta@gmail.com' . "\r\n" .
// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$mes = "$surnameChildren,$nameChildren,$fatherChildren,$sex,день народження:$birthday,я з міста:$sity,зріст $heith, вага $vaga, мій досвід: $dosvid, я граю в команді: $comand, мій номер:$phone, ДАННІ про Батьків: $fatherSurname, $fatherName, $fatherPhone, $fatherEmail, $message,$dopInfo, вибрана зміна $zmina,тариф $tarif, оплачую $order, даю згоду на обробку даних $data, договір оферти ознайомлений $ofert";

// Пытаемся отправить письмо по заданному адресу
// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $email на свой адрес электронной почты
$send = mail('yaroslavberkuta@gmail.com', 'Сайт Eco-Alt телефона форма', $mes,$headers);
// Если отправка прошла успешно — так и пишем
if ($send == 'true') {echo "Сообщение отправлено";}
// Если письмо не ушло — выводим сообщение об ошибке
else {echo "Ой, что-то пошло не так";}
?>
