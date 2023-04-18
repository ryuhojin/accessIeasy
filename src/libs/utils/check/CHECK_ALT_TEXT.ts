/**
 * @name CHECK_ALT_TEXT
 * @description 텍스트 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있도록 대체 텍스트를 제공하여야 한다.
 * KWAC 2.1 기준 24개 검사항목중 1번항목
 */
export const CHECK_ALT_TEXT = (doc: Document) => {
  const imageElements: HTMLCollectionOf<HTMLImageElement> =
    doc.getElementsByTagName("img");
  const inputElements: HTMLCollectionOf<HTMLInputElement> =
    doc.getElementsByTagName("input");

  let totalCount: number = imageElements.length + inputElements.length;
  let failCount: number = 0;
  let successCount: number = 0;

  for (let i = 0, len = imageElements.length; i < len; i++) {
    const image = imageElements[i];
    const alt = image.getAttribute("alt");
    const isDecorative =
      image.getAttribute("role") === "presenstation" ||
      image.getAttribute("aria-hidden") === "true";
    if (!alt) {
      failCount++;
    } else if (isDecorative && alt.trim().length > 0) {
      //role 혹은 aria-hidden 속성을 이용해 이미지가 단순 프레젠테이션용인지판단
      //판단 후, 해당 이미지에 alt제공 되있으면
      failCount++;
    }else{
      successCount++;
    }
  }

  return [totalCount, failCount, successCount] as [number, number, number];
};
