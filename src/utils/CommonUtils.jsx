/* JSON */
const jsonToQueryString = json => {
  return (
    '?' +
    Object.keys(json)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&')
  );
};

const jsonToBodyFormData = json => {
  var bodyFormData = new FormData();

  Object.keys(json).map(function (key) {
    bodyFormData.append(encodeURIComponent(key), encodeURIComponent(json[key]));
  });
  return bodyFormData;
};

function generateUUID(digits) {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
  let uuid = [];
  for (let i = 0; i < digits; i++) {
    uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join('');
}

const CommonUtils = {
  jsonToQueryString,
  jsonToBodyFormData,
  generateUUID,
};

export default CommonUtils;
