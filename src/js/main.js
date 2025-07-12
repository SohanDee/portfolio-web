import $ from 'jquery';
import {gsap} from "gsap";

function startLoader(){
    let counterElm = $(".overlay-counter");
    let currentValue = 0;

    function updateValue(){
        if(currentValue === 100) return;
        currentValue += Math.floor(Math.random() * 10 + 1);
        if(currentValue > 100) currentValue = 100;
        counterElm.text(currentValue);
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateValue, delay);
    }
    updateValue();
    gsap.to(".overlay-text", {
        delay: 3.5,
        duration: 0.25,
        opacity: 0
    })
    gsap.to(".overlay-circle", {
        delay: 3.75,
        duration: 0.5,
        opacity: 1,
        width: "200vw",
        height: "200vw"
    })
    gsap.set(".overlay", {
        delay: 4.25,
        display: "none",
    })
}

startLoader();
