<!-- 登陸頁的php -->
<?php
// $email = $_POST["account"];
// $password = $_POST["password"];

include("connection.php");

$sql = "SELECT * FROM member WHERE account = ? and password = ?";


$statement = $pdo->prepare($sql);
$statement->bindParam(1, $_POST['account']);
$statement->bindParam(2, $_POST['password']);
// $statement->execute();

$data = $statement->fetchAll();

if(count($data) > 0){
    echo"登入成功";
}else{
    echo"帳號或密碼錯誤";
}

?>