AFRAME.registerComponent('random-color', {
    dependencies: ['materials'], 
    
    init: function () {
        //set material component's color property to a random color.
        this.el.setAttribute('material', 'color', getRandomColor());
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}