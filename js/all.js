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
  const input = document.querySelector('#search');
  const value = input.value.trim(); 
    try {
      
        let urlSearch=`https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts`;
        const urlKey = await fetch(urlSearch);
        const data = await urlKey.json();
        const allRow = document.querySelector('.all-items');
        
        
        if(value !== '') {
          allRow.innerHTML = "";
          
          data.forEach((element) => { 
            const {category, title, body, img} = element; 
            const a = title.includes(value);
            
            
            if(title.includes(value)) {
              allRow.innerHTML += `
              <div class="all-item">
                  <img class="all-item-img" src= ${img} alt="">
                  <div class="all-item1">
                      <h4 class="all-item1-h4"> ${category} </h4>
                      <h3 class="all-item1-h3"> ${title} </h3>
                      <p class='all-item1-text' >${body} </p>
                  </div>
              </div>
              `     
            }
           
        
          })
          
          input.value = '';
          
        }

        if(value === '') {
          data.forEach((element) => { 
            const {category, title, body, img} = element;  
            allRow.innerHTML += `
            <div class="all-item">
                <img class="all-item-img" src= ${img} alt="">
                <div class="all-item1">
                    <h4 class="all-item1-h4"> ${category} </h4>
                    <h3 class="all-item1-h3"> ${title} </h3>
                    <p class='all-item1-text' >${body} </p>
                </div>
            </div>
            `       
        })
        }
        
        
    } catch {
        console.error('ishlamayapti');
    }
}
myFun();

const input = document.querySelector('#search');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    myFun(); 
  }
});