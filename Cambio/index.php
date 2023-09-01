<?php 
	include_once 'config.php';
	session_start();
	$login = htmlspecialchars(stripslashes(trim($_POST['txtn'])));
	$pass = htmlspecialchars(stripslashes(trim($_POST['txtp'])));
	if (isset($_POST['env'])) {
		if (empty($login)) {
			header('Location: index.php?msg=Username is required!');
		}elseif (empty($pass)) {
			header('Location: index.php?msg=Password is required!');
		}else{
			$sql = "SELECT login, senha FROM usuarios WHERE login = :lg AND senha = :s";
			$cmd = $db->prepare($sql);
			$cmd->bindParam(":lg", $login);
			$cmd->bindParam(":s", $pass);
			$cmd->execute();
			if ($cmd->rowCount() > 0) {
				$_SESSION['user'] = $login;
				header('Location: home.php');
				exit();
			}else{
				header('Location: index.php?msg=Incorret Username or Password');
			}
		}
	}
 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Entrar</title>
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
			width: 335px;
		}
		.in{
			margin-bottom: 8px;
		}
		.in input{
			display: block;
			padding: 5px;
			outline: none;
			width: 100%;
		}
		.in input:hover{
			border: 2px solid dodgerblue;
		}
		button{
			padding: 5px;
			background-color: dodgerblue;
			cursor: pointer;
			color: white;
			border-radius: 5px;
			border: none;
			transition: 0.3s;
			float: right;
		}
		button:hover{
			background-color: darkcyan;
			color: #fff;
		}
		.error{
			padding: 5px;
			color: red;
		}
	</style>
</head>
<body>
	<div class="container">
		<h2>Lo<span style="color: dodgerblue;">Gin</span></h2>
		<div class="error">
			<?php if ($_GET['msg']) {?>
				<?php echo $_GET['msg']; ?>
			<?php } ?>
		</div>
		<form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
			<div class="in">
				<label for="txtn">Username</label>
				<input type="text" name="txtn" title="Digite seu nome de usuario" placeholder="Type Username">
			</div>
			<div class="in">
				<label for="txtp">Password</label>
				<input type="password" name="txtp" title="Digite sua senha" placeholder="Type Password" maxlength="8">
			</div>
			<button type="submit" name="env">Entrar</button>
		</form>
	</div>
</body>
</html>