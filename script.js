const { createElement } = require("react");

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
Const perguntas = [
    {
        enunciado: "pergunta1",
        alternativas:[
            {
                texto: "aternativa1",
                Afirmacao: "Afirmacao1",
            }
            {
                texto: "aternativa2",
                Afirmacao: "Afirmacao2"
            }
        ]
    },
    {
            enunciado: "pergunta2",
        alternativas:[
            {
                texto: "aternativa1",
                Afirmacao: "Afirmacao1",
            }
            {
                texto: "aternativa2",
                Afirmacao: "Afirmacao2",
            }
        ]
    },
    {
            enunciado: "pergunta3",
        alternativas:[
            {
                texto: "aternativa1",
                Afirmacao: "Afirmacao1",
            }
            {
                texto: "aternativa2",
                Afirmacao: "Afirmacao2",
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
function mostraAlternativa() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativa();
}
Function mostraAlternativa();{
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = createElement("button");
        botaoAlternativa.textContent = alternativa.Texto;
    }
}
