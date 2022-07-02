<?php

$account = $_POST["account"];
$password = $_POST["password"];
$mail = $_POST["mail"];
$message = $_POST["message"];

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

$web_api_url = "https://script.google.com/macros/s/AKfycby8qHKSxvCchAMimLWefY4xNFVgOv3f_odzeAsZrw25gGNWIUP7isF7wYCT7An0mSzw/exec?email=$mail&message=$message";


$data = request_curl_get($web_api_url);

//echo $data;




?>