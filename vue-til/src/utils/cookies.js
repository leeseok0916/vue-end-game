// 토큰을 쿠키에 저장
function saveAuthToCookie(value) {
  document.cookie = `til_auth=${value}`;
}

// 유저 정보를 쿠키에 저장
function saveUserToCookie(value) {
  document.cookie = `til_user=${value}`;
}

function getAuthFromCookie() {
  console.log('vue store가 먼저 호출된다');

  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
};
