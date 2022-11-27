function botao(){
    let nome = document.querySelector('#Campeos')
    let oi = document.querySelector('#oi')
    let oi2 = document.querySelector('#oi2')
    let oi3 = document.querySelector('#oi3')
    let oi4 = document.querySelector('#oi4')
    let oi5 = document.querySelector('#oi5')
    let oi10 = document.querySelector('#oi10')
    let oi7 = document.querySelector('#oi7')
    let oi8 = document.querySelector('#oi8')
    let img = document.querySelector('#img')

    
    if(nome.value===""){
     alert ('Campo vazio... Por favor digite o nome do experimento');
    }
    else if (nome.value==='Óptica'){
        img.innerHTML = '<img src="../Bia.jpeg" class="imagens">'
        oi.innerHTML = 'Materias necessários:'
        oi2.innerHTML = 'Uma imagem e um copo com água'
        oi3.innerHTML = 'Como fazer:'
        oi4.innerHTML = 'Coloque o copo com água em frente da imagem escolhida.'
        oi5.innerHTML = 'Explicação Científica:'
        oi10.innerHTML = 'A experiência tem como objetivo demonstrar o fenômeno da refração. Com o desvio sofrido pela luz (refração) na mudança de um meio para outro'
        oi7.innerHTML = 'Feito por:'
        oi8.innerHTML = 'Beatriz'
    }
    else if (nome.value==='Cobra de espuma'){
        img.innerHTML = '<img src="../Maria clara.jpeg" class="imagens">'
        oi.innerHTML = 'Materias necessários:'
        oi2.innerHTML = 'Uma garrafa pet; Um pote com água; Detergente; Um pano; Objeto perfurante (faca, tesoura, etc..); um elástico'
        oi3.innerHTML = 'Como fazer:'
        oi4.innerHTML = 'Com o objeto perfurante, corte o fundo da garrafa, e em seguida a cubra com o pano. Após misturar a água com o detergente, mergulhe a garrafa e assopre para fazer a "Cobra de Espuma" '
        oi5.innerHTML = 'Explicação Científica:'
        oi10.innerHTML = 'A formação da "Cobra de Espuma, se deve pela reação química ocorrida no contado entre o detergente e a água, essa junção fortalece as ligações de hidrogênio, possibilitando o fenômeno observado'
        oi7.innerHTML = 'Feito por:'
        oi8.innerHTML =  'Maria Clara'    
    } 
    else if (nome.value==='Densidade'){
        img.innerHTML = '<img src="../Priscila.jpeg" class="imagens">'
        oi.innerHTML = 'Materias necessários:'
        oi2.innerHTML = 'Óleo vegetal; Corante; Comprimido efervescente; Recipiente transparente com tampa.'
        oi3.innerHTML = 'Como fazer:'
        oi4.innerHTML = 'Coloque 200ml de água no recipiente, e em seguida adicione 4 a 8 colheres de corante. Complete o recipiente com óleo vegetal, deixando um espaço de 3 dedos para ocorrer a reação. Agora basta adicionar o comprimido efervescente, e a sua "Lâmpada de Lava" estará pronta.'
        oi5.innerHTML = 'Explicação Científica:'
        oi10.innerHTML = 'A pastilha efervescente ao entrar em contato com a água, ela vai liberar gás carbônico, e como  o ar é mais leve que a água e óleo, ele vai subir. Nesse movimento o gás também transporta um pouco de água, agindo como uma espécie de boia.'
        oi7.innerHTML = 'Feito por:'
        oi8.innerHTML =  'Priscila'   
    } 
    else{
        oi.innerHTML = 'Esse projeto não existe, verifique se escreveu da maneira correta'
    }
}