import DB from '../../../database/db'

const allAvos = async (request, res) => {
    // La respuesta se visualiza en la consola
    // res.end(JSON.stringify({ hello: 'world' }))
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    res.status(200).json({ data: allEntries, length});
}

export default allAvos

