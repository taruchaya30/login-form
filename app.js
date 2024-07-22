let btn=document.querySelector("#one");
let my=document.querySelector("#next");
let heading1= document.querySelector("#first");
let heading2=document.querySelector("#second");
let heading3=document.querySelector("#hate");
let heading4 = document.querySelector("#new");
let newbtn=document.querySelector("#heading");



console.log(newbtn)
console.log(heading1)
console.log(heading2)
console.log(heading3)
console.log(heading4.placeholder)
console.log(my.value)
console.log(heading4.value)



newbtn.addEventListener("click", () =>{
  heading2.innerHTML="Create your username"
  heading3.innerHTML="Create a strong password"
})


btn.addEventListener("click", () => {
   

    if(my.value!=="" && heading4.value!==""){
        alert("Login successful"); 
    }

            else if(heading4.value=="" &&  heading4.value==""){
                alert("Please enter complete information"); 
            }
    
        else{
                alert("Please enter complete information"); 
                
            }       });
        
