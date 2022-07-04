<?php
include("connection.php");

$postType = json_decode(file_get_contents("php://input"), true);
//---------------------------------------------------   
    $avatarBase64Str = $postType['img'];
    $ordernums = $postType['ordernums'];
    //server根目錄
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    $img = str_replace(['data:image/png;base64,','data:image/jpeg;base64,'], '', $avatarBase64Str);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);

    //圖片名稱
    $imageName = 'role'.rand(1,1000).'.png';

    //server路徑+自己資料夾的名稱
    $path = $ServerRoot."/sunoom/src/img/orderPage/orderimglist";     
    if (!is_dir($path)){ //判斷目錄是否存在 不存在就建立 並賦予777許可權
        mkdir($path,0777,true);
    }
    //拼成完整路徑
    $imageSrc = $path.$imageName;  
    // echo json_encode('./images/userUpload/'.$imageName);
    $imageSrcforSQL = './img/orderPage/orderimglist'.$imageName;

    //寫入檔案，並回傳結果
    $r = file_put_contents($imageSrc, $data);

    $sql = "INSERT INTO order_table(imgurl) VALUES (?) WHERE ordernums = $ordernums";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $imageSrcforSQL);
    $statement->execute();
?>