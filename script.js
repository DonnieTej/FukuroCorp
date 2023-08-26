document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.addEventListener('mouseover', function() {
            const overlay = column.querySelector('.overlay');
            overlay.style.backgroundColor = 'rgba(35, 31, 32, 0)';
        });
        column.addEventListener('mouseout', function() {
            const overlay = column.querySelector('.overlay');
            overlay.style.backgroundColor = 'rgba(35, 31, 32, 0.7)';
        });
    });
});
