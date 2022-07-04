<?php

include("connection.php");

$arr=[];
for($i = 97;$i <= 122; $i++ ){
    // echo chr($i);
    array_push($arr,chr($i));
}

for($i = 0; $i <= 9; $i++ ){
    array_push($arr,$i);
}
shuffle($arr);
// print_r($arr);
$nums = [];
foreach($arr as $index => $value){
    array_push($nums,$value);
}

$password = '';
for($i = 0 ; $i <= 7; $i++){
    $password = $password.$nums[$i];
    
}
echo $password;

$data =  json_decode(file_get_contents("php://input"), true);

$account = $data["account"];
$phone = $data["phone"];
$createdate = $data["createdate"];
$last_name = $data["last_name"];
$first_name = $data["first_name"];
$state = $data["state"];

$sqlm = "INSERT INTO member(account, password, phone, createdate, state, last_name, first_name) VALUES (?, ?, ?, ?, ?, ?, ?)";

$statement = $pdo->prepare($sqlm);
$statement->bindParam(1, $account);
$statement->bindParam(2, $password);
$statement->bindParam(3, $phone);
$statement->bindParam(4, $createdate);
$statement->bindParam(5, $state);
$statement->bindParam(6, $last_name);
$statement->bindParam(7, $first_name);
$statement->execute();

sleep(0.5);
?>