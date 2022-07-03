<?php

//連接資料庫
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

for($i = 0 ; $i <= 9; $i++){
    
    $password = $nums[$i];
    echo $password;
}
$data =  json_decode(file_get_contents("php://input"), true);

$account = $data["account"];
$phone = $data["phone"];
$createdate = $data["createdate"];
$last_name = $data["last_name"];
$first_name = $data["first_name"];
$state = $data["state"];

$sqlm = "INSERT INTO member(account, password, phone, createdate, state, last_name, first_name,) VALUES (?, ?, ?, ?, ?, ?, ?)";

$statement = $pdo->prepare($sqlm);
$statement->bindParam(1, $account);
$statement->bindParam(2, $phone);
$statement->bindParam(3, $password);
$statement->bindParam(4, $createdate);
$statement->bindParam(5, $state);
$statement->bindParam(6, $last_name);
$statement->bindParam(7, $first_name);
$statement->execute();

sleep(0.5);



//抓取網頁訂單欄位
$paymode = $data["paymode"];
$total = $data["total"];
$tripchoose = $data["tripchoose"];
$foodchoose = $data["foodchoose"];
$staychoose = $data["staychoose"];
$ordernums = $data["ordernums"];
$tripdate = $data["tripdate"];

//寫訂單入資料庫
$sql = "INSERT INTO order_table(orderdate, paymode, total, paydate, paystatus, orderstatus, tripchoose, foodchoose,staychoose,ordernums,tripdate) VALUES (now(), ?, ?, date_add(now(),interval 7 day), 0, 1, ?, ?, ?, ?, ?);";

$statement = $pdo->prepare($sql);
$statement->bindParam(1, $paymode);
$statement->bindParam(2, $total);
$statement->bindParam(3, $tripchoose);
$statement->bindParam(4, $foodchoose);
$statement->bindParam(5, $staychoose);
$statement->bindParam(6, $ordernums);
$statement->bindParam(7, $tripdate);
$statement->execute();

// echo '成功'

?>