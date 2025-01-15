// obter o ano atual
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
     // Validação básica
     if (nome === "" || email === "" || mensagem === "" || telefone == "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    var url = "https://wa.me/" // Seu numero
      + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }

  function enviarWhatsApp() {
    // Captura os valores dos campos do formulário
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica
    if (mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria a mensagem que será enviada via WhatsApp
    const textoMensagem = `${mensagem}`;

    // Codifica a mensagem para ser usada na URL
    const textoCodificado = encodeURIComponent(textoMensagem);

    // Número de telefone do WhatsApp com o qual você deseja se comunicar
    const numeroTelefone = "999999999999";  // Substitua pelo seu número com código do país, ex: 55 para Brasil

    // Cria o link para enviar a mensagem
    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${textoCodificado}`;

    // Abre o link no WhatsApp
    window.open(linkWhatsApp, '_blank');
}
