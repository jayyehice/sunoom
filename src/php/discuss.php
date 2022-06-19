<?php

       include("connection.php");

       $catagorys = ['tour', 'food', 'live', 'offical'];

       $all_list = [];

       foreach($catagorys as $idx => $catagory){
              // echo $catagory;

              $sql = "SELECT * FROM article Where category = '$catagory'";
              $statement = $pdo->query($sql);
              $data = $statement->fetchAll();

              $process_data = [];
              //將二維陣列取出顯示其值
              foreach($data as $index => $row){
                     $temp = [];

                     for($i=0; $i<(count($row)/2); $i++){
                            
                            array_push($temp, $row[$i]);
                     }

                     array_push($process_data, $temp);
              }

              // echo json_encode($process_data);

              // echo "<br>";

              $all_list[$catagory] = $process_data;

       };

       echo json_encode($all_list);
?>