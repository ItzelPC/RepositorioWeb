var blogeo = document.getElementById('signin');
blogeo.addEventListener('click', function(){
    var e =document.getElementById('email').value;
    var p =document.getElementById('password').value
    const parametros = new URLSearchParams();
    parametros.append('Prmemail', e);
    parametros.append('Prmpassword', p);
    alert(parametros);
    //axios.get('http://localhost:4567/hola?'+parametros)
    //.then(function(response){
    //   console.log(response)
    //   console.log('Contenido: '+response.data)
    //    console.log('Status: '+ response.status)
    //    document.getElementById('titulo').innerHTML = response.data
    //})

    // axios.post('http://localhost:4567/adios?'+parametros)
    // .then(function(response){
    //    console.log(response)
    //    console.log('Contenido: '+response.data)
    //     console.log('Status: '+ response.status)
    //     document.getElementById('titulo').innerHTML = response.data
    // })

    axios.post('http://localhost:4567/adiosJson', {
        Prmemail: e,
        Prmpassword: p
    })
    .then(function(response){
       console.log(response)
       console.log('Contenido: '+response.data)
        console.log('Status: '+ response.status)
        document.getElementById('titulo').innerHTML = response.data
    })

    // axios.post('http://localhost:4567/adios?', {
    //     Prmemail: e,
    //     Prmpassword: p
    // })
    // .then(function(response){
    //    console.log(response)
    //    console.log('Contenido: '+response.data)
    //     console.log('Status: '+ response.status)
    //     document.getElementById('titulo').innerHTML = response.data
    // })
    .catch(function(error){
        console.log(error)
    })
})
