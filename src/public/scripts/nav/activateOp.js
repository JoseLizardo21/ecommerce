export const pintarOp = ()=>{
    const url = window.location.pathname;
    console.log(url)
    if (url == "/") {
        const btnInicio = document.getElementById("btnInicio");
        btnInicio.style.color = "#42B8F3";
    }else if(url.indexOf("/reservarCitas") == 0){
        const btnReservarCitas = document.querySelector("#btnReservarCitas");
        btnReservarCitas.style.color = "#42B8F3";
    }else if(url.indexOf("/servicios") == 0){
        const btnServicios = document.querySelector("#btnServicios");
        btnServicios.style.color = "#42B8F3";
    }else if(url.indexOf("/packs") == 0){
        const btnPacks = document.querySelector("#btnPacks");
        btnPacks.style.color = "#42B8F3";
    }else if(url.indexOf("/contactanos") == 0){
        const btnContactanos = document.querySelector("#btnContactanos");
        btnContactanos.style.color = "#42B8F3";
    }else if(url.indexOf("/libroReclamaciones") == 0){
        const btnReclamaciones = document.querySelector("#btnReclamaciones");
        btnReclamaciones.style.color = "#42B8F3";
    }else if(url.indexOf("/signUp") == 0){
        const btnRegistro = document.querySelector("#btnRegistro");
        btnRegistro.style.color = "#42B8F3";
    }
}