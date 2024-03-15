function generarGafete() {
    const nombre = document.getElementById('nombre').value;
    const empresa = document.getElementById('empresa').value;
    const stand = document.getElementById('stand').value;
    const fotoInput = document.getElementById('fotoInput');
    const foto = URL.createObjectURL(fotoInput.files[0]);
  
    // Abre una nueva ventana para el gafete
    const ventanaGafete = window.open('', 'Gafete', 'width=400,height=600');
  
    // Contenido del gafete
    const contenidoGafete = `
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Gafete</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              text-align: center;
              padding: 20px;
            }
  
            img {
              max-width: 100%;
              border-radius: 10px;
            }
          </style>
        </head>
        <body>
          <h3>${nombre}</h3>
          <p>${empresa}</p>
          <p>Stand: ${stand}</p>
          <img src="${foto}" alt="Foto de ${nombre}">
        </body>
      </html>
    `;
  
    // Escribe el contenido en la nueva ventana
    ventanaGafete.document.write(contenidoGafete);
  
    // Cierra la escritura del documento para evitar problemas de carga
    ventanaGafete.document.close();
  }
  
  
