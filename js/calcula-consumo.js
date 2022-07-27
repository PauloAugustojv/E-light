
//var titulo = document.querySelector(".titulo");
var itens = document.querySelectorAll(".item");

for ( i = 0; i < itens.length; i++){
    var item = itens[i];

    var tdAparelho = item.querySelector(".info-aparelho");
    var aparelho = tdAparelho.textContent;

    var tdPotencia = item.querySelector(".info-potencia");
    var potencia = tdPotencia.textContent;
    
    var tdUso = item.querySelector(".info-uso");
    var uso = tdUso.textContent;

    var tdHoras = item.querySelector(".info-horas");
    var horas = tdHoras.textContent;

    var tdConsumo = item.querySelector(".info-consumo");
    
   var potenciaEhValido = validaPotencia(potencia)
   var diasUsoEhValido = validaDiasUso(uso);
   var horasUsoEhValido = validaHorasUso(horas)

    if (!potenciaEhValido ){
        tdPotencia.textContent = "Potencia Inválida"
        potenciaEhValido = false;
       paciente.classList.add("paciente-invalido")
    }
    if (!diasUsoEhValido){
        tdUso.textContent = "Dias de Uso inválido"
        diasUsoEhValido = false;
        item.classList.add("paciente-invalido")
    }

    if (!horasUsoEhValido){
        tdHoras.textContent = "Horas de us    o Inválido"
        diasUsoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }


     if( potenciaEhValido  && diasUsoEhValido && horasUsoEhValido ){
         var consumo =  calculaConsumo(potencia, horas, uso)
         tdConsumo.textContent = "R$ " + consumo.toFixed(2);
        
     } 

     
}

   function validaPotencia(potencia){
       if(potencia > 0 && potencia < 100000) {
           return true;
       }else{
           return false;    
       }                

   }

   function validaDiasUso(uso){
       if(uso > 0 && uso <= 30){
           return true;
       }else{
           return false;
       }
    }

       
    function validaHorasUso(horas){
        if(horas > 0 && horas <= 24){
            return true;
        } else {
            return false;
        }
    }
       
    
    function calculaConsumo(potencia, horas, uso){
        var consumo = 0;
        consumo =  (potencia * horas * uso / 1000) * ( 0.91);
        console.log(consumo)
       return consumo;
    }
