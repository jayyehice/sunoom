<?php

       include("connection.php");

       $all_list = [];
       $ten_list = [];
       $tables = ['order_table', 'activity', 'shop', 'live', 'discount_code', 'member', 'article', 'comment'];
       // $tables = ['article'];


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

                     array_push($ten_list, $temp);
                     
                     if((($index%10) == 9) or ($index == (count($data)-1))){
                            // echo $index."<br>";
                            array_push($process_data, $ten_list);
                            $ten_list = [];
                     }
              }

              $all_list[$table] = $process_data;
       }


       
       echo json_encode($all_list);

?>