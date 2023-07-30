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

//   window.addEventListener("scroll", function () {
//     shrink();
//   });