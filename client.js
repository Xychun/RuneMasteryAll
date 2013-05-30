//verbindung zum server localhost port 9000
var socket = io.connect('http://localhost:9000');

function clixxx(id, param){
socket.emit(id, param);
// alert(param.ele_name);
// alert('emited: ' + id);
}

//Server sendet EVENT 0
socket.on('0',function(anonym){
	showMovementPhaseAnimation();
});

//Server sendet EVENT 1
socket.on('1',function(anonym){
	LevelUp();
});

//Server sendet EVENT 2
socket.on('2',function(anonym){
	statsIncrement(0); update(0);
});

//Server sendet EVENT 3
socket.on('3',function(anonym){
	statsIncrement(2); update(2);
});

//Server sendet EVENT 4
socket.on('4',function(anonym){
	statsIncrement(4); update(4);
});

//Server sendet EVENT 5
socket.on('5',function(anonym){
	statsIncrement(7); update(7);
});

//Server sendet EVENT 6
socket.on('6',function(anonym){
	statsIncrement(9); update(9);
});

//Server sendet EVENT 7
socket.on('7',function(anonym){
	statsIncrement(11); update(11);
});

//Server sendet EVENT 8
socket.on('8',function(anonym){
	statsIncrement(13); update(13);
});

//Server sendet EVENT 9
socket.on('9',function(anonym){
	statsIncrement(15); update(15);
});

//Server sendet EVENT 10
socket.on('10',function(anonym){
	statsIncrement(17); update(17);
});

//Server sendet EVENT 11
socket.on('11',function(anonym){
	check("defence");
});

//Server sendet EVENT 12
socket.on('12',function(anonym){
	pressed("defence");
});

//Server sendet EVENT 13
socket.on('13',function(anonym){
	released("defence");
});

//Server sendet EVENT 14
socket.on('14',function(anonym){
	check("attack");
});

//Server sendet EVENT 15
socket.on('15',function(anonym){
	pressed("attack");
});

//Server sendet EVENT 16
socket.on('16',function(anonym){
	released("attack");
});

//Server sendet EVENT 17
socket.on('17',function(anonym){
	check(anonym.ele_name);
});

//Server sendet EVENT 18
socket.on('18',function(anonym){
	pressed(anonym.ele_name);
});

//Server sendet EVENT 19
socket.on('19',function(anonym){
	released(anonym.ele_name);
});

//Server sendet EVENT 20
socket.on('20',function(anonym){
	check(anonym.ele_name);
});

//Server sendet EVENT 21
socket.on('21',function(anonym){
	pressed(anonym.ele_name);
});

//Server sendet EVENT 22
socket.on('22',function(anonym){
	released(anonym.ele_name);
});

//Server sendet EVENT 23
socket.on('23',function(anonym){
	setFieldParas1(anonym.reihenAnzahl);
});

//Server sendet EVENT 24
socket.on('24',function(anonym){
	setFieldParas3(anonym.reihenLaenge);
});

//Server sendet EVENT 25
socket.on('25',function(anonym){
	setFieldParas2(anonym.monsterAnzahl);
});

//Server sendet EVENT 26
socket.on('26',function(anonym){
	startGame();
});

//Server sendet EVENT 27
socket.on('27',function(anonym){
	window.location.reload();
	document.getElementById('reihenAnzahl').value='';
	document.getElementById('monsterAnzahl').value='';
	document.getElementById('reihenLänge').value=''; 
});

//Server sendet EVENT 28
socket.on('28',function(anonym){
	showMovementPhaseAnimation();
});

//Server sendet EVENT 29
socket.on('29',function(anonym){
	showMonsterChooser();
});

//Server sendet EVENT 30
socket.on('30',function(anonym){
	hideMonsterChooser();
});

//Server sendet EVENT 31
socket.on('31',function(anonym){
	load_stats();
});

//Server sendet EVENT 32
socket.on('32',function(anonym){
	lvl();
});

//Server sendet EVENT 33
socket.on('33',function(anonym){
	EXPGain(anonym.exp);
});

//Server sendet EVENT 34
socket.on('34',function(anonym){
	blockAction();
});

//Server sendet EVENT 35
socket.on('35',function(anonym){
	released(name);
});

//Server sendet EVENT 36
socket.on('36',function(anonym){
	released(name);
});

//Server sendet EVENT 37
socket.on('37',function(anonym){
	released(name);
});

//Server sendet EVENT 38
socket.on('38',function(anonym){
	released(name);
});

//Server sendet EVENT 39
socket.on('39',function(anonym){
	released(name);
});

//Server sendet EVENT 40
socket.on('40',function(anonym){
	released(name);
});

//Server sendet EVENT 41
socket.on('41',function(anonym){
	released(name);
});

//Server sendet EVENT 42
socket.on('42',function(anonym){
	released(name);
});

//Server sendet EVENT 43
socket.on('43',function(anonym){
	released(name);
});

//Server sendet EVENT 44
socket.on('44',function(anonym){
	released(name);
});

//Server sendet EVENT 45
socket.on('45',function(anonym){
	released(name);
});

//Server sendet EVENT 1000
socket.on('1000',function(anonym){
	startFightRoutine(0, 0);
});

//Server sendet EVENT 2000
socket.on('2000',function(anonym){
	startFight();
});


