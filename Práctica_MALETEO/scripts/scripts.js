//----------------------------------------------MAPA--------------------------//

// Initialize and add the map
function initMap() {
    
    // Estas variables son localizaciones donde van a pasar cosicas, como iniciar el mapa o poner markers
    var madridSol = {lat: 40.416721, lng: -3.703539};
    var guardian1 = {lat: 40.417278, lng: -3.705635};
    var guardian2 = {lat: 40.416510, lng: -3.702062};
        
    // Inicializa el mapa centrado donde le digas, en una de las variables de antes
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: madridSol});

    /*var maleteoIcon = {
        path: "../assets/map-marker.svg",
        scale: 0.5,
    };*/
        
    
    // Coloca markers en las variables que le has dicho, y el mapa que le has dicho (¿puede haber varios?)
    var markerGuardian1 = new google.maps.Marker({position: guardian1, map: map, icon: "../assets/map-marker.svg"});
    var markerGuardian2 = new google.maps.Marker({position: guardian2, map: map, icon: "../assets/map-marker.svg"});
  }



//------------------------LO DEL FORMULARIO---------------------//

document.getElementById("enviarFormulario").addEventListener("submit", function(event){
    
//------------QUE NO SALTE--------//

    event.preventDefault();

//-----------------------ALTERAR EL CSS PARA QUE SE CAMBIE EL FORMULARIO POR EL RECUADRO---------------//

    var eliminable = document.getElementById("eliminarAlClickar");
    eliminable.className =  "eliminableClicked";

    var validar = document.getElementById("validado");
    validar.className = "validadoClicked";

//-----------------------VARIABLES CON LOS NOMBRES ESCRITOS EN EL FORM, QUE NO SÉ PA QUÉ LOS QUIERO, PERO AHI ESTAN--------//

    var name = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var horario = document.getElementById("horario").value;
    var cityDesplegable = document.getElementById("cityOptions");
    var city = cityDesplegable.options[cityDesplegable.selectedIndex].text;

    //-------------------FETCH Y ESAS COSAS DE ENVIAR EL FORMULARIO--------//
    
    const formData = new FormData(this);
    var url = this.action;
    var method = this.method;

    fetch(url, {
        method:method, // 'GET', 'PUT', 'DELETE', etc.
        body:formData //formData  // a FormData will automatically set the 'Content-Type'
    })
        .then(function(res){
            //Aqui va el código si el envío ha ido bien
            
        //-------AQUI ESTOY HACIENDO UNA REQUEST A LA RESPUESTA PARA SACAR EL RESULTADO ED LOS CAMPOS------//
            
            /*var formJson=res.json();
            formJson.then(function(formJson){
                //console.log(formJson.form);
                
                var formNombre = formJson.form.nombre;
                var formEmail = formJson.form.email;
                var formHorario = formJson.form.horario;
                var formCiudad = formJson.form.ciudad;
                
                console.log(formNombre);
                console.log(formEmail);
                console.log(formHorario);
                console.log(formCiudad); 
            });*/

        })

        .catch(function(res){
            //si algo ha ido mal
        });
    
    
    //---------------------------LOGS-------------------//
    
    //console.log("Nombre: " + name);
    //console.log("Email: " + email);
    //console.log("Horario Preferido: " + horario);
    //console.log("Ciudad: " + city);
    //console.log(method);
    //console.log(url);


//------------------------VALIDAR LOS CAMPOS DEL FORMULARIO---------//

    //if(name.includes(/^(?:[-A-Z]+\.? )+[-A-Z]+$){
    //    alert ("Por Favor, introduzca un nombre válido.", "Solo acepta letras, espacio, '-' o '.'.");
    //}


});
