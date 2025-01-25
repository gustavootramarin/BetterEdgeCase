// src/services/clienteService.js
const prisma = require('../prismaClient');

async function getAllClientes() {
  try {
    return await prisma.cliente.findMany();
  } catch (error) {
    throw new Error('Erro ao listar clientes');
  }
}

async function createCliente({ nome, email, status }) {
  try {
    return await prisma.cliente.create({
      data: {
        nome,
        email,
        status,
      },
    });
  } catch (error) {
    console.error('Erro ao criar cliente', error);
    throw new Error('Erro ao criar cliente');
  }
}


async function updateCliente(id, { nome, email, status }) {
  return await prisma.cliente.update({
    where: { id: parseInt(id) },
    data: { nome, email, status },
  });
}

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Conexão com o banco de dados bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
  }
}
testConnection();

module.exports = {
  getAllClientes,
  createCliente,
  updateCliente,
};
