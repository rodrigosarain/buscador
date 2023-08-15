

const marcas = [
  {ID:1, nombre:"Nike"},
  {ID:2, nombre:"Adidas"},
  {ID:3, nombre:"Carhatt"},
  {ID:4, nombre:"Corteiz"},
  {ID:5, nombre:"Chromehearts"},
]

let seleccion = prompt(" ¿Desea realizar una busqueda ?")

if (seleccion == "si"){
  alert("El stock disponible es este:")
  let stock = marcas.map (
      (marca) => marca.nombre +"||" +" ID = " + marca.ID )
  alert (stock.join (" - "))
} else if (seleccion == "no"){
  alert("te esperamos en un futuro !")
}

while (seleccion != "no") {
  let producto = prompt ("Introduce la marca que quieres buscar")
  if (producto  == "Nike" || producto  == "Adidas" || producto  == "Carhatt" || producto  == "Corteiz" || producto == "Chromehearts"){
  switch (producto ) {
      case "Nike":
        precio_medio = "normal"
        break;
    
      case "Adidas":
        precio_medio = "normal"
        break;
    
      case "Carhatt":
        precio_medio = "intermedio"
        break;
    
      case "Corteiz":
        precio_medio = "alto"
        break;
    
      case "Chromeharts":
          precio_medio = "alto"
          break;
      
      default:  
      break;
    }
    alert(`Su marca es: ${producto}, y su precio medio es: ${precio_medio}`)
    break;
  }else{
    alert("No trabajamos con esa marca")
  }
}

