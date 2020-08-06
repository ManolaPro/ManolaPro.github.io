'use strict';
window.addEventListener('DOMContentLoaded', function(){
    var slider = tns({
        container: '.corousel',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: true,
        navPosition: 'bottom',
        navAsThumbnails: true,
        center: true,
    });
    
    //block button
    const nextBtn = document.querySelectorAll('[data-next]'),
          form = document.querySelectorAll('.modal__give'),
          bar = document.querySelectorAll('.modal__bar');
            
        nextBtn.forEach(item => {
            item.classList.add('btnblock');
        }); 
        
        function anblock(i) {
            nextBtn[i].classList.remove('btnblock');
            let b = (i+1) * 30;
            bar[i].style.width = b+"px";
            }
        
        form.forEach((item , i)=>{
            item.addEventListener('change' , function(event) {
                const target = event.target;
                    if(target && target.classList.contains('form-image-que__input')) {
                        anblock(i);
                    }
                    if(target && target.classList.contains('form-range-price__input')) {
                        anblock(i);
                        const inputPrice = document.querySelector('.form-range-price__input'),
                              totalPrice = document.querySelector('.range-price-total');
                              let price = inputPrice.value;
                              totalPrice.innerHTML = price+" 000 руб.";
                              console.log(price);
                    }
                    if(target && target.classList.contains('form-radio__label__input')) {
                        anblock(i);
                    }
                    if(target && target.classList.contains('form-radio__label__box')) {
                        anblock(i);
                    }
            });
        });

    
    
    // 1step tab
    let tabs = document.querySelectorAll('.form-image-que__image'),
        sizeImg = document.querySelectorAll('.modal__size-img'),
        tabsParent = document.querySelector('.form-image-que'),
        sizeABC = document.querySelectorAll('.modal__sizeABC');
        

    function hideSizeImg() {
        sizeImg.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item=> {
            item.classList.remove('form__image_active');
        });
    }

    function showSizeImg(i=0) {
        sizeImg[i].classList.add('show', 'fade');
        sizeImg[i].classList.remove('hide');
        tabs[i].classList.add('form__image_active');
    }

    function hideSizeC(i=0) {
        sizeABC[i+1].classList.add('hide'); 
        sizeABC[i+1].classList.remove('flex', 'fade');  
        sizeABC[i+2].classList.add('hide'); 
        sizeABC[i+2].classList.remove('flex', 'fade');    
            
    }
    
    function showSizeABC() {
        sizeABC.forEach(item=> {
            item.classList.add('flex' , 'fade');
            item.classList.remove('hide');
        });
    }


    hideSizeImg();
    showSizeImg();

	tabsParent.addEventListener('click', function(event) {
        const target = event.target;
		if(target && target.classList.contains('form-image-que__image')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideSizeImg();
                    showSizeImg(i);
                    showSizeABC();
                    hideSizeC(i);
                    }
                   
                });
		}
	});
    //quiz
    const quizContent = document.querySelectorAll('[data-quiz]'),
          prevBtn = document.querySelectorAll('[data-prev]'),
          quizFinish = document.querySelector('[data-finish]');
          
    function hideQuiz() {
        quizContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }   
    function showStep(i) {
        
        quizContent[(i+1)].classList.add('show', 'fade');
        quizContent[(i+1)].classList.remove('hide');
        }
    
    function prevStep(i) {
        quizContent[i].classList.remove('hide');
        quizContent[i].classList.add('show', 'fade');
        
    }
        
    nextBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            
            hideQuiz();
            showStep(i);
        });
    });

    prevBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            hideQuiz();
            prevStep(i);
        });
    });

    //modal open
    const modalTrigger = document.querySelectorAll('[data-modal="start"]'),
          modal = document.querySelectorAll('.modal'),
          overlay = document.querySelector('.overlay'),
          modalCloseBtn = document.querySelectorAll('[data-close]');
    
          modalTrigger.forEach(btn => {
            btn.addEventListener('click', function() {
                modal[0].classList.add('show','fade');
                modal[0].classList.remove('hide');
                overlay.classList.add('show','fade');
                overlay.classList.remove('hide');
                document.body.style.overflow = 'hidden';
            });
        });
    
        function closeModal(i) {
            modal[i].classList.add('hide');
            modal[i].classList.remove('show');
            overlay.classList.add('hide');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
        }
        
        modalCloseBtn.forEach((btn ,i) => {
            btn.addEventListener('click', ()=> {
                closeModal(i);
            });
        });

        
        quizContent.forEach((cont ,i) => {
            cont.addEventListener('click', (e) => {
                if (e.target === quizContent) {
                    closeModal(i);
                }
            });
        });
    
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) { 
                closeModal();
            }
        });
    

});

   