//login page js
var emailHeader = "<h1>Email</h>";
var emailInput = "<input>";
var passwordHeader = "<h1>Password</h>";
var passwordInput = "<input>";

$( "#LPbut" ).click(function() {
  $("#loginPanelRowTwoColOne" ).empty();
  $("#loginPanelRowTwoColTwo" ).empty();
  $("#loginPanelRowTwoColOne").append(emailHeader, emailInput);
  $("#loginPanelRowTwoColTwo").append(passwordHeader, passwordInput);
  $("#loginPanelRowTwoColOne").attr("id", "loginPanelEmailLogin");
  $("#loginPanelRowTwoColTwo").attr("id", "loginPanelEmailPassword");
}

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