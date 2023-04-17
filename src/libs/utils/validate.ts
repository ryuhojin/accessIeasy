export const validateURL = (url: string) => {
  const regex =
    /^(((http(s?))\:\/\/))([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;
  ///^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/; http/s 미포함 해도 되면 아래 정규식 사용
  return new Promise((resolve, reject) => {
    if (!url) return reject();
    if (regex.test(url)) {
      return resolve(true);
    } else {
      return resolve(false);
    }
  });
};
