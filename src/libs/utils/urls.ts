import service from "../api";
import { validateURL } from "./validate";

export const getDocumentFromUrl = async (url: string) => {
  const { data } = await service.get("/api/url", {
    params: { urlParam: url },
  });
  return data.document;
};

export const getUrlFromDocument = async (document: string) => {
  const _parser = new DOMParser();
  const _xmlDoc = _parser.parseFromString(document, "text/html");
  const _allTag = _xmlDoc.getElementsByTagName("*");
  const _urls = [];
  for (let i = 0, len = _allTag.length; i < len; i++) {
    const _tag = _allTag[i];
    const _href = _tag.getAttribute("href");
    //TODO : SRC 어트리뷰트도 체크하여 모든 이미지에도 체크 가능
    if (_href !== null && (await validateURL(_href))) {
      _urls.push(_href);
    }
  }
  const _subUrls = [...new Set(_urls)];
  return _subUrls;
};

export const getParsedDocument = (document: string) => {
  const _parser = new DOMParser();
  const _xmlDoc = _parser.parseFromString(document, "text/html");
  return _xmlDoc;
};
