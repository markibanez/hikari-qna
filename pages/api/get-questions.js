import { getDB } from './_getDB';

const handler = async (req, res) => {
    const db = await getDB();
    const data = await db.collection('questions').find().limit(50).sort({ votes: 1 }).toArray();
    res.status(200).json(data);
}

export default handler;
