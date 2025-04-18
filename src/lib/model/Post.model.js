import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
 
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 50,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 500,
    },
    hashtags: {
      type: [String],
      required: true,
      validate: {
        validator: function (array) {
          return array.every((tag) => typeof tag === "string");
        },
        message: "All hashtags must be strings.",
      },
      index: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;