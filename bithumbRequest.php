<?php
	if( $_GET["name"] == 'btc' ){
		header('Content-Type: application/json');
		echo file_get_contents('https://api.bithumb.com/public/ticker/');
	}
	elseif ($_GET["name"] == 'bch') {
		header('Content-Type: application/json');
		echo file_get_contents('https://api.bithumb.com/public/ticker/bch');
	}
	elseif ($_GET["name"] == 'ltc') {
		header('Content-Type: application/json');
		echo file_get_contents('https://api.bithumb.com/public/ticker/ltc');
	}
	elseif ($_GET["name"] == 'eth') {
		header('Content-Type: application/json');
		echo file_get_contents('https://api.bithumb.com/public/ticker/eth');
	}
	elseif ($_GET["name"] == 'etc') {
		header('Content-Type: application/json');
		echo file_get_contents('https://api.bithumb.com/public/ticker/etc');
	}
?>