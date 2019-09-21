var century,year,month,date,d,dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function validate(){
    var genderSelected = document.getElementsByName("gender");
    if(document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value > 2019 || document.myForm.year.value <= 1970){
        alert("Invalid year of Birth");
        document.myForm.year.focus();
        return false;
    }

   else if (document.myForm.month.value == "" || isNaN(document.myForm.month.value) || document.myForm.month.value.length != 2 || document.myForm.month.value > 12 || document.myForm.month.value <= 0){
    alert("Invalid month of Birth");
    document.myForm.month.focus();
    return false;
    }

    else if (document.myForm.date.value == "" || isNaN(document.myForm.date.value) || document.myForm.date.value.length != 2 || document.myForm.month.value > 31 || document.myForm.date.value <= 0){
        alert("Invalid date of Birth");
        document.myForm.day.focus();
        return false;
    }

    else if(genderSelected[0].checked == false && gender[1].checked == false);
    {
        alert("You must select male or female");
        return false;
    }
    else{
        return true;
    }
}

function calculateDayValue(){
    year = document.getElementById("year").value;
    century = parseInt(year.slice(0,2));
    year = parseInt(year.slice(2,4));
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);

    d=( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    console.log(d);
    return(Math.floor(d));

}

function getGender(){
    var genderSelected = document.getElementsByName("gender");
    if(genderSelected[0].checked = true){
        var gender = "male";
    }
    else if(gender[1].checked == true){
        var gender = "female";
    }
    else{
        return false;
    }
    switch(gender){
        case "male":
        if(dayValue == 0){
            alert("Your akan name is " +maleNames[0]+"!");
        }
        else if(dayValue == 1){
            alert("Your akan name is " +maleNames[1]+"!");
        }
        else if(dayValue == 2){
            alert("Your akan name is " +maleNames[2]+"!");
        }
        else if(dayValue == 3){
            alert("Your akan name is " +maleNames[3]+"!");
        }
        else if(dayValue == 4){
            alert("Your akan name is " +maleNames[4]+"!");
        }
        else if(dayValue == 5){
            alert("Your akan name is " +maleNames[5]+"!");
        }
        else if(dayValue == 6){
            alert("Your akan name is " +maleNames[6]+"!");
        }
        break;
        case "female":
        if (dayValue == 0){
            alert("Your akan name is " +femaleNames[0]+"!");
        }
        else if(dayValue == 1){
            alert("YOur akan name is " +femaleNames[1]+"!");
        }
        else if(dayValue == 2){
            alert("YOur akan name is " +femaleNames[2]+"!");
        }
        else if(dayValue == 3){
            alert("YOur akan name is " +femaleNames[3]+"!");
        }
        else if(dayValue == 4){
            alert("YOur akan name is " +femaleNames[4]+"!");
        }
        else if(dayValue == 5){
            alert("YOur akan name is " +femaleNames[5]+"!");
        }
        else if(dayValue == 6){
            alert("YOur akan name is " +femaleNames[6]+"!");
        }
        break
        default:
    }
}
















