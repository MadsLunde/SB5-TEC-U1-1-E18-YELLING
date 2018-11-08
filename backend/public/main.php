<?php
require_once('./util/SqlCommands.php');
require_once('./model/yell.php');

function getAllYells(){
    //sql fetch all yells
    $sql = new SqlCommands();
    
    $res = $sql->executeQuery("SELECT * FROM yell ORDER BY 'timestamp' DESC;");

    return $sql->getDataAssoc($res);
}