
const frasePlano50 = "vi o anuncio no site e gostaria de saber mais informações sobre o plano 50 Megas.";
const frasePlano100 = "vi o anuncio no site e gostaria de saber mais informações sobre o plano 100 Megas.";
const frasePlano200 = "vi o anuncio no site e gostaria de saber mais informações sobre o plano 200 Megas.";
const fraseBotaoZap =" Vi o anúncio no site e gostaria de saber mais sobre os planos e a promoção do mês grátis.";




function redirecionarParaWhatsApp(numero, mensagem) {
    // Formata o número de telefone para o link do WhatsApp
    const numeroFormatado = numero.replace(/\D/g, '');

    // Cria o link do WhatsApp com a mensagem personalizada
    const link = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(mensagem)}`;

    // Abre o link em uma nova aba
    window.open(link, '_blank');
}

function redirecionarParaInstagram(perfil) {
    const linkInstagram = `https://www.instagram.com/${perfil}/`;
    window.open(linkInstagram, '_blank');
}