let maincontainer = document.createElement('div');
maincontainer.classList.add('container', 'justify-content-center');

let heading = document.createElement('div');
heading.classList.add('row','border-bottom', 'justify-content-center');
let h1= document.createElement('h1');
h1.innerText = 'Cricket 10';
h1.classList.add('font-weight-bold');

heading.append(h1);
maincontainer.append(heading);

let row1 = document.createElement('div');
row1.classList.add('row','row-cols-3', 'border-bottom','text-center');

let r1col1 = document.createElement('div');
r1col1.classList.add('col', 'text-left');
let col1r1 = document.createElement('div');
col1r1.classList.add('row','font-weight-bold');
col1r1.innerText = 'Team 1 Score';
let col1r2 = document.createElement('div');
col1r2.classList.add('row');
col1r2.id ='Team1Score';
col1r2.innerText = '0';
let col1r3 = document.createElement('div');
col1r3.classList.add('row');
let hit1 =  document.createElement('button');
hit1.type ='submit';
hit1.id ='hit1';
hit1.classList.add('btn', 'btn-primary');
hit1.innerText = 'HIT 1';
col1r3.append(hit1);
r1col1.append(col1r1,col1r2,col1r3);

let col2r1 = document.createElement('div');
col2r1.classList.add('col','text-center');
let col2row1 = document.createElement('div');
col2row1.classList.add('row','font-weight-bold');
col2row1.innerText='Timer';
let col2row2 = document.createElement('div');
col2row2.classList.add('row');
col2row2.id ='timer';
col2row2.innerText='60';
col2r1.append(col2row1,col2row2);

let r1col3 = document.createElement('div');
r1col3.classList.add('col', 'text-right');
let col3r1 = document.createElement('div');
col3r1.classList.add('row','font-weight-bold');
col3r1.innerText = 'Team 2 Score';
let col3r2 = document.createElement('div');
col3r2.classList.add('row');
col3r2.id ='Team2Score';
col3r2.innerText = '0';
let col3r3 = document.createElement('div');
col3r3.classList.add('row');
let hit2 =  document.createElement('button');
hit2.type ='submit';
hit2.id ='hit2';
hit2.classList.add('btn', 'btn-primary');
hit2.innerText = 'HIT 2';
col3r3.append(hit2);
r1col3.append(col3r1,col3r2,col3r3);

row1.append(r1col1,col2r1,r1col3);
maincontainer.append(row1);

let result = document.createElement('div');
result.classList.add('row', 'justify-content-center');
let resultbutton = document.createElement('button');
resultbutton.type ='submit';
resultbutton.id='result';
resultbutton.classList.add('btn', 'btn-primary');
resultbutton.innerText ='Generate Result';
result.append(resultbutton);
maincontainer.append(result);

let win = document.createElement('div');
win.classList.add('row');
let wincol = document.createElement('div');
wincol.classList.add('col','font-weight-bold');
wincol.innerText = 'MATCH WON BY';
let winres = document.createElement('div');
winres.id= 'teamwin';
winres.classList.add('border-top');

wincol.append(winres);
win.append(wincol);
maincontainer.append(win);

let match = document.createElement('div');
match.classList.add('row');
let matchcol = document.createElement('div');
matchcol.classList.add('col','font-weight-bold');
matchcol.innerText = 'MAN OF THE MATCH';
let matchres = document.createElement('div');
matchres.id= 'manofmatch';
matchres.classList.add('border-top');

matchcol.append(matchres);
match.append(matchcol);
maincontainer.append(match);

let game = document.createElement('div');
game.classList.add('row', 'justify-content-center');
game.id = 'scorecontainer';

maincontainer.append(game);
document.body.append(maincontainer);


document.getElementById('hit1').addEventListener('click',
()=>{
   team1.startgame(); 
   
});

document.getElementById('hit2').addEventListener('click',
()=>{
   team2.startgame();
});

document.getElementById('result').addEventListener('click',()=>{
    if(team1.teamscore > team2.teamscore)
    {
        (<HTMLDivElement>document.getElementById('teamwin')).innerHTML = 'Team 1->'+team1.teamscore;
    }
    else
    (<HTMLDivElement>document.getElementById('teamwin')).innerHTML = 'Team 2->'+team2.teamscore;

    document.getElementById('manofmatch').innerHTML = manofmatch;
});


let player=1;
let ball=1;
let highscore =0;
let interval;
let gamestartedteam1 = false;
let gamestartedteam2 = false;
let manofmatch;

class Teams{
    teamname:string;
    players:players[] = [];
    teamscore:number =0;
    total:number =0;

    constructor(teamname:string)
    {
        this.teamname = teamname;
        console.log(this.teamname);
    }

    createtable(){

        let tablediv = document.createElement('div');
        maincontainer.appendChild(tablediv);

        let table = document.createElement('table');
        table.classList.add('table','table-bordered','table-sm');
        tablediv.appendChild(table);

        let thead = document.createElement('thead');
        thead.classList.add('thead-dark');

        let tableheadrow = document.createElement('tr');
        tableheadrow.id = 'header';        

        let tn = document.createElement('th');
        tn.innerHTML = `${this.teamname}`;
        tableheadrow.appendChild(tn);       

        let b1 = document.createElement('th');
        b1.innerHTML = "B1";
        tableheadrow.appendChild(b1);

        let thc3 = document.createElement('th');
        thc3.innerHTML = "B2";
        tableheadrow.appendChild(thc3);

        let thc4 = document.createElement('th');
        thc4.innerHTML = "B3";
        tableheadrow.appendChild(thc4);

        let b4 = document.createElement('th');
        b4.innerHTML = "B4";
        tableheadrow.appendChild(b4);

        let b5 = document.createElement('th');
        b5.innerHTML = "B5";
        tableheadrow.appendChild(b5);

        let b6 = document.createElement('th');
        b6.innerHTML = "B6";
        tableheadrow.appendChild(b6);
        let total = document.createElement('th');
        total.innerHTML = "TOTAL";
        tableheadrow.appendChild(total);
       
        thead.appendChild(tableheadrow);

        table.appendChild(thead);

        let tBody = document.createElement('tbody');
        table.appendChild(tBody);        

        for (let i = 1; i <= 10; i++) {
            let row = document.createElement('tr');
            tBody.appendChild(row);
            let th = document.createElement('th');            
            th.innerHTML = `PLAYER${i}`;
            row.appendChild(th);
            for (let j = 1; j <= 6; j++) {
                let td = document.createElement('td');
                td.setAttribute('id', `${this.teamname}${i}${j}`);
                row.appendChild(td);
            }
            let tdTotal = document.createElement('td');
            tdTotal.setAttribute('id', `${this.teamname}Total${i}`)
            row.appendChild(tdTotal)
        }
    }

    startgame()
    {
        if(this.teamname == 'Team1')
        {
            if(!gamestartedteam1)
            {
            let counter = 60;     
            const interval = setInterval(() => {
            console.log(counter);
            counter--;
                
            if (counter < 0 ) {
                (<HTMLButtonElement>document.getElementById('hit1')).disabled = true;
                (<HTMLButtonElement>document.getElementById('hit2')).disabled = false;
                clearInterval(interval);
                return;
               
            }
            else {
                (<HTMLInputElement>document.getElementById("timer")).innerHTML = `${counter}`;
            }
            }, 1000);
        }
        
        gamestartedteam1 = true;
    }
        else
        {
            if(!gamestartedteam2)
            {
            let counter = 60;     
            interval = setInterval(() => {
            console.log(counter);
            counter--;
                
            if (counter < 0 ) {
                (<HTMLButtonElement>document.getElementById('hit1')).disabled = false;
                (<HTMLButtonElement>document.getElementById('hit2')).disabled = true;
                clearInterval(interval);
                return;
                
            }
            else {
                (<HTMLInputElement>document.getElementById("timer")).innerHTML = `${counter}`;
            }
            }, 1000);
        }
        gamestartedteam2 = true;
        }
        let score = [0, 1, 2, 4, 6];
        let randomscore = score[Math.floor(Math.random() * score.length)];
        this.total += randomscore;
        this.teamscore += randomscore;
        (<HTMLInputElement>document.getElementById(`${this.teamname}Score`)).innerHTML = `${this.teamscore}`;
        (<HTMLInputElement>document.getElementById(`${this.teamname}${player}${ball}`)).innerHTML = `${randomscore}`;
        ball++;
        if (ball == 7 || randomscore == 0) {
            player++;
            ball = 1;
            (<HTMLInputElement>document.getElementById(`${this.teamname}Total${player - 1}`)).innerHTML = `${this.total}`;
            let teamplayer = new players();
            teamplayer.name = `${this.teamname} Player${player-1}`;
            teamplayer.runs = this.total;
            this.players.push(teamplayer);  
            if(this.total > highscore){
                highscore = this.total;
                manofmatch = teamplayer.name;
            }          
            this.total = 0;
        }
        if (player == 11) {
            if (this.teamname == "Team1") {
                (<HTMLButtonElement>document.getElementById('hit1')).disabled = true;
                (<HTMLButtonElement>document.getElementById('hit2')).disabled = false;               
                clearInterval(interval);
                (<HTMLInputElement>document.getElementById("timer")).innerHTML = '0';
                
            }
            if (this.teamname == "Team2") {
                (<HTMLButtonElement>document.getElementById('hit1')).disabled = false;
                (<HTMLButtonElement>document.getElementById('hit2')).disabled = true;   
                    
                clearInterval(interval);
               (<HTMLInputElement>document.getElementById("timer")).innerHTML = '0';
            }
            player = 1;
            ball = 1;
        }
    }

}
class players{
    name:string;
    runs:number;
    constructor(){

    }
}
//let container = document.getElementById('scorecontainer');
let team1 =new Teams('Team1');
team1.createtable();
let team2 = new Teams('Team2');
team2.createtable();










                   
           
           
                       