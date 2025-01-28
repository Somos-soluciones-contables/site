document.querySelectorAll('.plate-number').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la redirección inmediata
        const plateNumber = this.textContent.replace(/-/g, '').trim(); 
        navigator.clipboard.writeText(plateNumber).then(function() {
        // Después de copiar, redirige
        window.open(event.target.href, '_blank');
        })
    });
});