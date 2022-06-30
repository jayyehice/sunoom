<?php

include("connection.php");
echo($_POST['email']);
echo("<br>");
// echo($_POST['phone']);
// echo("<br>");
// echo($_POST['last_name']);
// echo("<br>");
// echo($_POST['first_name']);
// echo("<br>");
// print_r($_POST);

$sql = "UPDATE member SET account = ?, phone = ?, last_name = ?, first_name = ? WHERE id = 2";
// UPDATE `sunoom`.`member` SET `account` = '234' WHERE (`id` = '2');
// $sql = "UPDATE member SET account = ? WHERE id = 2";
$statement = $pdo->prepare($sql);
$statement->bindParam(1, $_POST['email']);
$statement->bindParam(2, $_POST['phone']);
$statement->bindParam(3, $_POST['last_name']);
$statement->bindParam(4, $_POST['first_name']);
// $statement->bindParam(5, $_POST['memberid']);
$statement->execute();
// $data = $statement->fetchAll();

?>