// The following code shows navbar with a hamburger for responsiveness
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

//The following function is used for ensuring whether the user wrote numeric values only as a phone number
function validate(){  
    const num=document.myform.num.value;  
    if (isNaN(num)) {  
      document.getElementById("phone").innerHTML="Enter Numeric value only";  
      return false;  
    } 
    else {  
      return true;  
    }  
}
