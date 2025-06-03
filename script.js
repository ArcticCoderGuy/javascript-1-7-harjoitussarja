// Task 6: Lisää tekstiä HTML main-elementtiin

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dom Demo</title>
    <style>
      body {
        display:block;
      }
      .siteheader, .maincontent {
        display: flex;
        justify-content: center;
      }
      .siteheader {
        margin-top: 4em;
        font-size: 2em;
        font-weight: bold;
      }
      .maincontent {
        margin-top:2.6em;
        font-size:1.9em;
        font-weight: bolder;
        color:blue;
      }
    </style>
  </head>
  <body>
    <header class="siteheader">
        <div class="my-Header">
          Dom test 1
        </div>        
    </header>

    <main class="maincontent">
      <!-- JavaScript lisää tekstin tänne -->
    </main>

    <script src="script.js"></script> <!-- 🔗 Yhdistetään JavaScript-tiedosto -->
  </body>
</html>
