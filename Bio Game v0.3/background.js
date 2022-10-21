function drawBackground() {
    var ctx = document.getElementById('background-layer').getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = 'rgb(100,175,250)'
    ctx.fillRect(0,0,500,500)
}

drawBackground()