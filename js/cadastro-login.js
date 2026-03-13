const olhoFechado = document.getElementById("olho-fechado");
const olhoAberto = document.getElementById("olho-aberto");
const campoSenha = document.getElementById("senha")


olhoFechado.addEventListener('click', function () {
    // if(campoSenha.type === 'password'){
    //     campoSenha.type = 'text';
    //     this.classList.remove('fa-eye-slash');
    //     this.classList.add('fa-eye');
    // }else{
    //     campoSenha.type = 'password';
    //     this.classList.remove('fa-eye');
    //     this.classList.add('fa-eye-slash');
    // }
    campoSenha.type = 'text';
    olhoFechado.style.display = 'none';
    olhoAberto.style.display = 'block';
});

olhoAberto.addEventListener('click', function(){
    campoSenha.type = 'password';
    olhoAberto.style.display = 'none';
    olhoFechado.style.display= 'block';
})
