<?php 
	$host = 'localhost';
	$dbname = 'dbloja';
	$user = 'root';
	$pass = '';
	try {
		$db = new PDO("mysql:host=$host; dbname=$dbname;", $user, $pass);
	} catch (PDOException $e) {
		echo "[ERRO] ".$e->getMessage();
	}
 ?>
