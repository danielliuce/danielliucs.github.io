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
    }else if(id=="Projects"){
        location.replace("projects.html")
    }else{
        location.replace("resume.pdf")
    }
    
}