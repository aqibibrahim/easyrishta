(function($) {

    var form = $("#signup-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        }
        ,
        rules: {
            dob:{
                required: true,
                date: true
            },
            religion: {
                required:true
            },
            motherTongue: {
                required: true
            },
            username: {
                required: true,
            },
            email: {
                required: true,
                email : true
            },
            password: {
                required: true,
                minlength: 5
            },
            education_detail : {
                required: function(){
                    var isOther = $("[name='highestEducation']").val().startsWith("Other");
                    console.log($("[name='highestEducation']").val(), " " ,isOther);
                    return $("[name='highestEducation']").val().startsWith("Other");
                }
            },

            income_amount : {
                required: function(){
                    var employee = $("[name='employeedIn']:checked").val();
                    return employee!="employeedIn_not_working";
                },
                min: 100
            },

            about: {
                required: true,
                minlength: 100
            }
        }
        
        ,
        messages : {
            email: {
                email: 'Not a valid email address <i class="zmdi zmdi-info"></i>'
            },
            password: {
                minlength: "Password should contain atleast 5 characters <i class='zmdi zmdi-info'></i>"
            },
            income_amount :{
                min: "Minimum amount should be 100 <i class='zmdi zmdi-info'></i>"
            },
            about :{
                minlength: "Minimum words should be 100 <i class='zmdi zmdi-info'></i>"
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
    });
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        labels: {
            // previous: 'Previous',
            next: 'Next',
            finish: 'Submit',
            current: ''
        },
        titleTemplate: '<div class="title"><span class="number">#index#</span>#title#</div>',
        onStepChanging: function(event, currentIndex, newIndex) {
            form.validate().settings.ignore = ":disabled,:hidden";
            // console.log(form.steps("getCurrentIndex"));
          
            return form.valid();
        },
        onStepChanged: function(event, newIndex, priorIndex) { 
            // $('html, body').animate({
            //     scrollTop: $("#signup-form").offset().top
            // }, 500);
            if(newIndex==1) {
                $("#progressBar").css("width" , "36%");
                $("#progressBar").text("36%");
            }
            else if(newIndex==2) {
                $("#progressBar").css("width" , "52%");
                $("#progressBar").text("52%");
            }
            else if(newIndex==3) {
                $("#progressBar").css("width" , "68%");
                $("#progressBar").text("68%");
            }
            else if(newIndex==4) {
                $("#progressBar").css("width" , "84%");
                $("#progressBar").text("84%");
            }


            console.log(newIndex, priorIndex);
        },
        onFinishing: function(event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            console.log(currentIndex);
            return form.valid();
        },
        onFinished: function(event, currentIndex) {
            $("#progressBar").css("width" , "100%");
            $("#progressBar").text("100%");
            $("#progressBar").addClass("bg-success");
            // alert('Form Submitted. Redirect To Home Page');
        },
        // onInit : function (event, currentIndex) {
        //     event.append('demo');
        // }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });


    $('#button').click(function () {
        $("input[type='file']").trigger('click');
    })
    
    $("input[type='file']").change(function () {
        $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
    });

    $("[name='maritalStatus']").change(function(){

        var status = $(this).val();
        if(status=="never_married") {
            // $("#noOfChildren").addClass("d-none");
            $("#noOfChildren").fadeOut(800);
            $("#children_none").prop('checked', true);
            $("#childrenStatus").fadeOut(800);
            $("#children_status_living").prop("checked" , true);
        }
        else {
            $("#noOfChildren").fadeIn(800);
        }
    });


    $("[name='children']").change(function(){
        
        var val = $(this).val();
        if(val=="children_none"){
            $("#childrenStatus").fadeOut(800);
            $("#children_status_living").prop("checked" , true);
        }
        else {
            $("#childrenStatus").fadeIn(800);
        }
    });


    $("[name='highestEducation']").change(function(){
        var val = $(this).val();
        if(val.startsWith("Other")) {
            $("#educationInDetail").fadeIn(800);
            $("#educationInDetail input").removeClass("error");
           
        }
        else
        {
            $("#educationInDetail").fadeOut(800);
            // $("#education_detail").valid();
        }
    });

    $("[name='employeedIn']").change(function(){
        var val = $("[name='employeedIn']:checked").val();
        if(val=="employeedIn_not_working") {
            $("[name='income_amount']").val("");
            $("[name='income_amount']").focusout();
            $("#occupation").fadeOut("800");
            $("#annualIncome").fadeOut("800");
            $("#workLocation").fadeOut("800");
        }
        else {
            $("#occupation").fadeIn("800");
            $("#annualIncome").fadeIn("800");
            $("#workLocation").fadeIn("800");
        }
    });

})(jQuery);