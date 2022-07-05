<?php
    //上傳圖片
    $id = $_POST["id"];
    $phone = $_POST["phone"];
    // $image = '';

    // print_r($_POST);

    // //判斷是否上傳成功
    // if($_FILES["memberImg"]["error"] > 0){
    //     echo "上傳失敗: 錯誤代碼".$_FILES["memberImg"]["error"];
    // }else{

    //     $originFileName = $_FILES["memberImg"]["name"];    //檔案名稱含副檔名
    //     echo $originFileName;
    //     $NowTime=date("Y-m-d H:i:s");
    //     $fileName = strtotime("$NowTime,now").'.'.getExtensionName($originFileName);

    //     $filePath_Temp = $_FILES["memberImg"]["tmp_name"];   //Server上的暫存檔路徑含檔名 

    //     $ServerRoot = dirname(__DIR__);
    //     //檔案最終存放位置
    //     $filePath = $ServerRoot."/img/common/member/".$fileName;
    //     $image = './img/discuss/article/'.$fileName;
    //     //將暫存檔搬移到正確位置
    //     move_uploaded_file($filePath_Temp, $filePath);

    // }

    // //取得檔案副檔名
    // function getExtensionName($filePath){
    //     $path_parts = pathinfo($filePath);
    //     return $path_parts["extension"];
    // }

    // // echo $image;




    // // ------------------------ 寫入資料庫 ------------------------

    include("connection.php");

    //建立SQL語法
    $sql = "UPDATE member SET phone = ? WHERE (id = ?);";

    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $phone);
    // $statement->bindParam(2, $image);
    $statement->bindParam(2, $id);
    $statement->execute();

    // 跳轉回discuss.html
    header("Location:../member.html");
?>
