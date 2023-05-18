import Post from "../models/post.js"

export const search = async (req, res) => {
  try {
    const key = req.params.key;
  
    const data = await Post.find({
      "$or": [
        {"description": {$regex: key, $options: 'i'}},
      ]
    })

    res.status(200).json({
      data: data
    });
  } catch (err) {
    res.status(404).json({
      message: err.message
    });
  }
}