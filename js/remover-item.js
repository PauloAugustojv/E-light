var itens = document.querySelectorAll(".item");


itens.forEach(function(item){
  item.addEventListener("dblclick", function(){
      this.remove();
  });   
}); 