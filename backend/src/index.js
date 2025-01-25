const Fastify = require('fastify');
const clienteRoutes = require('./routes/clienteRoutes');
const ativoRoutes = require('./routes/ativoRoutes');

const app = Fastify();

// Registro do plugin CORS
app.register(require('@fastify/cors'), {
  origin: '*',
});

// Registro das rotas
app.register(clienteRoutes);
app.register(ativoRoutes);

// Adicionando uma rota simples para teste
app.get('/ping', async (request, reply) => {
  return { message: 'pong' };
});

// Iniciar o servidor de forma assíncrona
async function start() {
  try {
    // Usando um objeto para passar as opções de host e port
    await app.listen({
      port: 3002,
      host: '0.0.0.0', // Tornando o servidor acessível a todas as interfaces de rede
    });
    console.log('Backend rodando na porta 3002');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
