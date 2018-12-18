import {TweenMax, Elastic, Bounce} from 'gsap'
const duration = 0.5

export default {
    show(target, cb){
        return TweenMax
        .from(target, duration, {
            opacity: 0,
            height: 0,
            ease: Elastic.easeOut.config(.25, 1),
        })
    }
}