// Initialize an empty array to store profiles
let profiles = [];

// Function to add a profile to the array and update the UI
function addProfile(name, age, email, active) {
    profiles.push({ name, age, email, active });

    // Clear the input fields after adding the profile
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('active').checked = false;

    // Update the UI to display the added profile
    displayProfiles();
}

// Function to display profiles in the UI
function displayProfiles() {
    const profileList = document.getElementById('profile-list');
    profileList.innerHTML = '';

    profiles.forEach((profile, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
            <strong>Name:</strong> ${profile.name} <br>
            <strong>Age:</strong> ${profile.age} <br>
            <strong>Email:</strong> ${profile.email} <br>
            <strong>Active:</strong> ${profile.active ? 'Yes' : 'No'} <br>
        `;
        profileList.appendChild(li);
    });
}

// Event listener for form submission
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const active = document.getElementById('active').checked;

    // Check if all fields are filled
    if (name && age && email) {
        // Add profile to the array and update UI
        addProfile(name, age, email, active);
    } else {
        alert('Please fill out all fields.');
    }
});
