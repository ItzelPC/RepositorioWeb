var blogeo = document.getElementById('signin');
blogeo.addEventListener('click', function(){
    var e =document.getElementById('email').value;
    var p =document.getElementById('password').value
    const parametros = new URLSearchParams();
    parametros.append('Prmemail', e);
    parametros.append('Prmpassword', p);
    alert(parametros);
    axios.get('http://localhost/adios')
    .then(function(response){
        console.log(response)
        console.log('Contenido: '+response.data)
        console.log('Status: '+ response.status)
        document.getElementById('titulo').innerHTML = response.data
    })
    .catch(function(error){
        console.log(error)
    })
})
