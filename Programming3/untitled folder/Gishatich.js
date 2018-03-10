class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.index = 2;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];

        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 4;
            if (this.energy > 0) {
                this.energy--;
            }
        }
    }

    utel() {
        var norVandak = random(this.yntrelVandak(2));

        if (norVandak) {
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 4;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    if (this.energy < 5) {
                        this.energy++;
                    }
                }

            }
        }
    }
    bazmanal() {
        if (this.energy >= 1) {
            var a = this.yntrelVandak(0)
            var bazmanalvandakner = a;
            var norvandak = random(bazmanalvandakner);
            if (norvandak) {
                var x = norvandak[0]
                var y = norvandak[1];
                var norXotaker = new Xotaker(x, y);
                XotakerArr.push(norXotaker);
                matrix[y][x] = 4;
                this.enregy = 4;
            }


        }
    }
    mahanal() {
        if (this.energy <= 2) {
            for (var i in XotakerArr) {
                if (XotakerArr[i].x == this.x && XotakerArr[i].y == this.y) {
                    XotakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    console.log("mahanal")
                    break;
                }
            }
        }
    }

}

