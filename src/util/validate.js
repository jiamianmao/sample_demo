function isMobile(mobile) {
  const pattern = /^1[34578]\d{9}$/
  return pattern.test(mobile)
}

export default function validate(params) {
  let no_pass = []
  return new Promise((resolve, reject) => {
    Object.keys(params).forEach(item => {
      if (item === 'vcode' && params[item].length !== 6) {
        no_pass.push(item)
      } else if (item === 'mobile' && !isMobile(params[item])) {
        no_pass.push(item)
      }
    })

    if (no_pass.length > 0) {
      reject(no_pass)
    } else {
      resolve()
    }
  })
}