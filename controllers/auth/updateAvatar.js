const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (res, req) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, originalname);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", originalname, fileName);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({ avatarURL });
};
module.exports = updateAvatar;