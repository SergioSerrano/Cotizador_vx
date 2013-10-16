//Eventos


$(document).ready(function (e) {



	document.addEventListener("deviceready", function () {

		window.location.href = '#form1';

		var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
		var f = new Date();
		document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
		$('#descripcion').val(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

		//---------------datos 
		$('#datos').tap(function () {
			var cla = $('#clave').val();

			obtener_clave(cla);




		});

		$('#add_line').tap(function () {
			var tabla = $('#Claves');
			var $linea = $('<tr></tr>');

			$linea.append($('<td></td>')

			.attr({
				id: 'posicion' + index + '1'
			}) // añadimos un atributo id

			.html('arrayValores[0]') // el valor de la celda    

			.css({
				background: 'red'
			}) // un estilo

			.addClass("text") // una clase

			);
			tabla.append($linea);



		});



		$('#cancela').tap(function () {
			window.location.reload();




		});
		//---------------guarda encuesta

		$('#guarda').tap(function () {
			var check = getCookie("indice");
			if (check != null && check != "") {

			} else {

				setCookie("indice", 0, 365);

			}


			var cont = getCookie("indice");



			var valnombre = $('#nombre').val();
			if (!valnombre) {
				navigator.notification.alert("Escribe tu nombre", null, "Nombre", "Aceptar");
				return false;
			}
			var valdireccion = $('#direccion').val();
			if (!valdireccion) {
				valdireccion = 0;
			}

			var valciudad = $('#ciudad').val();
			if (!valciudad) {
				valciudad = 0;
			}

			var valestado = $('#estado').val();
			if (!valestado) {
				navigator.notification.alert("Escribe tu ciudad", null, "Ciudad", "Aceptar");
				return false;
			}

			var valphone = $('#telefono').val();
			if (!valphone) {
				navigator.notification.alert("Escribe tu numero telefonico", null, "Teléfono", "Aceptar");
				return false;
			}


			var valemail = $('#email').val();
			if (!valemail) {
				navigator.notification.alert("Escribe una direccion de correo", null, "Teléfono", "Aceptar");
				return false;
			}
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valemail))) {
				navigator.notification.alert("Favor de escribir una direccion de correo valida", null, "Correo electronico", "Aceptar");
				return false;
			}

			var valcp = $('#cp').val();
			if (!valcp) {
				valcp = 0;
			}
			if (isNaN(valcp)) {
				navigator.notification.alert("El codigo postal solo esta compuesto de números", null, "Codigo Postal", "Aceptar");
				return false;
			}

			var valempresa = $('#empresa').val();
			if (!valempresa) {
				navigator.notification.alert("Escribe el nombre de tu empresa", null, "Empresa", "Aceptar");
				return false;
			}

			var valpuesto = $('#puesto').val();
			if (!valpuesto) {
				valpuesto = 0;
			}

			var valcat = 0;
			var check_cat = $("#checkbox1_0").is(":checked");
			if (check_cat) {
				valcat = 1;
			} else {
				valcat = 0;

			}
			var valpro = 0;
			var check_pro = $("#checkbox1_1").is(":checked");
			if (check_pro) {
				valpro = 1;
			} else {
				valpro = 0;

			}
			var valinv = 0;
			var check_inv = $("#checkbox1_2").is(":checked");
			if (check_inv) {
				valinv = 1;
			} else {
				valinv = 0;

			}


			var valvx = 0;
			var check_vx = $("#checkbox2_0").is(":checked");
			if (check_vx) {
				valvx = 1;
			} else {
				valvx = 0;

			}
			var valmgl = 0;
			var check_mgl = $("#checkbox2_1").is(":checked");
			if (check_mgl) {
				valmgl = 1;
			} else {
				valmgl = 0;

			}

			var valcel = 0;
			var check_cel = $("#checkbox2_2").is(":checked");
			if (check_cel) {
				valcel = 1;
			}

			if (!check_cel) {
				valcel = 0;

			}

			var valfel = 0;
			var check_fel = $("#checkbox2_3").is(":checked");
			if (check_fel) {
				valfel = 1;
			}

			if (!check_fel) {
				valfel = 0;

			}

			var valwen = 0;
			var check_wen = $("#checkbox2_4").is(":checked");
			if (check_wen) {
				valwen = 1;
			}

			if (!check_wen) {
				valwen = 0;

			}






			if (isConnected()) {



				(function () {
					guarda_cliente(valnombre, valdireccion, valciudad, valestado, valphone, valemail, valempresa, valpuesto, valcp, valcat, valpro, valinv, valvx, valmgl, valcel, valfel, valwen, cont);
					var cont2 = parseInt(cont) + 1;
					cont = cont2.toString();
					setCookie("indice", cont, 365);

					(function () {
						leeresarvas2();

					}());
				}());



			} else {
				guardatempcalif(valnombre, valdireccion, valciudad, valestado, valphone, valemail, valempresa, valpuesto, valcp, valcat, valpro, valinv, valvx, valmgl, valcel, valfel, valwen);
			}
			return false;

		});








	});
});