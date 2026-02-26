class Esfera {
    constructor(raio) {
        this.raio = raio
    }
    calcularDiametro() {
        return 2 * this.raio
    }
    calcularAreaSuperficie() {
        return 4 * Math.PI * Math.pow(this.raio, 2)
    }
    calcularVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.raio, 3)
    }
    calcularCircunferencia() {
        return 2 * Math.PI * this.raio
    }
}

module.exports = Esfera