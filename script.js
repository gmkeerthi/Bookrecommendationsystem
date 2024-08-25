document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.sub-menu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });

    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.sub-menu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});

window.onscroll = function() {stickyHeader()};
var header = document.querySelector(".header");
var sticky = header.offsetTop;
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.querySelector('.nav-toggle-btn').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});


// Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Open Modal
    document.querySelectorAll('.card-btn').forEach(button => {
      button.addEventListener('click', function () {
        const modalId = this.getAttribute('href').replace('.html', '-modal');
        const modal = document.querySelector(modalId);
        if (modal) {
          modal.style.display = 'block';
        }
      });
    });
  
    // Close Modal
    document.querySelectorAll('.close').forEach(span => {
      span.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
      });
    });
  
    window.addEventListener('click', function (event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });
  });
  

