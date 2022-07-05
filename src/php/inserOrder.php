<?php

//連接資料庫
include("connection.php");

sleep(1);
$data =  json_decode(file_get_contents("php://input"), true);

$account = $data["account"];
$phone = $data["phone"];
//對比會員資料拉出會員id植入訂單用
$sqlmcheck = "SELECT id FROM member WHERE account = ?  and phone = ?";
$statement = $pdo->prepare($sqlmcheck);
$statement->bindParam(1, $account);
$statement->bindParam(2, $phone);
$statement->execute();
$memberid_list = $statement->fetchAll();

$memberid = $memberid_list[0]['id'];

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
$sql = "INSERT INTO order_table(orderdate, paymode, total, paydate, paystatus, orderstatus, tripchoose, foodchoose,staychoose,ordernums,tripdate, member_id) VALUES (now(), ?, ?, date_add(now(),interval 7 day), 0, 1, ?, ?, ?, ?, ?, ?);";

$statement = $pdo->prepare($sql);
$statement->bindParam(1, $paymode);
$statement->bindParam(2, $total);
$statement->bindParam(3, $tripchoose);
$statement->bindParam(4, $foodchoose);
$statement->bindParam(5, $staychoose);
$statement->bindParam(6, $ordernums);
$statement->bindParam(7, $tripdate);
$statement->bindParam(8, $memberid);
$statement->execute();

// echo '成功'

?>