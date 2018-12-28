// In vino enim veritas. Vinum in volumine. Volumen veritatis decernit
var svgpnt = [];
svgpnt[0] = [0, 220,
    140, 230,
    250, 300,
    450, 180,
    520, 250,
    700, 200,
    800, 250,
    900, 180,
    1000, 50];
svgpnt[1] = [0, 330,
    150, 280,
    270, 350,
    400, 310,
    520, 330,
    630, 290,
    780, 320,
    870, 250,
    1000, 180];
svgpnt[2] = [0, 470,
    190, 390,
    290, 420,
    450, 400,
    520, 450,
    700, 390,
    800, 420,
    900, 320,
    1000, 300];

var s = Snap("#svgLands");
// var pl = s.polyline(svgpnt[0]);
// pl.addClass("svgline");
// var p2 = s.polyline(svgpnt[1]);
// p2.addClass("svgline");
// var p3 = s.polyline(svgpnt[2]);
// p3.addClass("svgline");
// Land 1 --------------
var apl1 = svgpnt[0].slice();
// for (var i = 0; i < apl1.length; i += 2) {
//      apl1[i + 1] += 5;
// }
for (var l = svgpnt[1].length, i = 0; i < l; i += 2) {
    apl1.push(svgpnt[1][l - i - 2]);
    apl1.push(svgpnt[1][l - i - 1]);  //- 5);
}
var pl1 = s.polygon(apl1);
pl1.addClass("svgland1")

// Land 2 ----------------
var apl2 = svgpnt[1].slice();
// for (var i = 0; i < apl2.length; i += 2) {
//       apl2[i + 1] -=4 ;
// }
for (var l = svgpnt[2].length, i = 0; i < l; i += 2) {
    apl2.push(svgpnt[2][l - i - 2]);
    apl2.push(svgpnt[2][l - i - 1]); // - 5);
}
var pl2 = s.polygon(apl2);
pl2.addClass("svgland2")
// Land 3 ----------------
var apl3 = svgpnt[2].slice();
// for (var i = 0; i < apl3.length; i += 2) {
//      apl3[i + 1] -= 4;
// }
var pl3 = s.polygon(apl3.concat([1000, 500, 0, 500]));
pl3.addClass("svgland3")

var pl = s.polyline(svgpnt[0]);
pl.addClass("svgline");
var p2 = s.polyline(svgpnt[1]);
p2.addClass("svgline");
// for (var i = 0; i < svgpnt[2].length; i += 2) {
//     svgpnt[2][i + 1] -= 4;
// }
var p3 = s.polyline(svgpnt[2]);

p3.addClass("svgline");

// style="background: #5c42b1"

$(function () {
    var divland = document.getElementById("divland");
    var pc = new PlayColor();
    setInterval(function () {
        divland.style.backgroundColor = pc.getColor();
    }, 200);
 console.log("aaaaa");
    $('#myImg').on("click",function () {
        console.log("aaa");
    });
    $('#myImg').hover(function () {
        console.log("in");
    },function () {
        console.log("out");
    })

})

function PlayColor() {
    this.cR = calcCol();
    this.cG = calcCol();
    this.cB = calcCol();
    this.nR = calcCol();
    this.nG = calcCol();
    this.nB = calcCol();

    this.getColor = function () {
        this.stepCol();
        return "rgba(" + this.cR + "," + this.cG + "," + this.cB + ")";
    }

    this.stepCol = function () {
        this.step1Col(this.cR, this.nR, 1);
        this.step1Col(this.cG, this.nG, 2);
        this.step1Col(this.cB, this.nB, 3);
    }

    this.step1Col = function (cC, nC, cn) {
        if (cC == nC) {
            switch (cn) {
                case 1: {
                    this.nR = calcCol();
                    break;
                }
                case 2: {
                    this.nG = calcCol();
                    break;
                }
                case 3: {
                    this.nB = calcCol();
                    break;
                }
            }
        }
        else {
            switch (cn) {
                case 1: {
                    this.cR += (cC < nC) ? 1 : -1;
                    break;
                }
                case 2: {
                    this.cG += (cC < nC) ? 1 : -1;
                    break;
                }
                case 3: {
                    this.cB += (cC < nC) ? 1 : -1;
                    break;
                }
            }
        }
    }

    function calcCol() {
        return Math.floor(Math.random() * 128);
    }
}