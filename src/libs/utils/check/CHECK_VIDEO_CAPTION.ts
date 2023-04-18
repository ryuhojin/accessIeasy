/**
 * @name CHECK_VIDEO_CAPTION
 * @description 비디오 자막 제공
 * 비디오에 track옵션이 없으면 자막제공이 따로 되지않는것으로 인지
 */
export const CHECK_VIDEO_CAPTION = (doc: Document) => {
  const videos: HTMLCollectionOf<HTMLVideoElement> =
    doc.getElementsByTagName("video");

  let totalCount: number = videos.length;
  let failCount: number = 0;
  let successCount: number = 0;

  for (let i = 0; i < videos.length; i++) {
    const track = videos[i].querySelector('track[kind="captions"]');
    if (!track) {
      failCount++;
    } else {
      successCount++;
    }
  }

  return [totalCount, failCount, successCount] as [number, number, number];
};
