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

function hideAddressBar() {
  if(!window.location.hash) {
    if(document.height < window.outerHeight)
      document.body.style.height = (window.outerHeight + 50) + 'px';
    setTimeout( function(){ 
        window.scrollTo(0, 1); 
        document.body.style.height = 'auto'; 
      }, 50 );
  }
}