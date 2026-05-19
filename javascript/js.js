

function mostrarCategoria(categoriaId) {
    // 1. Mostrar el contenedor general de detalles
    const contenedorDetalle = document.getElementById('contenedor-detalle');
    contenedorDetalle.classList.remove('oculto');

    // 2. Ocultar todas las galerías específicas primero
    const galerias = document.querySelectorAll('.galeria-especifica');
    galerias.forEach(galeria => {
        galeria.classList.add('oculto');
    });

    // 3. Mostrar únicamente la galería seleccionada
    const galeriaSeleccionada = document.getElementById('galeria-' + categoriaId);
    if (galeriaSeleccionada) {
        galeriaSeleccionada.classList.remove('oculto');
    }

    // 4. Desplazamiento suave hacia la zona del rompecabezas
    contenedorDetalle.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}




// 1. FUNCIÓN PARA MOSTRAR LA CATEGORÍA SELECCIONADA ARRIBA
function mostrarCategoria(categoriaId) {
    // Mostrar el contenedor general de mosaicos
    document.getElementById('contenedor-detalle').classList.remove('oculto');

    // Ocultar todas las galerías primero
    const galerias = document.querySelectorAll('.galeria-especifica');
    galerias.forEach(g => g.classList.add('oculto'));

    // Mostrar solo la galería elegida
    const seleccionada = document.getElementById('galeria-' + categoriaId);
    if (seleccionada) {
        seleccionada.classList.remove('oculto');
    }
}

// 2. FUNCIÓN NUEVA: AL HACER CLIC EN CUALQUIER FOTO DEL ROMPECABEZAS
function seleccionarParaComprar(elementoImagen, codigoCategoria) {
    // Mostrar la zona del formulario que estaba oculta
    const zonaFormulario = document.getElementById('zona-formulario-compra');
    zonaFormulario.classList.remove('oculto');

    // Pasar la imagen seleccionada al recuadro de vista previa del formulario
    const fotoDestino = document.getElementById('foto-formulario-dinamica');
    fotoDestino.src = elementoImagen.src;

    // Rellenar automáticamente la "Descripción de la obra" con el atributo alt de la foto
    document.getElementById('descripcion-obra').value = "Obra: " + elementoImagen.alt;

    // Activar automáticamente el botón de opción (radio) de la categoría que corresponde
    if (codigoCategoria === 'PAI') document.getElementById('cat-PAI').checked = true;
    if (codigoCategoria === 'RET') document.getElementById('cat-RET').checked = true;
    if (codigoCategoria === 'EVE') document.getElementById('cat-EVE').checked = true;
    if (codigoCategoria === 'PRO') document.getElementById('cat-PRO').checked = true;

    // Desplazar la pantalla suavemente directo al formulario de compra
    zonaFormulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Activa el radio "Otro" si el usuario escribe directo en la línea de texto de otro
function marcarOtroRadio() {
    document.getElementById('cat-PRO').checked = true;
}

// 3. ENVIAR EL FORMULARIO RECOLECTANDO TODO
function enviarPedido(event) {
    event.preventDefault(); // Detiene la recarga de página

    // Captura de datos básicos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value || "No indicado";
    const descripcion = document.getElementById('descripcion-obra').value;
    
    // Captura de categorías e inputs especiales
    let categoria = document.querySelector('input[name="categoria"]:checked').value;
    if (categoria === 'PRO') {
        const valorOtro = document.getElementById('texto-otro-campo').value;
        categoria = "Otro (-PRO): " + (valorOtro || "Sin especificar");
    }
    
    const licencia = document.querySelector('input[name="licencia"]:checked').value;
    const formato = document.querySelector('input[name="formato"]:checked').value;

    // Impresión de control en la consola de desarrollo
    console.log("=== PEDIDO REALIZADO ===");
    console.log("Nombre:", nombre, " | Correo:", correo, " | Tel:", telefono);
    console.log("Obra:", descripcion, " | Cat:", categoria);
    console.log("Licencia:", licencia, " | Formato:", formato);

    // Muestra aviso de éxito
    document.getElementById('mensaje-confirmacion').classList.remove('oculto');
    document.getElementById('formulario-pedido').reset();
}