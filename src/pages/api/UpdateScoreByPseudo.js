import { connectToDatabase } from '../../../lib/conectToDatabase';

export default async function handler(req, res) {
    try {
    const {score, pseudo} = JSON.parse(req.body);
    const {mongoClient} =  await connectToDatabase();
    const db = mongoClient.db('workshop');
    const collection = db.collection('scoreboard');
    const data = await collection.updateOne(
        {Pseudo: pseudo},{ $set: { Score: score }
    });
    res.status(200).json(data);
    if(data.matchedCount === 0) {
        await collection.insertOne({Pseudo: pseudo, Score: score});
    }
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}
