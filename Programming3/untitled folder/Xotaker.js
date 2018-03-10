class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
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
        return super.yntrelVandak(ch);
    }
     sharjvel() {
        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 2;
            if (this.energy > 0) {
                this.energy--;
            }



        }

    }
    utel() {
        var norVandak = random(this.yntrelVandak(1));

        if (norVandak) {
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 2;
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
        if (this.energy >= 3) {
            var a = this.yntrelVandak(0)
            var bazmanalvandakner = a;
            var norvandak = random(bazmanalvandakner);
            if (norvandak) {
                var x = norvandak[0]
                var y = norvandak[1];
                var norXotaker = new Xotaker(x, y);
                XotakerArr.push(norXotaker);
                matrix[y][x] = 2;
                this.enregy = 2;
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
