import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
  title: String,
  content: String,
})

const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;