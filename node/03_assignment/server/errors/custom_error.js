class CustomErrorAPI extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomErrorAPI
