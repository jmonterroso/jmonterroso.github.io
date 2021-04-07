import $ from 'jquery';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
// Init ScrollMagic

var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});
gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.page-container section').forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         pin: true,
//         pinSpacing: false
//
//     })
// })
var timeline = new gsap.timeline({}).to("#one", 0.5, {delay: 0.3, y: 100, opacity: 1})
    .to("#two", 0.5, {y: 100, opacity: 1})
    .to("#three", 0.5, {y: 100, opacity: 1})

var timelineAbout = new gsap.timeline({
    scrollTrigger: {

        // pinSpacing: false,
        trigger: ".about",
        // start: "top 50%",
        // end: "bottom top",
        // scrub: 1,

        // pin: true,
        // toggleActions: "restart reverse none reverse"
    }
}).from(".about h2", 0.5, {y: 100, opacity: 0})
    .from(".about .content", 0.5, {y: 100, opacity: 0})
    .from(".about #img", 0.5, {y: 100, opacity: 0})

var timelineExperience = new gsap.timeline({})
    .to('.experience .section-title, .experience .section-description', 0.5, {
        opacity: 1,
        stagger: 1,
        y: -200
    })

    .to(".experience .section-title, .experience .section-description ", 0.5, {
        y: 100,
        delay: 2,
        opacity: 0,
    })

    .to(".experience #experience-1 ", 0.5, {

        y: -50,
        opacity: 1,
    })

    .to(".experience #experience-1 ", 0.5, {
        y: 50,
        delay: 2,
        opacity: 0,
    })

    .to(".experience #experience-2 ", 0.5, {
        y: -50,
        opacity: 1,
    })
    .to(".experience #experience-2", 0.5, {
        y: 50,
        delay: 2,
        opacity: 0,
    })
    .to(".experience #experience-3 ", 0.5, {
        y: -50,
        opacity: 1,
    })
    .to(".experience #experience-3 ", 0.5, {
        y: 50,
        delay: 2,
        opacity: 0,
    })

    .to(".experience #experience-4 ", 0.5, {
        y: -50,
        opacity: 1,
    })
    .to(".experience #experience-4 ", 0.5, {
        y: 50,
        delay: 2,
        opacity: 0,
    }).to(".experience #experience-5 ", 0.5, {
        y: -50,
        opacity: 1,
    })
    .to(".experience #experience-5 ", 0.5, {
        y: 50,
        delay: 2,
        opacity: 0,
    }).to(".experience #experience-6 ", 0.5, {
        y: -50,
        opacity: 1,
    })
    .to(".experience #experience-6 ", 0.5, {
        y: 50,
        delay: 2,
        opacity: 0,
    }).to(".experience #experience-7 ", 0.5, {
        y: -50,
        opacity: 1,
    })
    .to(".experience #experience-7 ", 0.5, {
        y: 50,
        opacity: 0,
    })
    .to(".experience #experience-8 ", 0.5, {
        y: -50,
        opacity: 1,
    })


const scene = new ScrollMagic.Scene({
    triggerElement: '.hero',
    duration: 0,
    triggerHook: 0
})
    .setTween(timeline)
    .addIndicators()
    .addTo(ctrl)
    .setPin('.hero');

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.about',
    triggerHook: 0
})
    // .setTween(timelineAbout)
    .addIndicators()
    .addTo(ctrl)
    .setPin('.about');

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.experience',
    triggerHook: 0,
    duration: 10000,

})
    .setTween(timelineExperience)
    .addIndicators()
    .addTo(ctrl)
    .setPin('.experience');


//
//
// var tween = new TimelineLite({ ease: Power3.easeInOut });
// tween.add(TweenLite.from('.about h2', .5, {
//     y: 50,
//     opacity: 0
// }));
// tween.add(TweenLite.from('.about .content', .5, {
//     y: 50,
//     opacity: 0
// }));
// tween.add(TweenLite.from('.about #img', .5, {
//     x: 50,
//     opacity: 0
// }));
//
// // timeline2.to(".about h2", 0.5, {delay: 0.3, y: 100, opacity: 1})
// // timeline2.to(".about .content", 0.5, {y: 100, opacity: 1})
// // timeline2.to(".about #img", 0.5, {y: 100, opacity: 1})
//
// const scene2 = new ScrollMagic.Scene({
//     triggerElement: '.about',
//     duration: 0,
//     triggerHook: 0
// })
//     .setTween(tween)
//     .addTo(ctrl)
//     .addIndicators()
//     .setPin('.about');
// $("section").each(function () {
//
//     new ScrollMagic.Scene({
//         triggerElement: this
//     })
//         .addIndicators()
//
//         .setPin(this)
//         .addTo(ctrl);
//
// });


// .from("#three", 0.5, {delay: 0.3,y: 100, opacity: 0})
// .from("#three", 1, {x: -100}, 0)
// .from("#four", 1, {x: 100, autoAlpha: 0})

