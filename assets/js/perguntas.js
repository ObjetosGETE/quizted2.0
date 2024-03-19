var estruturageral = {
    mensagemfinal: {
        positiva:{
           texto: [
                "Muito bem! Você arrasou!",
                "Se você quiser, você pode praticar novamente clicando no botão abaixo."
            ],
            imagem: {
                src: "custom/img/imgpergunta.jpg",
                title: "One Piece questions",
                alt:"Imagem sobre o one piece",
                fonte: "Imagem tirada do google no dia 15-03-2024"
            },
        },
        negativa:{
            texto: [
                "Foi por pouco!",
                "Talvez seja interessante revisar o conteúdo e tentar de novo.",
                "Para reiniciar, basta clicar no botão abaixo."
            ],
            imagem: {
                src: "custom/img/imgpergunta.jpg",
                title: "One Piece questions",
                alt:"Imagem sobre o one piece",
                fonte: "Imagem tirada do google no dia 15-03-2024"
            },
        }
        
    },
    introducao: { // Se introducao = false não abre a modal com a introducao. Se tiver conteúdo, abre com o conteúdo no padrão abaixo
        texto: [
            "Muito bem! Você arrasou!",
            "Se você quiser, você pode praticar novamente clicando no botão abaixo."
        ],
        imagem: {
            src: "custom/img/imgpergunta.jpg",
            title: "One Piece questions",
            alt:"Imagem sobre o one piece",
            fonte: "Imagem tirada do google no dia 15-03-2024"
        },
    },
    config: {
        acertos_para_vitoria: 0, // 0 = >50% de acertos.
        globalType: "quiz" // caso as perguntas não possuam type, será definido um padrão. (globalType = "") = "quiz"
        // permitirApenas: 0; 0 = todas. Caso o usuário coloque um número como 10, por exemplo, o quiz vai exibir apenas 10 perguntas, mesmo que tenha 11 ou 1000 perguntas.
        // modo = 0; 0 ou "ordenado" significa uma pergunta após a outra. "inverso" ele começa pela última e "aleatorio" ele embaralha, tornando a ordem das perguntas aleatória.
    }
}
var perguntas = [
    { 
        type: "quiz",
        titulo: "1. Técnica de lapidação",
        pergunta: {
            texto: "Qual é o propósito principal da técnica de lapidação na montagem de óculos semiaro?",
            // imagem: {
            //     src: "custom/img/img1.jpg",
            //     title: "One Piece questions",
            //     alt:"Imagem sobre o one piece",
            //     fonte: "Imagem tirada do google no dia 15-03-2024"
            // },
        },
        respostas: [
            {
                ordem: "a",
                validacao: true,
                imagem: {
                    // src: "custom/img/img2.jpg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Ajustar",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel1.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
            {
                ordem: "b",
                validacao: true,
                imagem: {
                    // src: "custom/img/img3.jpg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Recortar",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel2.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
            {
                ordem: "c",
                validacao: true,
                imagem: {
                    // src: "custom/img/img4.jpg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Alinhar",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel3.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
            {
                ordem: "d",
                validacao: false,
                imagem: {
                    // src: "custom/img/img5.jpg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Preencher",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel4.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede",
                       
                    }
            },
            {
                ordem: "e",
                validacao: false,
                imagem: {
                    // src: "custom/img/img6.jpeg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Preencher",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel5.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Excelente! A lapidação é crucial para dar o acabamento final às lentes.", 
                },
            negativo: {
                    texto: "A resposta não está correta. Lembre-se de que a lapidação faz parte da montagem dos óculos."
                }
            
        }
    },
    { 
        type: "dragindrop",
        titulo: "1. Técnica de lapidação",
        pergunta: {
            texto: "Qual é o propósito principal da técnica de lapidação na montagem de óculos semiaro?",
            imagem: {
                src: "custom/img/img1.jpg",
                title: "One Piece questions",
                alt:"Imagem sobre o one piece",
                // fonte: "Imagem tirada do google no dia 15-03-2024"
            },
        },
        respostas: [
            {
                ordem: "a",
                validacao: false,
                imagem: {
                    // src: "custom/img/img2.jpg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Ajustar",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel1.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
            {
                ordem: "b",
                validacao: true,
                imagem: {
                    // src: "custom/img/img3.jpg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Recortar",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel2.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
            {
                ordem: "c",
                validacao: true,
                imagem: {
                    // src: "custom/img/img4.jpg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Alinhar",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel3.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
            {
                ordem: "d",
                validacao: false,
                imagem: {
                    // src: "custom/img/img5.jpg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Preencher",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel4.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
            {
                ordem: "d",
                validacao: false,
                imagem: {
                    // src: "custom/img/img6.jpeg",
                    title: "One Piece questions",
                    alt:"Imagem sobre o one piece",
                    // fonte: "Imagem tirada do google no dia 15-03-2024"
                },
                texto: "Preencher",
                relacionarCom: { 
                    imagem: {
                        src:"custom/img/rel5.jpg", 
                        title:"sidjhf oisdjfsd oifjsodijf", 
                        alt:"djfiodfjosd fjosdfoisd jf", 
                        fonte:"aisdhj oiasdjha sasd" 
                    }, 
                        texto: "teste edf ede" 
                    }
            },
        ],
        feedbacks: {
            
            positivo: {
                    texto: "Excelente! A lapidação é crucial para dar o acabamento final às lentes.", 
                },
            negativo: {
                    texto: "A resposta não está correta. Lembre-se de que a lapidação faz parte da montagem dos óculos."
                }
            
        }
    },
    {
        type: "quiz",
        titulo: "2. Técnica de marcação (lensometria)",
        pergunta: {
            texto: "O que a lensometria afere durante a técnica de marcação em óculos sem aro?",
            imagem: {
                src: "custom/img/img1.jpg",
                title: "One Piece questions",
                alt:"Imagem sobre o one piece",
                fonte: "Imagem tirada do google no dia 15-03-2024"
            },
        },
        respostas: [
            {
                ordem: "a",
                validacao: true,
                texto: "Potência das lentes e marcação do centro óptico."
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Cor da armação e seu tamanho de ponte e caixa."
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Peso das lentes e índice de refração."
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Tamanho da armação, tamanho de ponte, horizontal e maior diagonal."
            },
        ],
        feedbacks: {
            
            positivo: 
                {
                    texto: "Muito bem! A lensometria é utilizada para medir a potência das lentes e marcação do centro óptico.",
                }, 
            negativo: 
                {
                    texto: "A resposta não está correta. Reveja as opções e tente novamente."
                }
            
        }
    },
   
   
  
]