import React from "react";

export const CancelacionCompra = () => {
  return (
    <main className="contenedorFormCancelacionCompra">
      <img
        src="https://raw.githubusercontent.com/RamiroSB/imagenes-shopnow/main/CentroDeAyuda/BannerCentroDeAyuda.jpg"
        className="imgCentroDeAyuda"
        alt="Imagen banner centro de ayuda"
      ></img>

      <h2 className="tituloOpinion">¿Cambiaste de opinión?</h2>
      <p className="textoDevolucion">
        Para proceder con la devolución de tu compra*, te pedimos por favor que
        completes el formulario a continuación. Te contactaremos dentro de las
        próximas 24hs hábiles.¿Tenés alguna duda? Llamanos al{" "}
        <a className="linkTelefono" href="tel:1121503455">
          11 2150 3455
        </a>{" "}
      </p>

      <form className="formCancelacionCompra " method="POST">

        <div className="contenedorDivFormCancelacionCompra ">
            <p> Nombre: </p>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
            ></input>
            </div>

<div className="contenedorDivFormCancelacionCompra">
        
            <p> Apellido: </p>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              required
            ></input>
        </div>

        <div className="contenedorDivFormCancelacionCompra">
            <p> Email: </p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
            </div>

<div className="contenedorDivFormCancelacionCompra">
        
            <p> Teléfono: </p>
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              required
            ></input>
        </div>
        

        <div className="contenedorDivFormCancelacionCompra">
            <p> DNI: </p>
            <input
              type="number"
              name="dni"
              placeholder="Nº documento"
              required
            ></input>
            </div>

<div className="contenedorDivFormCancelacionCompra">
        
            <p> Número de compra: </p>
            <input
              type="text"
              name="numeroCompra"
              placeholder="Numero de compra"
              required
            ></input>
        </div>

        <div className="contenedorDivFormCancelacionCompra comentariosBox" id="comentariosBox">
            <p> Comentarios: </p>
            <textarea
              type="text"
              name="comentarios"
              placeholder="Comentarios"
            ></textarea>
        </div>
        <div className="contenedorDivFormCancelacionCompra">
        <div className="boxBotonCancelarCompra">
            <button className="botonCancelarCompra" type="submit">
              Enviar consulta
            </button>
            </div>
            </div>

       
      </form>
      <div>
        <p>
          <i className="textoDevolucion ">
            *Recordá que para proceder con la devolución, el producto tiene que
            estar cerrado, en el empaque original y en las mismas condiciones en
            que fue entregado.
          </i>
          </p>
      </div>
    </main>
  );
};
