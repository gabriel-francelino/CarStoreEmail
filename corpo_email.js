const montarCorpoEmail = (email) => {
    let destino = email
    let assunto = 'Novidades Exclusivas e Ofertas Irresistíveis na CarStore!'
    let corpo = `
    Prezado(a) cliente,

    Esperamos que esta mensagem o encontre bem e cheio de energia para uma nova semana! Na CarStore, valorizamos cada visita que você faz às nossas lojas, e é com grande entusiasmo que trazemos as últimas novidades e ofertas imperdíveis para você, nosso cliente especial.

    Descubra os Veículos do Momento:

    Nós selecionamos cuidadosamente os veículos mais emocionantes e inovadores para você. Seja você um apaixonado por tecnologia, um explorador da estrada ou alguém em busca de praticidade, temos o veículo perfeito para atender aos seus desejos. De SUVs luxuosos a carros compactos econômicos, nossa frota foi atualizada para atender a todos os estilos de vida.

    Os Mais Vendidos do Mês:

    Curioso para saber quais foram os favoritos dos nossos clientes no último mês? Aqui estão alguns dos modelos mais vendidos que continuam conquistando corações:

    Modelo XZ: A Combinação Perfeita de Estilo e Desempenho.
    Carro Aventureiro Y: Sua Melhor Companhia nas Aventuras do Dia a Dia.
    Econômico ZW: Redefinindo a Eficiência de Combustível.
    Condições Exclusivas de Aquisição:

    Na CarStore, queremos tornar sua experiência de compra o mais excepcional possível. Por isso, preparamos condições especiais para aquisição este mês. Aproveite taxas de financiamento atrativas, descontos exclusivos e pacotes de manutenção que farão a diferença.

    Visite-nos Novamente:

    Convidamos você a nos visitar novamente esta semana para explorar pessoalmente essas incríveis opções de veículos e aproveitar as ofertas exclusivas. Nossa equipe está pronta para recebê-lo de braços abertos e ajudá-lo a encontrar o carro dos seus sonhos.

    Agradecemos por escolher a CarStore como sua concessionária de confiança. Estamos ansiosos para vê-lo em breve e fazer parte da sua jornada automotiva.

    Atenciosamente,

    CarStore - Sua Concessionária de Confiança
    `

    return { destino: destino, assunto: assunto, corpo: corpo }
}

module.exports = montarCorpoEmail;
