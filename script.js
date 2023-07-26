function myFunction(id) {
      var x = document.getElementById(id);
      if (x.className.indexOf("store-show") == -1) {
        x.className += " store-show";
      } else { 
        x.className = x.className.replace(" store-show", "");
      }
    }
