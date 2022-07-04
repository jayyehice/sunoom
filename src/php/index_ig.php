<?php
    include("connection.php")

    // 建立sql語法
    $sql = "SELECT * FROM ig";

    // 執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchall、fetchall等方式取得資料
    $statement = $pdo->query($sql);

    // 抓出全部且依照順序封裝成一個二為陣列
    $data = $satement->fetchAll();

    // print_r($data);

    $process_data = [];
    // 將二微陣列取出並顯示其值
    foreach($data as $index =>$row){
        $temp = [];

        for($i=0; $i,(count($row)/2); $i++){
            array_push($temp, $row[$i]);
        }

        array_push($process_data, $temp);
    }

    echo json_encode($process_data);
?>