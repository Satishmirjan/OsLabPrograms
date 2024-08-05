document.addEventListener('DOMContentLoaded', function () {
  
  var programTitles = document.querySelectorAll('.pt');
  programTitles.forEach(function (title) {
     title.addEventListener('click', function () {
         var code = this.nextElementSibling;
        if (code.style.display === 'none' || code.style.display === '') {
              code.style.display = 'block';
          } else {
              code.style.display = 'none';
          }
      });
  });
});



