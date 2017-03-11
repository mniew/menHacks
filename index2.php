 <?php
 	$connect = new mysqli('localhost', 'root','', 'login');

 			if($connect->connect_error)(
 				die('connection fialed')
 			) else
 			echo 'connect worked';
 ?>