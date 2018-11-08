<?php

/**
 * Edit these configurations if needed
 */
class SqlConnection{
    private $DB_SERVER = "localhost";
    private $DB_USER = "root";
    private $DB_PASS = "";
    private $DB_NAME = "yell";
    private $db;

    public function __construct(){
    }

    public function getDbConnection(){
        if($this->db == null){
            $this->db = new PDO('mysql:host='.$this->DB_SERVER.';dbname='.$this->DB_NAME, $this->DB_USER,$this->DB_PASS);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);    
        }
        return $this->db;
    }
}