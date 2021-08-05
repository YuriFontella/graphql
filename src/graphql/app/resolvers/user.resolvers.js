const users = require('../../../../data/users.json')

module.exports = {
  Query: {
    users: async (parent, args, context) => {
      return users
    }
  }
}