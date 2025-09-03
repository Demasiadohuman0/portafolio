// Espera a que la ventana y todos sus recursos (scripts, imágenes, etc.) se hayan cargado.
window.addEventListener('load', () => {
    
    const loaderContainer = document.querySelector('.loader-container');
    const mainContent = document.querySelector('#root');
    
    // Esperamos un momento para que la animación se vea bien (opcional, pero recomendado)
    setTimeout(() => {
        // 1. Oculta el loader
        loaderContainer.classList.add('loader-hidden');
        
        // 2. Muestra el contenido principal
        mainContent.classList.add('visible');
        
        // Opcional: Elimina el loader del DOM después de que la transición haya terminado
        // para que no interfiera con nada.
        loaderContainer.addEventListener('transitionend', () => {
            if (loaderContainer.parentNode) {
                loaderContainer.parentNode.removeChild(loaderContainer);
            }
        });

    }, 500); // Puedes ajustar este tiempo (en milisegundos)

});
