<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Opdracht 3</title>
</head>
<body>
<h1 class="rainbow">SIMPLE CSS RAINBOW TEXT</h1>

<h2 class="rainbow">let[0]</h2>
    <style>
        h1,h2
        {
            text-align:center;
        }
        h1
        {
            color:rgba(100,50,255,.8);
        }
        .rainbow
        {
            /* Chrome, Safari, Opera */
            -webkit-animation: rainbow 1s infinite;
            /* Internet Explorer */
            -ms-animation: rainbow 1s infinite;
            /*Standardd Syntax*/
            animation: rainbow 1s infinite;
        }
            @-webkit-keyframes rainbow
            {
                20%{color: red;}
                40%{color: yellow;}
                60%{color: green;}
                80%{color: blue;}
                100%{color: orange;}
            }

            @-ms-keyframes rainbow
            {
                20%{color: red;}
                40%{color: yellow;}
                60%{color: green;}
                80%{color: blue;}
                100%{color: orange;}
            }

            @keyframes rainbow
            {
                20%{color: red;}
                40%{color: yellow;}
                60%{color: green;}
                80%{color: blue;}
                100%{color: orange;}
            }
        body{
            //background-image: url(http://fjordstudio.dk/assets/img/bg/diamonds.png);
        }


    </style>
<script>
    let peter[p,e,t,e,r]
</script>




</body>
</html>