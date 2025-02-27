document.addEventListener("DOMContentLoaded", fetchUserData);

async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");

    try {
        // Fetch user data
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = "";

        // Create user list
        const userList = document.createElement("ul");
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append user list to container
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.textContent = "Failed to load user data.";
        console.error("Error fetching user data:", error);
    }
}
