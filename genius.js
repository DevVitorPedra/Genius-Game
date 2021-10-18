const scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || []
const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const scorePanel = document.querySelector('.score-panel')
const highScores = document.getElementById('score-list')
let playerName = ''


let order = []
let clickedOrder = []
let score = 0


//0=verde
//1=vermelho
//2=amarelo
//3=azul

const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = []
    console.log("shuffle")
    for (let i in order) {
        let elementColor = createColorElement(order[i])
        setTimeout(()=>{
            lightColor(elementColor, Number(i) + 1)
        },1000)
        
    }
}

const lightColor = (element, number) => {
    
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
        console.log('timeout color')
    }, number-250);
    setTimeout(() => {
        element.classList.remove('selected')
        console.log('timeout remove color')
    },number)
    
}
const checkOrder = () => {
    for (let i in clickedOrder) {
        console.log('check')
        if (clickedOrder[i] != order[i]) {
            gameOver()
            break
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Voce Acertou ${playerName}! Iniciando próximo nível`)
        nextLevel()
        score +=10
        scorePanel.innerHTML=`${score}`
    }

}

const click = (color) => {
    console.log('click')
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)

}
const createColorElement = (color) => {
    console.log('create color')
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow
    } else if (color == 3) {
        return blue
    }
}
const nextLevel = () => {
    console.log('next level')
    
    shuffleOrder()
}
const gameOver = () => {
   if(scoreboard.length>=5 && score>scoreboard[4].points){
        
        scoreboard[4]={name:playerName,points:score}
    
       localStorage.setItem('scoreboard', JSON.stringify(scoreboard.sort((a,b)=>b.points-a.points)))

   }else if(scoreboard.length<5) {

    scoreboard.push({name:playerName,points:score})
       localStorage.setItem('scoreboard', JSON.stringify(scoreboard.sort((a,b)=>b.points-a.points)))
   }
   
    console.log('gameover')
    alert(`Pontuação: ${score}\n Voce Perdeu!\n click em Ok para jogar novamente`)
    order = []
    clickedOrder = []

    playGame()
}
const playGame = () => {
 playerName = prompt("what is your name?")
    console.log('inicio do jogo')
 
    score = 0
    scorePanel.innerHTML= ''
    nextLevel()
}
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame()
const scoreboardList = () => {
    scoreboard.map(element=>{
        let newLi = document.createElement('li')
        let newLiNode = document.createTextNode(`${element.name}: ${element.points}`)
        newLi.appendChild(newLiNode)
        highScores.appendChild(newLi)
    })
}

scoreboardList()
//salvar score no local storage


