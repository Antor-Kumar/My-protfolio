// ===== about text animation ======
let tabLinks =document.getElementsByClassName('tab_links');
let tabContents =document.getElementsByClassName('sub_item_text');

function removeLink(tabName){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active_links")
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active_tabe")
    }
    event.currentTarget.classList.add("active_links")
    document.getElementById(tabName).classList.add("active_tabe")
}
// ======  animation ====== 
AOS.init({
    offset: 250,
    delay: 0, 
    duration: 400
});

// ===== them change ===== 

let clickBtn =document.getElementById('btn');
let buttonText =document.getElementById('btn-text');
let buttonIcon =document.getElementById('btn-icon');
    clickBtn.addEventListener('click', ()=>{
        document.body.classList.toggle('white-them')
        if(document.body.classList.contains('white-them')){
            buttonText.innerHTML="Light";
            buttonIcon.src='./images/sun.png'
        }
        else{
            buttonText.innerHTML="Dark";
            buttonIcon.src='./images/moon.png'
        }
    })

    // ===== smtpjs ======
    function sendEmail(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
    // ===== small device nav links =====
    // var navLink=document.getElementById("navLinks");
    //   function showMenu() {
    //     navLink.style.right = "0";
    //     console.log('click show menu');  
    //   }
      
    //   function hideMenu(){
    //     navLink.style.right ="-200px";
    //     console.log('click hide menu');
    //   }