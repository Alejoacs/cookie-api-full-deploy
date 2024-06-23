import logsLogin from '../../models/LogsLogin.js';
import user from '../../models/User.js';
import post from '../../models/Post.js'

const getAllLogins = async (req, res) => {
  try {
    const records = await logsLogin.find();
    res.status(200).json({ records });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSexes = async (req, res) => {
  try {
    const sexes = await user.find({}, 'gender');
    res.status(200).json({ sexes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('userId', 'username fullname');

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAllLogins, getAllSexes, getAllPosts };
