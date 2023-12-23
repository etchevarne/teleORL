document.addEventListener("DOMContentLoaded", function () {
    // Função para exibir o modal de consentimento
    function showModal() {
        var modal = document.getElementById('consentModal');
        modal.style.display = 'block';
    }
    
    // Função para fechar o modal quando o usuário aceita os termos
    function acceptTerms() {
        var modal = document.getElementById('consentModal');
        modal.style.display = 'none';
        // Aqui você também pode salvar a confirmação de consentimento do usuário, se necessário
    }
    
    // Event listener para o link dos termos de uso
    document.getElementById('termsLink').addEventListener('click', function() {
        // Aqui você pode abrir os Termos de Uso em uma nova aba ou exibir em um modal
    });
    
    // Event listener para o botão de aceitar
    document.getElementById('acceptBtn').addEventListener('click', acceptTerms);
    
    // Chamada inicial para mostrar o modal quando a página carrega
    window.onload = showModal;
    // Event listener para o link dos termos de uso
    document.getElementById('termsLink').addEventListener('click', function(event) {
        event.preventDefault();
        // Aqui você pode abrir uma nova página com os Termos de Uso
        window.open('terms.html', '_blank');
    });
    
    // Event listener para o link da política de privacidade
    document.getElementById('privacyPolicyLink').addEventListener('click', function(event) {
        event.preventDefault();
        // Aqui você pode abrir uma nova página com a Política de Privacidade
        window.open('privacy.html', '_blank');
    });
})