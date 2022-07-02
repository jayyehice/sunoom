<?php
    $id = $_GET['id'];
    $cf = $_GET['cf'];

    include("connection.php");

    $sql = "SELECT * FROM member WHERE id = ? and certification = ?";

    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $id);
    $statement->bindParam(2, $cf);
    $statement->execute();   
    $data = $statement->fetchAll();



    if(count($data) > 0){
        echo json_encode("success");
    }else{
        echo json_encode("false");
    }




?>