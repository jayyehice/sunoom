<?php

    include("connection.php");

    $sql = "SELECT * FROM member WHERE id = ?";

    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $_GET['id']);
    $statement->execute();   
    $data = $statement->fetchAll();


    $process_data = [];
    //將二維陣列取出顯示其值
    foreach($data as $index =>$row){
        $temp = [];

        for($i=0; $i<(count($row)/2); $i++){
            array_push($temp, $row[$i]);
        }

        array_push($process_data, $temp);
    }

    //print_r($process_data[0]);
    echo json_encode($process_data);

?>