//login page js
var showLogin = function(){
    var emailHeader = "<h1>Email</h>";
    var emailInput = '<input type="text" id="email" required>';
    var passwordHeader = "<h1>Password</h>";
    var passwordInput = '<input type="password" id="password" required>';
    
    $("#loginPanelRowTwoColOne" ).empty();
    $("#loginPanelRowTwoColTwo" ).empty();
    $("#loginPanelRowTwoColOne").append(emailHeader, emailInput);
    $("#loginPanelRowTwoColTwo").append(passwordHeader, passwordInput);
    $("#loginPanelRowTwoColOne").attr("id", "loginPanelEmailLogin");
    $("#loginPanelRowTwoColTwo").attr("id", "loginPanelEmailPassword");
    $("#LPbutLoginSubmit").removeClass("hiddenBtn");
}

var submitLogin = function(){
     let email = $("#email").val().trim();
            $("#email").val("");
            let password = $("#password").val().trim();
            console.log(email);
            console.log(password);
            
            $.post("/signin", {
                username: email,
                password: password
            }).then(data => {
                console.log(data);
                if (data.authorized === "YES"){
                    window.location.replace('/profile');
                }
            });
};

var gotoSignup = function(){
    window.location.replace('/signup1');
}

var signup = function(){
    let name = $("#humanName").val().trim();
            let zip = $("#zipCode").val().trim();
            let email = $("#email").val().trim();
            let password = $("#password").val().trim();
            
            $.post("/signup", {
                name: name,
                zip: zip,
                email: email,
                password: password
            }).then(function(data){
                console.log(data);
                if (data.signup === "success"){
                    window.location.replace('/signup2');
                }
            })
}



$(document).ready(function(){

    $( "#LPbutLogin" ).on("click", showLogin);
    $("#LPbutLoginSubmit").click(submitLogin);
    $("#LPbutJoin").click(gotoSignup);
    $("#submitUser").click(signup);

    var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dakke3tr6/upload';
    var CLOUDINARY_UPLOAD_PRESET = 'i2fwawg4'
    
    // var imgPreview = document.getElementById('img-preview');
    var fileUpload = document.getElementById('file-upload');
    
    fileUpload.addEventListener('change', function(event){
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    console.log(file)
    
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res){
    console.log(res)
    console.log(res.data.url)
    imageUrl = res.data.secure_url;
    
    // imgPreview.src = res.data.secure_url;
    }).catch(function(err){
        console.error(err)
    })
    
    });
    // storing scores as array
    $(".submitBtn").on("click", function() {
        console.log("CLICKEDJKASDJAKLSD")
        var scores =  [];
        // for loop to run through chosen answer values
        for (i = 1; i < 11; i++) {
            var newVal = $('#q' + i).val();
            scores.push(parseInt(newVal));
        }
        event.preventDefault();
        console.log(scores);
    });
});