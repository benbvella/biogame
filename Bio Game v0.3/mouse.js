crosshair = {
    x: 0,
    y: 0
}

class hitbox {
  constructor(x,y,xl,yl,moveable,color) {
    this.x = x;
    this.y = y;
    this.xl = xl;
    this.yl = yl;
    this.mov = moveable;
    this.color = color;
  }
}
hitboxes = [];
block = [false, 0, 0, 'black'];

function moveMouse(e) {
    crosshair.x = e.clientX - 14;
    crosshair.y = e.clientY - 122;
    cursorCheck();
    drawCursor();
}

function click() {
  x = crosshair.x;
  y = crosshair.y;
  if(block[0]) {
    block[0] = false;
    if(index === 42) {
      if(x < 250) {
        sequence.unshift(block[3])
      } else {
        sequence.push(block[3]);
      }
    }
    if(index === 103) {
      if(x < 250) {
        if(sacchlist[0] == block[3]) {
          sacchlist[0] = undefined;
        } else {
          sacchlist[0] = block[3];
        }
      } else {
        if(sacchlist[1] == block[3]) {
          sacchlist[1] = undefined;
        } else {
          sacchlist[1] = block[3];
        }
      }
    }
    if(index === 110) {
      lipidtype = Math.min(lipidtype + 1, 3)
    }
  } else {
    for(var h = 0; h < hitboxes.length; h++) {
      if(x > hitboxes[h].x && x < hitboxes[h].x + hitboxes[h].xl && y > hitboxes[h].y && y < hitboxes[h].y + hitboxes[h].yl) {
        block = [true,hitboxes[h].xl,hitboxes[h].yl,hitboxes[h].color];
        if(hitboxes[h].mov) {
          hitboxes.splice(h,1);
        }
      }
    }
  }
}
  
function cursorCheck() {
    if (crosshair.x < 500 && crosshair.y < 500 && crosshair.y > 0) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'default';
    }
  }

function drawCursor() {
    var ctx = document.getElementById('mouse-layer').getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    var mouse = new Image();
    mouse.onload = function() {
        ctx.drawImage(mouse, crosshair.x, crosshair.y, 20, 20)
      };
    mouse.src = 'redmouse.png';
    if(block[0]){
      ctx.fillStyle = block[3];
      ctx.fillRect(crosshair.x,crosshair.y,block[1],block[2]);
    }
}