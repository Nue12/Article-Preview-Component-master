const socialIconContainerTag = document.getElementById("socialIcon-container");
const shareTag = document.querySelector(".shareIcon")
const aurthorAndShareDesktopTag = document.getElementById("aurthorAndShare-desktop")
const iconAndShareMobileTag = document.getElementById("IconAndShare-mobile")

let shareIconOn = false;

shareTag.addEventListener("click", () => {
    const shareIconsRemove = () => {
        socialIconContainerTag.innerHTML = "";
        socialIconContainerTag.classList.remove("socialIcon-container")
        shareIconOn = !shareIconOn;
    }
    

    if(shareIconOn === false) {
        socialIconContainerTag.innerHTML ="";
        socialIconContainerTag.classList.add("socialIcon-container")
        
        // iconAndShareMobileTag.style.display = "flex";
    
        const socialIconDesktop = document.createElement("div");
    
        const shareTextTag = document.createElement("span");
        shareTextTag.innerHTML = "SHARE"
    
        const facebookIcon = document.createElement("img");
        facebookIcon.src = "./images/icon-facebook.svg";
        facebookIcon.classList.add("facebookIcon")
    
        const twitterIcon = document.createElement("img");
        twitterIcon.src = "./images/icon-twitter.svg";
        twitterIcon.classList.add("twitterIcon")
    
        const printerestIcon = document.createElement("img");
        printerestIcon.src = "./images/icon-pinterest.svg";
        printerestIcon.classList.add("printerestIcon")
    
    
        const shareIconMobile = document.createElement("img");
        shareIconMobile.src = "./images/icon-share.svg";
        shareIconMobile.classList.add("shareIcon-mobile")

        shareIconMobile.addEventListener("click", () => {
            // shareIconOn = !shareIconOn;
            shareIconsRemove();
            console.log(shareIconOn);
        })
    
        aurthorAndShareDesktopTag.classList.add("mobileView")
    
        socialIconDesktop.append(shareTextTag ,facebookIcon, twitterIcon, printerestIcon);
        socialIconContainerTag.append(socialIconDesktop, shareIconMobile);
    
        socialIconContainerTag.style.visibility = "visible"
        shareIconOn = !shareIconOn;
        console.log(shareIconOn)
    } else {
        shareIconsRemove();
    }

})



