let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let cloud = document.getElementById("cloud");

ctx.fillStyle = "rgb(0, 0, 225)"
ctx.fillRect(0, 0, 400, 400)

ctx.fillStyle = "red";
ctx.strokeStyle = "rgb(225, 0, 0)";
ctx.beginPath();
ctx.arc(200, 300, 25, 0, 2 * Math.PI);
ctx.fill();

ctx.strokeStyle = "green";
ctx.fillStyle = "rgb(0, 225, 0)";
ctx.fillRect(0, 300, 400, 400);

ctx.drawImage(cloud, 100, 100);
ctx.drawImage(cloud, 150, 85);