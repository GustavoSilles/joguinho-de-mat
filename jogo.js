let resultadoDaOperacao = document.getElementById("resultadoDaOperacao")
let resultado2
let x = document.getElementById("x").innerHTML
let y = document.getElementById("y").innerHTML
let operacao = document.getElementById("operacao").innerHTML 

function criarProblema(){
    let nX = 9
    let nY = 9
    let operador

    do{
        nX = Math.floor(Math.random() * 9) + 1
        nY = Math.floor(Math.random() * 9) + 1
        operador = Math.floor(Math.random() * 2)
        if (operador == 0){
            operador = "+"
            resultado2 = nX+nY
        }else{
            operador = "-"
            resultado2 = nX-nY
        }
        
    }while(resultado2 <0 || resultado2 >9)
    document.getElementById("x").innerHTML = nX
    document.getElementById("y").innerHTML = nY
    document.getElementById("sinal").innerHTML = operador
}

function compareAnswer(){

    let answer = document.getElementById("answer").innerHTML
    
    if(answer == resultado2){
        resultadoDaOperacao.innerHTML="CORRETO"
    }else{
        resultadoDaOperacao.innerHTML="ERRADO"
    }
}

document.onkeyup = function (evento){
    let tecla = Number(evento.key)
    document.getElementById('answer').innerHTML = tecla
    compareAnswer()
    // removeEventListener()
    // DWSABILITAR O EVENTO
    // 3S
    setTimeout(function() {
        window.location.reload(1);
      }, 3000);
}
criarProblema()

var i = 0;
// var A = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
      
    }

typeWriter();

window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();
  
  var ?? = 0;
  var cnt = 0;
  var rep = 0;
  
  var c = document.getElementById('canv');
  var $ = c.getContext('2d');
  var w = c.width = window.innerWidth;
  var h = c.height = window.innerHeight;
  var max = Math.min(w, h) / 30 - 5;
  
  var sq_a = new Sq($, {
    x: max -50,
    y: max -50,
    mx: max,
    my: max,
    dx: 1,
    dy: 1,
  }, {
    x: w / 2,
    y: h / 2
  }, 10, 1, 1);
  
  var sq_b = new Sq($, {
    x: max,
    y: max,
    mx: max,
    my: max,
    dx: 1,
    dy: 1,
  }, {
    x: w / 2,
    y: h / 2
  }, 10, -1, 1);
  
  function A() {
    $.clearRect(0, 0, w, h);
    var t = "".split("").join(String.fromCharCode(0x2000));
    
    $.font = "5em Poiret One";
    $.shadowColor = 'hsla(0,5%,5%,.5)';
    $.shadowOffsetX = 5;
    $.shadowOffsetY = 5;
    $.fillText(t, w / 2 - 400, h / 2);
    sq_a.next();
    sq_b.next();
  };
  run();
  
  function run() {
    ?? -= .5;
    window.requestAnimFrame(A);
    window.requestAnimFrame(run, 50);
  }
  
  function draw($, x, y, sq_a, sq_b) {
  
    $.shadowColor = 'hsla(0,0%,0%,.2)';
    $.shadowBlur = 55;
    $.shadowOffsetX = 25;
    $.shdowOffsetY = 30
    $.fillRect(x - 20, y - 25, 25, 25);
  
  }
  
  function Sq($, rad, mid, num, loc, which) {
    this.next = function() {
      rep++;
  
      for (var i = 0; i < num; i++) {
        $.fillStyle = 'hsla(' + (?? * num / i * .5) + ',100%,75%, 1)';
        var dia = i * (Math.PI / 80) *
          (!cnt || which == 2 ? rep : cnt);
  
        if (cnt && which == 1) {
          dia += Math.PI / 80 * rep;
        } else if (dia == (2 * Math.PI / num) *
          (num - 1)) {
          cnt = rep;
        }
        var y = mid.y + rad.y * Math.sin(dia * loc);
        var x = mid.x + rad.x * Math.cos(dia * loc);
  
        draw($, x, y, 0, 0);
      }
      if (cnt) {
        if (rad.x <= -rad.mx || rad.x > rad.mx) {
          rad.dx = -rad.dx;
        }
        if (rad.y <= -rad.my || rad.y > rad.my) {
          rad.dy = -rad.dy;
        }
        rad.x += 1 * rad.dx;
        rad.y += 1 * rad.dy;
      }
    };
  }

  

