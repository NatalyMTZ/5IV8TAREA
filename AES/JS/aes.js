function cifrar() {
    let cadena = document.getElementById("cont-archivo").value;
    const clave = document.getElementById("key").value;

    var cifrado = CryptoJS.AES.encrypt(cadena, clave);

    document.getElementById("men").innerHTML = cadena;
    document.getElementById("demo99").innerHTML = cifrado;
}

function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
    var elemento = document.getElementById('cont-archivo');
    elemento.innerHTML = contenido;
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
function validar128() {
    var cadena = document.getElementById("cont-archivo").value;
    var clave = document.getElementById("key").value;
    if (cadena == "" || clave == "") {
        alert("Rellenar todos los campos");
    } else if (clave.length < 16 || clave.length > 256) {
        alert("La llave debe ser mayor a 16 caracteres");
    } else {
        cifrar();
        leerArchivo();
        descargar();
    }
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
function validar192() {
    var cadena = document.getElementById("cont-archivo").value;
    var clave = document.getElementById("key").value;
    if (cadena == "" || clave == "") {
        alert("Rellena todos los campos");
    } else if (clave.length < 24 || clave.length > 256) {
        alert("La llave debe ser mayor a 16 caracteres");
    } else {
        cifrar();
        leerArchivo();
        descargar();
    }
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
function validar256() {
    var cadena = document.getElementById("cont-archivo").value;
    var clave = document.getElementById("key").value;
    if (cadena == "" || clave == "") {
        alert("Rellena todos los campos");
    } else if (clave.length < 32 || clave.length > 256) {
        alert("La llave debe ser mayor a 32 caracteres");
    } else {
        cifrar();
        leerArchivo();
        descargar();
    }

}

function dc() {
    let hj = document.getElementById("cont-archivo").value;
    const nmbh = document.getElementById("key").value;
    var descifrado = CryptoJS.AES.decrypt(hj, nmbh);
    if (hj == "" || nmbh == "") {
        alert("No se eligió ningún archivo")
    } else {
        document.getElementById("hexa").innerHTML = descifrado;
        document.getElementById("demo99").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
    }
}