<?php

       include("connection.php");

       $all_list = [];
       
       $tables = ['shop', 'live', 'discount_code', 'member', 'article', 'comment'];
       // $tables = ['article']; //測試用

       function data_slice($data){
              $process_data = [];
              $ten_list = [];
              
              foreach($data as $index => $row){

                     //每一列資料，只留index是數字的部分，去除掉index欄位名
                     $temp = [];
                     for($i=0; $i<(count($row)/2); $i++){
                            array_push($temp, $row[$i]);
                     }

                     //切割每十筆資料為一個新陣列
                     array_push($ten_list, $temp);
                     if((($index%10) == 9) or ($index == (count($data)-1))){
                            array_push($process_data, $ten_list);
                            $ten_list = [];
                     }
              }

              return $process_data;
       }


       foreach($tables as $idx => $table){

              if($table == 'article'){
                     $sql = "SELECT * FROM V_article";
              }else if($table == 'comment'){
                     $sql = "SELECT * FROM V_comment";
              }else{
                     $sql = "SELECT * FROM $table";
              }

              $statement = $pdo->query($sql);
              $data = $statement->fetchAll();

              $all_list[$table] = data_slice($data);
       }


       //訂單資料切割為 0未完成(未付款、已付款)、1已完成、2已取消
       $order_data = [];
       $order_title = '';
       for($i=0; $i<3; $i++){

              if($i==0){
                     for($j=0; $j<2; $j++){
                            $sql = "SELECT * FROM V_order_table WHERE orderstatus=$i and paystatus=$j";
                            $statement = $pdo->query($sql);
                            $data = $statement->fetchAll();

                            if($j==0){
                                   $order_title = '待付款';
                            }else{
                                   $order_title = '已付款';   
                            }
                            // echo $sql."<br>";

                            $order_data[$order_title] = data_slice($data);
                     }
              }else{

                     $sql = "SELECT * FROM V_order_table WHERE orderstatus=$i";

                     $statement = $pdo->query($sql);
                     $data = $statement->fetchAll();

                     if($i==1){
                            $order_title = '已完成';
                     }else{
                            $order_title = '已取消'; 
                     }

                     $order_data[$order_title] = data_slice($data);
              }  
       }

       $all_list['order_table'] = $order_data;



       //活動資料切割為 1進行中 0已結束
       $activity_data = [];
       $activity_title = '';
       for($i=0; $i<2; $i++){

              $sql = "SELECT * FROM activity WHERE status=$i";

              $statement = $pdo->query($sql);
              $data = $statement->fetchAll();

              if($i==1){
                     $activity_title = '進行中';
              }else{
                     $activity_title = '已結束'; 
              }

              $activity_data[$activity_title] = data_slice($data);
       }

       $all_list['activity'] = $activity_data;
       
       echo json_encode($all_list);

?>