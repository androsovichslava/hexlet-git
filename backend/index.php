<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body>

    <form action="register.php" method="post">
        <div class="login_block">
            <label for="login">Введите логин</label>
            <input type="text" name="login" placeholder="Логин">
        </div>
        <div class="password_block">
            <label for="password">Введите пароль</label>
            <input type="password" name="password" placeholder="Пароль">
            <label for="repassword">Повторите пароль</label>
            <input type="password" name="repassword" placeholder="Пароль">
            <label for="email">Введите email</label>
            <input type="text" name="email" placeholder="email">
        </div>
        <div class="btn_block">
            <button type="submit" id="send">Отправить</button>
        </div>
    </form>


    <form action="login.php" method="post">
        <div class="login_block">
            <label for="login">Введите email</label>
            <input type="text" name="login" placeholder="Логин">
        </div>
        <div class="password_block">
            <label for="password">Введите пароль</label>
            <input type="password" name="password" placeholder="Пароль">
        </div>
        <div class="btn_block">
            <button type="submit" id="send">Отправить</button>
        </div>
    </form>

</body>

</html>