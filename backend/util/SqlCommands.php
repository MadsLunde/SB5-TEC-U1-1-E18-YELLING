<?php
require_once('SqlConnection.php');

class SqlCommands {
    private $sqlConnection;
    private $con;
    
    function __construct() {
        $this->sqlConnection = new SqlConnection();
        $this->con = $this->sqlConnection->getDbConnection();
    }
    
    /**
    * Execute statments for with resultset returned
    * @param Parameters that the statement requires  
    * @param Uniqe name for the query (optional)
    * @param sql Connection (optional)
    */ 
    public function executeQuery($sql,$params = null,$con = null){
        try{
            
            if($con == null){
                $con = $this->con;    
            }
            if(empty($params)) {
                return $this->executeNoParamQuery($sql, $con);
            }
            
            $stmt = $con->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        }catch(Exception $e){
            throw $e;          
        }
    }
    
    public function executeNoParamQuery($sql,$con = null){
        try{
            if($con == null){
                $con = $this->con;    
            }
            $result = $con->query($sql);
            return $result;
        }catch(Exception $e){
            throw $e;            
        }
    }

    public function getDataAssoc($res){
        return $res->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getDataObject($res){
        return $res->fetchObject();
    }

    public function getLastInsertedId() {
        return $this->con->lastInsertId();
    }

    public function getAffectedRows($res) {
        return $res->rowCount();
    }
    
}


?>