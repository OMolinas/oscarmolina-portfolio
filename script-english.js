document.addEventListener('DOMContentLoaded', function() {
    // Hacer todos los componentes variables
    const visualizarBtn = document.getElementById('downloadCVBtn');
    const modalElement = document.getElementById('cvModal');
    const descargarBtn = document.getElementById('descargarCvBtn');
    const abrirNuevaBtn = document.getElementById('abrirNuevaPestanaBtn');
    const pdfPath = './imagenes/OscarAndresMolinaSilva_TCS';
    
    // Crear el modal
    let cvModal;
    if (modalElement) {
        cvModal = new bootstrap.Modal(modalElement);
    }
    
    // Visualizar CV
    if (visualizarBtn) {
        visualizarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (cvModal) cvModal.show();
        });
    }
    
    // Descarga del PDF
    if (descargarBtn) {
        descargarBtn.addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'OscarMolina_CV.pdf'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    
    // Abrir en nueva pestaña
    if (abrirNuevaBtn) {
        abrirNuevaBtn.addEventListener('click', function() {
            window.open(pdfPath, '_blank');
        });
    }
});