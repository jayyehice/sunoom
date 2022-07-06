<?php


    include("connection.php");


    $sql = "select * from member where id=? and password=?";
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $_GET['id']);
    $statement->bindParam(2, $_GET['current']);
    $statement->execute();

    $data = $statement->fetchAll();

    if(count($data) > 0){
        include("connection.php");

        //建立SQL語法
        $sql = "UPDATE member SET password = ? WHERE (id = ?);";

        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $_GET['new']);
        $statement->bindParam(2, $_GET['id']);
        $statement->execute();

        echo json_encode("success");
    }else{
        echo json_encode("false");
    }

?>