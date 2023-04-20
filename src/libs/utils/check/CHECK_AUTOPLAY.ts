export const checkAllAutoplayMedia = (doc: Document) => {
  const mediaElements = doc.querySelectorAll("video, audio");
  let totalCount: number = mediaElements.length;
  let failCount: number = 0;
  let successCount: number = 0;
  let failCases: string[] = [];
  mediaElements.forEach((element) => {
    if (checkAutoplay(element)) {
      failCount++;
      failCases.push(
        `${element.outerHTML} 태그에 대체 자동재생 옵션이 활성화 되있습니다.`
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
function checkAutoplay(mediaElement: any) {
  return mediaElement.autoplay;
}
