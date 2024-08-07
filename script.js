document.addEventListener('DOMContentLoaded', function () {
    var programTitles = document.querySelectorAll('.pt');
    var copyButtons = document.querySelectorAll('.copy-button');
    var toggleButton = document.getElementById('toggle-theme');
    var isDarkMode = false;

   
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

    
    copyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var codeBlock = this.previousElementSibling;
            var codeText = codeBlock.textContent;

            navigator.clipboard.writeText(codeText).then(function () {
                button.textContent = 'Copied!';
                setTimeout(function () {
                    button.textContent = 'Copy';
                }, 2000);
            }).catch(function (err) {
                console.error('Failed to copy text: ', err);
            });
        });
    });

    
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Switch to Light Mode';
        } else {
            toggleButton.textContent = 'Switch to Dark Mode';
        }
    });
});
