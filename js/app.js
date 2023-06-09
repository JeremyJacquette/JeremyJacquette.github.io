const card = document.querySelectorAll(".bio")


card.forEach ( el => {
    el.addEventListener("mousemove", e =>{
        let elRect =el.getBoundingClientRect()

        let x =e.clientX - elRect.x
        let y =e.clientY - elRect.y

        let midcardWidth = elRect.width / 2
        let midcardHeight = elRect.height /2

        let angleY = -(x - midcardWidth) /8
        let angleX = (y - midcardHeight) /8

        el.children[0].style.transform=`rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
    });
    el.addEventListener("mouseleave",() => {
        el.children[0].style.transform ="rotateX(0) rotateY(0)"
    });
});