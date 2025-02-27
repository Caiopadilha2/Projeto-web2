const options = document.querySelectorAll('.options')
const reset = document.querySelector('.reset');
const count = document.querySelector('.count')
const pontos = document.querySelector('.pontuacao');

const gabarito1 = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];

let index = 0;
let tentativas = 0;
let pontuacao = 0; 
options.forEach((option) => {
    
    option.addEventListener('click', (event) => {
 
        if (index === gabarito1.length) {
            alert("O quiz já terminou!");
            return;
        }

        if (gabarito1[index] === event.currentTarget.innerText) {
            console.log(`Acertou na tentativa ${tentativas + 1}!`);
            
            index += 1;
            switch (tentativas) {
                case 0:
                    pontuacao += 3;
                    break;
                case 1:
                    pontuacao += 2;
                    break;
                case 2:
                    pontuacao += 1;
                    break;
                default:
                    break;
            }
            pontos.innerText = pontuacao;
            tentativas = 0;

 
        } else {
            console.log(`Errou! tentativa: ${tentativas + 1}!`);
            tentativas += 1;         

            if (tentativas === 3) {
                index += 1;
                tentativas = 0;
            }
        }
        console.log(`Pontuação: ${pontuacao}`);
    })
    
})

reset.addEventListener('click', () => {
    index = 0;
    tentativas = 0;
    alert("Quiz reiniciado!");
})


