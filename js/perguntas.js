var estruturageral = {
    mensagemfinal: {
        positiva: [
            "Muito bem! Você arrasou!",
            "Se você quiser, você pode praticar novamente clicando no botão abaixo."
        ],
        negativa: [
            "Foi por pouco!",
            "Talvez seja interessante revisar o conteúdo e tentar de novo.",
            "Para reiniciar, basta clicar no botão abaixo."
        ]
    },
    config: {
        acertos_para_vitoria: 0, // 0 = >50% de acertos.
        globalType: "quiz" // caso as perguntas não possuam type, será definido um padrão. (globalType = "") = "quiz"
    }
}
var perguntas = [
    {
        type: "quiz",
        titulo: "1. Técnica de lapidação",
        pergunta: "Qual é o propósito principal da técnica de lapidação na montagem de óculos semiaro?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Ajustar"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Recortar"
            },
            {
                botao: "c",
                validacao: true,
                texto: "Alinhar"
            },
            {
                botao: "d",
                validacao: false,
                texto: "Preencher"
            },
        ],
        feedbacks: {
            
            positivo: "Excelente! A lapidação é crucial para dar o acabamento final às lentes.", 
            negativo: "A resposta não está correta. Lembre-se de que a lapidação faz parte da montagem dos óculos."
            
        }
    },
    {
        type: "dragindrop",
        titulo: "2. Técnica de marcação (lensometria)",
        pergunta: "O que a lensometria afere durante a técnica de marcação em óculos sem aro?",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Potência das lentes e marcação do centro óptico."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Cor da armação e seu tamanho de ponte e caixa."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Peso das lentes e índice de refração."
            },
            {
                botao: "d",
                validacao: false,
                texto: "Tamanho da armação, tamanho de ponte, horizontal e maior diagonal."
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! A lensometria é utilizada para medir a potência das lentes e marcação do centro óptico.", 
            negativo: "A resposta não está correta. Reveja as opções e tente novamente."
            
        }
    },
    {
        titulo: "3. Técnica de alinhamento da armação",
        pergunta: "Por que é crucial realizar o alinhamento preciso da armação na montagem de óculos?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Para melhorar a estética."
            },
            {
                botao: "b",
                validacao: true,
                texto: "Para garantir um encaixe confortável."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Para facilitar a limpeza."
            },
            {
                botao: "d",
                validacao: false,
                texto: "Para reduzir o peso das lentes."
            },
        ],
        feedbacks: {
            
            positivo: "Correto! O alinhamento preciso é crucial para assegurar um encaixe confortável.", 
            negativo: "Esta não é a resposta correta. O alinhamento não está relacionado à estética ou à redução do peso das lentes."
            
        }
    },
    {
        titulo: "4. Técnica para a utilização de gabaritos ópticos",
        pergunta: "Qual é a principal função dos gabaritos ópticos na montagem de óculos?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Ajustar a luz ambiente."
            },
            {
                botao: "b",
                validacao: true,
                texto: "Posicionar corretamente as lentes na armação."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Verificar a potência das lentes."
            },
            {
                botao: "d",
                validacao: false,
                texto: "Polir as bordas das lentes."
            },
        ],
        feedbacks: {
            
            positivo: "Está correto! Os gabaritos ópticos são utilizados para posicionar corretamente as lentes.", 
            negativo: "Infelizmente esta não é a resposta correta. Os gabaritos ópticos não ajustam a luz ambiente nem verificam a potência das lentes."
            
        }
    },
    {
        titulo: "5. Técnica de montagem manual",
        pergunta: "O que inclui a técnica de montagem manual na confecção do modelo?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "A utilização de máquinas automatizadas, como um gerador de curvas."
            },
            {
                botao: "b",
                validacao: true,
                texto: "As marcações como DNP, altura e linha de montagem."
            },
            {
                botao: "c",
                validacao: false,
                texto: "O uso exclusivo de gabaritos ópticos."
            },
            {
                botao: "d",
                validacao: false,
                texto: "A aplicação de revestimento nas lentes."
            },
        ],
        feedbacks: {
            
            positivo: "Muito bem! A montagem manual inclui marcações essenciais para uma correta confecção.", 
            negativo: "A resposta não está correta. A montagem manual não envolve apenas máquinas automatizadas."
            
        }
    },
    {
        titulo: "6. Técnicas de montagem automática",
        pergunta: "Qual é uma vantagem das técnicas de montagem automática em comparação com a montagem manual?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Menor precisão"
            },
            {
                botao: "b",
                validacao: false,
                texto: "Maior custo."
            },
            {
                botao: "c",
                validacao: true,
                texto: "Eficiência e rapidez."
            },
            {
                botao: "d",
                validacao: false,
                texto: "Menos opções de personalização."
            },
        ],
        feedbacks: {
            
            positivo: "Correto! A montagem automática é conhecida por sua eficiência e rapidez.", 
            negativo: "Esta não é a resposta correta. A montagem automática não resulta em menor precisão nem maior personalização."
            
        }
    },
    {
        titulo: "7. Técnica de alinhamento para entrega dos óculos",
        pergunta: "O que um profissional realiza durante a técnica de alinhamento para a entrega dos óculos?",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Ajusta cuidadosamente a posição das lentes na armação."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Troca as lentes por novas."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Realiza a lapidação final."
            },
            {
                botao: "d",
                validacao: false,
                texto: "Verifica a potência das lentes."
            },
        ],
        feedbacks: {
            
            positivo: "Está correto! O alinhamento final é crucial para uma entrega precisa dos óculos.", 
            negativo: "Esta resposta não está correta. O alinhamento final não envolve a troca das lentes ou a lapidação final."
            
        }
    }
  
]