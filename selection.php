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
