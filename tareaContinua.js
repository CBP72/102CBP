//creo los arrys contacto con sus propiedades
let contacto1=["Maxwell Wrigth", "(0191)7196495","Curabitur.egestas.nunc@nonummyac.co.uk"];
let contacto2=[ "Raja Villareal","0866 398 2895", "posure.vulputate@sed.com"]
let contacto3=["Helen Richards","0800 1111","libero@convallis.edu"];
let contacto4=["Maisie Haley","0913 531 3030","risus.Quisque@urna.ca"];
let listaContacto=[contacto1,contacto2,contacto3,contacto4];



let texto="1- Mostrar 1º contacto\n2- Mostrar ultimo contacto\n3- Añadir nuevo contacto";


do{
    switch(Number(prompt(texto))){

        case 1:
            mostrarPantallaContactoElegido(0);
            boleEror=false;
            break;
        case 2:
            mostrarPantallaContactoElegido(listaContacto.length-1);
            boleEror=false;
            break;
        case 3:
            nuevoContacto=[String(prompt("Nombre y apellido")),String(prompt("Numero telefono")),String(prompt("Correo electronico"))];
            listaContacto.push(nuevoContacto);
            boleEror=false;
            break;
        default:
            boleEror=true;
            break;


    }


}while(boleEror)



//bucle para enseñar el contacto elegido contactos
function mostrarPantallaContactoElegido(i){
    document.write("<h2 style=\"color:white\">Contacto "+(i+1)+"</h2>")
    document.write("<p style=\"color:white\">")
    let mostrar="";
    for(let j=0;j<listaContacto[i].length;j++){
        if(j<listaContacto[i].length-1)
            mostrar=mostrar+listaContacto[i][j]+" / ";
        else
            mostrar=mostrar+listaContacto[i][j];
        }//for(j)//para no escribir '/' en el ultimo elemento
    document.write(mostrar);
    console.log(mostrar);
    alert(mostrar);
    document.write("</p>");
}

