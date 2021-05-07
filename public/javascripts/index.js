function cargar(id){
  var urlGeneral = 'http://localhost:3000/obtenerInformacion/';
  switch (id) {
    case 'btnHombre':
      ejecutarPeticion(urlGeneral + 'sexo/M/0');
      break;
    case 'btnMujer':
      ejecutarPeticion(urlGeneral + 'sexo/F/0');
      break;
    case 'btnEdad0':
      ejecutarPeticion(urlGeneral + 'edad/0/20');
      break;
    case 'btnEdad20':
      ejecutarPeticion(urlGeneral + 'edad/20/40');
      break;
    case 'btnEdad40':
      ejecutarPeticion(urlGeneral + 'edad/40/200');
      break;
    default:
      break;
  }
}

function ejecutarPeticion(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.response)
      var estructura = `<tr>
        <th>Departamento</th>
        <th>Municipio</th>
        <th>Contagio</th>
        <th>Estado</th>
      </tr>`;
      data.forEach(item => {
        estructura += `<tr>
          <td>${item.departamento_nom}</td>
          <td>${item.ciudad_municipio_nom}</td>
          <td>${item.fuente_tipo_contagio}</td>
          <td>${item.estado}</td>
        </tr>`;
      });
      document.getElementById("contenido").innerHTML = estructura;
    } else {
      console.log("Error de consulta")
    }
  };
  xhr.send();
}