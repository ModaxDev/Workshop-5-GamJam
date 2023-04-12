import { connectToDatabase } from '../../../lib/conectToDatabase';

export default async function handler(req, res) {
    try {
    const {score, pseudo} = JSON.parse(req.body);
    const {mongoClient} =  await connectToDatabase();
    const db = mongoClient.db('workshop');
    const collection = db.collection('scoreboard');
    const data = await collection.insertOne({
        Score: score,
        Pseudo: pseudo
    });
    res.status(200).json(data);

    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}
