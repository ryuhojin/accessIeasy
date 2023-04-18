export const checkHTML = () => {};

/**
 * @name checkAlternativeText
 * @description 대체 텍스트 제공
 */
export const checkAlternativeText = (doc: Document) => {
  const _images = doc.getElementsByTagName("img");
  for (let i = 0, len = _images.length; i < len; i++) {
    const _img = _images[i];
    const _alt = _img.getAttribute("alt");

    if (!_alt || _alt.trim() === "") {
        
    }
  }

  const _areas = doc.getElementsByTagName("area");
  for (let i = 0, len = _areas.length; i < len; i++) {
    const _area = _areas[i];
    const _alt = _area.getAttribute("alt");

    if (!_alt || _alt.trim() === "") {
    }
  }
};

/**
 * @name checkAutoPlay
 * @description 자동 실행 체크
 */
export const checkAutoPlay = () => {};
