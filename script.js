document.addEventListener("DOMContentLoaded", function () {
  // Injecting Header and Footer dynamically
  function injectHeader() {
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("header-injection").innerHTML = data;
      });
  }

  function injectFooter() {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer-injection").innerHTML = data;
      });
  }

  injectHeader();
  injectFooter();

  //--------------------------------------------------------------------------------

  //Carousel JS code

  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  function updateSlider(val) {
    const newPosition = -currentIndex * val + "%";
    //console.log(newPosition)

    slider.style.transform = "translateX(" + newPosition + ")";
  }

  function nextSlide() {
    currentIndex++;
    if (window.innerWidth > 900) {
    //   console.log(cards.length);
    //   console.log(slider);
      if (currentIndex >= cards.length - 4) {
        currentIndex = 0;
      }
      updateSlider(20);
    } else if (window.innerWidth <= 900 && window.innerWidth >= 838) {
      if (currentIndex >= cards.length - 3) {
        currentIndex = 0;
      }
      updateSlider(25);
    } else if (window.innerWidth <= 837 && window.innerWidth >= 665) {
      if (currentIndex >= cards.length - 2) {
        currentIndex = 0;
      }
      updateSlider(33.33);
    } else if (window.innerWidth <= 664 && window.innerWidth >= 577) {
      if (currentIndex >= cards.length - 1) {
        currentIndex = 0;
      }
      updateSlider(50);
    } else if (window.innerWidth <= 576 && window.innerWidth >= 300) {
      if (currentIndex >= cards.length - 0) {
        currentIndex = 0;
      }
      updateSlider(100);
    }
  }

  function prevSlide() {
    currentIndex--;
    if (window.innerWidth > 900) {
      if (currentIndex < 0) {
        currentIndex = cards.length - 5;
      }
      updateSlider(20);
    } else if (window.innerWidth <= 900 && window.innerWidth >= 838) {
      if (currentIndex < 0) {
        currentIndex = cards.length - 4;
      }
      updateSlider(25);
    } else if (window.innerWidth <= 837 && window.innerWidth >= 665) {
      if (currentIndex < 0) {
        currentIndex = cards.length - 3;
      }
      updateSlider(33.33);
    } else if (window.innerWidth <= 664 && window.innerWidth >= 577) {
      if (currentIndex < 0) {
        currentIndex = cards.length - 2;
      }
      updateSlider(50);
    } else if (window.innerWidth <= 576 && window.innerWidth >= 300) {
      if (currentIndex < 0) {
        currentIndex = cards.length - 1;
      }
      updateSlider(100);
    }
  }

  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  document.getElementById("prevBtn").addEventListener("click", prevSlide);
});

//--------------------------------------------------------------------------------

//Script for Navigation slider when click on Hamburger menu
let flag = true;
function openNav() {
  if (flag == true) {
    document.getElementById("mySidenav").style.width = "100vw";
    flag = false;
  } else {
    document.getElementById("mySidenav").style.width = "0";
    flag = true;
  }
}

//--------------------------------------------------------------------------------

//Script for navigating to Individual Products page when clicking from ALL PRODUCTS Page

function directToPage(catageory) {
  if (catageory == "women") {
    window.location.href = "./women.html";
  } else if (catageory == "men") {
    window.location.href = "./men.html";
  } else if(catageory == "kids"){
    window.location.href = "./kids.html";
  }
  else{
    window.location.href = "./login.html";
  }
}


function validateLogin(){
    let emailVal = document.getElementById('email').value;
    let passVal = document.getElementById('password').value;
    if(((emailVal.toLowerCase())==='admin@admin.com') && (parseInt(passVal)) === 123456){
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        window.alert("Login Successful");
        
    }
    else{
        window.alert("Incorrect email or password");
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}

//--------------------------------------------------------------------------------
// Cart Page Scripting

function directToDeleteItem(){
    let cartImage = document.querySelector('.items-cart img');    
    cartImage.src = "Images/no-item.png";
    document.querySelector('.two b').innerHTML = 'No items in your cart :)';
    document.querySelector('.two span').innerHTML = '$0';
    document.querySelector('.three input').value = '';
    pennyCount = document.querySelectorAll('.penny').length;
    for(let x=0; x<pennyCount; x++){
        document.querySelectorAll('.penny')[x].innerHTML = '$0';
    }
    document.querySelector('.amount').value = '0';

}

//Minus click
document.querySelector('.minus').addEventListener('click', ()=>{
    amountValue = document.querySelector('.amount').value;
    if(parseInt(amountValue)-1==0){
        directToDeleteItem();
        document.querySelector('.amount').value = parseInt(amountValue)-1;

        }
    else if(parseInt(amountValue) >= 1){
        document.querySelector('.amount').value = parseInt(amountValue)-1;
        let aval = document.querySelector('.amount').value;
        document.querySelector('.two span').innerHTML = `$${15*aval}`;
        pennyCount = document.querySelectorAll('.penny').length;
        document.querySelectorAll('.penny')[0].innerHTML = `$${15*aval}`;
        document.querySelectorAll('.penny')[2].innerHTML = `$${15*aval+5}`;    
    }
}
);

// Plus click
document.querySelector('.plus').addEventListener('click', ()=>{
    amountValue = document.querySelector('.amount').value;
    if(parseInt(amountValue) >= 0){
        document.querySelector('.amount').value = parseInt(amountValue)+1;
        let aval = document.querySelector('.amount').value;
        document.querySelector('.two span').innerHTML = `$${15*aval}`;
        
            document.querySelectorAll('.penny')[0].innerHTML = `$${15*aval}`;
            document.querySelectorAll('.penny')[1].innerHTML = `$5`;
            document.querySelectorAll('.penny')[2].innerHTML = `$${15*aval+5}`;

            let cartImage = document.querySelector('.items-cart img');    
            cartImage.src = "./Images/image1.webp";
            document.querySelector('.two b').innerHTML = 'Blue & Green Formal';
    }    
})

