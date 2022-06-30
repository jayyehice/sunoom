
<?php
include("connection.php");


//以下兩段不能註解，這樣他才能知道要抓到資料
$email = $_GET["account"];
$password = $_GET["password"];

$sql = "SELECT * FROM member WHERE account = ? and password = ?";


//少了pdo。
$statement = $pdo->prepare($sql);
$statement->bindParam(1, $email);
$statement->bindParam(2, $password);
$statement->execute();   //這段是必要的，要執行sql語法
$data = $statement->fetchAll();

// print_r($data);

// echo "<br>";
// echo json_encode("aaa");

echo json_encode($data);




?>