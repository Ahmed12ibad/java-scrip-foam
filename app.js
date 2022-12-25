
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
    var prog = document.getElementById("Programing")

    

    // var nameRegix = /^[a-zA-Z ]+$/.test(name.value);
    // var fatherRegix = /^[a-zA-Z ]+$/.test(fatherName.value);
    // var emailRegix = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value);
    // var cnicRegix = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic.value);
//    var phoneregix =/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm.test(phone_number.value)

  




   if (name.value) {

    if(fatherName.value){
        
    if (email.value) {

    if(phone_number.value){

    if(male.checked || female.checked) {
    
     if(country){
        var object =
        {
            name: name.value,
            father: fatherName.value,
            email: email.value,
            phone:phone_number.value,
            city_name : country.value,
            programing : prog.value
            
        }
        arr.push(object)
            // window.setTimeout(function(){
                localStorage.setItem("information",JSON.stringify(arr))
        swal("Good job!", "You clicked the button!", "success");
     }else{swal("country is required")}   
    }else{swal("gender is required")}   
    }else{swal("emter velid number")}
    
    }else{swal("Enter valid email")} 
    }else{swal("enter velid father name")}
    }else{swal("Enter Valid name")}



      
    //
}

const reset = ()=>{
    var name = document.getElementById("name").value=""
    var fatherName = document.getElementById("father-name").value=""
    var email = document.getElementById("email").value=""
    // var cnic = document.getElementById("cnic")
    var phone_number = document.getElementById("phone-number").value=""
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var country = document.getElementById("country").innerHTML=`
    <option >SELECT</option>
    <option  >Karachi</option>
                <option >Lahore</option>
                <option  >Islamabad</option>
                <option >Quetta</option>
                <option  >peshawar</option>
                <option >multan</option>
                <option>Other</option>
    `
    var prog = document.getElementById("Programing").innerHTML=`
    <option >SELECT</option>
    <option  >java script</option>
                <option >c++</option>
                <option  >java</option>
                <option >php</option>
                <option  >blockchain</option>
                <option> c#</option>
                <option>Other</option>
    `
}