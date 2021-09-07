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

const fadeInMoveUp = (node) => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut"
    });
}

const animations = {
    openMenu,
    hideMenu,
    staggerText,
    fadeInMoveUp
};

export default animations;