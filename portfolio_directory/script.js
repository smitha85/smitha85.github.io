document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var content = document.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});
