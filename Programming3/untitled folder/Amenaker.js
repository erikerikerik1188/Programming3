class Amenaker {
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
            matrix[norVandak[1]][norVandak[0]] = 6;
            if (this.energy > 0) {
                this.energy--;
            }
        }
    }

    utel() {
        var randomIndex = Math.round(Math.random() + 4)
        var norVandak = random(this.yntrelVandak(randomIndex));

        if (norVandak) {
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 6;
            if (randomIndex == 4) {
                for (var i in GishatichArr) {
                    if (GishatichArr[i].x == this.x && GishatichArr[i].y == this.y) {
                        GishatichArr.splice(i, 1);
                        if (this.energy < 5) {
                            this.energy++;
                        }
                    }

                }
            }

            if (randomIndex == 5) {
                for (var i in VorsordArr) {
                    if (VorsordArr[i].x == this.x && VorsordArr[i].y == this.y) {
                        VorsordArr.splice(i, 1);
                        if (this.energy < 5) {
                            this.energy++;
                        }
                    }

                }
            }
        }
    }


}