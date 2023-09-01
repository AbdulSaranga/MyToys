<?php 
	$valor = $_POST['txtv'];
	$op = $_POST['slt'];
	$result = 0;
	$msg;
	if (isset($_POST['env'])) {
		switch ($op) {
			case 'mzm':
				$result = $valor * 63;
				$msg = "MZM";
				break;
			case 'rand':
				$result = $valor * 4;
				$msg = "RAND";
				break;
			case 'dolar':
				$result = $valor * 2.5;
				$msg = "DOLAR";
				break;
			default:
				$msg = "OPCAO INVALIDA!";
				break;
		}
	}
 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Cambio</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		body{
			background: dodgerblue;
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.container{
			background: #fff;
			padding: 35px;
			border-radius: 15px;
			box-shadow: 4px 4px 10px black;
			width: 350px;
		}
		.in{
			margin-bottom: 8px;
		}
		.in input{
			width: 100px;
			padding: 5px;
			outline: none;
			
		}
		.in input:hover{
			border: 2px solid dodgerblue;
		}
		#calc{
			padding: 5px;
			background-color: dodgerblue;
			cursor: pointer;
			color: white;
			border-radius: 5px;
			border: none;
			transition: 0.3s;
			margin-top: 10px;
			float: right;
			margin-right: 35px;
		}
		#calc:hover{
			background-color: darkcyan;
			color: #fff;
		}
		.error{
			padding: 5px;
			color: red;
		}
		select{
			padding: 5px;
		}
		.result{
			margin-top: 35px;
		}
		p{
			margin-top: 8px;
			padding: 5px;
			background: red;
			width: 50px;
			border-radius: 5px;
		}
		p:hover{
			background: tomato;
		}
		p a{
			text-decoration: none;
			color: white;
		}
	</style>
</head>
<body>
	<div class="container">
		<h2>Cambio</h2>
		<form method="POST" action="home.php">
			<div class="in">
			<label for="txtv">Valor</label>
			<input type="number" name="txtv" title="Digite o valor" min="0">
			<select name="slt" id="slt"> 
				<option>MOEDA</option>
				<option value="mzm">METICAL</option>
				<option value="rand">RAND</option>
				<option value="dolar">DOLAR</option>
			</select> <br>
			<button id="calc" type="submit" name="env">Calcular</button>
		</div>
		<div class="result">
			<?php echo "$result $msg"; ?>
		</div>
		<p><a href="sair.php">Sair</a></p>
		</form>
	</div>
	<!--AbdulSaranga-->
</body>
</html>