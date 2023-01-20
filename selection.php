
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Warcraft Dungeons</title>
    <link rel="icon" href="assets/images/favicon.ico">
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>  
    <div id="image-list">
    <?php
        $expansion = $_GET['expansion'];
        if ($expansion == 'vanilla') {
            echo "vanilla was selected";
        } elseif ($expansion == 'tbc') {
            echo "The Burning Crusade was selected";
        } elseif ($expansion == 'wotlk') {
            echo "Wrath of the Lich King was selected";
        } elseif ($expansion == 'cata') {
            echo "Cataclysm was selected";
        } elseif ($expansion == 'mop') {
            echo "Mists of Pandaria was selected";
        } elseif ($expansion == 'wod') {
            echo "Warlords of Draenor was selected";
        } elseif ($expansion == 'legion') {
            echo "Legion was selected";
        } elseif ($expansion == 'bfa') {
            echo "Battle for Azeroth was selected";
        } elseif ($expansion == 'shadowlands') {
            echo "Shadowlands was selected";
        } elseif ($expansion == 'dragonflight') {
            echo "Dragonflight was selected";
        }
        else {
            ;
        }
    ?>

    <input id="selection" type="hidden" value = "<?= htmlspecialchars($expansion) ?>" />
    </div>
	<script src="scripts/dungeons.js"></script>
  </body>
</html>
