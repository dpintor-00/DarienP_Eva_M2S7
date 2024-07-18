opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES
function caso1(opcionCuenta) {
    if (opcionCuenta == 1) {
        return "Haga click aquí para descargar su boleta";
    } else if (opcionCuenta == 2) {
        return "Usted está siendo transferido. Espere por favor...";
    } else {
        return "La opción ingresada no es válida. Gracias por preferirnos.";
    }
}

function caso2(opcionSenhal) {
    if (opcionSenhal == 1) {
        sol1 = prompt("A continuación escriba su solicitud");
        return "Estimado usuario/a, su solicitud: '" + sol1 + "' ha sido ingresada con éxito. Pronto será contactado/a por uno de nuestros ejecutivos. "
    } else if (opcionSenhal == 2) {
        sol2 = prompt("A continuación escriba su solicitud:");
        return "Estimado usuario/a, su solicitud: '" + sol2 + "' ha sido ingresada con éxito. Pronto será contactado/a por uno de nuestros ejecutivos. "
    } else {
        return "No es una opción válida, intente nuevamente. Gracias por preferirnos"
    }
}

function caso3(opcionOferta) {
        if (opcionOferta == "SI") {
            return "Pronto será contactado/a por uno de nuestros ejecutivos. "
        } else if (opcionOferta == "NO") {
            return "Hasta luego, gracias por preferir nuestros servicios."
        } else {
            return "No es una opción válida, intente nuevamente. Gracias por preferirnos"
    }
}

function caso4(otraOpcion){
    if (otraOpcion != ""){
        return "Estimado usuario/a, su solicitud: '" + otraOpcion + "' ha sido ingresada con éxito. Pronto será contactado/a por uno de nuestros ejecutivos. "
    } else if(otraOpcion == ""){
        return  "No es una opción válida, intente nuevamente. Gracias por preferirnos"
    }
}

//CASOS

switch (parseInt(opcion)) {
    case 1:
        bolp = prompt("Seleccione una opción \n1.- Ver boleta \n2.- Pagar Cuenta");
        alert(caso1(bolp));
        break;
    case 2:
        sell = prompt("Seleccione una opción \n1.- Problemas con la señal \n2.- Problemas con las llamadas");
        alert(caso2(sell));
        break;
    case 3:
        ofcom = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades! Para conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'")
        alert(caso3(ofcom));
        break;
    case 4:
        OtraSolicitud = prompt("A continuación escriba su consulta");
        alert(caso4(OtraSolicitud));
        break;
    default:
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.")
        break;
}