const passwordField = document.getElementById('password');
        const togglePasswordButton = document.getElementById('togglePassword');
        const toggleIcon = togglePasswordButton.querySelector('i');
    togglePasswordButton.addEventListener('click', function () {
            // Toggle the type attribute
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Toggle the icon
            toggleIcon.classList.toggle('fa-eye');
            toggleIcon.classList.toggle('fa-eye-slash');
        });
            