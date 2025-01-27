document.querySelectorAll('.matricula').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la redirección inmediata
        const matricula = this.textContent.replace(/-/g, '').trim(); 
        navigator.clipboard.writeText(matricula).then(function() {
        // Después de copiar, redirige
        window.open(event.target.href, '_blank');
        })
    });
});
