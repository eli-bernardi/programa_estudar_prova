class Cubo {
    constructor(lado) {
        this.lado = lado
    }
    calcularAreaFace() {
        return this.lado * this.lado
    }
    calcularAreaTotal() {
        return 6 * this.calcularAreaFace()
    }
    calcularVolume() {
        return Math.pow(this.lado, 3)
    }
    calcularPerimetroFace() {
        return 4 * this.lado
    }
    calcularDiagonal() {
        return this.lado * Math.sqrt(3)
    }
}
module.exports = Cubo