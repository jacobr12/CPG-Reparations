document.addEventListener('DOMContentLoaded', function() {
    var events = document.querySelectorAll('.timeline-event');
    var modal = document.getElementById('popup-modal');
    var modalTitle = document.getElementById('modal-title');
    var modalContent = document.getElementById('modal-content');
    var closeButton = document.querySelector('.close-button');

    events.forEach(function(event) {
        event.addEventListener('click', function() {
            var title = event.getAttribute('data-title');
            var content = event.getAttribute('data-content');
            modalTitle.textContent = title;
            modalContent.textContent = content;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


