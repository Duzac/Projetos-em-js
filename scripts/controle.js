function trocarImagem(tipo) {
    let url = '';
    if (tipo === 'carro') {
        url = 'https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/argo.webp'; 
    } else if (tipo === 'moto') {
        url = 'https://s2-autoesporte.glbimg.com/8GG1tbBONrZQTCkyjSpoS0fEliw=/0x0:2323x1920/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/W/F/Trowb7RzO0jgiNtZyA5g/bmw-naked-850-1.jpg';  
    } else if (tipo === 'aviao') {
        url = 'https://ceabbrasil.com.br/blog/wp-content/uploads/2024/01/Design-sem-nome.jpg'; 
    }
    document.getElementById('imagem').src = url;
}