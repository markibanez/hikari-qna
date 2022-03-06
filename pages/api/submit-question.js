import { getDB } from './_getDB';

const handler = async (req, res) => {
    const { uid, name, question } = req.query;

    if (!uid) {
        res.status(400).send('no-uid');
        return;
    }
    if (!name) {
        res.status(400).send('no-name');
        return;
    }
    if (!question){
        res.status(400).send('no-question');
        return;
    }

    const db = await getDB();
    const votes = 0;
    await db.collection('questions').insertOne({ uid, name, question, votes });
    res.status(200).json('question-saved');
}

export default handler;
