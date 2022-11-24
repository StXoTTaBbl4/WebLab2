var r = document.querySelector('.r');
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let elemLeft = canvas.offsetLeft + canvas.clientLeft,
    elemTop = canvas.offsetTop + canvas.clientTop,
    w = parseInt(canvas.width),
    h = parseInt(canvas.height);
ctx.fillStyle = "solid black";
ctx.strokeStyle = '#000000';
ctx.lineWidth = 1;
buildPlot();

canvas.addEventListener('click', function(event) {
    let del = r.value;
    let x = Number((event.pageX - elemLeft));
    let y = Number((event.pageY - elemTop - 80));
    let x_4dot = x;
    let y_4dot = y;
    console.log('Px. x: ' + x +' y: '+y);

    if(r.value.length != 0){
    if(w/2<=x && x<=w && 0<=y && y<=h/2){
        console.log('1 sector');
        x = ((x-h/2)/(h/2-20))*del;
        y = ((y-210)/190)*del;
    }
    else if(0<=x && x<w/2 && 0<=y && y<h/2){
        console.log('2 sector');
        x = ((x-20)/190 - 1)*del;
        y = ((y-210)/190)*del;
    }
    else if(0<=x && x<=w/2 && h/2<=y && y<=h){
        console.log('3 sector');
        x = ((x-20)/190 - 1)*del;
        y = ((y-210)/190 - 1)*del;
    }
    else if(w/2<x && x<=w && h/2<y&& y<=h){
        console.log('4 sector');
        x = ((x-210)/190)*del;
        y = ((y-210)/190 - 1)*del;   
    }
    else if (x === w/2 && y === h/2) {
        console.log('Beggining of coord.sys.');
        x = 0;
        y = 0;
    }
    else
        alert('Ты вообще в каком измерении шаман %#$!@! ?!');
    // Для округления до 10^-1: y = Math.round((y+Number.EPSILON)*10)/10;
    console.log('Coord. x: ' + x +' y: '+y + " R: " + del);

    
    let graphX = Math.round(x+Number.EPSILON);
    let graphY = Math.round(y+Number.EPSILON);
    console.log("Rounded " + "x: " + graphX + " y:" + graphY);

    if(graphX > 5)
      document.querySelector("#n-5").checked = true;
    else if(graphX < -3)  
      document.querySelector("#n-3").checked = true;
    else
      document.querySelector("#n"+graphX).checked = true;

    if(graphY > 3)
      document.querySelector(".y").value = 3;
    else if(graphX < -5)  
      document.querySelector(".y").value = -5;
    else
      document.querySelector(".y").value = graphY;

        $.ajax({
            url: 'controller',
            method: "GET",
            data: "selectedX="+graphX +"&y_value="+graphY +"&r_value="+del + "&timezone=" + new Date().getTimezoneOffset(),
            dataType: "html",

            success: function(msg){
                console.log("Data recived");
                drawDot(x_4dot,y_4dot);
                console.log(msg);
                $("#results").html(msg);
            },
            error: function(error){
                console.log("Data recive error");
                console.log(error);
                $(".validate_button").attr("disabled", false);
            },
        })

    }else
    alert("Укажите R");

    

    //alert('clicked an element '+x+' '+y);

}, false);

function buildPlot(){
    ctx.fillStyle = '#0080FF';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // //Пусть максимум по X и Y - Width и Height -40px
    let x = w-40;
    let y = h-40;

    // //1 сектор
    ctx.beginPath();
    ctx.moveTo(w/2,h/2);
    ctx.lineTo(w/2,h/2-y/4);
    ctx.lineTo(w/2+x/4,h/2);
    ctx.lineTo(w/2,h/2);
    ctx.lineTo(w/2-x/4,h/2);
    ctx.fill();

    // //3 сектор
    ctx.moveTo(w/2,h/2);
    ctx.arc(w/2,h/2,x/4,Math.PI/2,Math.PI);
    ctx.fill();

    // //4 сектор
    ctx.beginPath();
    ctx.moveTo(w/2,h/2);
    ctx.lineTo(w/2,h/2+y/4);
    ctx.lineTo(w/2+x/2,h/2+y/4);
    ctx.lineTo(w/2+x/2,h/2);
    ctx.lineTo(w/2,h/2);
    ctx.fill();

    //Направляющие оси
    //Y
    ctx.beginPath();
    ctx.moveTo(w/2,h);
    ctx.lineTo(w/2,0);
    ctx.moveTo(w/2,0);
    ctx.lineTo(w/2-5,10);
    ctx.moveTo(w/2,0);
    ctx.lineTo(w/2+5,10);
    ctx.stroke();
    //X
    ctx.beginPath();
    ctx.moveTo(0,h/2);
    ctx.lineTo(w,h/2);
    ctx.moveTo(w,h/2);
    ctx.lineTo(w-10,h/2+5);
    ctx.moveTo(w,h/2);
    ctx.lineTo(w-10,h/2-5);
    //риски для делений
    //X
    ctx.moveTo(w/2+x/4,h/2+5);
    ctx.lineTo(w/2+x/4,h/2-5);
    ctx.moveTo(w/2+x/2,h/2+5);
    ctx.lineTo(w/2+x/2,h/2-5);
    ctx.moveTo(w/2-x/4,h/2+5);
    ctx.lineTo(w/2-x/4,h/2-5);
    ctx.moveTo(w/2-x/2,h/2+5);
    ctx.lineTo(w/2-x/2,h/2-5);
    //Y
    ctx.moveTo(w/2+5,h/2-y/4);
    ctx.lineTo(w/2-5,h/2-y/4);
    ctx.moveTo(w/2+5,h/2-y/2);
    ctx.lineTo(w/2-5,h/2-y/2);
    ctx.moveTo(w/2+5,h/2+y/4);
    ctx.lineTo(w/2-5,h/2+y/4);
    ctx.moveTo(w/2+5,h/2+y/2);
    ctx.lineTo(w/2-5,h/2+y/2);
    ctx.stroke();

    //Легенда
    ctx.fillStyle = '#000';
    ctx.font = '15px serif';
    ctx.fillText('x',w-10,h/2+15);
    ctx.fillText('y',w/2-15,10);

    ctx.font = '16px serif';
    ctx.fillText('R/2',w/2 + x/4 - 10,h/2 - 10);
    ctx.fillText('R',w/2 + x/2 - 10,h/2 - 10);
    ctx.fillText('-R/2',w/2 - x/4 - 14,h/2 - 10);
    ctx.fillText('-R',w/2 - x/2 - 14,h/2 - 10);
    ctx.fillText('R/2',w/2+10,h/2-y/4 + 5);
    ctx.fillText('R',w/2+10,h/2-y/2 + 5);
    ctx.fillText('-R/2',w/2+10,h/2+y/4 + 5);
    ctx.fillText('-R',w/2+10,h/2+y/2 + 5);
}

function drawDot(x,y){
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(x,y,2,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
