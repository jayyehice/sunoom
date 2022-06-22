<?php

       include("connection.php");

       $sql = "SELECT * FROM comment Where article_id = ?";
       
       $articleid = $_GET['articleid'];
       
       $statement = $pdo->prepare($sql);
       $statement->bindParam(1, $articleid);
       $statement->execute();
       $data = $statement->fetchAll();

       $process_data = [];
       foreach($data as $index => $row){
              $temp = [];
              for($i=0; $i<(count($row)/2); $i++){     
                     array_push($temp, $row[$i]);
              }
              array_push($process_data, $temp);
       }

       echo json_encode($process_data);

?>