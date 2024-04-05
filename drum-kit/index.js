const noOfDrums=document.querySelectorAll(".box").length;
const arrayOfDrums=[...Array(noOfDrums).keys()];

const playSound=(drumName)=>{

    if(drumName=="w"){
        const tom1=new Audio("./sounds/tom-1.mp3");
        tom1.play();
    }
    if(drumName=="a"){
        const tom2=new Audio("./sounds/tom-2.mp3");
        tom2.play();
    }
    if(drumName=="s"){
        const tom3=new Audio("./sounds/tom-3.mp3");
        tom3.play();
    }
    if(drumName=="d"){
        const tom4=new Audio("./sounds/tom-4.mp3");
        tom4.play();
    }
    else{
        const tom5=new Audio("./sounds/crash.mp3");
        tom5.play();
    }
    
}

const btnClicked=(drumName)=>{
    arrayOfDrums.map((i)=>{
        if(document.querySelectorAll(".box h1")[i].innerHTML==drumName){
            document.querySelectorAll(".box")[i].classList.add("pressed");
            setTimeout(()=>{
                document.querySelectorAll(".box")[i].classList.remove("pressed");
            },150);
        }
    })
}

document.addEventListener("keydown",(event)=>{
    playSound(event.key);
    btnClicked(event.key);
})

arrayOfDrums.map((i)=>{
    document.querySelectorAll(".box")[i].addEventListener("click",()=>{
        const drumName=document.querySelectorAll(".box h1")[i].innerHTML;
        console.log(drumName);
        btnClicked(drumName);
        playSound(drumName);
    });
});

