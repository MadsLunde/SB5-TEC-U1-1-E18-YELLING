<?php
require_once('./util/SqlCommands.php');
require_once('./util/yell.php');

function createYell($content){
    // sql to create yell with content $content
    $sql = new SqlCommands();
    
    $sql->executeQuery("INSERT INTO yell (content) VALUES (?);", array($content));
    $id = $sql->getLastInsertedId();

    $yell = new Yell($content, $id, 0);

    return $yell;
}
