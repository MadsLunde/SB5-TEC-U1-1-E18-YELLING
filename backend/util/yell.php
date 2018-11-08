<?php

class Yell{
    public $content;
    public $id;
    public $timestamp;

    public function __construct($content, $id, $timestamp){
        $this->content = $content;
        $this->id = $id;
        $this->timestamp = $timestamp;
    }
}