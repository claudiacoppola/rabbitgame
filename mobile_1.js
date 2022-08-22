	function mobilePhone()
{
  var x = document.getElementById("myLinks");
  if(x.style.display === "block")
  {
    x.style.display = "none";
  }
  else
  {
    x.style.display = "block";
  }
}

window.addEventListener("load",function() {
    setTimeout(function(){
        window.scrollTo(0, 1);
    }, 0);
});