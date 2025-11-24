document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector(".signup-form");
    const bloodGroupSection = document.querySelector(".blood-group-section");
    
    function toggleBloodGroupSection() {
        const selectedRole = document.querySelector('input[name="role"]:checked');
        if (selectedRole && selectedRole.value === "donor") {
            bloodGroupSection.style.display = "block";
        } else {
            bloodGroupSection.style.display = "none";
        }
    }
    
    document.querySelectorAll('input[name="role"]').forEach(input => {
        input.addEventListener("change", toggleBloodGroupSection);
    });
    
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const formData = {
            role: document.querySelector('input[name="role"]:checked').value,
            fullName: document.querySelector('input[type="text"]').value,
            birthday: document.querySelector(".date-input").value,
            email: document.querySelector('input[type="email"]').value,
            bloodGroup: document.querySelector('input[name="bloodgroup"]:checked')?.value || null,
            gender: document.querySelector('input[name="gender"]:checked').value,
            password: document.querySelector('input[type="password"]').value
        };
        
        localStorage.setItem("currentUser", JSON.stringify(formData));
        localStorage.setItem("isLoggedIn", "true");
        
        redirectToDashboard(formData.role);
    });
    
    function redirectToDashboard(role) {
        switch(role) {
            case "donor":
                window.location.href = "donor-dashboard.html";
                break;
            case "doctor":
                window.location.href = "doctor-dashboard.html";
                break;
            case "bloodbank":
                window.location.href = "bloodbank-dashboard.html";
                break;
            default:
                alert("Rôle non reconnu");
        }
    }
    
    toggleBloodGroupSection();
});
