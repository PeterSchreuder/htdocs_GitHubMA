<?php
/**
 * Created by PhpStorm.
 * User: Peter
 * Date: 9-4-2018
 * Time: 09:26
 */
$gewicht = $_GET["gewicht"];
$lengte = $_GET["lengte_cm"];
BMIcalc($gewicht,$lengte);

function BMIcalc($gewicht,$lengte)
{
    echo "Uw gewicht: $gewicht<br>";
    echo "Uw lingte: $lengte<br>";
    $bmi = $gewicht / ($lengte * $lengte);
    $bmi = round($bmi,1);
    echo "BMI is: ".$bmi;
}
?>