import { Schema, model } from "mongoose";

const BlogSchema = new Schema({
  title: String,
  description: String

});

const Blog = model('Blog', BlogSchema);