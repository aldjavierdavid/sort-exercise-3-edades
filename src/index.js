/**
 * El método sort https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort3
 */

/**
 * Usa el método sort para ordenar los objetos por el campo 'edad' (false friend del inglés 'age', I guess); de menos edad a más edad.
 */

let objetos = [
  {
    nombre: "Bicicleta",
    marca: "XYZ",
    color: "Rojo",
    tamaño: "Mediano",
    estado: "Usado",
    edad: 2,
    descripcion: "Bicicleta de montaña en buen estado",
    imagen: "ruta/a/la/imagen-bicicleta.jpg",
    categoria: "Deportes",
    ciudad: "Nueva York"
  },
  {
    nombre: "Televisor",
    marca: "ABC",
    color: "Negro",
    tamaño: "42 pulgadas",
    estado: "Nuevo",
    edad: 4,
    descripcion: "Televisor de pantalla plana en perfecto estado",
    imagen: "ruta/a/la/imagen-televisor.jpg",
    categoria: "Electrónica",
    ciudad: "Londres"
  },
  {
    nombre: "Libro",
    autor: "John Doe",
    género: "Ficción",
    estado: "Nuevo",
    idioma: "Inglés",
    edad: 12,
    descripcion: "Libro de ciencia ficción emocionante",
    ciudad: "Tokio"
  },
  {
    nombre: "Mesa",
    material: "Madera",
    color: "Café",
    tamaño: "Grande",
    estado: "Usado",
    edad: 12,
    descripcion: "Mesa de comedor en buen estado",
    ciudad: "París"
  },
  {
    nombre: "Silla",
    material: "Metal",
    color: "Negro",
    tamaño: "Mediano",
    estado: "Usado",
    edad: 1,
    descripcion: "Silla de escritorio en buen estado",
    ciudad: "Roma"
  }
];
let edadesFiltradas = objetos.map((objetos) => objetos.edad);

let sorteados = edadesFiltradas.sort(function (a, b) {
  return a - b;
});

console.log(edadesFiltradas);
console.log(sorteados);
