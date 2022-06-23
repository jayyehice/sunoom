<?php

       include("connection.php");

       $sql = "DELETE FROM comment WHERE (id = ?);";
       
       // $articleid = $_GET['articleid'];
       
       $statement = $pdo->prepare($sql);
       $statement->bindParam(1, $_GET['commentid']);
       $statement->execute();
       $data = $statement->fetchAll();

       // $process_data = [];
       // foreach($data as $index => $row){
       //        $temp = [];
       //        for($i=0; $i<(count($row)/2); $i++){
       //               if($i === 5){
       //                      array_push($temp, date("Y-m-d", $row[$i]));
       //               }else{
       //                      array_push($temp, $row[$i]);
       //               }     
       //        }
       //        array_push($process_data, $temp);
       // }

       // echo json_encode($process_data);

?>