export function createRipples({event, color, target}){

    const button = target === undefined ? event.currentTarget : target;
    const circle = document.createElement("span");

    if(button !== null) {
        const size = button.offsetWidth;
        const pos = button.getBoundingClientRect();
        const x = event.pageX - pos.x - (size / 2);
        const y = event.pageY - pos.y - (size / 2);
        
        circle.style.height = size+'px';
        circle.style.width = size + 'px';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.classList.add("ripple"); 
        if(color) {
            circle.style.backgroundColor = color;
        }
        
        const ripple = button.getElementsByClassName("ripple")[0];
    
    
        if (ripple) {
            ripple.remove();
        }
    
        button.appendChild(circle);
    }

}