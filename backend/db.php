<?php
$host = 'localhost'; // имя хоста
$user = 'root';      // имя пользователя
$pass = '';          // пароль
$name = 'react';      // имя базы данных

$conn = mysqli_connect($host, $user, $pass, $name);
if (!$conn) {
    die('Ошибка подключения к базе  ' . mysqli_connect_error());
} else {
    // echo  'Успех';
}
