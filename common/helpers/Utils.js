
module.exports = {
  getParams: (_obj) => {
    const params = new URLSearchParams()
    for (const key in _obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (_obj.hasOwnProperty(key)) {
        params.append(key, _obj[key])
      }
    }
    const request = {
      params
    }
    return request
  },
  convertObjectToFormData: (_obj) => {
    const formdata = new FormData()

    for (const key in _obj) {
      formdata.append(key, _obj[key])
    }
    return formdata
  },
  getPageUrl: () => {
    return window.location.href.replace('/en', '').replace('/ar', '')
  },
  validateImage: (_file) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
    if (!allowedTypes.includes(_file.type)) {
      return 'صيغة الملف غير صحيحة' + ' ' + _file.name
    }
    if (_file._size > 1024 * 1024 * 5) {
      return 'حجم الملف اكبر من المسموح به' + ' ' + _file.name
    }
    return ''
  },
  generateUUID() {
    // Public Domain/MIT
    let d = new Date().getTime()
    if (
      typeof performance !== 'undefined' &&
      typeof performance.now === 'function'
    ) {
      d += performance.now() // use high-precision timer if available
    }
    const newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function(c) {
        const r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
      }
    )

    return newGuid
  },
  stripHtml(html) {
    // Create a new div element
    const temporalDivElement = document.createElement('div')
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html
    // Retrieve the text property of the element (cross-browser support)
    return (
      temporalDivElement.textContent || temporalDivElement.textContent || ''
    )
  }
}
