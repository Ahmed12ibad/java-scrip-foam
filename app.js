
var arr =[]
function submit() {
   
    var name = document.getElementById("name")
    var fatherName = document.getElementById("father-name")
    var email = document.getElementById("email")
    var cnic = document.getElementById("cnic")
    var phone_number = document.getElementById("phone-number")
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var country = document.getElementById("country")
    // var pro = document.getElementById("programing")

    

    var nameRegix = /^[a-zA-Z ]+$/.test(name.value);
    var fatherRegix = /^[a-zA-Z ]+$/.test(fatherName.value);
    var emailRegix = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value);
    // var cnicRegix = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic.value);
   var phoneregix =/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm.test(phone_number.value)

  




   if (nameRegix) {

    if(fatherRegix){
        
    if (emailRegix) {

    if (cnic.value) {

    if(phoneregix){

    if(male.checked || female.checked) {
    
     if(country){


      
     }else{alert("country is required")}   
    }else{alert("gender is required")}   
    }else{alert("emter velid number")}
    }else{ alert("Enter valid cnic")}
    }else{alert("Enter valid email")} 
    }else{alert("enter velid father name")}
    }else{alert("Enter Valid name")}

    var object =
        {
            name: name.value,
            father: fatherName.value,
            email: email.value,
            cnic: cnic.value,
            phone:phone_number.value,
            city_name : country.value,
            
// ye do baki he

            // lengeuges : pro.value,
            // gender : male.valus

        }
        
    
    arr.push(object)
        // window.setTimeout(function(){
            localStorage.setItem("information",JSON.stringify(arr))
            // window.location="print.html"
        // },2000)
            // console.log("uroobamisbah");
 
     
    
 

    //


    
}

