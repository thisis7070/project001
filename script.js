const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get role
        const role = document.getElementById("role").value;

        // Get user ID / name
        const userId = document.getElementById("userId").value;

        // Get password
        const password = document.getElementById("password").value;

        // Check all fields
        if (role === "" || userId === "" || password === "") {

            alert("Please fill all fields!");

            return;
        }

        // Save user information
        localStorage.setItem("userId", userId);
        localStorage.setItem("role", role);

        // Redirect according to role
        if (role === "student") {

            window.location.href = "student-dashboard.html";

        } else if (role === "admin") {

            window.location.href = "admin-dashboard.html";
        }
    });
}


function startAnalysis() {

    alert("Skill Analysis will start here!");
}


function viewSkills() {

    alert("Your skills will appear here!");
}


function logout() {

    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    window.location.href = "index.html";
}

function showWelcomeMessage() {

    const userId = localStorage.getItem("userId");

    const welcomeMessage =
        document.getElementById("welcomeMessage");

    if (welcomeMessage && userId) {

        welcomeMessage.textContent =
            "Welcome, " + userId + " 👋";
    }
}

showWelcomeMessage();


function showAdminWelcome() {

    const userId = localStorage.getItem("userId");

    const adminWelcome =
        document.getElementById("adminWelcome");

    if (adminWelcome && userId) {

        adminWelcome.textContent =
            "Welcome, " + userId + " 👋";
    }
}


showAdminWelcome();


function manageRoles() {

    const roleName = prompt("Enter Job Role:");

    if (roleName === null || roleName.trim() === "") {

        alert("Job role is required!");

        return;
    }

    alert("Job Role Added: " + roleName);
}


function manageSkills() {

    alert("Skill Management will be added here!");
}


function manageResources() {

    alert("Learning Resources Management will be added here!");
}

