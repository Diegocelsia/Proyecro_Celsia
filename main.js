// Cargamos la biblioteca PapaParse para analizar archivos CSV
const Papa = require('papaparse');

// Función para procesar un archivo CSV
function procesarArchivo(inputId) {
    const input = document.getElementById(inputId);
    const archivo = input.files[0];

    if (archivo) {
        Papa.parse(archivo, {
            header: true, // Si el archivo tiene una fila de encabezado
            complete: function (result) {
                // La variable "result" contiene los datos del archivo CSV
                console.log('Datos procesados:', result.data);
                // Realiza el procesamiento adicional según las necesidades
            },
            error: function (error) {
                console.error('Error al procesar el archivo CSV:', error.message);
            },
        });
    } else {
        console.error('No se ha seleccionado ningún archivo.');
    }
}

// Asociamos la función de procesamiento a los botones
document.getElementById('procesarCliente').addEventListener('click', function () {
    procesarArchivo('archivoCliente');
});

document.getElementById('procesarFactura').addEventListener('click', function () {
    procesarArchivo('archivoFactura');
});
