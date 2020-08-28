var maincontainer = document.createElement('div');
maincontainer.classList.add('container', 'justify-content-center');
var heading = document.createElement('div');
heading.classList.add('row', 'border-bottom', 'justify-content-center');
var h1 = document.createElement('h1');
h1.innerText = 'Cricket 10';
h1.classList.add('font-weight-bold');
heading.append(h1);
maincontainer.append(heading);
var row1 = document.createElement('div');
row1.classList.add('row', 'row-cols-3', 'border-bottom', 'text-center');
var r1col1 = document.createElement('div');
r1col1.classList.add('col', 'text-left');
var col1r1 = document.createElement('div');
col1r1.classList.add('row', 'font-weight-bold');
col1r1.innerText = 'Team 1 Score';
var col1r2 = document.createElement('div');
col1r2.classList.add('row');
col1r2.id = 'Team1Score';
col1r2.innerText = '0';
var col1r3 = document.createElement('div');
col1r3.classList.add('row');
var hit1 = document.createElement('button');
hit1.type = 'submit';
hit1.id = 'hit1';
hit1.classList.add('btn', 'btn-primary');
hit1.innerText = 'HIT 1';
col1r3.append(hit1);
r1col1.append(col1r1, col1r2, col1r3);
var col2r1 = document.createElement('div');
col2r1.classList.add('col', 'text-center');
var col2row1 = document.createElement('div');
col2row1.classList.add('row', 'font-weight-bold');
col2row1.innerText = 'Timer';
var col2row2 = document.createElement('div');
col2row2.classList.add('row');
col2row2.id = 'timer';
col2row2.innerText = '60';
col2r1.append(col2row1, col2row2);
var r1col3 = document.createElement('div');
r1col3.classList.add('col', 'text-right');
var col3r1 = document.createElement('div');
col3r1.classList.add('row', 'font-weight-bold');
col3r1.innerText = 'Team 2 Score';
var col3r2 = document.createElement('div');
col3r2.classList.add('row');
col3r2.id = 'Team2Score';
col3r2.innerText = '0';
var col3r3 = document.createElement('div');
col3r3.classList.add('row');
var hit2 = document.createElement('button');
hit2.type = 'submit';
hit2.id = 'hit2';
hit2.classList.add('btn', 'btn-primary');
hit2.innerText = 'HIT 2';
col3r3.append(hit2);
r1col3.append(col3r1, col3r2, col3r3);
row1.append(r1col1, col2r1, r1col3);
maincontainer.append(row1);
var result = document.createElement('div');
result.classList.add('row', 'justify-content-center');
var resultbutton = document.createElement('button');
resultbutton.type = 'submit';
resultbutton.id = 'result';
resultbutton.classList.add('btn', 'btn-primary');
resultbutton.innerText = 'Generate Result';
result.append(resultbutton);
maincontainer.append(result);
var win = document.createElement('div');
win.classList.add('row');
var wincol = document.createElement('div');
wincol.classList.add('col', 'font-weight-bold');
wincol.innerText = 'MATCH WON BY';
var winres = document.createElement('div');
winres.id = 'teamwin';
winres.classList.add('border-top');
wincol.append(winres);
win.append(wincol);
maincontainer.append(win);
var match = document.createElement('div');
match.classList.add('row');
var matchcol = document.createElement('div');
matchcol.classList.add('col', 'font-weight-bold');
matchcol.innerText = 'MAN OF THE MATCH';
var matchres = document.createElement('div');
matchres.id = 'manofmatch';
matchres.classList.add('border-top');
matchcol.append(matchres);
match.append(matchcol);
maincontainer.append(match);
var game = document.createElement('div');
game.classList.add('row', 'justify-content-center');
game.id = 'scorecontainer';
maincontainer.append(game);
document.body.append(maincontainer);
document.getElementById('hit1').addEventListener('click', function () {
    team1.startgame();
});
document.getElementById('hit2').addEventListener('click', function () {
    team2.startgame();
});
document.getElementById('result').addEventListener('click', function () {
    if (team1.teamscore > team2.teamscore) {
        document.getElementById('teamwin').innerHTML = 'Team 1->' + team1.teamscore;
    }
    else
        document.getElementById('teamwin').innerHTML = 'Team 2->' + team2.teamscore;
    document.getElementById('manofmatch').innerHTML = manofmatch;
});
var player = 1;
var ball = 1;
var highscore = 0;
var interval;
var gamestartedteam1 = false;
var gamestartedteam2 = false;
var manofmatch;
var Teams = /** @class */ (function () {
    function Teams(teamname) {
        this.players = [];
        this.teamscore = 0;
        this.total = 0;
        this.teamname = teamname;
        console.log(this.teamname);
    }
    Teams.prototype.createtable = function () {
        var tablediv = document.createElement('div');
        maincontainer.appendChild(tablediv);
        var table = document.createElement('table');
        table.classList.add('table', 'table-bordered', 'table-sm');
        tablediv.appendChild(table);
        var thead = document.createElement('thead');
        thead.classList.add('thead-dark');
        var tableheadrow = document.createElement('tr');
        tableheadrow.id = 'header';
        var tn = document.createElement('th');
        tn.innerHTML = "" + this.teamname;
        tableheadrow.appendChild(tn);
        var b1 = document.createElement('th');
        b1.innerHTML = "B1";
        tableheadrow.appendChild(b1);
        var thc3 = document.createElement('th');
        thc3.innerHTML = "B2";
        tableheadrow.appendChild(thc3);
        var thc4 = document.createElement('th');
        thc4.innerHTML = "B3";
        tableheadrow.appendChild(thc4);
        var b4 = document.createElement('th');
        b4.innerHTML = "B4";
        tableheadrow.appendChild(b4);
        var b5 = document.createElement('th');
        b5.innerHTML = "B5";
        tableheadrow.appendChild(b5);
        var b6 = document.createElement('th');
        b6.innerHTML = "B6";
        tableheadrow.appendChild(b6);
        var total = document.createElement('th');
        total.innerHTML = "TOTAL";
        tableheadrow.appendChild(total);
        thead.appendChild(tableheadrow);
        table.appendChild(thead);
        var tBody = document.createElement('tbody');
        table.appendChild(tBody);
        for (var i = 1; i <= 10; i++) {
            var row = document.createElement('tr');
            tBody.appendChild(row);
            var th = document.createElement('th');
            th.innerHTML = "PLAYER" + i;
            row.appendChild(th);
            for (var j = 1; j <= 6; j++) {
                var td = document.createElement('td');
                td.setAttribute('id', "" + this.teamname + i + j);
                row.appendChild(td);
            }
            var tdTotal = document.createElement('td');
            tdTotal.setAttribute('id', this.teamname + "Total" + i);
            row.appendChild(tdTotal);
        }
    };
    Teams.prototype.startgame = function () {
        if (this.teamname == 'Team1') {
            if (!gamestartedteam1) {
                var counter_1 = 60;
                var interval_1 = setInterval(function () {
                    console.log(counter_1);
                    counter_1--;
                    if (counter_1 < 0) {
                        document.getElementById('hit1').disabled = true;
                        document.getElementById('hit2').disabled = false;
                        clearInterval(interval_1);
                        return;
                    }
                    else {
                        document.getElementById("timer").innerHTML = "" + counter_1;
                    }
                }, 1000);
            }
            gamestartedteam1 = true;
        }
        else {
            if (!gamestartedteam2) {
                var counter_2 = 60;
                interval = setInterval(function () {
                    console.log(counter_2);
                    counter_2--;
                    if (counter_2 < 0) {
                        document.getElementById('hit1').disabled = false;
                        document.getElementById('hit2').disabled = true;
                        clearInterval(interval);
                        return;
                    }
                    else {
                        document.getElementById("timer").innerHTML = "" + counter_2;
                    }
                }, 1000);
            }
            gamestartedteam2 = true;
        }
        var score = [0, 1, 2, 4, 6];
        var randomscore = score[Math.floor(Math.random() * score.length)];
        this.total += randomscore;
        this.teamscore += randomscore;
        document.getElementById(this.teamname + "Score").innerHTML = "" + this.teamscore;
        document.getElementById("" + this.teamname + player + ball).innerHTML = "" + randomscore;
        ball++;
        if (ball == 7 || randomscore == 0) {
            player++;
            ball = 1;
            document.getElementById(this.teamname + "Total" + (player - 1)).innerHTML = "" + this.total;
            var teamplayer = new players();
            teamplayer.name = this.teamname + " Player" + (player - 1);
            teamplayer.runs = this.total;
            this.players.push(teamplayer);
            if (this.total > highscore) {
                highscore = this.total;
                manofmatch = teamplayer.name;
            }
            this.total = 0;
        }
        if (player == 11) {
            if (this.teamname == "Team1") {
                document.getElementById('hit1').disabled = true;
                document.getElementById('hit2').disabled = false;
                clearInterval(interval);
                document.getElementById("timer").innerHTML = '0';
            }
            if (this.teamname == "Team2") {
                document.getElementById('hit1').disabled = false;
                document.getElementById('hit2').disabled = true;
                clearInterval(interval);
                document.getElementById("timer").innerHTML = '0';
            }
            player = 1;
            ball = 1;
        }
    };
    return Teams;
}());
var players = /** @class */ (function () {
    function players() {
    }
    return players;
}());
//let container = document.getElementById('scorecontainer');
var team1 = new Teams('Team1');
team1.createtable();
var team2 = new Teams('Team2');
team2.createtable();
