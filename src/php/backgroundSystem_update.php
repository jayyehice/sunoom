<?php
    $update_data = json_decode(file_get_contents("php://input"), true);

    $table = $update_data['table'];
    $id = $update_data['id'];
    $data = $update_data['data'];

    $update_value = '';
    // echo $data;
    // print_r($data);

    foreach($data as $idx => $content){
        if($idx == (count($data)-1)){
            $update_value = $update_value."$content[0] = '$content[1]'";
        }else{
            $update_value = $update_value."$content[0] = '$content[1]', ";
        }
    }


    // sql
    include("connection.php");
    $sql = "UPDATE $table SET $update_value WHERE (id = $id);";
    // echo $sql;
    $statement = $pdo->exec($sql);
?>