$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwk7dnqKIlrZABypKa36-LgIOi8YBOCeZCUUf-Bkmi54C9vNoBN7ncHPEjuLm_yL8Dujw/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            document.getElementById("success-message").innerHTML="Submitted Successfully..!"
            
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})