import gsap from "gsap";

const openMenu = (firstNode, secondNode, parentNode) => {
    gsap.to(parentNode, {
        duration: 0,
        css: { display: "block" }
    });
    gsap.to([firstNode, secondNode], {
        duration: 0,
        opacity: 1,
        height: "100%",
    });
    gsap.from([firstNode, secondNode], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.1
        }
    });
}

const hideMenu = (firstNode, secondNode, parentNode) => {
    gsap.to([firstNode, secondNode], {
        duration: 0.6,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.07
        }
    });
    gsap.to(parentNode, {
        duration: 1,
        css: { display: "none" }
    });
}

const staggerText = (nodes) => {
    gsap.from(nodes, {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    });
}

const tiltText = (event, isTilted) => {
    if (isTilted === false) {
        gsap.to(event.target, {
            duration: 0.3,
            y: 3,
            skewX: 4,
            ease: 'power3.inOut'
        })
    } else if (isTilted === true) {
        gsap.to(event.target, {
            duration: 0.3,
            y: -3,
            skewX: 0,
            ease: 'power3.inOut'
        })
    }
}

const fadeInMoveUp = (node) => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut"
    });
}

const changeBackground = (node, img) => {
    gsap.to(node, {
        duration: 0,
        background: `url(${img}) center center`
    });
    gsap.to(node, {
        duration: 0.4,
        opacity: 1,
        ease: "power3.inOut"
    });
}

const removeBackground = (node) => {
    gsap.to(node, {
        duration: 0.4,
        opacity: 0,
        ease: "power3.inOut"
    })
}

const animations = {
    openMenu,
    hideMenu,
    staggerText,
    tiltText,
    fadeInMoveUp,
    changeBackground,
    removeBackground
};

export default animations;