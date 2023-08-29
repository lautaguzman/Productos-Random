const productos = document.querySelector("#productos");

const contacto = document.querySelector("#contacto");
const modalForm = document.querySelector("#modalForm")

const verCarrito = document.querySelector("#Vercarrito");
const modalContainer = document.querySelector("#modal-carrito");

let carrito = []

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((producto) => {
      let card = document.createElement("div");
      card.className = "tarjeta";
      card.innerHTML = `
        <img src="${producto.img}"/>
        <div class="tarjeta-body">
          <h1>${producto.nombre}</h1>
          <p>${producto.marca}</p>
          <p>$${producto.precio}</p>
        </div>
      `;
      productos.append(card);


      const añadirCarrito = document.createElement("button")
      añadirCarrito.innerText = `Añadir al carrito`;

      card.append(añadirCarrito);

      añadirCarrito.addEventListener("click", () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto Agregado',
          showConfirmButton: false,
          timer: 1000
        });


        const repeatProduct = carrito.some((repeat) => repeat.id === producto.id)

        if (repeatProduct) {
          carrito.map((prod) => {
            if (prod.id === producto.id) {
              prod.cantidad++;
            }
          })
        } else {

          carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            img: producto.img,
            precio: producto.precio,
            cantidad: producto.cantidad,
          });
        };
      });

    });
  })

  .catch(error => {
    alert('Error al obtener el archivo JSON', error);
  });








