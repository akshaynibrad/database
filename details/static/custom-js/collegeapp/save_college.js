function save_college(){
    flag = true;
    if ($('#collegename').val() == '' ){
	    flag = false;
	    $('#collegename').css("border-color","red");
	}
	else{
	    $('#collegename').css("border-color","initial");
	    x = $('#collegename').val()
	    pattern = /^[A-Za-z]+$/;
	    if(!pattern.test(x)){
	    flag = false;
	    $('#collegename').css("border-color","red");
	    $('#name_error').css("display","block");
	    }
	    else{
	    $('#collegename').css("border-color","initial");
	    $('#name_error').css("display","none");
	    }
	}
	if ($('#address').val() == '' ){
	    flag = false;
	    $('#address').css("border-color","red");
	}
	else{
	    $('#address').css("border-color","initial");
	    x = $('#address').val()
	    pattern = /^[A-Za-z]+$/;
	    if(!pattern.test(x)){
	    flag = false;
	    $('#address').css("border-color","red");
	    $('#address_error').css("display","block");
	    }
	    else{
	    $('#address').css("border-color","initial");
	    $('#address_error').css("display","none");
	    }
	}
	if ($('#collegecity').val() == '' ){
	    flag = false;
	    $('#collegecity').css("border-color","red");
	}
	else{
	    $('#collegecity').css("border-color","initial");
	    x = $('#collegecity').val()
	    pattern = /^[A-Za-z]+$/;
	    if(!pattern.test(x)){
	    flag = false;
	    $('#collegecity').css("border-color","red");
	    $('#city_error').css("display","block");
	    }
	    else{
	    $('#collegecity').css("border-color","initial");
	    $('#city_error').css("display","none");
	    }
	}
	if(flag){
        $.ajax({
            type : 'POST',
            url : '/collegeapp/save-college-details/',
            data : $('#collegeform').serialize(),
            success:function(response){
                console.log(response);
                alert(response.success);
                $('#collegename').val('');
                $('#address').val('');
                $('#collegecity').val('');
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
