const productos = document.querySelector("#productos")

let stock = [
  { id: 1, nombre: "vino", marca: "malbec", precio: 3500, img: "./src/img/vino.jpg" },
  { id: 2, nombre: "mochila", marca: "wagner", precio: 12000, img: "./src/img/mochila.jpg" },
  { id: 3, nombre: "afeitadora", marca: "gama", precio: 18000, img: "./src/img/afeitadora.jpg" },
  { id: 4, nombre: "matero", marca: "pampero", precio: 14000, img: "./src/img/matero.jpg" },
  { id: 5, nombre: "linterna", marca: "stanley", precio: 4000, img: "./src/img/linterna.jpg" },
  { id: 6, nombre: "conservadora", marca: "mor", precio: 9000, img: "./src/img/conservadora.jpg" },
  { id: 7, nombre: "termo", marca: "luminox", precio: 17000, img: "./src/img/termo.jpg" },
  { id: 8, nombre: "fogon", marca: "ñuke", precio: 53000, img: "./src/img/fogon.jpg" },
]
let carrito = []

stock.forEach((s) => {
  let card = document.createElement("div");
  card.className = "tarjeta";
  card.innerHTML = `
    <img src="${s.img}"/>
    <div class="tarjeta-body">
      <h1>${s.nombre}</h1>
      <p>${s.marca}</p>
      <p>$${s.precio}</p>
    </div>
  `;
  productos.append(card);


  const añadirCarrito = document.createElement("button")
  añadirCarrito.innerText = `Añadir al carrito`;

  card.append(añadirCarrito);

  añadirCarrito.addEventListener("click", () => {
    carrito.push({
      id: s.id,
      nombre: s.nombre,
      img: s.img,
      precio: s.precio,
    })
    console.log(carrito)
  });

});




