document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("etapa1").style.display = "block";
   document.getElementById("etapa2").style.display = "none";
   document.getElementById("etapa3").style.display = "none";
   document.getElementById("etapa4").style.display = "none";
   document.getElementById("etapa5").style.display = "none";
   document.getElementById("etapa6").style.display = "none";
  
      let respostas = {
        sintomas: [],
        tempoSintomas: null,
        historico: null,
        faixaEtaria: null,
        exposicaoAgua: null,
        resfriadoRecente: null
      };
      
  
    function avancarEtapa(etapaAtual, proximaEtapa) {
      document.getElementById(etapaAtual).style.display = "none";
      document.getElementById(proximaEtapa).style.display = "block";
    }
  
    function voltarEtapa(etapaAtual, etapaAnterior) {
      document.getElementById(etapaAtual).style.display = "none";
      document.getElementById(etapaAnterior).style.display = "block";
    }
    
    // Event listeners para os botões de navegação
    document.getElementById("avancarEtapa1").addEventListener("click", function () {
      coletarRespostas();
      avancarEtapa("etapa1", "etapa2");
    });
    document.getElementById("voltarEtapa1").addEventListener("click", function () {
      voltarEtapa("etapa2", "etapa1");
    });

    document.getElementById("avancarEtapa2").addEventListener("click", function () {
      coletarRespostas();
      avancarEtapa("etapa2", "etapa3");
    });
    document.getElementById("voltarEtapa2").addEventListener("click", function () {
      voltarEtapa("etapa3", "etapa2");
    });

    document.getElementById("avancarEtapa3").addEventListener("click", function () {
      coletarRespostas();
      avancarEtapa("etapa3", "etapa4");
    });
    document.getElementById("voltarEtapa3").addEventListener("click", function () {
      voltarEtapa("etapa4", "etapa3");
    });

    document.getElementById("avancarEtapa4").addEventListener("click", function () {
      coletarRespostas();
      avancarEtapa("etapa4", "etapa5");
    });
    document.getElementById("voltarEtapa4").addEventListener("click", function () {
      voltarEtapa("etapa5", "etapa4");
    });

    document.getElementById("avancarEtapa5").addEventListener("click", function () {
      coletarRespostas();
      avancarEtapa("etapa5", "etapa6");
    });
    document.getElementById("voltarEtapa5").addEventListener("click", function () {
      voltarEtapa("etapa6", "etapa5");
    });

    function coletarRespostas() {
        const checkboxes = document.querySelectorAll('input[name="sintoma"]:checked');
        respostas.sintomas = Array.from(checkboxes).map((checkbox) => checkbox.value);
      
        respostas.tempoSintomas = document.querySelector('input[name="tempoSintomas"]:checked')?.value;
        respostas.historico = document.querySelector('input[name="historico"]:checked')?.value;
        respostas.faixaEtaria = document.querySelector('input[name="faixaEtaria"]:checked')?.value;
        respostas.exposicaoAgua = document.querySelector('input[name="exposicaoAgua"]:checked')?.value;
        respostas.resfriadoRecente = document.querySelector('input[name="resfriadoRecente"]:checked')?.value;
        
        console.log('Respostas coletadas:', respostas);
      }
      
  
      
    document.getElementById("avancarResultado").addEventListener("click", function () {
      coletarRespostas();
      // Exibir o diagnóstico aqui
      exibirDiagnostico();
      avancarEtapa("etapa6", "resultado");
      
  });


// Event listener para o botão avançar resultado
document.getElementById("avancarResultado").addEventListener("click", function () {
  coletarRespostas();
  let diagnostico = exibirDiagnostico();
  let diferencial = avaliarDiagnosticoDiferencial(diagnostico); // Passa o diagnóstico para a função

  // Atualiza a página com os resultados
  document.getElementById("resultado").innerText = "Possível Diagnóstico: " + diagnostico;
  document.getElementById("diagnosticodiferencial").innerText = "Diagnósticos Diferenciais: " + diferencial.join(", ");
  document.getElementById("diagnosticodiferencial").style.display = "block";
  
  avancarEtapa("etapa6", "resultado");
});

// Event listener para o botão reiniciar
document.getElementById("reiniciar-original").addEventListener("click", function () {
  reiniciar();
});

      
  
    // Função para reiniciar o formulário
    function reiniciar() {
      // Esconder todas as etapas
      for (let i = 1; i <= 6; i++) {
        document.getElementById(`etapa${i}`).style.display = "none";
      }
  
      // Mostrar a primeira etapa
      document.getElementById("etapa1").style.display = "block";
  
      // Limpar as respostas armazenadas
      respostas = {};
  
      console.log('Formulário reiniciado');
    }
  
    // Adicionar event listener para o botão reiniciar
    document.getElementById("reiniciar-original").addEventListener("click", function () {
      reiniciar();
    });
      // Função para exibir o diagnóstico com base nas respostas do usuário
  function exibirDiagnostico() {
    let diagnostico = "";
    
    console.log('Verificando respostas para diagnóstico:', respostas);

    // Lógica de diagnóstico com base nas respostas
    if (
      respostas.sintomas.includes("Hipoacusia") &&
      respostas.faixaEtaria === "idoso" &&
      respostas.tempoSintomas.includes("60") 
    ) {
      diagnostico += "Presbiacusia";
    }  
    if (
      respostas.sintomas.includes("Zumbido") &&
      respostas.sintomas.includes("Hipoacusia") &&
      respostas.sintomas.includes("Vertigem") &&
      respostas.sintomas.includes("Plenitude") &&
      respostas.historico === "sim" &&
      respostas.exposicaoAgua === "não" && respostas.resfriadoRecente === "não" 
    ) {
      diagnostico += "Doença de Mèniére";
    }
    if (
      respostas.sintomas.includes("Vertigem") &&
      respostas.historico === "sim"
    ) {
      diagnostico += "VPPB - Vertigem Posicional Paroxística Benigna ";
    }

    if (respostas.sintomas.includes("Zumbido") &&
        respostas.historico === "não")
     {
        diagnostico += "Perda Auditiva à esclarecer";
      }
    if (respostas.sintomas.includes("Zumbido") &&
      respostas.historico === "sim")
   {
      diagnostico += "Perda Auditiva Neurossensorial conhecida";
    }  

    if (
      respostas.sintomas.includes("Zumbido") &&
      respostas.sintomas.includes("Hipoacusia") &&
      respostas.sintomas.includes("Vertigem") &&
      respostas.sintomas.includes("Plenitude") &&
      respostas.tempoSintomas === "30"
    ) {
      diagnostico += "Neurite Vestibular";
    }
    if (respostas.sintomas.includes("CorpoEstranho"))
     {
        diagnostico += "PROCURE ATENDIMENTO DE URGÊNCIA ESPECIALIZADA!!!";
      }
    
    if (
        respostas.sintomas.includes("Otalgia") &&
        respostas.sintomas.includes("Otorreia") &&
        respostas.resfriadoRecente === "sim"
      ) {
        diagnostico += "Otite Média Aguda Supurada ";
    }
    if (
        respostas.sintomas.includes("Otalgia") || respostas.sintomas.includes("Plenitude") &&
        respostas.tempoSintomas.includes("7", "14") &&
        (respostas.faixaEtaria === "criança" || respostas.faixaEtaria === "adulto" || respostas.faixaEtaria === "bebe") &&
        respostas.resfriadoRecente === "sim"
      ) {
        diagnostico += "Otite Média Aguda Bacteriana ";
      }
    
    if (
        respostas.sintomas.includes("Otalgia") &&
        respostas.sintomas.includes("Plenitude") &&
        respostas.exposicaoAgua === "não" &&
        respostas.resfriadoRecente === "sim"
      ) {
        diagnostico += "Otite Média Aguda";
      }
      if (
        respostas.sintomas.includes("Otorreia") &&
        respostas.sintomas.includes("hipoacusia") &&
        respostas.tempoSintomas.includes("7", "14", "30", "90") &&
        respostas.exposicaoAgua === "não" &&
        respostas.resfriadoRecente === "não"
      ) {
        diagnostico += "Otite Média Crônica";
      }

    if (respostas.sintomas.includes("Prurido") &&
       respostas.sintomas.includes("Plenitude"))
       {
        diagnostico += "Cerume Impactado ";
      }
      if (respostas.sintomas.includes("Prurido") &&
      respostas.sintomas.includes("Plenitude") &&
      respostas.exposicaoAgua === "sim") 
      {
        diagnostico += "Otite Externa Aguda Fúngica ";
      }
    if (respostas.sintomas.includes("Hipoacusia") &&
       respostas.sintomas.includes("Plenitude") &&
       respostas.resfriadoRecente === "sim" &&
       respostas.exposicaoAgua === "não") 
      {
        diagnostico += "Otite Média Serosa";
      }
    if (respostas.sintomas.includes("Hipoacusia") &&
      respostas.sintomas.includes("Plenitude") &&
      respostas.resfriadoRecente === "não" &&
      respostas.exposicaoAgua === "não") 
      {
        diagnostico += "Otite Média barotraumatica";
      }

    if (respostas.sintomas.includes("Otalgia") &&
        respostas.exposicaoAgua === "sim"
        
      ) {
        diagnostico += "Otite Externa Difusa Aguda Bacteriana ";
      }
      if (respostas.sintomas.includes("Otalgia") &&
         respostas.sintomas.includes("Otorreia") &&
         respostas.tempoSintomas === "7" || respostas.tempoSintomas === "14" &&
         respostas.resfriadoRecente === "não" &&
         respostas.exposicaoAgua === "sim"
      
    ) {
      diagnostico += "Otite Externa Difusa Aguda Bacteriana ";
    }
    if (diagnostico === "") {
      diagnostico = "Não foi possível determinar um diagnóstico com as informações fornecidas. " +
                    "Por favor, consulte um médico Otorrinolaringologista para um diagnóstico preciso.";
      return diagnostico;              
    }  
      
      console.log('Diagnóstico:', diagnostico);

      // Exibir o diagnóstico na página
      document.getElementById("resultado").innerText = "Possível Diagnóstico: " + diagnostico;
      console.log("Resultado")
    }
    function avaliarDiagnosticoDiferencial(diagnostico) {
      let diagnosticoDiferencial = [];
  
      switch(diagnostico) {
          case "Presbiacusia":
              diagnosticoDiferencial.push("Otoesclerose", "Neuroma Acústico", "Perda Auditiva Induzida por Ruído");
              break;
          case "Perda Auditiva à esclarecer":
              diagnosticoDiferencial.push("Otoesclerose", "Neuroma Acústico", "Perda Auditiva Induzida por Ruído");
              break;    
          case "Doença de Mèniére":
              diagnosticoDiferencial.push("VPPB", "Neurite Vestibular", "Labirintite");
              break;
          case "VPPB - Vertigem Posicional Paroxística Benigna":
              diagnosticoDiferencial.push("Doença de Ménière", "Neurite Vestibular", "Cefaleia Migranosa Vestibular");
              break;
          case "Otite Média Aguda":
              diagnosticoDiferencial.push("Otite Média com Efusão", "Otite Externa", "Mastoidite");
              break;
          case "Otite Média Crônica":
              diagnosticoDiferencial.push("Colesteatoma", "Tumor de Glômico", "Disfunção da Tuba Auditiva");
              break;
          // Adicione mais condições conforme necessário
          default:
              diagnosticoDiferencial.push("Mais informações necessárias para diagnóstico diferencial");
      }
  
      return diagnosticoDiferencial;
      
  }
  
  // Após determinar um diagnóstico com a função exibirDiagnostico...
  let resultadoDiagnostico = exibirDiagnostico(); // Supõe-se que esta função retorna uma string com o diagnóstico
  let diferencial = avaliarDiagnosticoDiferencial(resultadoDiagnostico);
  
  // Exibir diagnósticos diferenciais na página
  document.getElementById("diagnosticodiferencial").innerText = "Diagnósticos Diferenciais: " + diferencial.join(", ");
  
  
    // Adicionar event listener para o botão avançar resultado
    document.getElementById("avancarResultado").addEventListener("click", function () {
      coletarRespostas();
      exibirDiagnostico();
      avaliarDiagnosticoDiferencial();
      avancarEtapa("etapa6", "resultado");
    });

    document.getElementById("reiniciar-original").addEventListener("click", function () {
      // Reset all stages here
      reiniciarEtapa("etapa2", "etapa1");
      reiniciarEtapa("etapa3", "etapa2");
      reiniciarEtapa("etapa4", "etapa3");
      reiniciarEtapa("etapa5", "etapa4");
      reiniciarEtapa("etapa6", "etapa5");
    
      // Additional reset logic if needed
    
      // Reset the answers object
      respostas = {};
    
      // Reset the displayed diagnosis
      document.getElementById("resultado").innerText = "";
    
      // Go back to the first stage
      avancarEtapa("etapa1", "etapa2");
    });
    
    // Function to reset a stage
    function reiniciarEtapa(etapaAtualClass, etapaAnteriorClass) {
      const etapaAtual = document.querySelector(`.${etapaAtualClass}`);
      const etapaAnterior = document.querySelector(`.${etapaAnteriorClass}`);
    
      etapaAtual.style.display = "none";
      etapaAnterior.style.display = "block";
    }
    
    function reiniciar() {
      // Esconder todas as etapas, exceto a primeira
      const etapas = document.querySelectorAll('.etapa');
      etapas.forEach((etapa, index) => {
        if (index === 0) {
          etapa.style.display = "block";
        } else {
          etapa.style.display = "none";
        }
      });
    
      // Limpar as respostas armazenadas
      respostas = {
        sintomas: [],
        tempoSintomas: null,
        historico: null,
        faixaEtaria: null,
        exposicaoAgua: null,
        resfriadoRecente: null
      };
    
      // Limpar os campos de seleção e caixas de seleção
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    
      const radioButtons = document.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
      });
    
      // Limpar o diagnóstico exibido
      document.getElementById("resultado").innerText = "";
    
      console.log('Formulário reiniciado');
    }   
    // Adicione um event listener ao botão "Voltar à Página Inicial"
document.getElementById("voltarInicio").addEventListener("click", function () {
  // Redirecione para a página inicial, por exemplo, a página "index.html"
  window.location.href = "index.html"; // Substitua "index.html" pelo URL da sua página inicial
});
   

  });