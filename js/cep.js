function buscaCep() {    
    let cep = document.getElementById('cep').value
    if (cep !==''){
    let url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url)
    .then(response => response.json())
    .then(function (data) {
            console.log(data)
      
            document.getElementById('logradouro').value = data.logradouro
            document.getElementById('bairro').value = data.bairro
            document.getElementById('cidade').value = data.localidade
        })
        .catch(function (error) {
            alert(`Não foi possível localizar o cep ${cep}`)  
            document.getElementById('cep').value = ''         
            console.error(error)
        });
}
}