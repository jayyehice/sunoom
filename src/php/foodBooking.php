<?php

       include("connection.php");

       $sql = "
       INSERT INTO restaurant_restvation (shopname, islandid, name, people, phone, date, time, bookingtime) 
       VALUES (?, ?, ?, ?, ?, ?, ?, now());
       ";
       
       $statement = $pdo->prepare($sql);
       $statement->bindParam(1, $_GET['shopname']);
       $statement->bindParam(2, $_GET['islandid']);
       $statement->bindParam(3, $_GET['name']);
       $statement->bindParam(4, $_GET['people']);
       $statement->bindParam(5, $_GET['phone']);
       $statement->bindParam(6, $_GET['date']);
       $statement->bindParam(7, $_GET['time']);
       $statement->execute();
       $data = $statement->fetchAll();

       

?>