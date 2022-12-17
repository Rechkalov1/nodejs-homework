const Contact = require("../models/contact");
const { HttpError } = require("../helpers");
const { addSchema } = require("../Schemas/Schema");
const updateById = async (req, res, next) => {
  //   try {
  //     const { error } = addSchema.validate(req.body);
  //     console.log(error);
  //     if (error) {
  //       throw HttpError(400, { message: "missing fields" });
  //     }
  //     const { id } = req.params;
  //     const result = await contacts.updateByContactId(id, req.body);
  //     if (!result) {
  //       throw HttpError(404, "Not found");
  //     }
  //     res.json(result);
  //   } catch (error) {
  //     next(error);
  //   }
};
module.exports = updateById;
