<meta http-equiv='refresh' content='10; url=http://thecode.local/'>
<meta charset="UTF-8" />
<?php
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
// Получаем значения переменных из пришедших данных
$tel=$_POST['phone'];
$name=$_POST['name'];

$headers = 'From: yaroslavberkuta@gmail.com' . "\r\n" .
// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$mes = "Контактна інформація клієнта з $name номер телефону:$tel ";

// Пытаемся отправить письмо по заданному адресу
// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $email на свой адрес электронной почты
$send = mail('yaroslavberkuta@gmail.com', 'Сайт Eco-Alt телефона форма', $mes,$headers);
// Если отправка прошла успешно — так и пишем
if ($send == 'true') {echo "Сообщение отправлено";}
// Если письмо не ушло — выводим сообщение об ошибке
else {echo "Ой, что-то пошло не так";}
?>
