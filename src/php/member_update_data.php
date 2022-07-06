<?php
    $postType = json_decode(file_get_contents("php://input"), true);

    $id = $postType["id"];
    $phone = $postType["phone"];
    // $image = $postType["image"];
    // echo $phone;
    // echo $image;

    $avatarBase64Str = $postType["image"];
    
    //server根目錄
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    $img = str_replace(['data:image/png;base64,','data:image/jpeg;base64,'], '', $avatarBase64Str);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);

    //圖片名稱
    $NowTime = date("Y-m-d H:i:s");
    $timestamp = strtotime($NowTime);
    $imageName = $timestamp.'.png';

    $ServerRoot = dirname(__DIR__);

    //server路徑+自己資料夾的名稱
    $path = $ServerRoot."/img/common/member/";     
    if (!is_dir($path)){ //判斷目錄是否存在 不存在就建立 並賦予777許可權
        mkdir($path,0777,true);
    }
    //拼成完整路徑
    $imageSrc = $path.$imageName;  
    // echo json_encode('./images/userUpload/'.$imageName);
    $imageSrcforSQL = './img/common/member/'.$imageName;

    //寫入檔案，並回傳結果
    $r = file_put_contents($imageSrc, $data);


    // // ------------------------ 寫入資料庫 ------------------------

    include("connection.php");

    // //建立SQL語法
    $sql = "UPDATE member SET phone = ?, photo = ? WHERE (id = ?);";

    
    // //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $phone);
    $statement->bindParam(2, $imageSrcforSQL);
    $statement->bindParam(3, $id);
    $statement->execute();

    // // 跳轉回discuss.html
    // header("Location:../member.html");
?>
