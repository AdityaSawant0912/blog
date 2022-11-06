import connectMongo from '../../../lib/dbConnect'
import Blog from '../../../models/Blog'

export default async function handler(req, res) {
  await connectMongo();
  let Blogs = await Blog.find({})
  res.status(200).json({Blogs});
}