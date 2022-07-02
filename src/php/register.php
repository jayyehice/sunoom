<?php


    include("connection.php");


    $sql = "select * from member where account=? ";
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $_GET['email']);
    $statement->execute();

    $data = $statement->fetchAll();

    if(count($data) > 0){
        echo json_encode("same");
    }else{

        // 產生亂數認證碼
        $password = [];
        $str='';

        for($i=0; $i<10; $i++){
            array_push($password, $i);
        }

        for($i=97; $i<123; $i++){
            array_push($password, chr($i));
        }

        shuffle($password);

        for($i=0; $i<10; $i++){
            $str=$str.$password[$i];   
        }



        $sql = "INSERT INTO member (account, password, phone, createdate, last_name, first_name, certification) VALUES(?,?,?,now(),?,?,?)";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $_GET['email']);
        $statement->bindParam(2, $_GET['password']);
        $statement->bindParam(3, $_GET['phone']);
        $statement->bindParam(4, $_GET['last_name']);
        $statement->bindParam(5, $_GET['first_name']);
        $statement->bindParam(6, $str);
        $statement->execute();

        sleep(0.5);


        $sql = "SELECT * FROM member WHERE account = ?";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $_GET['email']);
        $statement->execute();   
        $data = $statement->fetchAll();


        // $url='https://www.ming-island.com.tw';
        $id = $data[0]['id'];
        $mail = $_GET['email'];

        function request_curl_get($url, $params = array(),$timeout=30){

            $ch = curl_init();
            curl_setopt ($ch, CURLOPT_URL, $url);
            curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        
            $file_contents = curl_exec($ch);
            if($file_contents === false){
                throw new Exception('Http request message :'.curl_error($ch));
            }
        
            curl_close($ch);
            return $file_contents;
        
        }

        $web_api_url = "https://script.google.com/macros/s/AKfycbx7jUowo3-jpm-h3sIkLBwWBAWgt4S1Q9Vs1TLj2-7qv04DJw0P9moXOkoRs7bzx4w1/exec?email=jayyehice@gmail.com&cf=$str&id=$id";


        $data = request_curl_get($web_api_url);


        echo json_encode("success");

    }

?>