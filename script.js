// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("place-form");
    const placesList = document.getElementById("places-list");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const location = document.getElementById("location").value;
        const landmarks = document.getElementById("landmarks").value;
        const timeOfYear = document.getElementById("timeOfYear").value;
        const notes = document.getElementById("notes").value;

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.classList.add("place-item");
        listItem.innerHTML = `
            <h3>${location}</h3>
            <p><strong>Landmarks:</strong> ${landmarks}</p>
            <p><strong>Time of Year:</strong> ${timeOfYear}</p>
            <p><strong>Notes:</strong> ${notes}</p>
        `;

        // Append the new item to the list
        placesList.appendChild(listItem);

        // Clear the form
        form.reset();
    });
});
