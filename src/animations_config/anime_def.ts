type Motion={
    initial: {},
    animate: {},
    transition: {},
    exist:{}
}

export const staggered_animation = (
    delay: number = 0, 
    duration: number = 0.5, 
    x: number = 0, 
    y: number = 0
) => {
    return {
        initial: {
            x, // shorthand for x: x
            y,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration,
                delay, // Applies the stagger delay on enter
                ease: [0, 0.71, 0.2, 1.01]
            }
        },
        exit: { // Fixed typo from 'exist'
            x,
            y,
            opacity: 0,
            transition: {
                duration: duration * 0.5, // Optional: make exits slightly faster
                ease: "easeOut"
                // No delay here, so they all exit smoothly at once
            }
        }
    } 
}


export const log_box1:Motion ={
    initial: {
        y:-100,
        opacity:0
    },
    animate: {
        y: 0,
        opacity:1
    },
    transition: {
        duration: 0.5,
        ease: 'easeInOut'
    },
    exist:{
        y:-100,
        opacity:0
    }
}

export const log_box2:Motion ={
    initial: {
        y:100,
        opacity:0
    },
    animate: {
        y: 0,
        opacity:1
    },
    transition: {
        duration: 0.5,
        ease: 'easeInOut'
    },
    exist:{
        y:100,
        opacity:0
    }
}

export const modal_movement = {
    initial:{
        opacity:0,
        filter: "blur(4px)"
    },
    animate:{
        opacity:1,
        filter: "blur(0px)"
    },
    transition:{
        duration: 0.6,
        ease: 'easeInOut'
    },
    exist:{
        opacity:0,
        filter: "blur(4px)"
    }
}

export const button_animation = {
    initial:{
        scale:1
    },
    hover:{ 
        scale: 1.1,
    },
    pressed:{ 
        scale: 0.4
    },
    transition:{
        duration: 0.15,
        ease: 'easeInOut'
    }
}

export const side_nav_animation = {
    initial: {
        x:100,
        opacity:0
    },
    animate: {
        x: 0,
        opacity:1
    },
    transition: {
        duration: 0.5,
        ease: 'easeInOut'
    },
    exist:{
        x:-100,
        opacity:0
    }
}

export const dash_animation = {
    initial: {
        y:-100,
        opacity:0
    },
    animate: {
        y: 0,
        opacity:1
    },
    transition: {
        duration: 0.8,
        ease: 'easeInOut'
    },
    exist:{
        y:100,
        opacity:0
    }
}