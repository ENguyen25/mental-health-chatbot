import clientPromise from "../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("mental-health-app");

        if (req.method === 'GET') {
            const journalPrompts = await db
                .collection("journal-prompts")
                .find({})
                .limit(10)
                .toArray();
            res.status(200).json(journalPrompts);
        } else if (req.method === 'POST') {
            const { prompt } = req.body;
            if (!prompt) {
                return res.status(400).json({ message: "Prompt is required" });
            }
            const result = await db
                .collection("journal-prompts")
                .insertOne({ prompt });
            res.status(201).json(result);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}