// DESAFIO COMPLEMENTARIO ARRAYS

// class Preventa {
//     constructor(nombre, fecha, ciudad) {
//         this.nombre = nombre;
//         this.fecha = fecha;
//         this.ciudad = ciudad;
//     }
// }
// const preventas = [(new Preventa("FATBOY", "4/11/22" , "CORDOBA")),
// (new Preventa("MISSMONIQUE", "15/7/22" , "CARLOS PAZ")),
// (new Preventa("SASHA", "5/8/22" , "CORDOBA")),
// (new Preventa("BLACKCOFFEE", "11/12/22" , "CABA")),];
// console.log(preventas);

// function buscarPrev(info, dj){
//     return info.find(objeto => objeto.nombre === dj.toUpperCase());
// }
// for (let index = 0; index < 3; index++) {
//     let busqueda = buscarPrev(preventas, prompt(`Bienvenido! Ingrese la preventa para mas info:
//     -FATBOY
//     -MISSMONIQUE
//     -SASHA
//     Por favor ingrese el nombre como figura en las opciones anteriores`));
//     if(busqueda != undefined){
//         alert('PREVENTA '+ busqueda.nombre+' FECHA '+busqueda.fecha+' CIUDAD DE '+busqueda.ciudad);
//     }else{
//         alert('NO EXISTE ESTA PREVENTA, VUELVA A INTENTARLO');
//     }
// }

// DESAFIO ENTREGRABLE 1 CORREGIDO
class Ticket {
    constructor (nombre,fecha,lugar,general,vip, id){
        this.nombre = nombre;
        this.fecha = fecha;
        this.lugar = lugar;
        this.general = general;
        this.vip = vip;
        this.id = id;
    }
}

// Objetos
const claptoneTicket = new Ticket ("Claptone", "5/11/22","GEBA",7000,15000,"0");
const cattaneoTicket = new Ticket ("Cattaneo", "6/12/22","FORJA",8000,16000,"1");
const solomunTicket = new Ticket ("Solomun", "8/12/22","LAESTACION",6000,12000,"2");
const taleofusTicket = new Ticket ("Tale Of Us", "29/12/22","LAFABRICA",5000,10000,"3");

// Array de objetos
const entradas = [claptoneTicket,cattaneoTicket,solomunTicket,taleofusTicket];

let gastoTotal = 0;
function comprar() {
    let continuar = true;
    alert("Bienvenido a E-Ticket, ¿Cuál va a ser tu proxima fiesta?");

    while (continuar) {
        let producto = prompt(`Tickets a la venta:
        ${claptoneTicket.id}- ${claptoneTicket.nombre} ${claptoneTicket.lugar} ${claptoneTicket.fecha}
        ${cattaneoTicket.id}- ${cattaneoTicket.nombre} ${cattaneoTicket.lugar} ${cattaneoTicket.fecha}
        ${solomunTicket.id}- ${solomunTicket.nombre} ${solomunTicket.lugar} ${solomunTicket.fecha}
        ${taleofusTicket.id}- ${taleofusTicket.nombre} ${taleofusTicket.lugar} ${taleofusTicket.fecha}
        4- Finalizar compra
        Ingrese el numero de la izquierda para comprar
        Vas sumando: $${gastoTotal}
        `);
        
        if (producto == 4){
            continuar = false
        } else if ((producto == 0) || (producto == 1) || (producto == 2) || (producto ==3)) {
            let entrada = (entradas[producto])
            let cual = prompt (`Elija el tipo de Ticket:
                                1.Campo General - $${entrada.general}
                                2.VIP Standing - $${entrada.vip}
                                3.Salir
                                Ingrese el numero de la izquierda para comprar`);
            while (cual!= 'ESC'){
                if (cual == 1){
                    gastoTotal += (entrada.general)
                    cual = 'ESC'
                } else if (cual == 2){
                    gastoTotal += (entrada.vip)
                    cual = 'ESC'
                } else if (cual == 3){
                    cual = 'ESC'
                } else {
                    cual = prompt (`Has colocado un dato erroneo!
                                Elija el tipo de Ticket:
                                1.Campo General - $${entrada.general}
                                2.VIP Standing - $${entrada.vip}
                                3.Salir
                                Ingrese el numero de la izquierda para comprar`);
                }
            }
        } else {
            alert(`El dato ingresado es erroneo!`)
            continuar = confirm("¿Desea continuar con la compra?")
        }
    }
    alert(`-Monto de su compra = $${gastoTotal}`)
}

comprar();

