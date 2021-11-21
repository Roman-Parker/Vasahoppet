let canvas = document.querySelector("#canvas");
const width = canvas.width;
const height = canvas.width;

//Checking if the browser supports canvas
if(canvas.getContext){
    let ctx = canvas.getContext("2d");
}

(() => {
    const canvas = document.querySelector('#canvas');
    if (!canvas.getContext) {
        return;
    }

    // get the context
    let ctx = canvas.getContext('2d');

    // set fill and stroke styles
    ctx.fillStyle = '#F0DB4F';
    ctx.strokeStyle = 'red';

    // draw a rectangle with fill and stroke
    ctx.fillRect(50, 50, 150, 100);
    ctx.strokeRect(50, 50, 150, 100);

})();
