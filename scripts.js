document.querySelectorAll('.course-header').forEach(header => {
  header.addEventListener('click', function() {
    const body = this.nextElementSibling;
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
    this.classList.toggle('active');
  });
});
