// Tienda de whiskys

// hago mi clase
class Whiskey {
  constructor(nombre, precio, detalle, origen, cantidad, tiempoDeEstacionado) {
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.detalle = detalle;
    this.origen = origen;
    this.cantidad = cantidad;
    this.tiempoDeEstacionado = tiempoDeEstacionado;
    this.disponible = true;
  }

  sumaComision() {
    return this.precio + this.precio * 0.1;
  }
  comision() {
    return this.precio * 0.1;
  }

  vender() {
    this.disponible = false;
  }
}

//Hago que el cliente complete el producto

const arrWhiskys = [];

while (true) {
  let aplicarNombre = prompt("Escriba el nombre del Whisky");
  if (aplicarNombre) {
    let aplicarPrecio = prompt("Escriba el precio del Whisky");
    let aplicarOrigen = prompt("Escriba el origen del Whisky");
    let aplicarDetalle = prompt("Escriba el detalle del Whisky");
    let aplicarTiempo = prompt("Escriba el tiempo de estacionado del Whisky");
    let aplicarCantidad = prompt("Escriba el cantidad de Whiskys a vender");
    arrWhiskys.push(
      new Whiskey(
        aplicarNombre,
        aplicarPrecio,
        aplicarDetalle,
        aplicarOrigen,
        aplicarTiempo,
        aplicarCantidad
      )
    );
    let seguirSumandoProductos = prompt("Quieres seguir subiendo productos?");
    if (seguirSumandoProductos == "Si" || seguirSumandoProductos == "si") {
      continue;
    } else {
      break;
    }
  } else {
    alert("El whisky debe tener un nombre");
  }
  continue;
}
console.log(arrWhiskys);

for (let whisky of arrWhiskys) {
  document.write("<h2> Nombre del Whisky " + whisky.nombre + " <h2>");
  document.write("<h3> Precio:" + whisky.precio + " <h3>");
  document.write("<h3> Origen:" + whisky.origen + " <h3>");
  document.write("<h3> Detalle:" + whisky.detalle + " <h3>");
  document.write(
    "<h3> Tiempo de Estacionado:" + whisky.tiempoDeEstacionado + " <h3>"
  );
  document.write("<h3> Cantidad:" + whisky.cantidad + " <h3>");
  document.write(
    "<h3> Precio del Whisky con el 10% de comision que usted recibira incluido:" +
      whisky.sumaComision() +
      " <h3>"
  );
  document.write("<h3> Su comision es: " + whisky.comision() + " <h3>");
}

let conStock = arrWhiskys.filter((el) => el.cantidad > 0);
console.log(conStock);
document.write("<h1> Whisky con stock: <h1>");

for (let whisky of conStock) {
  document.write("<h2> Nombre del Whisky " + whisky.nombre + " <h2>");
}

let sinStock = arrWhiskys.filter((el) => el.cantidad == 0);
console.log(sinStock);
document.write("<h1> Whisky sin stock: <h1>");

for (let whisky of sinStock) {
  document.write("<h2> Nombre del Whisky " + whisky.nombre + " <h2>");
  console.log();
}
