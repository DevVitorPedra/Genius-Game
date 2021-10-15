const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
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
    console.log('color')
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
        alert(`Pontuação: ${score}\n Voce Acertou! Iniciando próximo nível`)
        nextLevel()
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
    score++
    shuffleOrder()
}
const gameOver = () => {
    console.log('gameover')
    alert(`Pontuação: ${score}\n Voce Perdeu!\n click em Ok para jogar novamente`)
    order = []
    clickedOrder = []

    playGame()
}
const playGame = () => {
    console.log('inicio do jogo')
    alert('Bem vindo ao Genius!\n iniciando o jogo!')
    score = 0
    nextLevel()
}
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame()