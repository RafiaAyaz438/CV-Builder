// Show CV Builder

function showBuilder() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("builder").classList.remove("hidden");
}


// Generate CV

function generateCV() {

    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let about = document.getElementById("about").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;
    let experience = document.getElementById("experience").value;


    // Personal Information

    document.getElementById("cvName").innerText =
        name || "Your Name";

    document.getElementById("cvJob").innerText =
        job || "Your Job Title";

    document.getElementById("cvContact").innerText =
        email + " | " + phone + " | " + address;


    // Other Sections

    document.getElementById("cvAbout").innerText =
        about || "Your introduction will appear here.";

    document.getElementById("cvEducation").innerText =
        education || "Your education will appear here.";

    document.getElementById("cvSkills").innerText =
        skills || "Your skills will appear here.";

    document.getElementById("cvProjects").innerText =
        projects || "Your projects will appear here.";

    document.getElementById("cvExperience").innerText =
        experience || "Your experience will appear here.";
}


// Reset CV

function resetCV() {

    document.getElementById("name").value = "";
    document.getElementById("job").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";

    document.getElementById("about").value = "";
    document.getElementById("education").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("projects").value = "";
    document.getElementById("experience").value = "";

    generateCV();
}