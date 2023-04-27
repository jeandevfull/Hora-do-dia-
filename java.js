function carregar(){
    const msg = window.document.getElementById('msg');
    const png = window.document.getElementById('image');
    const data = new Date();
    const hora = data.getHours();

    msg.innerHTML = `AGORA SÃO ${hora} HORAS.`;
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        png.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        png.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        //BOA NOITE!
        png.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}