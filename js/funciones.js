//Respuesta automática.
document.getElementById('btnEnviar').onclick = function(){
        document.getElementById('respuesta').style.display = 'inline';
}

//Compartir el enlace.
document.getElementById('btnShare').onclick = function(){
    navigator.clipboard.writeText(window.location.href);
    document.getElementById('spanShare').style.display = 'inline';
    setTimeout(1000, function(){
        document.getElementById('spanShare').style.display = 'none';
    });
    
}

