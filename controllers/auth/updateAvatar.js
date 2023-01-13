const fs = require("fs/promises");
const Jimp = require("jimp");
const path = require("path");
const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;

  const img = await Jimp.read(`${tempUpload}`);
  img.resize(250, 250).write(tempUpload);

  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, fileName);

  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", fileName);
  await User.findByIdAndUpdate(_id, { avatarUrl: avatarURL });
  res.json({
    status: "Ok",
    code: 200,
    avatarURL,
  });
};
module.exports = updateAvatar;
