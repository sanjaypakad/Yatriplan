// Search function (for demonstration, can be expanded)
function searchDestinations() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    console.log(`Searching for: ${searchValue}`);
}

// Trip planner logic
document.getElementById('planner-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const activities = Array.from(document.getElementById('activities').selectedOptions).map(option => option.value);
    const tripDate = document.getElementById('date').value;

    console.log(`Trip to ${destination} on ${tripDate}, with activities: ${activities.join(', ')}`);
});
