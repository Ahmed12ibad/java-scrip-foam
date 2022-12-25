
    var info = localStorage.getItem("information")
    if(info){
    var arr1 = JSON.parse(info)
console.log(arr1);
    var concat = document.getElementById('con-cat')

    for(var i=0; i<arr1.length; i++){
        console.log(arr1[i]);
var ahmed =
 `<tr class="tr">
 <td>${arr1[i].name}
</td>
<td>${arr1[i].father} 
 </td>
<td>${arr1[i].email}
 </td>
<td>${arr1[i].phone}
 </td>
<td>${arr1[i].programing} 
</td>
<td>${arr1[i].city_name}
 </td>
<td> <button onclick="delet('${i}',this)">delete</button>
 </td>

</tr>`;
concat.innerHTML+=ahmed


    }
    
    }

    var delet = (i,thi) => {
        thi.parentNode.parentNode.remove()
// console.log(thi.parentNode.parentNode.remove()
arr1.splice(i,1)
localStorage.setItem("information",JSON.stringify(arr1))

    }
















// function foo (){

//     var info = localStorage.getItem("information")
//     if(info){
//     var obj = JSON.parse(info)
//     var object = Object.values(obj)
//     // console.log(object)
//     var name = document.getElementById("print-name")
//     var father = document.getElementById("print-father-name")
//     var email = document.getElementById("print-email")
//     var cnic = document.getElementById("print-cnic")
//     var number = document.getElementById("print-number")
//     var city = document.getElementById("print-city")
//     //
//     name.innerHTML = object[0]
//     name.style.textAlign="center"
//     //
//     father.innerHTML = object[1]
//     father.style.textAlign="center"
//     //
//     email.innerHTML = object[2]
//     email.style.textAlign="center"
//     //
//     cnic.innerHTML = object[3]
//     cnic.style.textAlign="center"
//     //
//     number.innerHTML = object[4]
//     number.style.textAlign="center"
//     //
//     city.innerHTML = object[5]
//     city.style.textAlign="center"
    
    
    
    
    
    
    
    
    
    
    
    
    
//     }
    
//     }
    