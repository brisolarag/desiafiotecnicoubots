const connection = require('./connection')
const getAll = async () => {
    const [filmes] = await connection.execute('SELECT * FROM filmes')
    return filmes
}

const createFilme = async (filme) => {
    const { title, categoria, avaliacao } = filme
    let createdFilme;
    let query;
    
    if (avaliacao !== undefined) {
        query = 'INSERT INTO filmes (title, categoria, avaliacao) VALUES (?,?,?)'
        createdFilme = await connection.execute(query, [title, categoria, avaliacao])
    } else {
        query = 'INSERT INTO filmes (title, categoria) VALUES (?,?)'
        createdFilme = await connection.execute(query, [title, categoria])
    }

    return {insertId: createdFilme[0].insertId}
}

const deleteFilme = async (id) => {
    const query = 'DELETE FROM filmes WHERE id = ?'
    const removedFilme = await connection.execute(query, [id])
    return removedFilme
}
const updateFilme = async (id, filme) => {
    const { title, categoria, avaliacao } = filme
    let updatedFilme;
    let query;

    if (avaliacao !== undefined) {
        query = 'UPDATE filmes SET title = ?, categoria = ?, avaliacao = ? WHERE id = ?'
        updatedFilme = await connection.execute(query, [title, categoria, avaliacao, id])
    } else {
        query = 'UPDATE filmes SET title = ?, categoria = ? WHERE id = ?'
        updatedFilme = await connection.execute(query, [title, categoria, id])
    }

    return updatedFilme
}

const avaliarFilme = async (id, filme) => {
    const { avaliacao } = filme

    const query = 'UPDATE filmes SET avaliacao = ? WHERE id = ?'
    const filmeAvaliado = await connection.execute(query, [avaliacao, id])
    return filmeAvaliado
}

const naoAvaliado = async () => {
    const query = 'SELECT * from filmes WHERE avaliacao IS NULL'
    const [filmesNaoAvaliados] = await connection.execute(query)
    return filmesNaoAvaliados
}



module.exports = {
    getAll,
    createFilme,
    deleteFilme,
    updateFilme,
    avaliarFilme,
    naoAvaliado
}