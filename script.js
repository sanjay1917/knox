document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});