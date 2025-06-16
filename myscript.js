function changePage(id)
{

    if (id == "Home")
    {
        location.replace("index.html");
    }else if (id == "Current")
    {
        location.replace("current.html");
    }else if (id == "Experience")
    {
        location.replace("experience.html")
    }else if (id=="Projects") {
        location.replace("projects.html")
    } else if (id == "Resume") {
        location.replace("resume.pdf")
    } else if (id == "Transcript") {
        location.replace("transcript.pdf")
    } else {
        alert("Error: Invalid page ID. Please try again.");
    }
    
}