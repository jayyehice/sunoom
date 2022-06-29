<?php

       include("connection.php");

       $sql = "UPDATE comment SET content = ? WHERE (id = ?);";
       
       $statement = $pdo->prepare($sql);
       $statement->bindParam(1, $_GET['content']);
       $statement->bindParam(2, $_GET['commentid']);
       $statement->execute();
       $data = $statement->fetchAll();

?>