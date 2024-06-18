import logsLogin from '../../models/LogsLogin';

exports.getAllLogins = async (req, res) => {
  try {
    const records = await logsLogin.find();
    res.status(200).json({ records });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};