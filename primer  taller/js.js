function mostrarTexto() {
    // Obtener el texto ingresado en el campo de texto
    var texto = document.getElementById("textoIngresado").value;

    // Mostrar el texto en el elemento <p>
    document.getElementById("textoMostrado").innerText = texto;
}

function eliminar() {
    // Limpiar el campo de texto
    document.getElementById("textoIngresado").value = "";

    // Limpiar el texto mostrado en el elemento <p>
    document.getElementById("textoMostrado").innerText = "";
}