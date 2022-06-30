<!-- 登陸頁的php -->
<?php
include("connection.php");


//以下兩段不能註解，這樣他才能知道要抓到資料
$email = $_POST["a"];
$password = $_POST["b"];

$sql = "SELECT * FROM member WHERE account = ? and password = ?";

   //少了pdo。
$statement = $pdo->prepare($sql);
$statement->bindParam(1, $email);
$statement->bindParam(2, $password);
$statement->execute();   //這段是必要的，要執行sql語法

$data = $statement->fetchAll();

if(count($data) > 0){
    session_start();
    $_SESSION['UserID'] = $email;
    echo "登入成功";
    echo $_SESSION['UserID'];
}else{
    echo"帳號或密碼錯誤";
}

header("Location:../member.html");

?>