<?php
require_once('db.php');
mysqli_query($conn, "SET NAMES 'utf8'");


$login = $_POST['login'];
$password = $_POST['password'];

if (empty($login) || empty($password)) {
    echo "Заполните все поля";
} else {
    $sql = "SELECT * FROM `users` WHERE login ='$login' AND password = '$password'";
    $result = $conn->query($sql);
    echo $result->num_rows;
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "Добро пожаловать " . $row['login'];
        }
    } else {
        echo "Нет такого пользователя";
    }
}


// echo '<h1>Привет юзверь ' . $login . '</h1>';
// if (!empty($_POST['password']) and !empty($_POST['login'])) {

//     echo $login;

//     $query = "SELECT * FROM users WHERE login='$login' AND password='$password'";
//     $res = mysqli_query($link, $query);
//     $user = mysqli_fetch_assoc($res);

//     if (!empty($user)) {
//         echo '</br><h2>Прошел авторизацию</h2>';
//     } else {
//         echo '</br><h2>неверно ввел логин или пароль</h2>';
//         // неверно ввел логин или пароль
//     }
// } else {
//     echo '</br><h2>неверно ввел логин или пароль</h2>';
// }
