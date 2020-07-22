window.addEventListener('DOMContentLoaded',() =>{

    function imagesSwap(){
        let mainImg = document.querySelector('.mainImg')
        let images = document.querySelectorAll('.images')
        let list = document.querySelector('#fish')
        list.addEventListener('change',(e) =>{
            let src = event.target.options[event.target.selectedIndex].dataset.src;
            mainImg.src = src
        })
        images.forEach(item =>{
            item.addEventListener('click', (e)=>{
                    if(e.target.classList.contains('img')){
                        mainImg.src = e.target.src
                    }
                  
               
            })
        })
        

    }
    imagesSwap();
    function overlayUp(){
        let btn = document.getElementById('mainBtn')
        let overlay = document.querySelector('.overlay')
        let body = document.querySelector('body');
        btn.addEventListener('click', () =>{
            let item = document.getElementById('fish').value;
            let itemCount = document.getElementById('Quantity-product-template').value;
            let spanTitle = document.getElementById('nullingInput')
           

            

            let inputCount = document.getElementById('inputCount')
            let inputType = document.getElementById('inputType')
            if(itemCount){
                
                overlay.classList.add('show')
                body.style.overflow='hidden'
                spanTitle.textContent = ``
                inputCount.value = itemCount
                inputType.value = item
            }else{
                spanTitle.textContent =  "Заполните поле"
            }
           
        })
        overlay.addEventListener('click',(e) =>{
            let target = e.target
            if(target.hasAttribute('data-close')){
                window.location.reload();
                overlay.classList.remove('show')
                body.style.overflow=''
            }
            if(e.target == overlay){
                overlay.classList.remove('show')
                body.style.overflow=''
                
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && overlay.classList.contains('show')) { 
                overlay.classList.remove('show')
                body.style.overflow=''
            }
        });
    }
    overlayUp();

    function postForm(e){

        const message = {
            loading: 'img/form/spiner.svg',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };


        e.preventDefault();
        const form = document.querySelector('.submitForm')
        let data = new FormData(form)
        const json = JSON.stringify(Object.fromEntries(data.entries()))
        let overlay = document.querySelector('.overlay')
        overlay.innerHTML = `
            <div class="modal__content">
                <div class="modal__title">Спасибо скоро мы с вами свяжемся!</div>\
                <div class="modal__close" data-close='' data-close>×</div>
            </div>
        `

    }
    function postData(){
        const form = document.querySelector('.submitForm')
        form.addEventListener('submit',postForm)
    }
    postData();

    const postDataEnd = async (url,data)=>{
        const res = await  fetch(url,{
            method:"POST",
            headers :{
                'Content-type': 'application/json'
            },
            body: data
        })
        return await res.json();
    }
})