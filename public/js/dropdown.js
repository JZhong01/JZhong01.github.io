document.addEventListener("DOMContentLoaded", function() {
    // Find all sidebar toggles and dropdowns
    const sidebarToggles = document.querySelectorAll('.sidebar-toggle');
    sidebarToggles.forEach(toggle => {
        const dropdown = toggle.nextElementSibling;

        if (dropdown && dropdown.classList.contains('sidebar-dropdown')) {
            // Add event listener for the toggle
            toggle.addEventListener('click', function(event) {
                event.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
});