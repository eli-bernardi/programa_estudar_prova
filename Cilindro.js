class Cilindro {
      constructor(raio, altura) {
            this.raio = raio
            this.altura = altura
      }
      calcularAreaBase() {
            return Math.PI * this.raio * this.raio
      }
      calcularAreaLateral() {
            return Math.PI * this.raio * 2
      }
      calcularAreaTotal() {
            return 2 * this.calcularAreaBase() + this.calcularAreaLateral
      }
      calcularVolume() {
            return  this.calcularAreaBase() * this.altura
      }
}
module.exports = Cilindro