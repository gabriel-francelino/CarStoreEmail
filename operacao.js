// import { enviarEmail } from './envia-email.js'
const enviarEmail = require("./envia-email")
const montarCorpoEmail = require("./corpo_email")
const diaDaSemana = require("./dia_semana")

let clientes = [
    { email: 'carol.amante@gmail.com', comunicados: true },
    { email: 'aventureiro.joao@dominio.com', comunicados: false },
    { email: 'tecnologicomaria@gmail.com', comunicados: true },
    { email: 'passeiolivre.lucas@outlook.com', comunicados: false },
    { email: 'viajante.ana@gmail.com', comunicados: false },
    { email: 'motorista.expert.fernanda@gmail.com', comunicados: true },
    { email: 'estrada.artur@gmail.com', comunicados: false },
    { email: 'entusiasta.carla@dominio.com', comunicados: true },
    { email: 'rafaelonliveira2003@gmail.com', comunicados: true },
    { email: 'isabelinha@gmail.com', comunicados: true }
];

for (cliente of clientes) {
    if (cliente.comunicados == true && diaDaSemana() === 1) { 
        const { destino, assunto, corpo } = montarCorpoEmail(cliente.email)

        let { status, message } = enviarEmail(destino, assunto, corpo)

        console.log('[', message, ']')
        console.log('[ Status:', status, ']\n')
    }
}