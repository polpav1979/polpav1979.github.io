<?php
$folder = $_POST["folder"];
$file = $_POST["file"];
try{
    include("../pages/".$folder."/".$file.".php");
}
catch (Exception $ex) {
    echo "display-error";
}