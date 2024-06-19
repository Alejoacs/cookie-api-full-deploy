import logsLogin, { find } from '../../models/LogsLogin';
import user from '../../models/User'

exports.getAllLogins = async (req, res) => {
  try {
    const records = await logsLogin.find();
    res.status(200).json({ records });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllSexes = async (req, res) => {
  try {
    const sexes = await user.find({}, 'gender');
    res.status(200).json({ sexes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
