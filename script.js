const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual o nome do alienígena que o Ben desbloqueia primeiro no Omnitrix?",
        alternativas: [
            {
                texto: "Quatro Braços",
                afirmacao: "Pergunta1 errada"
               
            },
            {
                texto: "Chama",
                afirmacao: "Certo ochama é o primeiro aliem uado no Ben 10"
            },
        ]
    },
    {
        enunciado: "Qual o nome da prima do Ben que o acompanha em suas aventuras?",
        alternativas: [
            {
                texto: "Gwen",
                afirmacao: "pergunta 2 correto"
            },
            {
                texto: "Julie",
                afirmacao: "pergunta2 errada"
            },
        ]
    },
    {
        enunciado: "Qual o vilão principal da primeira temporada de Ben 10 Clássico?",
        alternativas: [
            {
                texto: "Kevin 11",
                afirmacao: "Kevin é um anti Heroi"
            },
            {
                texto: "Vilgax",
                afirmacao: "Vilgax é o vilão em todas as séries do ben 10"
            },
        ]
    },
        {
        enunciado: "Qual o vilão principal da primeira temporada de Ben 10 Clássico?",
        alternativas: [
            {
                texto: "Kevin 11",
                afirmacao: "Kevin é um anti Heroi"
            },
            {
                texto: "Vilgax",
                afirmacao: "Vilgax é o vilão em todas as séries do ben 10"
            },
        ]
    },
        {
        enunciado: "Qual o vilão principal da primeira temporada de Ben 10 Clássico?",
        alternativas: [
            {
                texto: "Kevin 11",
                afirmacao: "Kevin é um anti Heroi"
            },
            {
                texto: "Vilgax",
                afirmacao: "Vilgax é o vilão em todas as séries do ben 10"
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
     atual++;
     mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();