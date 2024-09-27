
  document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(navItem => {
      // Click event to toggle the dropdown menu
      navItem.addEventListener('click', function(event) {
        // Only handle clicks on screens less than or equal to 1024px wide
        if (window.innerWidth <= 1024) {
          event.preventDefault(); // Prevent default action of the link
          
          const dropdownMenu = this.querySelector('.dropdown-menu');
          
          // Toggle the dropdown menu
          if (dropdownMenu.style.display === 'flex') {
            dropdownMenu.style.display = 'none';
            this.classList.remove('active');
          } else {
            // Hide all other dropdown menus
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
              menu.style.display = 'none';
            });
            document.querySelectorAll('.nav-item').forEach(item => {
              item.classList.remove('active');
            });

            dropdownMenu.style.display = 'flex';
            this.classList.add('active');
          }
        }
      });
    });

    // Close dropdown if clicking outside
    document.addEventListener('click', function(event) {
      // Only handle clicks on screens less than or equal to 1024px wide
      if (window.innerWidth <= 1024) {
        if (!event.target.closest('.nav-item')) {
          document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
          });
          document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
          });
        }
      }
    });
  });

