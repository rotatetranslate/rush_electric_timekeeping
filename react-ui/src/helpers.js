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

const fetchUserInfo = async jwt => {
  const headers = headersWithJwt(jwt)
  try {
    const res = await fetch('/auth/jwt', {
      method: 'post',
      headers
    })
    const { user } = await res.json()
    return user
  } catch(err) {
    console.log(err)
  }
}

export {
  removeDuplicates,
  getSessionToken,
  setSessionToken,
  removeSessionToken,
  headersWithJwt,
  fetchUserInfo
}
