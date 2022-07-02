<?php

// $account = $_POST["account"];
// $password = $_POST["password"];
// $mail = $_POST["mail"];
// $message = $_POST["message"];

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

// $web_api_url = "https://script.google.com/macros/s/AKfycbwwM5Y8-VaU1ivvD5zhLAJSifS5Guxtm080vR6KxQgyLBT0zjc8DS5yStsu6HYBVKij/exec?email=$mail&message=$message";
$url='https://tibamef2e.com/tgd101/g3/dist/member_certification.html';
$web_api_url = "https://script.google.com/macros/s/AKfycbx7jUowo3-jpm-h3sIkLBwWBAWgt4S1Q9Vs1TLj2-7qv04DJw0P9moXOkoRs7bzx4w1/exec?email=jayyehice@gmail.com&cf=y5s3gtuihr&id=11";


$data = request_curl_get($web_api_url);

//echo $data;




?>