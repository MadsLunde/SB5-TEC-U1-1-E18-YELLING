<?php

/**
 * Global index file
 */
$uri = str_replace("/sb5-tec/backend/index.php","",$_SERVER['REQUEST_URI']);
$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS"){
    exit;
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, authorization");
header('Content-Type: application/json');

switch($uri){
    case "/": // main page
        /* If different http methods on same route, do this
        if($method == "GET"){
            // require 1 file
        } elseif ($method == "POST") {
            // require another
        }
        */
        require 'public/main.php';
        exit(json_encode(getAllYells(), JSON_PRETTY_PRINT));
        break;

    case "/yell/":
        if($method == "POST"){
            $body = (object)json_decode(file_get_contents("php://input"));
            if($body->content == null){
                require 'error/400.php';
            }
            require 'public/yell.php';
            exit(json_encode(createYell($body->content)));
        }
        break;

    default :
        header('HTTP/1.0 404 Not Found');
        require 'error/404.php';
        break;
}
// $body = (object)json_decode(file_get_contents("php://input"));