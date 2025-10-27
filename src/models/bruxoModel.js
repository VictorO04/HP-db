import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.bruxo.findMany({
        orderBy: {nome: 'asc'}
    });
}

export const encontreUm = async (id) => {
    return await prisma.bruxo.findUnique({
        where: {id: Number(id)}
    });
}

export const criar = async (dado) => {
    return await prisma.bruxo.create({
        data: {
            nome: dado.nome,
            casa: dado.casa,
            patrono: dado.patrono,
            varinha: dado.varinha,
            anoMatricula: dado.anoMatricula
        }
    })
}

export const deletar = async (id) => {
    return await prisma.bruxo.delete({
        where: { id: Number(id) }
    });
}