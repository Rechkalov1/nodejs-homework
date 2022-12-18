const getAll = require("../contacts/getAllContact");
const getById = require("../contacts/getContactById");
const add = require("../contacts/addContact");
const updateById = require("../contacts/updateByContactId");
const remove = require("../contacts/removeContact");

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  remove,
};
