// import clientPromise from "../../lib/mongodb";
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//         const timeout = setTimeout(() => {
//             throw new Error('Function timed out');
//         }, 9000);

//         const client = await clientPromise;
//         const db = client.db('mental-health-app');

//         if (req.method === 'GET') {
//             const journalPrompts = await db
//                 .collection('journal-prompts')
//                 .find({})
//                 .limit(10)
//                 .toArray();

//             clearTimeout(timeout);
//             res.status(200).json(journalPrompts);
//         } else if (req.method === 'POST') {
//             const { title, content } = req.body;

//             if (!title || !content) {
//                 clearTimeout(timeout);
//                 res.status(400).json({ error: 'Title and content are required' });
//                 return;
//             }

//             const result = await db.collection('journal-prompts').insertOne({ title, content });

//             clearTimeout(timeout);
//             res.status(201).json(result);
//         } else {
//             clearTimeout(timeout);
//             res.setHeader('Allow', ['GET', 'POST']);
//             res.status(405).end(`Method ${req.method} Not Allowed`);
//         }
//     } catch (e) {
//         console.error(e);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }