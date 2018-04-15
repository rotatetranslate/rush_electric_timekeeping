const removeDuplicates = arr => arr.reduce((uniques, element) => {
  return uniques.includes(element) ? uniques : [...uniques, element]
}, [])

const RE_JWT = 'rushElectricToken'

const getSessionToken = () => sessionStorage.getItem(RE_JWT)

const setSessionToken = token => sessionStorage.setItem(RE_JWT, token)

const removeSessionToken = () => sessionStorage.removeItem(RE_JWT)

const headersWithJwt = jwt => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `JWT ${jwt}`
})

const genRandomPassword = () => {
  const min = 49
  const max = 122
  return [...Array(10)].fill(null).map(x => String.fromCharCode(Math.floor(Math.random() * (max - min)) + min)).join('')
}

export {
  removeDuplicates,
  getSessionToken,
  setSessionToken,
  removeSessionToken,
  headersWithJwt,
  genRandomPassword
}
