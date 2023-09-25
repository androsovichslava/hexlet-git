<?php
require_once('db.php');
mysqli_query($conn, "SET NAMES 'utf8'");
$login = $_POST['login'];
$password = $_POST['password'];
$repassword = $_POST['repassword'];
$email = $_POST['email'];

if (empty($login) || empty($password) || empty($repassword) || empty($email)) {
    echo "Заполните все поля";
} else {
    if ($password != $repassword) {
        echo "Пароли не совпадают";
    } else {

        $sql = "INSERT `users` (login, password, email) VALUES ('$login', '$password', '$email')";
        if ($conn->query($sql) === TRUE) {
            echo "Успешная регистрация";
        } else {
            echo "Ошибка" . $conn->error;
        }
    }
}
