const getFileExtension = (filename) => {
  const filenameArr = filename.split('.')
  return filenameArr[filenameArr.length - 1]
}

module.exports = { getFileExtension }
