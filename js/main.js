window.addEventListener('scroll', function () {
    toggleBacktop();
  });
  let backtop = document.getElementById('backtop');
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.bottom = '30px';
    } else {
      backtop.style.bottom = '-50px';
    }
  }

  window.addEventListener("scroll", function () {
    shrink();
  });
  
  






let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
let pass = document.querySelector("#password");

text.addEventListener("focusout", myTaxt);
pass.addEventListener("focusout", myPass);

btn.addEventListener("click", function () {
  myTaxt();
  myPass();
  mylog();
  mykey();
  mymous();

});

function myTaxt() {
  let message, text;
  let errElement = document.querySelector("#text");
  message = document.getElementById("err");
  text = document.getElementById("text").value;

  try {
    if (text == "") {
      errElement.classList.remove("valid");
      errElement.classList.add("err");

      throw "to'ldiring";
    }
    if (text == "Akbar") {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = " ";

    }
  } catch (e) {
    message.innerHTML = " Iltimos " + e;
  }
}

function myPass() {
  let message, pass;
  let errElement = document.querySelector("#password");
  message = document.getElementById("err2");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.add("err");
      errElement.classList.remove("valid");


      throw "to'ldiring";
    }
    if (pass === "1604") {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = " ";

    }
  } catch (e) {
    message.innerHTML = " Iltimos " + e;
  }
}


function mylog() {
  let message, pass;
  let errElement = document.querySelector("#password");
  message = document.getElementById("err3");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.add("err");
      errElement.classList.remove("valid");


      throw "to'ldiring";
    }
    if (pass === "1604") {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = " ";

    }
  } catch (e) {
    message.innerHTML = " Iltimos " + e;
  }
}
function mykey() {
  let message, pass;
  let errElement = document.querySelector("#password");
  message = document.getElementById("err4");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.add("err");
      errElement.classList.remove("valid");


      throw "to'ldiring";
    }
    if (pass === "1604") {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = " ";

    }
  } catch (e) {
    message.innerHTML = " Iltimos " + e;
  }
}

function mymous() {
  let message, pass;
  let errElement = document.querySelector("#password");
  message = document.getElementById("err5");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.add("err");
      errElement.classList.remove("valid");


      throw "to'ldiring";
    }
    if (pass === "1604") {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      window.location.href = "../login.html";
      message.innerHTML = " ";

    }
  } catch (e) {
    message.innerHTML = " Iltimos " + e;
  }
}