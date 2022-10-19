var ctx = document.getElementById('box-layer').getContext('2d');

function gametick(n) {
    ctx.clearRect(0,0,500,500);
    if(index === n) {
        for(var p = 0; p < hitboxes.length; p++) {
            ctx.fillStyle = hitboxes[p].color;
            ctx.fillRect(hitboxes[p].x,hitboxes[p].y,hitboxes[p].xl,hitboxes[p].yl);
        }
        if(n === 42) {
            ctx.fillStyle = 'black';
            ctx.fillRect(0,180,500,20);
            for(var q = 0; q < sequence.length; q++) {
                ctx.fillStyle = sequence[q];
                ctx.fillRect(250 + (q * 30) - (sequence.length * 15),200,20,80);
            }
            for(var r = 2; r < sequence.length; r+= 3) {
                ctx.fillStyle = 'black';
                aa = aanames[codons[colortonum(sequence[r-2])][colortonum(sequence[r-1])][colortonum(sequence[r])]-1];
                ctx.fillText(aa, 300 + ((r-2) * 30) - (sequence.length * 15) - (aa.split('').length * 5), 300)
            }
        } else if(n === 49) {
            for(var r = 2; r < sequence.length; r+= 3) {
                aa = codons[colortonum(sequence[r-2])][colortonum(sequence[r-1])][colortonum(sequence[r])];
                ctx.fillStyle = 'hsl('+(aa*20)+', 100%, 50%)'
                ctx.beginPath();
                ctx.arc(250 + (r * (200 / sequence.length) / 3) - (sequence.length * 5), Math.sin(aa / Math.PI / 10) + 250, 100 / sequence.length, 0, Math.PI * 2, true);
                ctx.fill();
            }
        } else if(n === 103) {
            1;
        } else if(n === 110) {
            1;
        }
        setTimeout(() => {gametick(n)}, 10);
    } else {
        hitboxes = [];
    }
}

function colortonum(n) {
    if(n === 'red') {
        return 0;
    } else if(n === 'yellow') {
        return 1;
    } else if(n === 'green') {
        return 2;
    } else if(n === 'blue') {
        return 3;
    }
}