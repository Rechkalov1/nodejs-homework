// const { Contact } = require("../../models/contact");
// const { HttpError } = require("../../helpers");

// const getById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await Contact.findOne({ _id: id });
//     if (!result) {
//       throw HttpError(404, "Not found");
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports = getById;
