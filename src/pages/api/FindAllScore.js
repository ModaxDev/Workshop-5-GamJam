import { connectToDatabase } from '../../../lib/conectToDatabase';

export default async function handler(req, res) {
    try {
    const {mongoClient} =  await connectToDatabase();
    const db = mongoClient.db('workshop');
    const collection = db.collection('scoreboard');
    const data = await collection.find({}).sort({Score: -1}).limit(10).toArray();
    res.status(200).json(data);

    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}
