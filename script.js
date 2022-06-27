function mayus(){

var name=document.getElementById("nombre");
name.value=name.value.toUpperCase();

var surname=document.getElementById("apellidos");
surname.value=surname.value.toUpperCase();

}

function vName(name){
    var patron = /^[A-Z]*$/;
    
    // sólo tengo que incluir en el patrón mayúsculas porque el valor del  campo 
    // ya se ha pasado a mayúsculas con la función mayus() previamente
    var name=document.getElementById("nombre");
    
    if((name.value.match(patron))){ 
        alert("el nombre se insertó correctamente");

        return true;
    
    }else {
    
        alert("el campo nombre solamente acepta letras");
        return false;
    }    
    }
function vSurname(surname){
        var patron = /^[A-Z]*$/;
        
    // sólo tengo que incluir en el patrón mayúsculas porque el valor del  campo 
    // ya se ha pasado a mayúsculas con la función mayus() previamente
      
        var surname=document.getElementById("apellidos");
        
        if(surname.value.match(patron)){ 
            alert("el apellido se insertó correctamente");

            return true;
        
        }else {
        
            alert("el campo apellidos solamente acepta letras");
            return false;
        }    
        }
function vRango(elemento){
    // valido que se haya insertado solamente números
            var number = parseInt(elemento.value,10);
            
            if(isNaN(number)){

              alert('Ingrese solo números.');
              elemento.focus();
              elemento.select();
              return false;

            }
    // valido que los números estén dentro del rango
            if(number<0 || number>105){

              alert('Solamente acepta rango de 0 a 105');
              elemento.focus();
              return false;

            }
            alert('está en el rango de 0 a 105');
            return true;
          }

function vNif(identification){
            
    // d{8} implica que deberá contener 8 números
    // \- implica que deberá contener tras los 8 números, un guión"-"
    // [a-zA-Z]{1} implica que deberá contener tras el guión, una letra, que puede ser mayúscula o minúscula
            
        var patron = /^\d{8}\-[a-zA-Z]{1}$/;
        

        var identification=document.getElementById("nif");
            
            if(identification.value.match(patron)){ 
                alert("el dni se insertó correctamente");
    
                return true;
            
            }else {
            
                alert("el dni no tiene el formato adecuado");
                return false;
            }    
        }

        function vEmail(mail){
            
            // .+ implica que puede haber una o más coincidencias de cualquier carácter
            // \@ implica que deberá contener tras , un arroba"@"
            // .+ tras el arroba, implica que puede haber una o más coincidencias de cualquier carácter
            // \. implica que deberá contener un punto "."
            // .+ tras el punto, implica que puede haber una o más coincidencias de cualquier carácter
                    
                var patron  = /^(.+\@.+\..+)$/;  
        
                var mail=document.getElementById("email");
                    
                    if(mail.value.match(patron)){ 
                        alert("el email se insertó correctamente");
            
                        return true;
                    
                    }else {
                    
                        alert("el email no tiene el formato adecuado");
                        return false;
                    }    
                }

function valid(){
    vName(document.fPractica.nombre);
    vSurname(document.fPractica.apellidos);
    vRango(document.fPractica.edad);
    vNif(document.fPractica.nif);
    vEmail(document.fPractica.email);

}

//  imprimir el array de datos obtenidos
$(document).ready(function(){

    $("button").click(function(){

      var a = $("#fPractica").serializeArray();
      $.each(a, function(i, field){

        $("#results").append("<li>" + field.name + ": " + field.value + "</li>");
        
      });
    });
  });



