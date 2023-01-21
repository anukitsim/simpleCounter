//initialize count variable

let count = 0;

// Select HTML value and buttons

const value = document.getElementById('value');

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const currentButton = e.currentTarget.classList;

        if(currentButton.contains('decrease')){
            count--
        }else if(currentButton.contains('increase')){
            count++
        }else{
            count = 0;
            
        }
        

        if(count < 0){
            value.style.color = '#DC3535'
        }

        if(count > 0){
            value.style.color = '#285430'
        }

        if(count === 0){
            value.style.color = '#000000'
        }

        value.textContent = count;


        

    })

    

})