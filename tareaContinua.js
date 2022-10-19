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
        let opcion=Number(prompt(texto));
        

            if(opcion==1){ 
                document.write("<h2>Primer contacto</h2>")
                mostrarPantallaContactoElegido(0);
                boleError=false;
                
            }
            else if(opcion==2){
                document.write("<h2>Ultimo contacto</h2>")
                mostrarPantallaContactoElegido(listaContacto.length-1);
                boleError=false;
            }
            else if(opcion==3){
                document.write("<h2>Todos los contactos</h2>")
                mostrarPantallaTodosContacto();
                boleError=false;
            }
            else if(opcion==4){
                addNewContact();
                document.write("<h2>Contacto añadido</h2>")
                mostrarPantallaContactoElegido(listaContacto.length-1);
                boleError=false;
            }
            else if(opcion==5){

                document.write("<h2>Programa finalizado</h2>")
                salir=false;
                boleError=false;
            }
            else{
                boleError=true;
            }
    }while(boleError)
}while(salir)



//bucle para enseñar el contacto elegido contactos
function mostrarPantallaContactoElegido(i){
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
}// mostrarPantallaContactoElegido(i)

function showAllContacs(){
    for(let i=0;i<listaContacto.length;i++){
    document.write("<h2>Contacto "+(i+1)+"</h2>")
    
    let mostrar="";
    for(let j=0;j<listaContacto[i].length;j++){
        if(j<listaContacto[i].length-1)
            mostrar=mostrar+listaContacto[i][j]+" / ";
        else
            mostrar=mostrar+listaContacto[i][j];
        }//for(j)//para no escribir '/' en el ultimo elemento
    
   
    console.log(mostrar);
    alert(mostrar);
    document.write("<p>"+mostrar+"</p>");
    }//for (i)
}//showAllContacs()

function addNewContact(){

    while(true){
        let nombre=(String(prompt("Nombre y apellido")));
        let numero=(String(prompt("Numero telefono (9 digitos)")));
        let correo=(String(prompt("Correo electronico")));
        if(nombre.length<2||numero.length<=9||correo.length<5){
            alert("Uno de los campos es erroneo");
        }else break;
    }


    nuevoContacto=[nombre,numero,correo];
    listaContacto.push(nuevoContacto);
    
}