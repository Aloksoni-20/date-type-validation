function user only select date not able to type manually
<script>
window.onload = function() {
    var dateInputs = document.querySelectorAll('.form-control[type="date"]');
    dateInputs.forEach(function(dateInput) {
        dateInput.addEventListener('keydown', function(event) {
            event.preventDefault();
        });
    });
    dateInputs.forEach(function(dateInput) {
        dateInput.addEventListener('touchstart', function(event) {
            event.preventDefault();
        });
    });
    dateInputs.forEach(function(dateInput) {
        dateInput.addEventListener('mousedown', function(event) {
            event.preventDefault();
        });
    });
};
</script>