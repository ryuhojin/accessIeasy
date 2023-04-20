/**
 * @name CHECK_COLOR_CONTRAST
 * @description 색에 무관한 콘텐츠 인식 검사
 * 컬러 대비 비율이 4.5이하인 경우 해당요소에 충분한 컬러 대비가 없음으로 인지
 */
export const CHECK_COLOR_CONTRAST = (doc: Document) => {
  const elements: NodeListOf<Element> = doc.querySelectorAll("*");

  let totalCount: number = elements.length;
  let failCount: number = 0;
  let successCount: number = 0;
  let failCases: string[] = [];

  elements.forEach((element) => {

    if (!element.parentElement) return successCount++;

    const fontSize: number = Number(getComputedStyle(element).fontSize);
    const fontWeight: number = Number(getComputedStyle(element).fontWeight);
    const textColor = getComputedStyle(element).color;
    const backgroundColor = getComputedStyle(
      element.parentElement
    ).backgroundColor;
    const contrastRatio = getContrastRatio(textColor, backgroundColor);

    if (
      (fontSize >= 18 && fontWeight >= 700 && contrastRatio < 4.5) ||
      (fontSize >= 14 && contrastRatio < 3)
    ) {
      failCount++;
      failCases.push(
        `${element.outerHTML} 의 ${textColor} 와  ${backgroundColor} 의 명도 대비를 확인해주세요.`
      );
    } else {
      successCount++;
    }
  });

  return [totalCount, failCount, successCount, failCases] as [
    number,
    number,
    number,
    string[]
  ];
};

function getContrastRatio(color1: string, color2: string) {
  const color1Luminance = getLuminance(color1);
  const color2Luminance = getLuminance(color2);
  const lighterColor = Math.max(color1Luminance, color2Luminance);
  const darkerColor = Math.min(color1Luminance, color2Luminance);
  return (lighterColor + 0.05) / (darkerColor + 0.05);
}

function getLuminance(color: any) {
  const rgbValues = color.match(/\d+/g).map(Number);
  const r = rgbValues[0] / 255;
  const g = rgbValues[1] / 255;
  const b = rgbValues[2] / 255;
  const rLuminance =
    r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gLuminance =
    g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bLuminance =
    b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  return 0.2126 * rLuminance + 0.7152 * gLuminance + 0.0722 * bLuminance;
}
