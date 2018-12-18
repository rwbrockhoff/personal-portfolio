import { TweenMax, Elastic, Power1 } from 'gsap'
const duration = 0.5

export default {
    show(target){
        return TweenMax 
        .from(target, duration, {
            opacity: 0,
            height: 0,
            immediateRender: false,
            ease: Power1.easeInOut,
        })
    },
    fadeIn(target){
        return TweenMax
        .from(target, duration, {
            opacity: 0,
            ease: Elastic.easeIn.config(.25, 1),
        })
    }
}