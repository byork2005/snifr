<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Snifr</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css" type="text/css">
        <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
            crossorigin="anonymous"></script>
        <script src="./js/app.js"></script>
    </head>
    <body>
        <div class="row" id="header">
            <!-- <div class="jumbotron mainBanner"> -->
                <img class="img-circle" id="leftLogo" src="logo1.jpg">
                    <div id="title">
                        <h1>Snifer</h1>
                        <h2>A Website for the Dog on the Prowl</h2>
                    </div>
                <!-- <h1 id="title">Snifr</h1> -->
                <!-- <img class="img-circle" id="rightLogo" src="logo1.jpg"> -->
            <!-- </div> -->
        </div>
        <div class="row">
            <div class="col col-md-2" id="leftSide">
                <div id="taskBar">
                    <a href="">Home</a>
                    <hr>
                    <a href="">Matches</a>
                    <hr>
                    <a href="">Nearby</a>
                    <hr>
                    <a href="">Barks</a>
                    <hr>
                </div>
            </div>
            <div class="row" id="header">
            <!-- <div class="jumbotron mainBanner"> -->
                <img class="img-circle" id="leftLogo" src="logo1.jpg">
                    <div id="title">
                        <h1>Snifer</h1>
                        <h2>A Website for the Dog on the Prowl</h2>
                    </div>
                <!-- <h1 id="title">Snifr</h1> -->
                <!-- <img class="img-circle" id="rightLogo" src="logo1.jpg"> -->
            <!-- </div> -->
            </div>
            <div class="col col-md-8">
                {{{ body }}}
            </div>
            <!-- <div class="col col-md-2" id="rightSide"> 
                <p>test</p>
            </div>-->
        </div>
    </body>

    <style type="text/css">
        #header {
            background-color: blue;
            border-top: 5px outset #DC143C;
            border-left: 5px outset #DC143C;
            border-right:5px outset #DC143C;
            margin-bottom: 0%;
            text-align: center;
            position: relative;
            height: 160px;
        }

        .img-circle {
            border-radius: 50%;
        }

        #title {
            position: absolute;
            display: block;
            top: 0%;
            left: 29%;
        }

        #leftLogo {
            position: absolute;
            left: 45px;
            height: 125px;
            width: 132px;
            bottom: 15px;
        }

        #rightLogo {
            position: absolute;
            right: 45px;
            height: 125px;
            width: 132px;
            bottom: 15px;
        }

        #leftSide {
            background-color: blue;
            margin-top: 0%;
            height: 960px;
            position: relative;
            border-left: 20px outset #DC143C;
            width: 220px;
        }

        #taskBar {
            text-align: center;
            position: absolute;
            top: 25px;
            width: 180px;
            background-color: #9400D3;
            right: 0%;
            bottom: 0%;
            border-radius: 50px 0px 0px 0px;
            
        }

        #rightSide {
            background-color: blue;
            height: 960px;
            border-right:20px outset #DC143C;
        }
    
    </style>
</html>