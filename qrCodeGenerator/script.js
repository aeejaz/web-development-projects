let imgbox = document.getElementById("imgbox");
let qrimage=document.getElementById('qrimage');
let qrtext = document.getElementById('qrtext');

function Qr(){
   if(qrtext.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgbox.classList.add("show-img");
        console.log("qrtext")
    }
    else{
        qrtext.classList.add("error");
        setTimeout(function(){
        qrtext.classList.remove("error");
        }, 1000);
    }
       
}
