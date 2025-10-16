 function updateTime() {
            const timeElement = document.querySelector('[data-testid="test-user-time"]');
            if (timeElement) {
                timeElement.textContent = Date.now();
            }
        }

        // Initialize time display
        updateTime();

        // Update time every second
        setInterval(updateTime, 1000);

        // Optional: Handle avatar image upload
        // This could be extended to include a file input for image upload
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Profile Card loaded successfully');
            console.log('Current timestamp:', Date.now());
        });