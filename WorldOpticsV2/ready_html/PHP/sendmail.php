<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', '/PHPMailer-master/language');
    $mail->isHTML(true);

    $mail->setFrom('worldoptics.ru', 'World Optics');
    $mail->addAddress($_POST['email']);
    $mail->Subject = 'Hello! This is World Optics';

    /*body of the letter*/

    $body = '<h1>Hello! This is World Optics</h1>';
    if(trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'error';
    } else {
        $message = 'Data sent!';
    }
    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>

