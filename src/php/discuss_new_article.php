<?php
    //上傳圖片
    // $offical = 2;
    $category = $_POST["article_type"];
    $title = $_POST["title"];
    $content = $_POST["article_content"];
    $author = $_POST["authorID"];
    $image = '';
    // $watch = 0;

    // echo $_POST["title"];//文章標題
    // echo $_POST["article_type"];//文章分類
    // echo $_POST["article_content"];//文章內容
    // echo $_POST["authorID"];//作者ID內容

    //判斷是否上傳成功
    if($_FILES["article_img"]["error"] > 0){
        echo "上傳失敗: 錯誤代碼".$_FILES["article_img"]["error"];
    }else{

        $originFileName = $_FILES["article_img"]["name"];    //檔案名稱含副檔名
        $NowTime=date("Y-m-d H:i:s");
        // echo strtotime("$NowTime,now"), "<br>";//時間戳
        // echo getExtensionName($originFileName);//副檔名 
        $fileName = strtotime("$NowTime,now").'.'.getExtensionName($originFileName);
 

        $filePath_Temp = $_FILES["article_img"]["tmp_name"];   //Server上的暫存檔路徑含檔名        


        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        //echo $ServerRoot."<br>";
        //檔案最終存放位置
        $filePath = $ServerRoot."/sunoom/src/img/discuss/article/".$fileName;
        $image = './img/discuss/article/'.$fileName;
        //echo $filePath."<br>";
        //將暫存檔搬移到正確位置
        move_uploaded_file($filePath_Temp, $filePath);

    }

    //取得檔案副檔名
    function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }

    // echo $image;




    // ------------------------ 寫入資料庫 ------------------------

    include("connection.php");

    //INSERT INTO `sunoom`.`article` (`id`, `official`, `category`, `title`, `content`, `author`, `image`, `watch`) VALUES ('11', '2', 'live', '111', '111', '1', '111', '1');
    //建立SQL語法
    $sql = "INSERT INTO article(official, category, title, content, author, image, watch) VALUES ( 2, ?, ?, ?, ?, ?, 0);";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $category);
    $statement->bindParam(2, $title);
    $statement->bindParam(3, $content);
    $statement->bindParam(4, $author);
    $statement->bindParam(5, $image);
    $statement->execute();

    // echo '完成';
    // 跳轉回discuss.html
    header("Location:../discuss.html");
?>
