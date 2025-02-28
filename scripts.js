const options = document.querySelectorAll('.options');
const reset = document.querySelector('.reset');
const count = document.querySelector('.count');
const pontos = document.querySelector('.pontuacao');
const screen = document.querySelector('.screen');

const gabarito1 = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
const gabarito2 = ['A', 'B', 'C', 'C', 'D', 'A', 'B', 'C'];
const gabarito3 = ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'A'];
const gabarito4 = ['A', 'B', 'C', 'D', 'D', 'B', 'B', 'C'];

let index = 0;
let tentativas = 0;
let pontuacao = 0; 


count.innerText = `${tentativas + 1} de 3`;
pontos.innerText = pontuacao;

if (index <= 8) {
    screen.innerText = index + 1;
}


options.forEach((option) => {
    option.addEventListener('click', (event) => {
        if (index >= gabarito1.length) {
            alert("O quiz já terminou!");
            return;
        }

        if (gabarito1[index] === event.currentTarget.innerText) {
            console.log(`Acertou na tentativa ${tentativas + 1}!`);
            
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
            }

            pontos.innerText = pontuacao;
            tentativas = 0;
            index += 1;
        } else {
            console.log(`Errou! tentativa: ${tentativas + 1}!`);
            tentativas += 1;

            if (tentativas === 3) {
                tentativas = 0;
                index += 1;
            }
        }

        count.innerText = `${tentativas + 1} de 3`;

        if (index < 8) {
            screen.innerText = index + 1;

        }


        if (index >= gabarito1.length) {
            alert(`Quiz finalizado!`);
        }
        
        console.log(`Pontuação: ${pontuacao}`);
    });
});

reset.addEventListener('click', () => {
    index = 0;
    tentativas = 0;
    pontuacao = 0;
    count.innerText = `${tentativas + 1} de 3`;
    pontos.innerText = pontuacao;
    alert("Quiz reiniciado!");
});
