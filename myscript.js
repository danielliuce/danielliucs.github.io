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
    }else{
        location.replace("projects.html")
    }
    
}