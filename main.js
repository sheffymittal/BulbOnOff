function changeimage()
{
    var a = document.getElementById("bulb");
    if(a.src.match("Off"))
    {
        a.src="On1.jpg";
    }
    else{
        a.src="Off.jpg";
    }
}