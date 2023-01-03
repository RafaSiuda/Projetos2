function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = documnt.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('(ERRO) Verifique os dados')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
    }
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade < 2){
            //bebe
            img.setAttribute('src', 'imagens/homens/12.png')
        } else if(idade >=2 && idade < 5){
            //criança
            img.setAttribute('src', 'imagens/homens/25.png')
        } else if (idade>=5 && idade < 12){
            //adolescente
            img.setAttribute('src', 'imagens/homens/512.png')
        } else if(idade > 12 && idade < 18){
            //jovem
            img.setAttribute('src', 'imagens/homens/1218.png')
        } else if (idade > 18 && idade < 30){
            //adulto
            img.setAttribute('src', 'imagens/homens/1830.png')
        } else if(idade > 30 && idade < 50){
            //adulto 2
            img.setAttribute('src', 'imagens/homens/3040.png')
        } else if(idade >50 && idade < 130){
            //idoso
            img.setAttribute('src', 'imagens/homens/60.png')
        } else if (idade > 130){
            img.setAttribute('src', 'imagens/homens/130.png')
        }
        
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade>=0 && idade <2){
            //bebe
            img.setAttribute('src', 'imagens/mulheres/12.png')
        } else if(idade >=2 && idade < 5){
            //criança
            img.setAttribute('src', 'imagens/mulheres/25.png')
        } else if (idade>=5 && idade < 12){
            //adolescente
            img.setAttribute('src', 'imagens/mulheres/510.png')
        } else if(idade > 12 && idade < 18){
            //jovem
            img.setAttribute('src', 'imagens/mulheres/1218.png')
        } else if (idade > 18 && idade < 30){
            //adulto
            img.setAttribute('src', 'imagens/mulheres/1830.png')
        } else if(idade > 30 && idade < 50){
            //adulto 2
            img.setAttribute('src', 'imagens/mulheres/4050.png')
        } else if(idade >50 && idade < 130){
            //idoso
            img.setAttribute('src', 'imagens/mulheres/60.png')
        }else if(idade > 130){
            img.setAttribute('src', 'imagens/mulheres/130.png')
        }
    }
    res.innerHTML = `Detectado ${genero} com ${idade} anos`
    res.appendChild(img)

}
