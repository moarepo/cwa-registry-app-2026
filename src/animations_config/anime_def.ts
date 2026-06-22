type Motion={
    initial: {},
    animate: {},
    transition: {},
    exist:{}
}

export const staggered_animation = (delay:number, duration:number, x:number, y:number) =>{
    return {
        initial:{
            x: x || 0,
            y: y || 0,
            opacity: 0,
        },
        animate:{
            x: 0,
            y: 0,
            opacity: 1
        },
        transition:{
            duration: duration,
            delay: delay,
            ease: [0, 0.71, 0.2, 1.01]
        },
        exist:{
            x: x || 0,
            y: y || 0,
            opacity: 0,
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