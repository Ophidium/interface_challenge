<?php

$pointer = fopen('data.json', 'r');
if(flock($pointer, LOCK_SH)){ // will block execution until the write lock is released
    $content = fread($pointer, filesize('data.json')); // will return the correct content
    clearstatcache('data.json'); // clear the file cache for the next function
    $size = filesize('data.json'); // will return the correct size
}
fclose($pointer);
$array = json_decode($content, true);
// put changes between here

if (isset($_GET['score']))
{
    $array["player"]["score"] += $_GET['score'];
}

if (isset($_GET['speed']))
{
    $array["player"]["speed"] = $_GET['speed'];
}


// and here
$result = file_put_contents("data.json", json_encode($array), LOCK_EX);

?>