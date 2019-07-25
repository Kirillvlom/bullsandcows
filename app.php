<?
class app 
{
	//Устанавливаем соединение
	public static function getConnection()
	{
		//Выполняем соединение
		$params = include('config/db_params.php');
		$dsn = "mysql:host={$params['host']};dbname={$params['dbname']}";
		$db = new PDO($dsn, $params['user'], $params['password']);
        // Задаем кодировку
		$db->exec("set names utf8");
		return  $db;
	}
	//Получаем информацию по результатам 
	public function getTableResult($typeGame = "")
	{
		$db = app::getConnection();
		$getinfo = "SELECT * FROM resultTable";
		$array = $db -> query($getinfo);
		$array = $array ->fetchAll();
		
		function cmp($a, $b)
		{
			if ($a["position"] == $b["position"]) {
				return 0;
			}
			return ($a["position"] < $b["position"]) ? -1 : 1;
		}
		
		function cmt($a, $b)
		{

			return ($a["position"] == $b["position"] and $a["time"] < $b["time"]) ? -1 : 1;
		}
		
		usort($array, "cmt"); // Сортируем по времени
		usort($array, "cmp");// Сортируем по позициям
		echo json_encode($array);
	}
	// Добавляем информацию о победе
	public function sendTableResult($gameType,$pos, $user_name,$time)
	{
		$db = app::getConnection();
		$sendInfo = "INSERT INTO resultTable (userName, position, time, typeGame) VALUES ('$user_name', '$pos', '$time','$gameType')";
		$db->query($sendInfo);
	}
}

$app = new app();
if ($_GET["gameOver"] == "OK") {
	if ($app -> sendTableResult($_POST["gameType"], $_POST["pos"], $_POST["user_name"],$_POST["time"])) {
		echo "OK";
	} else{
		return false;
	}
}elseif ($_GET["tableResult"] == "1") {
	$app -> getTableResult();
}
