
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Warcraft Dungeons</title>
    <link rel="icon" href="assets/images/favicon.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/dungeons.css">
  </head>
  <body>  
    <div id="image-list">
        <?php $expansion = $_GET['expansion'];?>
        <input id="selection" type="hidden" value = "<?= htmlspecialchars($expansion) ?>" />
        <div id="selectionButtons">
            <button id="positiveButton">
                <i class="fa-solid fa-x"></i>
            </button>
            <button id="negativeButton">
            <i class="fa-solid fa-heart"></i>
            </button>
        </div>
    </div>
	<script src="scripts/dungeons.js"></script>
  </body>
</html>
