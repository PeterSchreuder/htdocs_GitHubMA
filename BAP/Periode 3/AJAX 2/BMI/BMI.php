<?php
$gewicht = $_GET["gewicht"];
$lengte1 = $_GET["lengte"];
$lengte = $lengte1 / 100;

$bmi = round($gewicht / ($lengte * $lengte),1);
echo "je bmi is ";
echo $bmi;
echo '<br>';

switch ($bmi)
{
    case ($bmi <18):
        echo "U hebt onder gewicht";
        break;
    case ($bmi >= 18 && $bmi <= 25):
        echo "U hebt normaal gewicht";
        break;
    case ($bmi >= 25 && $bmi <= 27):
        echo "U hebt licht overgewicht";
        break;
    case ($bmi >= 27 && $bmi <= 30):
        echo "U hebt matig overgewicht";
        break;
    case ($bmi >= 30 && $bmi <= 40):
        echo "U hebt obesitas";
        break;
    case ($bmi >= 40 && $bmi <= 55):
        echo "Morbide obesitas";
        break;
    case ($bmi > 55 ):
        echo "Uw BMI is te hoog, vul u gegevens  in";
        break;
}

?>