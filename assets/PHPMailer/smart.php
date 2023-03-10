<?php

require("src/PHPMailer.php");
require("src/SMTP.php");
require("src/Exception.php");

$mail = new PHPMailer\PHPMailer\PHPMailer();

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail->IsSMTP();
$mail->CharSet="UTF-8";
$mail->Host = "seomood.unixstorm.eu"; /* Zależne od hostingu poczty*/
$mail->SMTPDebug = 0;
$mail->Port = 587 ;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
#$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->IsHTML(true);
$mail->Username = ""; 
$mail->Password = ""; 
$mail->setfrom('', 'Seomood za efekt');
$mail->addaddress(""); 
$mail->Subject = "Wiadomość od klienta"; 

$mail->Body    = '
		Uzytkownik zostawił dane <br>
	Imię i Nazwisko: ' . $name . ' <br>
	Numer telefonu: ' . $phone . ' <br>
  Wiadomosc: ' . $message . ' <br>
	E-mail: ' . $email  . '';

if(!$mail->Send()) {
echo "Błąd wysyłania e-maila: " . $mail->ErrorInfo;
} else {
echo "Wiadomość została wysłana!";
}

?>