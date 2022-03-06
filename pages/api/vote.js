import { getDB } from './_getDB';
import { ObjectId } from 'mongodb';

const handler = async (req, res) => {
    const { id } = req.query;
    if (!id) res.status(400).send('no-id');

    const db = await getDB();
    await db.collection('questions').updateOne({ _id: ObjectId(id) }, { $inc: { votes: 1 } });
    const data = await db.collection('questions').find().limit(50).sort({ votes: -1 }).toArray();
    res.json(data);
}

export default handler;
