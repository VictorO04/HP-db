// Consulta para o banco de dados

//importar prisma client

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

// Criar exportando a variável -> findALL que vai ser o SELECT * FROM bruxos;

export const encontreTodos = async () => {
    // SELECT * FROM bruxos;
    return await prisma.bruxo.findMany({
        orderBy: {nome: 'asc'}
    });
}

export const encontreUm = async (id) => {
    return await prisma.bruxo.findUnique({
        where: {id: Number(id)}
    });
}