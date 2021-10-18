//Function to create a nice, clean and centered advertise, passing params type and text
export function createAlert(type = 'alert', title = 'Alert', text = 'The Real Slim Shade, please stand up!') {
    //div pincipal do alerta
    let newDivAlert = document.createElement('div')
    let newAlertTitle = document.createElement('h1')
    let newAlertTitleNode = document.createTextNode(title)
    newAlertTitle.appendChild(newAlertTitleNode)
    let newAlertText = document.createElement('p')
    let newAlertTextNode = document.createTextNode(text)
    newAlertText.appendChild(newAlertTextNode)
    newDivAlert.appendChild(newAlertTitle)
    newDivAlert.appendChild(newAlertText)
    newDivAlert.classList.add('timeoutRemove')

    newDivAlert.style = `
        position:absolute;
        top:10%;
        left:32%;
        padding:0;
        width:35%;
        display:flex; 
        flex-direction:column;
        justify-content:center;
        align-items: center;
        font-family: arial;
        border-radius:12px;
        border:3px solid ${type === 'alert' ? 'red' : 'green'};
        background-color : ${type === 'alert' ? 'yellow' : 'lightgreen'};
        `
    document.body.appendChild(newDivAlert)
    setTimeout(() => {
        document.querySelector('.timeoutRemove').remove()
    }, 4000)
}