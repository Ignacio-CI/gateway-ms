export default function makeInputObjectFactory({ md5, sanitize }) {
  return Object.freeze({ inputObj })

  function inputObj({ params, errorMsgs }) {
    const {
      token
    } = params;
    
    return Object.freeze({
      token: () => cleanToken({token})
    })
  }

  function cleanToken({ token }) {
    if (token.split(' ')[0] !== 'Bearer') throw new Error ('Invalid token')
    return token.split(' ')[1];
  }
}