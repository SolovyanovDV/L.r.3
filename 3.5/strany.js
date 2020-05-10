window.onload = function(){
    let strany = document.getElementById('strany');
    let goroda = document.getElementById('goroda');
    let country = {'Россия' : ["Москва", "Санкт-Петербург", "Казань", "Самара", "Новосибирск" ],
                   'Германия' : ["Берлин", "Гамбург", "Франкфурт-на-Майне" ],
                   'Испания' : ["Мадрид", "Барселона", "Севилья"],
                   'Италия' : [ "Рим", "Флоренция", "Венеция" ],
                   'Португалия' : ['Порту', "Лиссабон", "Брага"],
}
var n = Object.keys(country)
   for(var i=0; i<n.length; i++){
      var option = document.createElement("option");
      option.setAttribute("value", n[i]);
      option.innerHTML = n[i];
      strany.appendChild(option);
  }
    strany.addEventListener('change', function(){
    var gorod = country[this.value]
    goroda.length = 0;
    for(var j=0; j < gorod.length; j++){
        goroda.add(new Option(gorod[j]));
         }
     });
       
}