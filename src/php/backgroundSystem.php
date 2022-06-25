<?php

       include("connection.php");

       $all_list = [];

       $tables = ['order_table', 'activity', 'shop', 'live', 'discount_code', 'member', 'article', 'comment'];


       foreach($tables as $idx => $table){

              $sql = "SELECT * FROM $table";
              $statement = $pdo->query($sql);
              $data = $statement->fetchAll();

              $process_data = [];
              
              foreach($data as $index => $row){
                     $temp = [];
                     for($i=0; $i<(count($row)/2); $i++){
                            array_push($temp, $row[$i]);
                     }
                     array_push($process_data, $temp);
              }

              $all_list[$table] = $process_data;
       }


       
       echo json_encode($all_list);

?>