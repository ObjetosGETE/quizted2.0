// $.getScript("perguntas.js", function() {
//     alert("Script");
//  });

$(function (){
    init();
    montar_slides();

    $(".respostas button.bto").click(function(){
        let userOption = $(this).index();
        let idSlide = $(this).parents(".top-slide").index();
        let respostasPai = $(this).parents(".top-slide").children(".respostas");
        respostasPai.children(".bto").prop("disabled",true);
        respostasPai.children(".bto").addClass("desativar")
        let validacao = perguntas[idSlide].respostas[userOption].validacao;

        if(validacao == true){
            feedback(idSlide, true);
            $(this).addClass("positivo")
            
        }else if(validacao == false){
            feedback(idSlide, false);
            $(this).addClass("negativo");
        }
        pergunta_atual++;
        $("#navegacao").fadeIn("fast")  
        
    });

    $(".bto-nav").click(function (){
        $("#navegacao").hide();  
        if(pergunta_atual <= nro_perguntas){
            $(".top-slide").eq(pergunta_atual-2).fadeOut("fast", function(){
                $(".top-slide").eq(pergunta_atual-1).fadeIn("fast")
            });
        }else{
            $(".top-slide").eq(pergunta_atual-2).fadeOut("fast", function(){
                $(".top-slide-final").fadeIn("fast");
                $("#navegacao").fadeOut("fast");
                montar_slide_final();  
            })
        }
    });

    $(".bto-nav-reiniciar").click(function(){
        location.href="index.html"
    });
    
    dragula_init();
});

// inicialização de variaveis importantes
//
//
let nro_perguntas;
let pergunta_atual = 1;
let acertos = 0;
let cont_perguntas = function(){
    nro_perguntas = perguntas.length; 
    return nro_perguntas;
}
let destino = "#top-slides";

// função para criação dos templates
// usados no quiz
// por exemplo, slides com perguntas e respostas
// e onde eles devem ser inseridos 
let templates = function (i){
   
    let type = perguntas[i].type;
    if(type === undefined){
        type = estruturageral.config.globalType;
    }

    type.toLowerCase;

    switch(type){
        case "dragindrop":
            templateDragInDrop(i);
            break
        
        case "quiz":
        default:
            templateQuiz(i);       
            break;
        
    }
    
}

let templateQuiz = function (i){
    let topSlidePai = $("<div></div>");
    if(i > 0){
        topSlidePai.css("display", "none");
    }
    topSlidePai.addClass("top-slide");

    let titulo = $("<div></div>");
    titulo.addClass("titulo");
    titulo.html("<h2>"+ perguntas[i].titulo +"</h2>");
    topSlidePai.append(titulo);

    let pergunta = $("<div></div>");
    pergunta.addClass("pergunta");
    pergunta.attr("id", "pergunta" + i);

    let txt = $("<div></div>");
    txt.addClass("txt")
    txt.append("<p>" + perguntas[i].pergunta + "</p>");
    pergunta.append(txt);
    topSlidePai.append(pergunta);

    let respostas = $("<div></div>");
    respostas.addClass("respostas");
    let nro_respostas = perguntas[i].respostas.length;

    for(a = 0; a <= nro_respostas-1; a++){
        respostas.append('<button data-resp="' + a + '" type="button" data-label="'+ perguntas[i].respostas[a].botao +'" class="bto">'+ perguntas[i].respostas[a].texto +'</button>')

    }
    topSlidePai.append(respostas);
    
    $(destino).append(topSlidePai);
}

let templateDragInDrop = function (i){
    let topSlidePai = $("<div></div>");
    if(i > 0){
        topSlidePai.css("display", "none");
    }
    topSlidePai.addClass("top-slide");

    let titulo = $("<div></div>");
    titulo.addClass("titulo");
    titulo.html("<h2>"+ perguntas[i].titulo +"</h2>");
    topSlidePai.append(titulo);

    let pergunta = $("<div></div>");
    pergunta.addClass("pergunta");
    pergunta.attr("id", "pergunta" + i);

    let txt = $("<div></div>");
    txt.addClass("txt")
    txt.append("<p>" + perguntas[i].pergunta + "</p>");
    pergunta.append(txt);
    topSlidePai.append(pergunta);

    
    let container = $("<div></div>");
    container.addClass("containers");
    container.addClass("d-flex");
    // let respostas_certas = 0;
    perguntas[i].respostas.forEach((alternativas, index) => {
        if(alternativas.validacao === true){
            container.append('<div class="container" id="container-alvo-'+index+'"><div class="container-alvo"></div></div>');
        }
    });
    topSlidePai.append(container);

    
    let respostas = $("<div></div>");
    respostas.addClass("respostas");
    respostas.addClass("dragindrop");
    respostas.prop("id", "#resposta"+i)

    let nro_respostas = perguntas[i].respostas.length;
    for(a = 0; a <= nro_respostas-1; a++){
        respostas.append('<button data-resp="' + a + '" type="button" data-label="'+ perguntas[i].respostas[a].botao +'" class="bto bto-dragindrop-item"><i class="fa-solid fa-grip-lines-vertical"></i> '+ perguntas[i].respostas[a].texto +'</button>')
       
    }

    topSlidePai.append(respostas);
    
    $(destino).append(topSlidePai);
}

let montar_slides = function (){
    for(i=0; i <= nro_perguntas-1; i++){
        templates(i);
    }
    
}
// retorna o número de perguntas que o aluno precisa responder
// de acordo com o perguntas.js e adiciona o valor a uma variavel


let feedback = function (i, positivo_negativo){
    $("#pergunta" + i + " .txt").remove();

    let text_feedback = $("<div></div>");
    text_feedback.addClass("texto-feedback container");

    let row = $("<div></div>");
    row.addClass("row");
    
    let col_ico = $("<div></div>");
    col_ico.addClass("col-12 col-sm-3");
    let feed_texto;
    if(positivo_negativo === true){
        ico = "up";
        feed_texto = perguntas[i].feedbacks.positivo;
        acertos++;
        $("#acertos").text(acertos)
    }else{
        ico = "down";
        feed_texto = perguntas[i].feedbacks.negativo;
    }
    col_ico.append('<div class="ico-feedback thumbs-'+ ico +'"></div>');
    row.append(col_ico);

    let col_text = $("<div></div>");
    col_text.addClass("col-12 col-sm-9");
    col_text.html("<p>"+ feed_texto + "</p>");
    row.append(col_text);

    text_feedback.append(row);

    $("#pergunta" + i).append(text_feedback);

}

let montar_slide_final = function(){
    $("#total").text(nro_perguntas);
    let mensagemFinal = "";
    let regra_vitoria;
    let acertos_para_vitoria = estruturageral.config.acertos_para_vitoria;
    
    if (acertos_para_vitoria === 0 || acertos_para_vitoria === undefined || acertos_para_vitoria === null){
        regra_vitoria = (nro_perguntas/2);
    }else {
        regra_vitoria = acertos_para_vitoria;
    }
    if(acertos >= regra_vitoria){
        estruturageral.mensagemfinal.positiva.forEach(element => {
            mensagemFinal += "<p>" + element + "</p>";
            console.log("acerto")
        });
    }else{
        estruturageral.mensagemfinal.negativa.forEach(element => {
            mensagemFinal += "<p>" + element + "</p>";
            console.log("erro")
        });
    }
    $(".mensagemfinal").html(mensagemFinal);
}

let init = function (){
    cont_perguntas(nro_perguntas);
    // Dragula    
}

// dragula
let dragula_init = function (){
// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
    // Container com os cards que serão realocados
    // Não mexer
    document.querySelector(".dragindrop"),
  
    // Containers que irão receber os cards
    document.querySelector(".container-alvo"),
    document.querySelector("#pergunta0")

  ];
  var audio = new Audio();
  var erro = 0;
  
  // Solução ao dragindrop
  var scrollable = true;
  
  var listener = function(e) {
    console.log(scrollable)
      if (! scrollable) {
          e.preventDefault();
      }
  }
  
//   document.addEventListener('touchmove', listener, { passive:false });
  
  // Solução ao dragindrop
  
  dragula({
    containers: containers,
    revertOnSpill: true,
    direction: 'vertical',
    // accepts: function (el, target, source, sibling) {
    //     // return el.dataset.target == target.id; 
    //     return true; 
    // }
  }).on('drag', function(el, source) {
    // On mobile this prevents the default page scrolling while dragging an item.
    scrollable = false;
  }).on("drop", function(){
    scrollable = true;
  
    // $('#bgmodal-acerto').modal('show')
        // audio.setAttribute('src','audios/acerto.mp3'); //change the source
        // audio.load(); //load the new source
        // audio.play(); //play
  
  }).on("cancel", function(){
    scrollable = true;
  
        // Executa o áudio e a modal necessária
        // Também é possível fazer algum teste aqui caso necessário.
    // $('#bgmodal-erro').modal('show')
        // audio.setAttribute('src','audios/erro.mp3'); //change the source
        // audio.load(); //load the new source
        // audio.play(); //play
  });
}

  