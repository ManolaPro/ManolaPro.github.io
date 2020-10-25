
document.addEventListener('DOMContentLoaded', function() {
    const searchChange = document.querySelector('.switch__value');
    
    function toggle(name) {
        name.classList.toggle('show');
        name.classList.toggle('hide');
        name.classList.toggle('fade');

    }

        //search change      
    
        searchChange.addEventListener('change', () => {
        
        let  searchTitle = document.querySelectorAll('.switch__title'),
             mainSearch = document.querySelector('.main-search'),
             namesSearch = document.querySelector('.names-search');
        
        searchTitle.forEach((item) => {
            item.classList.toggle('switch__title_active');
        });

        toggle(mainSearch);
        toggle(namesSearch);
        
    });

    //add characteristic

    const charWrap = document.querySelectorAll('.characteristics__wrapper');

    charWrap.forEach((item, i) => {
        item.addEventListener('click', () => {
            const charSpan = document.querySelectorAll('.characteristics__span'),
                  charTitle = document.querySelectorAll('.characteristics__title'),
                  addForm =document.querySelectorAll('.add');

            
            charSpan[i].classList.toggle('characteristics__span_active');
            charTitle[i].classList.toggle('characteristics__title_active');
            charTitle[i].classList.toggle('fade');

            toggle(addForm[i]);
            
    });

    });

    // submit Form

    const forms = document.querySelectorAll('form');


    forms.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(item);
            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            console.log(object);
        });
    });
        
});