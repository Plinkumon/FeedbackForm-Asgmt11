const feedbackForm= document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("Submitted")
    const name1 = feedbackForm['Name'].value;
    const email1= feedbackForm['email'].value;
    let emailregx=/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    document.getElementById("nameError").textContent="";
    document.getElementById("emailError").textContent="";
    let successmsg=true;
    
if(name1.trim()===""){
    successmsg=false;
console.log("Name is required");
document.getElementById("nameError").textContent = "Name is required";
}
if(email1.trim()===""||!emailregx.test(email1)){
    successmsg=false;
    document.getElementById("emailError").textContent = "Valid email is required";

}
if(successmsg){
    alert("Thank you for your feedback");
    document.getElementById('feedbackForm').reset(); 
}

// else if(email1.trim()====""){
//     successmsg=false;
//     console.log("Valid email is required");

// }
})


