<!DOCTYPE>
<html>
<head>
	<meta charset="UTF-8">
	<title>Быки и коровы</title>
	<link rel="stylesheet" href="/style/style.css?ver=<?echo microtime(1);?>">
	<link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
	<script src="/js/jquery-3.4.1.min.js"></script>
	<script src="/js/script.js?ver=<?echo microtime(1);?>"></script>
</head>
<body>
	<div class="main">
		<div class="background-darkening"></div>
		<div class="name-user">
			<span>Игрок:</span>
			<input type="text" value="Pechenka.io" id='user-name' >
		</div>
		<div class="timer-user">
			<span>Таймер:</span>
			<div>
				<span id='min'>0</span>
				<span> : </span>
				<span id='sec'>00</span>
			</div>
			<br>
			
		</div>
		<div class="pause" id='pause'>
			Пауза
		</div>
		<div class="reply" onclick="document.location.reload();">
			<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#33304b"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
		</div>
		<div class="start-game" id='start_game'>
			<div class="start-game-menu">
				<div class="game-menu-title">
					Быки и коровы
				</div>
				<div class="game-menu-actions">
					<div class="action">
						<input type="button" value='Простая игра' id='simple-game'>
					</div>
					<div class="action">
						<input type="button" value='Игра на время 3 мин' id='time_game_3_min'>
					</div>
					<div class="action">
						<input type="button" value='Игра на время 1 мин' id='time_game_1_min'>
					</div>
					<div class="action">
						<input type="button" value='Таблица' id="results_table">
					</div>
					<div class="action">
						<input type="button" value='Об игре' id='about_the_game'>
					</div>
				</div>
			</div>
		</div>

		<div class="simple-game">
			<div class="simple-game-q">
				<div class="game-q-field">
					<div class="title_g">Число загадано, приятной игры</div>

				</div>
				<div class="game-q-input">
					<div class="input-block">
						<input type="text" id="user_int" placeholder="Введите число" autofocus>
					</div>
					<div class="input-enter">
						<input type="button" > 
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff" id='enter'><path d="M0 0h24v24H0z" fill="none"/><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"/></svg>
					</div>
				</div>

			</div>
			<div class="about_the_game">
				<div class="cow"><img src="/img/cow.png" alt=""></div>
				<div class="bull"><img src="/img/bull.png" alt=""></div>

				<div class='title_help'>Быки и коровы</div>
				<div class='text_help'>
					<h1>Правила игры</h1>
					<p>Компьютер задумывает четыре различные цифры из 0,1,2,...9. Игрок делает ходы, чтобы узнать эти цифры и их порядок. Каждый ход состоит из четырёх цифр, 0 может стоять на первом месте. В ответ компьютер показывает число отгаданных цифр, стоящих на своих местах (число быков) и число отгаданных цифр, стоящих не на своих местах (число коров).</p>
					<h2>Пример</h2>
					<p>Компьютер задумал 0834. Игрок сделал ход 8134. Компьютер ответил: 2 быка (цифры 3 и 4) и 1 корова (цифра 8).</p>
				</div>

			</div>
			<div class="results_table">
				<div class="title_results_table"><div class='result_type'>Общий рейтинг</div></div>
				
				<div class="header_table_result">
					<div class="position">Позиция</div>
					<div class="name">Bмя</div>
					<div class="steps">Шаги</div>
					<div class="time">Время</div>
					<div class="type">Тип игры</div>

				</div>
				<div class="table_result">
					
										
				</div>
			</div>

		</div>

	</div>

</div>
</body>
</html>