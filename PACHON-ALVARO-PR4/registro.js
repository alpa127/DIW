$(document).ready(function () {
    $("#formulario").on("submit", function(e){
        e.preventDefault();
        $.ajax({
            url: "registro.json",
            type: "GET",
            success: function (data) {
               
                    if (data.error != 0) {
                        $("#cajaAlerta").html("<div class='alert alert-danger alert-dismissible  col-4' role='alert'><div><h3>Error en el registro</h3><p>"+ data.mensaje_error+"</p></div><button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>");
                      }
                      else {
                        $("#cajaAlerta").html("<div class='alert alert-success alert-dismissible col-4' role='alert'><h3>¡Bien Hecho!</h3><p>Tu registro ha sido completado con éxito</p><button type='button' class='btn-close align-self-end' data-bs-dismiss='alert' aria-label='Close'></button></div>");
                      }
                
            }
        });
    });
    
});