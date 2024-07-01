document.addEventListener('DOMContentLoaded', function() {
    // Function to update current time in UTC and day of the week
    function updateTimeAndDay() {
        const now = new Date();
        const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };

        // Update time in UTC
        const timeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
        timeUTCElement.textContent = now.toLocaleString('en-US', options) + ' UTC';

        // Update current day
        const dayElement = document.querySelector('[data-testid="currentDay"]');
        dayElement.textContent = now.toLocaleString('en-US', { weekday: 'long' });
    }

    // Initial call to update time and day
    updateTimeAndDay();

    // Update time and day every second
    setInterval(updateTimeAndDay, 1000);
});
