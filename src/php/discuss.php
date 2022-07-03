<?php

       include("connection.php");

       $catagorys = ['tour', 'food', 'live'];

       $all_list = [];

       foreach($catagorys as $idx => $catagory){
              // echo $catagory;

              $sql = "SELECT * FROM v_article Where category = '$catagory' ORDER BY date DESC";
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

       //全部文章
       $sql = "SELECT * FROM v_article WHERE category != 'offical' ORDER BY date DESC ";
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

       $all_list['all'] = $process_data;


       //官方文章
       $sql = "SELECT * FROM v_article Where category = 'offical' ORDER BY watch DESC";
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

       $all_list['offical'] = $process_data;


       echo json_encode($all_list);
?>