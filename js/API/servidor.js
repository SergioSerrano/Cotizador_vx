//Servidor



function nuevoAjax()
{
        var xmlhttp=false;
        try
        {
                // Creacion del objeto AJAX para navegadores no IE
                xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e)
        {
                try
                {
                        // Creacion del objet AJAX para IE
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(E)
                {
                        if (!xmlhttp && typeof XMLHttpRequest!="undefined") xmlhttp=new XMLHttpRequest();
                }
        }
        return xmlhttp;
}
function enviarDatos(nom, tel, email){
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/enviar.php",
		data: "nom="+nom+"&tel="+tel+"&mai="+email
	}).done(function(msg) {
		if(msg==1){
			//subirFoto(foto,nom);
			window.location.href="#page";
		}else{
			navigator.notification.alert("Error al Registrarse"+msg, null, "Registro", "Aceptar");	
		}
	});
}

function setCookie(c_name,value,exdays)
{
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
   document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1)
  {
    c_start = c_value.indexOf(c_name + "=");
  }
  if (c_start == -1)
    {
      c_value = null;
    }
  else
  {
   c_start = c_value.indexOf("=", c_start) + 1;
   var c_end = c_value.indexOf(";", c_start);
   if (c_end == -1)
   {
     c_end = c_value.length;
   }
   c_value = unescape(c_value.substring(c_start,c_end));
  }
 
  return c_value;
}

function guarda_calif(valrad1,valrad2,valrad3,valrad4,valrad5,times){

	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/g_preguntas.php",
		data: "c1="+valrad1+"&c2="+valrad2+"&c3="+valrad3+"&c4="+valrad4+"&c5="+valrad5+"&times="+times
	}).done(function(msg) {
		
		if(msg==1){
			
			//subirFoto(foto,nom);
		
			
			navigator.notification.alert("Datos enviados", null, "Conectando al servidor", "Aceptar");	
			return msg;
			
		}else{
			navigator.notification.alert("Error al guardar calificacion", null, "Alert", "Aceptar");	
			return msg;
		}
	});
}
             
function guarda_cliente(val1, val2, val3, val4, val5,val6,val7,val8,val9,val10,val11,val12,val13,val14,val15,val16,val17,  times) {
/*alert( "c1="+val1+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&times="+times);
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/prospectos.php",
		data: "c1="+val1+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&times="+times
	}).done(function(msg) {
		
		if(msg==1){
			
			//subirFoto(foto,nom);
		
			
			navigator.notification.alert("Datos enviados", null, "Conectando al servidor", "Aceptar");	
			return msg;
			
		}else{
			navigator.notification.alert("Error al guardar calificacion", null, "Alert", "Aceptar");	
			return msg;
		}
	});*/
	 ajax=nuevoAjax();
        ajax.open("POST", "http://testapp2.260mb.net/sincronizar/g_clientes.php", true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("c1="+val1+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&c6="+val6+"&c7="+val7+"&c8="+val8+"&c9="+val9+"&c10="+val10+"&c11="+val11+"&c12="+val12+"&c13="+val13+"&c14="+val14+"&c15="+val15+"&c16="+val16+"&c17="+val17+"&times="+times);
        ajax.onreadystatechange=function() 
        {
                if (ajax.readyState==4)
                { 
                        var msg=ajax.responseText
						if (msg==1){
							navigator.notification.alert("Datos guardados correctamente", obtener_ultimo_folio(times), "Guardado", "Aceptar");
							
							
						}
                } 
        }
		return false;
}

function sube_interno(val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12,val13,val14,val15,val16,val17){
	 

	/*	
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/g_clientes.php",
		data: "c1="+val+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&c6="+val6+"&c7="+val7+"&c8="+val8+"&c9="+val9+"&c10="+val10+"&c11="+val11+"&c12="+val12+"&c13="+val13+"&c14="+val14+"&c15="+val15+"&c16="+val16+"&c17="+val17
	}).done(function(msg) {
		
		if(msg==1){
			
			
			window.location.href="#form1";
			//navigator.notification.alert("Reserva Sincronizada Satisfactoriamente",null,"Reserva Realizada", "Aceptar");
			
			//subirFoto(foto,nom);
		
		
		}else{
			navigator.notification.alert("Error al guardar calificacion", null, "Registro", "Aceptar");	
		}
	});*/
	
	 ajax=nuevoAjax();
        ajax.open("POST", "http://testapp2.260mb.net/sincronizar/g_clientes.php", true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("c1="+val1+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&c6="+val6+"&c7="+val7+"&c8="+val8+"&c9="+val9+"&c10="+val10+"&c11="+val11+"&c12="+val12+"&c13="+val13+"&c14="+val14+"&c15="+val15+"&c16="+val16+"&c17="+val17);
        ajax.onreadystatechange=function() 
        {
                if (ajax.readyState==4)
                { 
                        var msg=ajax.responseText;
						if (msg==1){window.location.href="#form1";}
                } 
        }
		return false;
}

function subirReserva(id,th,ha,di,pe){
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/enviar.php",
		data: "nom="+th+"&tel="+ha+"&mai="+di+"&pe="+pe
	}).done(function(msg){
		if(msg==1){
			navigator.notification.alert("Reserva Sincronizada Satisfactoriamente",function(){
				
				guardarHistorial(th,ha,di,pe);
				borrarReserva(id);
			},"Reserva Realizada", "Aceptar");
		}else{
			navigator.notification.alert("Error al Registrarse", null, "Registro", "Aceptar");	
		}
	});
}



	function obtener_ultimo_folio(clave)
	{

		
		ajax=nuevoAjax();
        ajax.open("POST", "http://testapp2.260mb.net/sincronizar/d_o.php", true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("clave="+clave);
        ajax.onreadystatechange=function() 
        {
                if (ajax.readyState==4)
                { 
					
                        var msg=ajax.responseText
						var obj=$.parseJSON(msg);
					navigator.notification.alert("Su Numero de folio es: "+obj.ultimo_folio, window.location.reload(), "Folio", "Aceptar");
					
						
                } 
			
        }
		return false;
	}

