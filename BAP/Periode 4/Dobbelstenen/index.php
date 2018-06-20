<?php
echo "test";

function  dice($worp){
    print $worp;
    $image = @imagecreate(200, 200) or die("Cannot Initialize new GD image stream");
    $background_color = imagecolorallocate($image, 0, 0, 00);   // black
    $color = imagecolorallocate($image, 255, 255, 255);

    $w1=false;//1
    $w2=false;//2
    $w3=false;//3
    $w4=false;//4
    $w5=false;//5
    $w6=false;//6
    $w7=false;//7

    if ($worp==1){$w4=true;}
    if ($worp==2){$w1=true;$w7=true;}
    if ($worp==3){$w6=true;$w4=true;$w2=true;}
    if ($worp==4){$w1=true;$w2=true;$w6=true;$w7=true;}
    if ($worp==5){$w1=true;$w2=true;$w4=true;$w6=true;$w7=true;}
    if ($worp==6){$w1=true;$w3=true;$w6=true;$w2=true;$w5=true;$w7=true;}
    //if ($worp==7){$w1=true;}

    //Draw the circles
    if ($w1==true){imagefilledellipse($image,50*1,50*1,40,40,$color);}//1
    if ($w2==true){imagefilledellipse($image,50*3,50*1,40,40,$color);}//2
    if ($w3==true){imagefilledellipse($image,50*1,50*2,40,40,$color);}//3
    if ($w4==true){imagefilledellipse($image,50*2,50*2,40,40,$color);}//4
    if ($w5==true){imagefilledellipse($image,50*3,50*2,40,40,$color);}//5
    if ($w6==true){imagefilledellipse($image,50*1,50*3,40,40,$color);}//6
    if ($w7==true){imagefilledellipse($image,50*3,50*3,40,40,$color);}//7


    imagepng($image,"$worp.png");
    imagedestroy($image);
}

for ($i=0; $i<5; $i++)
{
    $worp = rand(1,6);
    dice($worp);

    print "<img src=$worp.png?".date("U").">"."&nbsp";

    //maak de array
    $aWorp[ $i ] = $worp;
}


?>