

window.addEventListener("mousemove",function(details){



    var rec= document.querySelector("#rect")

    let x  = gsap.utils.mapRange(0,window.innerWidth, 100+rec.getBoundingClientRect().width/2, window.innerWidth-(100+rec.getBoundingClientRect().width/2),details.clientX)

    gsap.to('#rect',{

        left:x+"px",
        ease:Power3

    })


})