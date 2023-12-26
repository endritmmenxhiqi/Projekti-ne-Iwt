document.addEventListener('DOMContentLoaded', function () {
    const dropdownTrigger = document.querySelector('.EM-dropdown');
    const dropdownContent = dropdownTrigger.querySelector('.EM-dropdown-content');
  
    dropdownTrigger.addEventListener('click', function (event) {
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  
    document.addEventListener('click', function (event) {
      if (!dropdownTrigger.contains(event.target)) {
        dropdownContent.style.display = 'none';
      }
    });
  });
  
  // Fshini këtë pjesë nga JavaScript-i nëse doni që dropdown-i të mbetet i mbyllur në fillim
  window.addEventListener('load', function () {
    const dropdownContent = document.querySelector('.EM-dropdown-content');
    dropdownContent.style.display = 'none';
  });
  