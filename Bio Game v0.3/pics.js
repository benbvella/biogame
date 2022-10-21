picsources = ["1.png","2,3,8.jpg","2,3,8.jpg","4,9.png","5.jpg","6.png","7.jpg","2,3,8.jpg","4,9.png","10.png","11,12,13,23.png","11,12,13,23.png","11,12,13,23.png","14,15,16,17,18,19,20,21.jpeg","14,15,16,17,18,19,20,21.jpeg","14,15,16,17,18,19,20,21.jpeg","14,15,16,17,18,19,20,21.jpeg","14,15,16,17,18,19,20,21.jpeg","14,15,16,17,18,19,20,21.jpeg","14,15,16,17,18,19,20,21.jpeg","14,15,16,17,18,19,20,21.jpeg","22.png","11,12,13,23.png","24,25.jpg","24,25.jpg",undefined,"Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png",undefined,undefined,"38,40,41.png","39.png","38,40,41.png","38,40,41.png",undefined,undefined,undefined,"45,46.jpg","45,46.jpg","47,48.jpg","47,48.jpg",undefined,undefined,"51,52.jpg","51,52.jpg","53.jpg","54.png","55.jpg","56,57.jpg","56,57.jpg","58.jpg","59,66.png","60.jpg","61,64.jpg","62.jfif","63.jpg","61,64.jpg","65.jpg","59,66.png",undefined,"Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png",undefined,undefined,"85,85,87,88.jpg","85,85,87,88.jpg","85,85,87,88.jpg","85,85,87,88.jpg","89,90,91,92.png","89,90,91,92.png","89,90,91,92.png","89,90,91,92.png","93,94.png","93,94.png","95,96.jpg","95,96.jpg","97.png","98.png","99.png","100.jfif","101.png","102.png",undefined,undefined,"105,106.jpg","105,106.jpg","107,108.jpg","107,108.jpg","109.gif",undefined,undefined,undefined,"113.jpg","114.jpg","115.jpg",undefined,"Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png","Qs.png"];

function changepic(n) {
    var ctx = document.getElementById('pic-layer').getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    if(picsources[n] !== undefined) {
        var pic = new Image();
        pic.onload = function() {
            if(picsources[n] === "Qs.png") {
                ctx.drawImage(pic, 0, 0);
            } else {
                multi = 350 / Math.max(pic.width,pic.height);
                ctx.drawImage(pic, 250 - (pic.width * multi / 2), 25, pic.width * multi, pic.height * multi);
            }
        };
        pic.src = picsources[n];
    }
}