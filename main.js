const montoDesc = document.querySelector('#monto');
const descuentoDesc = document.querySelector('#descuento');
const calcular = document.querySelector('#calcular');
const modificarCal = document.querySelector('#modificar');
const modificarCal2 = document.querySelector('#modificar2');

calcular.addEventListener('click', calcularDes);

console.log(calcular)

function calcularDes (){
    if(descuentoDesc.value < 100){
        let descuento = montoDesc.value * (descuentoDesc.value / 100);
        let final = montoDesc.value - descuento;
        modificarCal.innerHTML = final;
        modificarCal2.innerHTML = descuento;
    }else{
        modificarCal.innerHTML = "Ingresar descuento entre 1% y 100%"
    }
    
}

