export function isAuthenticated () {
  return !!localStorage.getItem('accessToken')
}
export function login (data) {
  localStorage.setItem('accessToken', data.token)
  window.location.reload(false)
}
export function logout (refresh = true) {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  if (refresh) window.location.reload(false)
}
