const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value;

        const adminId =
            document.getElementById("adminId").value;

        const password =
            document.getElementById("password").value;

        if (studentName === "" || adminId === "" || password === "") {

            alert("Please fill all fields!");

            return;
        }

        localStorage.setItem("studentName", studentName);

        window.location.href = "dashboard.html";
    });
}


function startAnalysis() {

    alert("Skill Analysis will start here!");
}


function viewSkills() {

    alert("Your skills will appear here!");
}


function logout() {

    localStorage.removeItem("studentName");

    window.location.href = "index.html";
}