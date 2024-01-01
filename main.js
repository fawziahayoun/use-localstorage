let buttons = document.querySelectorAll('.buttons span');
 let input = document.getElementById("the-input");
 let result = document.querySelector(".results > span");


  buttons.forEach(span => {
    span.addEventListener('click', (e) => {
        if(e.target.classList.contains("check-item")){
            checkItem();
        }
        if(e.target.classList.contains("Add-item")){
            addItem();
        }
        if(e.target.classList.contains("Delete-item")){
            deleteItem();
    
        }
        if(e.target.classList.contains("Show-item")){
            ShowItem();
    
        }
     });

  })
 

 function checkInput(){
   
        result.innerHTML = "the Input Shoud Not Be Empty";
    
     

 }

 function checkItem(){

    if(input.value !== ''){
        if(localStorage.getItem(input.value)){
            result.innerHTML = `the Item That WE Are Looking For Is Found <span> ${input.value} </span> `;
    
        }else{
            result.innerHTML = `the Item That WE Are Looking For Is Not Found <span> ${input.value} </span>`;
    
        }

    }else{
        checkInput();
    }
     }

     function addItem(){
        if(input.value !== ''){
            localStorage.setItem(input.value , "test")
                result.innerHTML = ` Hi EveyOne the Item  <span> ${input.value} </span> Is Added `;
                
                input.value= '';
        
            
        }else{ 
            checkInput();
        }


     }
     function deleteItem(){
        if(input.value !== ''){
            if(localStorage.getItem(input.value)){
                {
                    localStorage.removeItem(input.value);
                    result.innerHTML = `the Item <span> ${input.value} </span>  Is Deleted Seccusfully `;


                }
        
            }else{
                result.innerHTML = `the Item   <span> ${input.value}I  </span> Is Not In LocalStorage`;
                input.value= '';

        
            }

    
        }else{
            checkInput();
        }

     }
     function ShowItem(){
        if(localStorage.length){
            result.innerHTML = '';
            for(let [key, vaue] of Object.entries(localStorage)){
                result.innerHTML += `<span class="show"> ${key} </span>`
            }
        }else{
            result.innerHTML += `Local Storage Is Empty`

            
        }

     } 