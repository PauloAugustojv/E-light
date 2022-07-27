var  botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault(); // previne os comportamentos padrões do browser, por exemplo o form que quando você clica no botão ele recarrega a pagina.
        var form = document.querySelector("#form-adiciona");
        
        //Extranindo informações do paciente do form para
      var item =  obtemItemDoFormulario(form);
      


      var itemTr = montaTr(item);
      var erros = validaItem(item);
   
      console.log()
      if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
      }

      function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "" 
        erros.forEach(function(erro){
          var li = document.createElement("li");
          li.textContent = erro;
          ul.appendChild(li);

        });
        


      }
       
      // adicion  a
        var tabela = document.querySelector("#tabela-itens");

        tabela.appendChild(itemTr); 

        form.reset();
       var mensagensErro= document.querySelector("#mensagens-erro");
       mensagensErro.innerHTML = "";
        

    });


    function obtemItemDoFormulario(form){
        var item = {
            aparelho: form.aparelho.value,
            horas: form.horas.value,
            uso: form.uso.value,
            potencia: form.potencia.value,
            consumo: calculaConsumo(form.potencia.value, form.horas.value, form.uso.value)

        }
        return item;
    }

    function montaTr(item){

        var itemTr = document.createElement("tr");
        itemTr.classList.add("item");

      
      itemTr.appendChild(montaTd(item.aparelho, "info-aparelho"));
      itemTr.appendChild(montaTd(item.horas, "info-horas"));
      itemTr.appendChild(montaTd(item.uso, "info-uso"));
      itemTr.appendChild(montaTd(item.potencia, "info-potencia"));
      itemTr.appendChild(montaTd("R$ " + item.consumo.toFixed(2), "info-consumo"));

      return itemTr;
        
    }

    function montaTd(dado, classe){
      var td = document.createElement("td");
      td.textContent =  dado;
      td.classList.add(classe);

      return td;  
    }

    function validaItem(item){
      var erros = [];

      if ( item.aparelho.length == 0)
      erros.push("Aparelho - O aparelho não pode ser em branco");



      if (item.uso.length == 0){
        erros.push("Dias de Uso (NO MÊS) - Os dias de uso não pode ser em branco");
      }else if(!validaDiasUso(item.uso)) 
      erros.push("Dias de Uso (NO MÊS) - O valor digitado para Dias de Uso está incorreto")
      


      if (item.potencia.length == 0){
        erros.push("Potencia (WATTS) - A potência não pode ser em branco");
      }else if(!validaPotencia(item.potencia)) 
      erros.push( "Potencia (WATTS) - O valor digitado para Potência está incorreto");
      
 

      if(item.horas.length == 0){
        erros.push("Horas por dia (USO) - As horas não podem ser em branco");
      }else if(!validaHorasUso(item.horas)) 
      erros.push( "Horas por dia (USO) - O valor digitado para Horas por dia está incorreto");


      return erros;
    }
    