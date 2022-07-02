
<?php
// <!-- 註冊頁的php -->
// $last_name = $_POST["last_name"];
// $first_name = $_POST["first_name"];
// $phone = $_POST["phone"];
// $email = $_POST["email"];
// $password = $_POST["password"];

include("connection.php");


$sql = "select * from member where account=? ";
$statement = $pdo->prepare($sql);
$statement->bindParam(1, $_GET['email']);
$statement->execute();

$data = $statement->fetchAll();

if(count($data) > 0){
    echo json_encode("same");
}else{
    $sql = "INSERT INTO member (account, password, phone, createdate, last_name, first_name) VALUES(?,?,?,now(),?,?)";

    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $_GET['email']);
    $statement->bindParam(2, $_GET['password']);
    $statement->bindParam(3, $_GET['phone']);
    $statement->bindParam(4, $_GET['last_name']);
    $statement->bindParam(5, $_GET['first_name']);
    $statement->execute();

    sleep(0.5);


    $sql = "SELECT * FROM member WHERE account = ?";

    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $_GET['email']);
    $statement->execute();   
    $data = $statement->fetchAll();



    $message = 'url?i='.$data[0]['id'];
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

    $web_api_url = "https://script.google.com/macros/s/AKfycby8qHKSxvCchAMimLWefY4xNFVgOv3f_odzeAsZrw25gGNWIUP7isF7wYCT7An0mSzw/exec?email=$mail&message=$message";


    $data = request_curl_get($web_api_url);


    echo json_encode("success");

}

?>

