//creo los arrys contacto con sus propiedades
let contacto1=["Maxwell Wrigth", "(0191)7196495","Curabitur.egestas.nunc@nonummyac.co.uk"];
let contacto2=[ "Raja Villareal","0866 398 2895", "posure.vulputate@sed.com"]
let contacto3=["Helen Richards","0800 1111","libero@convallis.edu"];
let contacto4=["Maisie Haley","0913 531 3030","risus.Quisque@urna.ca"];
let listaContacto=[contacto1,contacto2,contacto3,contacto4];


do{
    let texto="1- Mostrar 1º contacto\n2- Mostrar ultimo contacto\n3- Mostrar todos los contactos\n4- Añadir nuevo contacto\n5- Salir del programa";
    salir=true;


    do{
        switch(Number(prompt(texto))){

            case 1:
                mostrarPantallaContactoElegido(0);
                boleError=false;
                break;
            case 2:
                mostrarPantallaContactoElegido(listaContacto.length-1);
                boleError=false;
                break;
            case 3:
                mostrarPantallaTodosContacto();
                boleError=false;
                break;
            case 4:
                nuevoContacto=[String(prompt("Nombre y apellido")),String(prompt("Numero telefono")),String(prompt("Correo electronico"))];
                listaContacto.push(nuevoContacto);
                mostrarPantallaContactoElegido(listaContacto.length-1);
                boleError=false;
                break;
            case 5:
                salir=false;
                boleError=false;
                break;
            default:
                boleError=true;
                break;


        }


    }while(boleError)
}while(salir)



//bucle para enseñar el contacto elegido contactos
function mostrarPantallaContactoElegido(i){
    document.write("<h2>Contacto "+(i+1)+"</h2>")
    document.write("<p>")
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

function mostrarPantallaTodosContacto(){
    for(let i=0;i<listaContacto.length;i++){
    document.write("<h2>Contacto "+(i+1)+"</h2>")
    
    let mostrar="";
    for(let j=0;j<listaContacto[i].length;j++){
        if(j<listaContacto[i].length-1)
            mostrar=mostrar+listaContacto[i][j]+" / ";
        else
            mostrar=mostrar+listaContacto[i][j];
        }
    
   
    console.log(mostrar);
    alert(mostrar);
    document.write("<p>"+mostrar+"</p>");
    }//for(j)//para no escribir '/' en el ultimo elemento
}//for (i)