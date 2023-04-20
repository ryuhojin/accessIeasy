/**
 * @name CHECK_ALT_TEXT
 * @description 텍스트 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있도록 대체 텍스트를 제공하여야 한다.
 * KWAC 2.1 기준 24개 검사항목중 1번항목
 */
export const CHECK_ALT_TEXT = (doc: Document) => {
  const images = doc.querySelectorAll("img");
  const inputImages = doc.querySelectorAll("input[type=image]");

  let totalCount: number = images.length + inputImages.length;
  let failCount: number = 0;
  let successCount: number = 0;
  let failCases: string[] = [];

  for (let i = 0, len = images.length; i < len; i++) {
    const image = images[i];
    const alt = image.getAttribute("alt");
    const isDeco =
      image.getAttribute("role") === "presenstation" ||
      image.getAttribute("aria-hidden") === "true";
    if (!alt) {
      failCount++;
      failCases.push(
        `${image.outerHTML} 태그에 대체 문자가 제공되지 않습니다.`
      );
    } else if (isDeco && alt.trim().length > 0) {
      failCount++;
      failCases.push(
        `${image.outerHTML} 태그는 단순 배경 및 프레젠테이션용 이미지 입니다. 알트제공이 되어선 안됩니다.`
      );
    } else {
      successCount++;
    }
  }

  for (let i = 0, len = inputImages.length; i < len; i++) {
    const image = inputImages[i];
    const alt = image.getAttribute("alt");
    const isDeco =
      image.getAttribute("role") === "presenstation" ||
      image.getAttribute("aria-hidden") === "true";
    if (!alt) {
      failCount++;
      failCases.push(`${image.outerHTML} 태그에 대체 문자가 제공되지 않습니다.`);
    } else if (isDeco && alt.trim().length > 0) {
      failCount++;
      failCases.push(
        `${image.outerHTML} 태그는 단순 배경 및 프레젠테이션용 이미지 입니다. 알트제공이 되어선 안됩니다.`
      );
    } else {
      successCount++;
    }
  }

  return [totalCount, failCount, successCount, failCases] as [
    number,
    number,
    number,
    string[]
  ];
};
