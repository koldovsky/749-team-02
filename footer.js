(function(){
    const form=document.querySelector('.footer__contact-form');
    const submit=document.querySelector('.submit__btn');
    
    submit.addEventListener('click',handleSubmit);
    async function handleSubmit(event){
            event.preventDefault()
            const status=document.querySelector('.status__submit')
            const response= await fetch(event.target.action,{
                method:form.method,
                body:new FormData,
                headers:{
                Accept:"appliaction/json"},
            })
            if(response.ok){
                status.innerHTML="submition is successfully completed";
                FormData.reset();
            }
            else{
                const data=response.json
                if(Object.hasOwn(data,"errors")){
                    status.innerHTML = data["errors"].map((error) => error["message"]).join(", ");
        }
                else{
                    status.innerHTML="Oops! There was a problem submitting your form"
                }
            }
        }
        
    //form validation//
        const regexText = /^[a-zA-Z ]{3,}$/
        const nameLabel=document.querySelector('label[for="name"]');
        const phoneLabel=document.querySelector('label[for="phone"]');
        const nameInput=document.querySelector('#name');
        const numberInput=document.querySelector('#phone');
        nameInput.addEventListener('input',()=>{
            const nameValue=nameInput.value;
            if (regexText.test(nameValue)) {
                nameLabel.innerHTML='Valid name!';
                nameLabel.style.color="green"
                nameInput.style.border='1px solid green'
              } 
            else if (nameValue.length<=2){
                nameLabel.innerHTML='Name should contain at least 3 characters'
                nameLabel.style.color="white";
                nameInput.style.border='1px solid red';
            }
                
                else{
                nameLabel.innerHTML='Invalid name!';
                nameLabel.style.color="red";
                nameInput.style.border='1px solid red';
              }
              
            });



})();