function carregar(){
 var agora = new Date()
 var hr = window.document.getElementById('hora')
 var hora = agora.getHours()
 var min = agora.getMinutes()
/*var hora = 11
var min = 1*/
 var img  =window.document.getElementById('image')
 hr.innerText = `Agora são ${hora}h${min}`

 if(hora>=0 && hora <12){
    img.src = 'imagens/Manhã-circulo.png'
    window.document.body.style.background = '##1995E6'
 } else if(hora>12 && hora < 18){
    img.src = 'imagens/Tarde-circulo.png'
    window.document.body.style.background = '#B1D3EF'
    
 } else{
    img.src = 'imagens/Noite-circulo.png'
    window.document.body.style.background = '#3A2E4D'

 }
}

