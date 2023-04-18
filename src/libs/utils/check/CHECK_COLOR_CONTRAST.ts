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

  for (let i = 0; i < elements.length; i++) {
    const backgroundColor = getComputedStyle(elements[i]).getPropertyValue(
      "background-color"
    );
    const color = getComputedStyle(elements[i]).getPropertyValue("color");
    const contrastRatio = calculateContrastRatio(backgroundColor, color);

    if (contrastRatio < 4.5) {
      failCount++;
    } else {
      successCount++;
    }
  }

  return [totalCount, failCount, successCount] as [number, number, number];
};

function calculateContrastRatio(color1: string, color2: string) {
  const luminance1 = calculateRelativeLuminance(color1);
  const luminance2 = calculateRelativeLuminance(color2);
  const lightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);
  return (lightest + 0.05) / (darkest + 0.05);
}

function calculateRelativeLuminance(color: string) {
  const values = color.replace(/rgba?\(|\)|\s/g, "").split(",");
  const red = parseFloat(values[0]) / 255;
  const green = parseFloat(values[1]) / 255;
  const blue = parseFloat(values[2]) / 255;
  const alpha = parseFloat(values[3]) || 1;

  const r = red <= 0.03928 ? red / 12.92 : Math.pow((red + 0.055) / 1.055, 2.4);
  const g =
    green <= 0.03928 ? green / 12.92 : Math.pow((green + 0.055) / 1.055, 2.4);
  const b =
    blue <= 0.03928 ? blue / 12.92 : Math.pow((blue + 0.055) / 1.055, 2.4);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
