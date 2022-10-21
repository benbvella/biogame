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
            ctx.fillText("G", 95, 440)
            ctx.fillText("A", 195, 440)
            ctx.fillText("C", 295, 440)
            ctx.fillText("U", 395, 430)
            ctx.fillText("/", 397.5, 445)
            ctx.fillText("T", 395, 460)
        } else if(n === 49) {
            for(var r = 2; r < sequence.length; r+= 3) {
                aa = codons[colortonum(sequence[r-2])][colortonum(sequence[r-1])][colortonum(sequence[r])];
                ctx.fillStyle = 'hsl('+(aa*20)+', 100%, 50%)'
                ctx.beginPath();
                ctx.arc(250 + (r * (200 / sequence.length) / 3) - (sequence.length * 5), Math.sin(aa / Math.PI / 10) + 250, 100 / sequence.length, 0, Math.PI * 2, true);
                ctx.fill();
            }
        } else if(n === 103) {
            ctx.font = "bold 20px sans-serif";
            ctx.fillStyle = 'black';
            ctx.fillText("Carbohydrate Maker", 150, 50)
            if(sacchlist[0] == undefined){
                ctx.fillStyle = 'rgba(50,50,50,0.5)';
            } else {
                ctx.fillStyle = sacchlist[0];
            }
            ctx.fillRect(190,225,50,50);
            if(sacchlist[1] == undefined){
                ctx.fillStyle = 'rgba(50,50,50,0.5)';
            } else {
                ctx.fillStyle = sacchlist[1];
            }
            ctx.fillRect(260,225,50,50);
            ctx.fillStyle = 'black';
            if(sacchlist[0] == undefined && sacchlist[1] == undefined) {
                1
            } else if(sacchlist[0] == undefined) {
                ctx.fillText(monosacchnames[colortonum(sacchlist[1])], 210, 300);
            } else if(sacchlist[1] == undefined) {
                ctx.fillText(monosacchnames[colortonum(sacchlist[0])], 210, 300);
            } else {
                if(colortonum(sacchlist[0]) == 0) {
                    ctx.fillText(disacchnames[colortonum(sacchlist[1])], 210, 300);
                } else if(colortonum(sacchlist[1]) == 0) {
                    ctx.fillText(disacchnames[colortonum(sacchlist[0])], 210, 300);
                } else {
                    ctx.fillText("Invalid Arrangment; Must Contain Glucose", 50, 300);
                }
            }
            ctx.fillText("Glucose", 105, 390)
            ctx.fillText("Fructose", 205, 390)
            ctx.fillText("Galactose", 300, 390)
        } else if(n === 110) {
            ctx.fillStyle = 'blue';
            ctx.fillRect(300,175,50,150);
            ctx.fillStyle = 'black';
            ctx.fillText("Glycerol", 355, 255);
            for(var s = 0; s < lipidtype; s++) {
                ctx.fillStyle = 'yellow';
                ctx.fillRect(200, 190 + s * 50,100,20)
            }
            ctx.fillStyle = 'black';
            ctx.font = "bold 20px sans-serif";
            ctx.fillText(lipidnames[lipidtype], 200, 400);
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