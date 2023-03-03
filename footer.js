(function () {
    const form = document.querySelector(".footer__contact-form");
    form.addEventListener("submit", handleSubmit);
  
    function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById(".status__submit");
      fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                status.innerHTML =
                  "Oops! There was a problem submitting your form";
              }
            });
          }
        })
        .catch((error) => {
          status.innerHTML = "Oops! There was a problem submitting your form";
        });
    }
  
  })();
        
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
                nameLabel.style.color="#c7a17a"
                nameInput.style.border='1px solid #c7a17a '
              } 
            else if (nameValue.length<=2){
                nameLabel.innerHTML='Name should contain at least 3 characters'
                nameLabel.style.color="white";
                nameInput.style.border='1px solid #513b25';
            }
                
                else{
                nameLabel.innerHTML='Invalid name!';
                nameLabel.style.color="#c7a17a";
                nameInput.style.border='1px solid c7a17a';
              }
              
            });

        

