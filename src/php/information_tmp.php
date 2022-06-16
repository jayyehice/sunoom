<?php

       // include("connection.php");

       // //建立SQL語法
       // $sql = "SELECT * FROM faq";

       // //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       // $statement = $pdo->query($sql);

       // //抓出全部且依照順序封裝成一個二維陣列
       // $data = $statement->fetchAll();

       // // print_r($data);

       // $process_data = [];
       // //將二維陣列取出顯示其值
       // foreach($data as $index => $row){
       //        $temp = [];

       //        for($i=0; $i<(count($row)/2); $i++){
                     
       //               array_push($temp, $row[$i]);
       //        }

       //        array_push($process_data, $temp);
       // }

       $fqa0 = [];
       $fqa0[0]=1;
       $fqa0[1]="一、去明島旅行需要攜帶哪些物品？";
       $fqa0[2]="日島氣候溫暖宜人，備好夏裝即可；月島氣候寒冷，需準備防寒外套，如果您計畫遊玩兩座島，請備齊夏冬衣物及防曬乳，徒步旅行或探索海岸則需輕便衣物，如果您計畫造訪計畫登山則需攜帶更為保暖的衣物，以便適應劇烈溫差。 ";

       $fqa1 = [];
       $fqa1[0]=1;
       $fqa1[1]="二、搭乘客輪需要注意什麼？";
       $fqa1[2]="如會暈車的乘客，建議搭客輪前30分鐘可吃暈車藥。\r 搭乘期間如有任何不適可隨時與工作人員溝通。";

       $process_data[0]=$fqa0;
       $process_data[1]=$fqa1;

       // print_r($process_data[0]);
       echo json_encode($process_data);

?>