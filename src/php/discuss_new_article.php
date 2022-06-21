<?php
    //上傳圖片
    

    

    // echo $_POST["title"];//文章標題
    // echo $_POST["article_type"];//文章分類
    // echo $_POST["article_content"];//文章內容

    // 
    //判斷是否上傳成功
    if($_FILES["article_img"]["error"] > 0){
        echo "上傳失敗: 錯誤代碼".$_FILES["article_img"]["error"];
    }else{

        // echo $_FILES["article_img"]["name"];//文章圖片
    //     //取得上傳的檔案資訊=======================================

        
        
        $originFileName = $_FILES["article_img"]["name"];    //檔案名稱含副檔名
        $NowTime=date("Y-m-d H:i:s");
        // echo strtotime("$NowTime,now"), "<br>";//時間戳
        // echo getExtensionName($originFileName);//副檔名 
        $fileName = strtotime("$NowTime,now").'.'.getExtensionName($originFileName);
        // echo $fileName;

        $filePath_Temp = $_FILES["article_img"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
    //     $fileType = $_FILES["profile"]["type"];    //檔案種類        
    //     $fileSize = $_FILES["profile"]["size"];    //檔案尺寸
    //     //=======================================================

        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        echo $ServerRoot."<br>";
        //檔案最終存放位置
        $filePath = $ServerRoot."/sunoom/src/img/discuss/article/".$fileName;
        echo $filePath."<br>";
        //將暫存檔搬移到正確位置
        move_uploaded_file($filePath_Temp, $filePath);
        // echo dirname(dirname(__FILE__));

        // echo str_replace(dirname(dirname(dirname(__FILE__))),"",dirname(dirname(__FILE__)));

    //     //顯示檔案資訊
    //     echo "檔案存放位置：".$filePath;
    //     echo "<br/>";
    //     echo "類型：".$fileType;
    //     echo "<br/>";
    //     echo "大小：".$fileSize;
    //     echo "<br/>";
    //     echo "副檔名：".getExtensionName($filePath);
    //     echo "<br/>";
    //     echo "<img src='/FileUpload/".$fileName."'/>";
    }

    //取得檔案副檔名
    function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }

    // 跳轉回discuss.html
    // header("Location:../discuss.html");
?>
