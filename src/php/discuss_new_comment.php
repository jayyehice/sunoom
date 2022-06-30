<?php

       include("connection.php");

       $sql = "
       INSERT INTO comment (article_id, author_id, content, date) 
       VALUES (?, ?, ?, now());
       ";
       
       // $articleid = $_GET['articleid'];
       
       $statement = $pdo->prepare($sql);
       $statement->bindParam(1, $_GET['articleid']);
       $statement->bindParam(2, $_GET['authorid']);
       $statement->bindParam(3, $_GET['content']);
       $statement->execute();
       $data = $statement->fetchAll();

       $process_data = [];
       foreach($data as $index => $row){
              $temp = [];
              for($i=0; $i<(count($row)/2); $i++){
                     if($i === 5){
                            array_push($temp, date("Y-m-d", $row[$i]));
                     }else{
                            array_push($temp, $row[$i]);
                     }     
              }
              array_push($process_data, $temp);
       }

       echo json_encode($process_data);



       // $sql = "
       // UPDATE article 
       // SET comment = (
       //        select count(*)
       //        from comment c
       //        where c.article_id = ?
       //        group by c.article_id) 
       // WHERE (id = ?);
       // ";
       
       // $statement = $pdo->prepare($sql);
       // $statement->bindParam(1, $_GET['content']);
       // $statement->bindParam(2, $_GET['commentid']);
       // $statement->execute();
       // $data = $statement->fetchAll();

?>