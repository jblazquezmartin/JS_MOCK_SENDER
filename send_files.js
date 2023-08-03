const fs = require('fs');
const path = require('path');

// Directorio donde se encuentran los archivos JSON
const directoryPath = path.join(__dirname, 'json_files');

// Lista de nombres de archivos JSON en la carpeta
let fileList = [];

// Índice para seguir el progreso de envío en bucle
let currentIndex = 0;

let intervalID;

// Leer los nombres de archivos JSON de la carpeta
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error al leer los archivos:', err);
    return;
  }

  fileList = files.filter(file => path.extname(file) === '.json');
  if (fileList.length === 0) {
    console.log('No se encontraron archivos JSON en la carpeta.');
    return;
  }

  // Iniciar el envío en intervalos regulares
  const intervalTime = 5000; // Intervalo de tiempo en milisegundos (ejemplo: cada 5 segundos)
   intervalID = setInterval(sendNextFile, intervalTime);
});

// Función para enviar el siguiente archivo JSON en la lista
function sendNextFile() {
  if (currentIndex >= fileList.length) {
    // Si ya se enviaron todos los archivos, detener el intervalo
    clearInterval(intervalID);
    console.log('Envío completado.');
  } else {
    // Leer el contenido del archivo JSON actual y enviarlo
    const currentFileName = fileList[currentIndex];
    const filePath = path.join(directoryPath, currentFileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        console.log('Enviando archivo:', currentFileName);
        console.log('Contenido:', jsonData);

        // Aquí puedes realizar cualquier lógica que desees antes de enviar el JSON.

        currentIndex++;
      } catch (parseError) {
        console.error('Error al analizar el archivo JSON:', parseError);
        currentIndex++; // Incrementar currentIndex incluso si hay error
      }
    });
  }
}
