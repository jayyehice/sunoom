
<?php
// <!-- 註冊頁的php -->
// $last_name = $_POST["last_name"];
// $first_name = $_POST["first_name"];
// $phone = $_POST["phone"];
// $email = $_POST["email"];
// $password = $_POST["password"];

include("connection.php");

// echo $last_name.$first_name.$phone.$email.$password;

//-------------------------------------------
//建立sql

$sql = "INSERT INTO member (account, password, phone, createdate, last_name, first_name) VALUES(?,?,?,now(),?,?)";

// $sql = "INSERT INTO member (account, password, phone, createdate, last_name, first_name) VALUES('$email','$password','$phone',now(),'$last_name','$first_name')";

$statement = $pdo->prepare($sql);
$statement->bindParam(1, $_GET['email']);
$statement->bindParam(2, $_GET['password']);
$statement->bindParam(3, $_GET['phone']);
$statement->bindParam(4, $_GET['last_name']);
$statement->bindParam(5, $_GET['first_name']);
$statement->execute();

// echo $last_name;
// $pdo->exec($sql);

header("Location:../new-login.html");
?>

