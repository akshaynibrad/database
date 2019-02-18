//function save_student(){
//    var x = $('#contactno').val().length
//    if (x!=10) {
//     alert("Please enter 10 digit number");
//     return false;
//    }
//    else{
//    $.ajax({
//        type : 'POST',
//        url : '/studentapp/save-student-details/',
//        data : $('#studentform').serialize(),
//        success:function(response){
//            console.log(response);
//            alert(response.success);
//            $('#firstname').val('');
//            $('#city').val('');
//            $('#contactno').val('');
//        },
//        error:function(response){
//        }
//    })
//    }
//}

function save_student(){
    flag = true;
    if ($('#firstname').val() == '' ){
	    flag = false;
	    $('#firstname').css("border-color","red");
	}
	else{
	    $('#firstname').css("border-color","initial");
	    x = $('#firstname').val()
	    pattern = /^[A-Za-z]+$/;
	    if(!pattern.test(x)){
	    flag = false;
	    $('#firstname').css("border-color","red");
	    $('#name_error').css("display","block");
	    }
	    else{
	    $('#firstname').css("border-color","initial");
	    $('#name_error').css("display","none");
	    }
	}
	if ($('#city').val() == '' ){
	    flag = false;
	    $('#city').css("border-color","red");
	}
	else{
	    $('#city').css("border-color","initial");
	    x = $('#city').val()
	    pattern = /^[A-Za-z]+$/;
	    if(!pattern.test(x)){
	    flag = false;
	    $('#city').css("border-color","red");
	    $('#city_error').css("display","block");
	    }
	    else{
	    $('#city').css("border-color","initial");
	    $('#city_error').css("display","none");
	    }
	}
	if ($('#contactno').val() == '' ){
	    $('#contactno').css("border-color","red");
	    flag = false;
	}
	else{
	    $('#contactno').css("border-color","initial");
	    x = $('#contactno').val().length
	    if(x!=10){
	    $('#contactno').css("border-color","red");
	    $('#contact_error').css("display","block");
	    return false;
	    }
	    else{
	    $('#contactno').css("border-color","initial");
	    $('#contact_error').css("display","none");
	    }
	}
	if(flag){
        $.ajax({
            type : 'POST',
            url : '/studentapp/save-student-details/',
            data : $('#studentform').serialize(),
            success:function(response){
                console.log(response);
                alert(response.success);
                $('#firstname').val('');
                $('#city').val('');
                $('#contactno').val('');
            },
            error:function(response){
            }
        });
	}
	else{
        return false;
	}
}


function redirect(){

    window.location.href = "/studentapp/";
}
