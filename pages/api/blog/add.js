import connectMongo from '../../../lib/dbConnect'
import Blog from '../../../models/Blog'

export default async function addTest(req, res) {
  try {
    await connectMongo();
    console.log(req.body);
    const test = await Blog.create(req.body);

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}