<?php
include "dbVars.php";
$resultArray = array();
$search = $_GET['q'];
$type = $_GET['type'];
$con = mysqli_connect($servername,$uid,$pwd,$database);
if (!$con)
{

}
mysqli_select_db($con,"world");
$sql = "SELECT * FORM Country WHERE name LIKE 'search%'";
if ($type == "list")
{
    $result = mysqli_query($con,$sql);
    while ($row = mysqli_fetch_array($result))
    {
        $resultArray[]=$row['Name'];
    }
    echo json_encode($resultArray);
}

if ($type == "answer")
{

}
mysqli_close($con);
?>