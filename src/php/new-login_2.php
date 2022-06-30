<!-- 登陸頁的php -->
<?php
include("connection.php");


//以下兩段不能註解，這樣他才能知道要抓到資料
$email = $_GET["account"];
$password = $_GET["password"];

$sql = "SELECT * FROM member WHERE account = ? and password = ?";


//少了pdo。
$statement = $pdo->prepare($sql);
$statement->bindParam(1, $email);
$statement->bindParam(2, $password);
$statement->execute();   //這段是必要的，要執行sql語法
$data = $statement->fetchAll();
// print_r($data);
echo json_encode("aaa");
// if(count($data) > 0){
//     session_start();
//     $_SESSION['UserID'] = $email;
//     echo "登入成功";
//     echo $_SESSION['UserID'];
//     // header("Location:../member.html");
// }else{
//     echo"帳號或密碼錯誤";
// }



?>




<!-- 這支PHP是用來測試登錄頁 -->
<?php
// session_start();
// $_SESSION['member'];
// unset($_SESSION['member']);

// $sql = "SELECT * FROM member WHERE account = ? and password = ?";
// $sql->execute([$_REQUEST['email'],$_REQUEST['password']]);

// foreach($sql->fetchAll() as $row){
//     $_SESSION['member']=['email'];
// }

// if(isset($_SESSION['member'])){
//     echo '登入成功',$_SESSION['member']['email'], '、歡迎光臨。';
// }else{
//     echo '登入ID或密碼錯誤。';
// }

// header("Location:../member.html");
?>