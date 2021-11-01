const User = require('../models/user')

const getNoteById = async (userId, noteId) => {
  const user = await User.findOne({ _id: userId })
  const { notes } = user
  let index
  let note = notes.filter((n, i) => {
    if (JSON.stringify(n._id) === JSON.stringify(noteId)) {
      index = i
      return n
    }
  })[0]

  return [notes, note, index]
}

module.exports = getNoteById
