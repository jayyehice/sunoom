<?php

    //jue DB
    
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "password";
    $db_select = "sunoom";


    //AWS DB
    
    // $db_host = "tibame0301.comnfqgxiwqx.us-east-1.rds.amazonaws.com";
    // $db_user = "sunoom";
    // $db_pass = "Tibame!03";
    // $db_select = "sunoom";


    //Tibame DB
    // $db_host = "127.0.0.1";
    // $db_user = "tibamefe_since2021";
    // $db_pass = "vwRBSb.j&K#E";
    // $db_select = "tibamefe_tgd101g3";

    //建立資料庫連線物件
    $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);
    
    //---------------------------------------------------


?>