<?php


    include("connection.php");

    $account = $_GET["account"];
    $password = $_GET["password"];


    //建立SQL語法
    $sql = "SELECT * FROM bgs_account where account= ? and password = ?";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $account);
    $statement->bindParam(2, $password);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if(count($data) > 0){
        //echo "登入成功";
        session_start();
        $_SESSION["id"] = $data[0]['id'];
        // header("Location:../Welcome.php");
        echo json_encode($data);

    }else{
        echo json_encode('false');
    }


?>