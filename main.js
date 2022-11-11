const montoDesc = document.querySelector('#monto');
const descuentoDesc = document.querySelector('#descuento');
const calcular = document.querySelector('#calcular');
const modificarCal = document.querySelector('#modificar');

calcular.addEventListener('click', calcularDes);

console.log(calcular)

function calcularDes (){
    let descuento = montoDesc.value * (descuentoDesc.value / 100);
    let final = montoDesc.value - descuento;
    modificarCal.innerHTML = final;
}

