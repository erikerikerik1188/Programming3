var matrix = [
    [2, 0, 1, 0, 6,0,6,5,0,4,0,4,0,4,0,0,0,3,0,0,2,3,1,1,1,0,0,4,0,0,0,1,1],
    [1, 6, 0, 3, 4,0,0,4,0,6,0,0,0,5,2,3,4,1,5,0,0,0,2,1,2,0,2,0,1,2,0,0,0],
    [4, 1, 2, 0, 0,2,0,2,2,5,0,5,0,0,0,3,0,0,0,0,0,0,3,4,5,1,0,2,0,1,2,0,1],
    [0, 0, 1, 0, 4,0,6,0,4,0,0,5,4,0,1,1,1,1,1,1,1,0,6,6,5,0,0,0,0,0,0,0,0],
    [1, 1, 0, 6, 0,0,0,0,3,3,5,4,0,3,0,0,0,4,0,5,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [1, 1, 0, 2, 0,0,0,0,6,0,0,0,4,0,1,1,2,0,2,0,0,4,0,0,0,1,2,1,2,2,0,0,0],
    [1, 1, 3, 4, 0,4,0,0,2,0,5,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,0,2,0,0],
	[0, 0, 2, 3, 0,2,0,0,2,0,2,0,0,6,0,0,3,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1],
	[0, 0, 1, 0, 4,0,6,0,4,5,0,5,4,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,2],
	[2, 0, 1, 0, 6,0,6,5,0,4,0,4,0,4,0,0,0,0,3,4,2,3,0,0,2,0,0,0,0,0,0,0,0],
	[0, 0, 2, 0, 0,2,4,0,2,0,2,0,0,6,0,4,0,0,0,0,0,0,1,1,1,1,1,2,1,2,1,2,0],
	[1, 1, 0, 6, 0,3,0,2,0,3,4,4,0,0,0,0,0,0,0,0,0,4,5,5,4,0,0,0,1,2,0,1,0],
	[1, 1, 0, 6, 0,0,0,0,3,3,5,4,0,3,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
	[0, 0, 1, 0, 4,0,6,0,4,5,0,5,4,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,2],
	[0, 1, 2, 0, 0,2,0,2,2,5,0,5,0,0,0,0,0,0,0,0,0,0,3,4,5,1,0,2,0,1,2,0,1],

	
	
	
];
var side = 70;

var grassArr = [];
var XotakerArr = [];
var GishatichArr = [];
var AmenakerArr = [];
var VorsordArr = [];


function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xk = new Xotaker(x, y);
                XotakerArr.push(xk);
            }
            else if (matrix[y][x] == 4) {
                var gsh = new Gishatich(x,y)
                GishatichArr.push(gsh);
            }
			  else if (matrix[y][x] == 5) {
                var vrs = new Vorsord(x,y)
                VorsordArr.push(vrs);
            }
		  else if (matrix[y][x] == 6) {
                var amn = new Amenaker(x,y)
                AmenakerArr.push(amn);
            }
		
      }
	}

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("black");
                rect(x * side, y * side, side, side);
            }

 
         else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
			else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
		 
		    else if (matrix[y][x] == 6) {
                fill("violet");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal()
    }
    for (var i in XotakerArr) {
        XotakerArr[i].sharjvel()
     
       
            XotakerArr[i].utel()
      

       
            XotakerArr[i].bazmanal()

            XotakerArr[i].mahanal()
    }
	
	for (var i in GishatichArr) {
        GishatichArr[i].sharjvel()
		
		GishatichArr[i].utel()
		
		GishatichArr[i].bazmanal()
		
		GishatichArr[i].mahanal()
		
		
	}
    
		for (var i in VorsordArr) {
        VorsordArr[i].sharjvel()
		
		VorsordArr[i].utel()
		
		VorsordArr[i].bazmanal()
		
		VorsordArr[i].mahanal()
		
	}
	
		for (var i in AmenakerArr) {
        AmenakerArr[i].sharjvel()
		
		AmenakerArr[i].utel()
		
	}
}









