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










async function myFun () {
    const value = document.querySelector('.care-input').value;
    
    
    
    try {
        let urlSearch=`https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts`;
        const urlKey = await fetch(urlSearch);
        const data = await urlKey.json();
        const allRow = document.querySelector('.cate-page');
        data.map((element) => { 
            // console.log(element);
            const {category, title, body, img} = element;
            // console.log(category, title, body, img);
            allRow.innerHTML += `
            <div class="cate-item">
              <img class="cate-seco-img" src=${img} alt="">
              <div class="cate-item1">
                <h4 class="cate-item1-h4">${category}</h4>
                <h3 class="cate-item1-h3">${title}</h3>
                <p class="cate-item1-text">${body}</p>
             </div>
            </div>

            `
        })
    } catch {
        console.error('ishlamayapti');
    }
}
myFun();

