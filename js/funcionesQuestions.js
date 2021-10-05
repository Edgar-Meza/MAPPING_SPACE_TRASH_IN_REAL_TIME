function question(question){
  var entrada = document.getElementById('input').value;
  var query = {'question':''+entrada+''};

  var config = {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'EndpointKey e4e770c8-e754-4fb0-adf8-1c864e92f700'
    },
    body: JSON.stringify(query)
  };

  fetch('https://debrisfinderbot.azurewebsites.net/qnamaker/knowledgebases/d82a5191-5774-4f39-837c-74fc1c451c58/generateAnswer/', config)
  .then(res=>res.json())
  .then(data=>{
    var contenedor = document.getElementById('quest');
    var agregar = '<div class="bg-primary w-100 my-1 rounded">'+data['answers'][0]['answer']+'</div>';
    contenedor.innerHTML = contenedor.innerHTML+agregar;
  })
}
function abrir(){
  document.getElementById('open').style.display = 'none';
  document.getElementById('quest').style.display = 'block';
}
