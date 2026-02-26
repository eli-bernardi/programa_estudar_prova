const Cone = require('./models/Cone')
const Cilindro = require('./models/Cilindro')

const cone = new Cone(2, 2)
const cilindro = new Cilindro(3, 5)
const AreaBaseCo = cone.calcularAreaBase()
const AreaBaseCi = cilindro.calcularAreaBase()


console.log(`Informações do Cone`)

const areaLateralCo = cone.calcularAreaLateral()
console.log(`Area Lateral = ${areaLateralCo.toFixed(3)}`)

const areaBaseCo = cone.calcularAreaBase()
console.log(`Area da Base = ${areaBaseCo.toFixed(3)}`)

const geratrizCo = cone.calcularGeratriz()
console.log(`Calcular Geratriz = ${geratrizCo.toFixed(3)}`)

const volumeCo = cone.calcularVolume()
console.log(`Volume do cone = ${volumeCo.toFixed(3)}`)

console.log(`-----------------------------`)

console.log(`Informações do Cilindro`)

const areaLateralCi = cilindro.calcularAreaLateral()
console.log(`Area Lateral = ${areaLateralCi.toFixed(3)}`)

const areaBaseCi = cilindro.calcularAreaBase()
console.log(`Area da Base = ${areaBaseCi.toFixed(3)}`)

const volumeCi = cilindro.calcularVolume()
console.log(`Volume do cilindro = ${volumeCi.toFixed(3)}`) 