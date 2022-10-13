//creo los arrys contacto con sus propiedades
let contacto1=["Maxwell Wrigth", "(0191)7196495","Curabitur.egestas.nunc@nonummyac.co.uk"];
let contacto2=[ "Raja Villareal","0866 398 2895", "posure.vulputate@sed.com"]
let contacto3=["Helen Richards","0800 1111","libero@convallis.edu"];
//creo la lista contactos y le añado 3 contactos
let listaContacto=[contacto1,contacto2,contacto3];

//nos pide crear el 4 contacto
let contacto4=["Maisie Haley","0913 531 3030","risus.Quisque@urna.ca"];
//metemos el 4 contacto el la lista de contactos
listaContacto.push(contacto4);


contacto5=[String(prompt("Nombre y apellido")),String(prompt("Numero telefono")),String(prompt("Correo electronico"))];
listaContacto.push(contacto5);
//bucle para enseñar los contactos
for(let i=0;i<listaContacto.length;i++){
    //if para enseñar el primero y el ultimo
    if(i==0||i==listaContacto.length-1){
        document.write("<p style=\"color:white\">")
        let mostrar="";
        for(let j=0;j<listaContacto[i].length;j++){
            if(j<listaContacto[i].length-1)
                mostrar=mostrar+listaContacto[i][j]+" / ";
            else
                mostrar=mostrar+listaContacto[i][j];
            }//for(j)
        document.write(mostrar);
        console.log(mostrar);
        alert(mostrar);
        document.write("</p>")
    }//if

}//for (i)

