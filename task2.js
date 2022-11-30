
var nam=prompt("what is your name?");
 // بعد كدة هاعمل فاريابل تاني علشان اجيب قيمة ال name هل هي nan ولا لا 
 var namVal=isNaN(nam);
// بعد كدة هاعمل if 

function validate(namVal){
    if(namVal==false){
        for(namVal=false;nam<3;nam++){
            prompt("what is your name?")
        }
    }
}
validate(nam);