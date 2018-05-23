<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';

$dir = "./learning/";
$a = scandir($dir);  // scandir scans a directory and sorts in ascending order by default

array_shift ($a);
array_shift ($a);

echo json_encode($a);

echo '</response>';
?>
