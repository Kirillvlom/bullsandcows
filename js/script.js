window.onload = function () {
	var pos = 1;
	var int_rand = [];
	var e = 0;
	var m = 0;
	var s = 0;
	var pause_game = 0;
	var int_lenght = 3; //Загаданное число;
	var start_game = 0;
	var user_name;
	for (var a = [0, 1, 2, 3, 4,5,6,7,8,9], i = 9; i--; ) {
		var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
		int_rand[e] = random;
		e += 1;
		if (e > int_lenght) {
			i = 0
		}
	}
	console.log("Загаданное число " + int_rand.join(""));

	//Таймер
	function startTimer(){
		var min = this.m;
		var sec = this.s;
		if (min == 0) {
			if (sec == 0) {
				alert("Время вышло");
				document.location.reload();
			}
		}
		if (sec == 0) {
			this.m--;
			this.s = 60;
		}
		this.s--
		document.getElementById("min").innerHTML = min;
		document.getElementById("sec").innerHTML = sec;

		var startTimerq = setTimeout(startTimer, 1000);
		document.getElementById("pause").onclick = function(){
			if (pause_game == 0) {
				clearInterval(startTimerq);
				document.getElementById("pause").innerHTML = "Старт";
				document.getElementById('user_int').disabled = "disabled";
				pause_game = 1;
			} else if(pause_game == 1){
				startTimerq = setTimeout(startTimer);
				document.getElementById("pause").innerHTML = "Пауза";
				document.getElementById('user_int').disabled = "";
				pause_game = 0
			}

		};
	}

	//Новая простая игра
	function startGame(e){
		start_game = 1;
		document.getElementById('user-name').disabled = "disabled";
		user_name = document.getElementById('user-name').value;
		document.getElementById('start_game').remove();
		document.getElementsByClassName('reply')[0].style.opacity ="1";
		gameTimes();
		
		if (e == "normal") {
			document.getElementsByClassName("simple-game-q")[0].style.display = "block";
		}else
		if (e == "game_time_1_min") {
			document.getElementsByClassName('pause')[0].style.display ="block";
			document.getElementsByClassName('timer-user')[0].style.display ="flex";
			document.getElementsByClassName("simple-game-q")[0].style.display = "block";
			this.m = 1;
			this.s = 0;
			startTimer();
		} else if (e == "game_time_3_min") {
			document.getElementsByClassName('pause')[0].style.display ="block";
			document.getElementsByClassName('timer-user')[0].style.display ="flex";
			document.getElementsByClassName("simple-game-q")[0].style.display = "block";
			this.m = 3;
			this.s = 0;
			startTimer();
		}else if (e == "about_the_game") {
			document.getElementsByClassName('about_the_game')[0].style.display ="block";
		}else if (e == "results_table") {
			getTableResult("all");
			
			document.getElementsByClassName('results_table')[0].style.display ="block";
		}
	}

	//Время в игре
	var min_game = 0;
	var sec_game = 0;
	function gameTimes(){

/*		if (sec_game == 60) {
			sec_game = 0;
			min_game++;
		}
		*/sec_game++;
		setTimeout(gameTimes, 1000);
	}
	// Добавляем результат проверки
	function render_answer(user_i,b,k){
		document.getElementsByClassName('game-q-field')[0].innerHTML += "<div class='field'>\
		<div class='field_n'>"+pos+"</div>\
		<div class='field_int'>"+user_i+"</div>\
		<div class='field_n'> "+b+" - Быков</div>\
		<div class='field_n'> "+k+" - Коров</div>\
		</div>" ;
		pos +=1;
		document.getElementsByClassName('game-q-field')[0].scrollTop = document.getElementsByClassName('game-q-field')[0].scrollHeight;
	}

	//Проверка числа введенное пользователем
	function numberCheck(n){
		var b = 0; // Быки 
		var k = 0; // Коровы

		for (var i = 0; i <=int_lenght; i++) {
			for (var e = 0; e <=int_lenght; e++) {
				if (n[i] == int_rand[e] && i ==e) {
					b +=1;
				} if (n[i] == int_rand[e] && i !=e) {
					k +=1;
				}
			}
		}
		render_answer(n,b,k);
		if (b == int_lenght + 1) {
			sendingResults(gt, user_name,pos-1, min_game, sec_game)
			alert("Вы угадали число");
			document.location.reload();
		}
	}
	//В поле ввода можно вести только цифры
	document.getElementById("user_int").onkeypress = function(e){
		if (document.getElementById("user_int").value.length == int_lenght+1) {
			return false;
		}
		if (e.ctrlKey || e.altKey || e.metaKey) return;
		var c = getChar(e);

		if (c == null) return; 

		if (c < '0' || c > '9') {

			return false;
		}

	}
	function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
}

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
}

  return null; // спец. символ
}
	//Обычная игра
	document.getElementById('simple-game').onclick = function(){
		gt = 1;
		startGame("normal");
	}

	//Игра на время
	document.getElementById('time_game_1_min').onclick = function(){
		gt = 3;
		startGame("game_time_1_min");
	};

	document.getElementById('time_game_3_min').onclick = function(){
		gt = 2;
		startGame("game_time_3_min");
	};
	//О игре
	document.getElementById('about_the_game').onclick = function(){
		startGame("about_the_game");
	};
	//Результаты игр
	document.getElementById('results_table').onclick = function(){
		startGame("results_table");
	};

	//проверяем число  и считаем коров и быков 
	function checkGo(){
		if (pause_game == 1) return false;
		if (document.getElementById("user_int").value.length == int_lenght+1) {
			var user_ints = document.getElementById("user_int").value;
			for (var i = 0; i <= int_lenght; i++) {
				var i_repeat = 1;
				for (var e = 0; e <= int_lenght; e++) {
					var i_int = user_ints[i];
					if (i_int == user_ints[e]) {
						i_repeat +=1;
						if (i_repeat > 2) {
							alert("Числа не должны повторяться");
							document.getElementById("user_int").value = "";
							return false;
						}
					}
				}
			}
			numberCheck(user_ints);
			document.getElementById("user_int").value = "";
		}else{
			alert("Число должно быть "+int_lenght+"-х значное");
		}

	}
	//Проверяем число на повторения
	document.getElementById('enter').onclick = function(){
		checkGo();
		document.getElementById("user_int").focus();
		document.getElementById("user_int").select();
	}
	document.addEventListener("keypress", function(){
		if (event.keyCode == 13 && start_game == 1 ) {
			checkGo();
			document.getElementById("user_int").focus();
			document.getElementById("user_int").select();
		}
	}, false);

	// Запись результатов игры
	function  sendingResults(gameType, user_name,pos, min_game, sec_game){
		var time = sec_game;
		$.post(
			"/app.php?gameOver=OK",
			{
				gameType: gameType,
				pos:pos,
				user_name: user_name,
				time: time
			},
			onAjaxSuccess
			);

		function onAjaxSuccess(data)
		{
			if (data == "OK") {
				return 1;
			}
		}
	}
	// Получаем результаты игры
	function getTableResult(typeGame)
	{
		$.post(
			"/app.php?tableResult=1",
			{
				typeGame: typeGame
			},
			onAjaxSuccess
			);
		function onAjaxSuccess(data)
		{
			alert
			dataArray = JSON.parse(data);
			var e = 1;
			for (var i = 0; i < dataArray.length; i++) {
				if (dataArray[i]['typeGame'] == 1) {
					typeG = "Простая игра";
				} else if(dataArray[i]['typeGame'] == 2){
					typeG = "Игра на 3 мин";
				} else if(dataArray[i]['typeGame'] == 3){
					typeG = "Игра на 2 мин";
				}
				var minutes = Math.floor(dataArray[i]['time'] / 60);
				var seconds = dataArray[i]['time'] - minutes * 60;
				var timeG = minutes+" : "+ seconds ;
				document.getElementsByClassName("table_result")[0].innerHTML += "<div class='row_t_r'>\
				<div class='position'>"+e+"</div>\
				<div class='name'>"+dataArray[i]['userName']+"</div>\
				<div class='steps'>"+dataArray[i]['position']+"</div>\
				<div class='time'>"+timeG+"</div>\
				<div class='type'>"+typeG+"</div>\
				</div>";
				e++;
			};
		}
	}


}

