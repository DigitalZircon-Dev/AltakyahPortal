
export default function ({ $axios, redirect }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
    headers: {
        common: {
        Accept: 'application/json',
        'Content-Type': 'application/json;multipart/form-data'
        }
    }
    })

    // Set baseURL to something different
    //api.setBaseURL('https://my_api.com')

    // Inject to context as $api
    inject('api', api)

    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })

    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
  }
