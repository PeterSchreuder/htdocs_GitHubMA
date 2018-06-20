<html>
<head>
</head>

<body>

    <h1>hallo hier komt php</h1>

        <?php
            /**
             * Created by PhpStorm.
             * User: Peter
             * Date: 10-1-2018
             * Time: 11:29
             */

            echo "hallo";
            echo "<br>";
            echo "<br>";//ENTER
            echo  23 * 123 + 5666;
            echo "<br>";
            echo "<br>";

            for ($i=1; $i<10; $i++)
            {
                echo $i;
            }

            echo "<br>";
            echo "<br>";
            $voornaam='Peter';
            $leeftijd=18;

            echo 'Naam : ' . $voornaam;
        echo "<br>";
            echo 'Leeftijd : ' . $leeftijd;
            echo "<br>";
            echo "<br>";
            if ($leeftijd>=18)
            {
                echo 'Jij bent oud genoeg on te drinken.';
            }
            else
            {
                echo 'Jij bent te jong om te drinken.';
            }

        ?>

    <h1>dit was  php</h1>

</body>

</html>


