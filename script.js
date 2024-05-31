document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('popup-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalImagesContainer = document.getElementById('modal-images');
    const modalSourcesContainer = document.getElementById('modal-sources');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.timeline-event').forEach(event => {
        event.addEventListener('click', () => {
            const title = event.getAttribute('data-title');
            const content = event.getAttribute('data-content');
            const images = JSON.parse(event.getAttribute('data-images'));
            const sources = JSON.parse(event.getAttribute('data-sources'));

            modalTitle.textContent = title;
            modalContent.textContent = content;

            // Clear previous images and sources
            modalImagesContainer.innerHTML = '';
            modalSourcesContainer.innerHTML = '';

            // Add images to the modal
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image;
                imgElement.classList.add('modal-image');
                modalImagesContainer.appendChild(imgElement);
            });

            // Add sources to the modal
            sources.forEach(source => {
                const sourceElement = document.createElement('a');
                sourceElement.href = source;
                sourceElement.textContent = 'Source';
                sourceElement.target = '_blank';
                sourceElement.classList.add('modal-source');
                modalSourcesContainer.appendChild(sourceElement);
            });

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
