import connectMongo from '../../../lib/dbConnect'
import Blog from '../../../models/Blog'

export default async function addTest(req, res) {
  try {
    console.log(req.body);
    await connectMongo();
    let test;
    if(req.body.title != ''){
      test = await Blog.updateOne({"_id" :req.body._id}, {"title":req.body.title});
      
    }
    if(req.body.content != ''){
      test = await Blog.updateOne({"_id" :req.body._id}, {"content":req.body.content});
    }
    console.log(test);
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}