import connectMongo from '../../../lib/dbConnect';
import Blog from "../../../models/Blog";
export default async function handler(req, res) {
  let ObjectId = req.query.ObjectId
  await connectMongo();
  let Blogs = await Blog.remove({"_id" : ObjectId })
  res.status(200).send({message: "Done"});
}