<?php

       include("connection.php");

       $sql = "
       SELECT c.*, UNIX_TIMESTAMP(c.date), m.name 
       FROM 
              comment c
       join member m
                     on c.author_id = m.id
       WHERE c.article_id = ?
       ORDER BY c.date;
       ";
       
       $articleid = $_GET['articleid'];
       
       $statement = $pdo->prepare($sql);
       $statement->bindParam(1, $articleid);
       $statement->execute();
       $data = $statement->fetchAll();

       $process_data = [];
       foreach($data as $index => $row){
              $temp = [];
              for($i=0; $i<(count($row)/2); $i++){
                     if($i === 5){
                            array_push($temp, date("Y-m-d", $row[$i]));
                     }else{
                            array_push($temp, $row[$i]);
                     }     
              }
              array_push($process_data, $temp);
       }

       echo json_encode($process_data);

?>