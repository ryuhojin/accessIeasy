import SearchBox from "@/components/search/SearchBox";
import useInput from "@/libs/hooks/useInput";
import {
  getDocumentFromUrl,
  getParsedDocument,
  getUrlFromDocument,
} from "@/libs/utils/urls";
import { useState } from "react";

const SearchBoxContainer = () => {
  const [rootUrl, onChange] = useInput("");
  const [category, setCategory]: any = useState({
    HTML: false,
    IMAGE: false,
    VIDEO: false,
    COLOR: false,
  });

  const onSearch = async () => {
    const rootDoc = await getDocumentFromUrl(rootUrl);
    //TODO : 하위항목 모두포함인지 체크해야됨
    const subUrlFromRootDoc = await getUrlFromDocument(rootDoc);
    const allUrls = [rootUrl, ...subUrlFromRootDoc];

    for (let i = 0, len = allUrls.length; i < len; i++) {
      const _doc = await getDocumentFromUrl(allUrls[i]);
      const document = await getParsedDocument(_doc);

      const categoryKeys = Object.getOwnPropertyNames(category);
      for (let j = 0, jLen = categoryKeys.length; j < jLen; j++) {
        const key: string = categoryKeys[j];
        //category[key] : 설정값
        //key : 무엇에 대한 설정인지
      }

      console.log(document);
    }
  };

  const onCheckCategory = (e: React.MouseEvent<HTMLInputElement>) => {
    setCategory({
      ...category,
      [e.currentTarget.id]: e.currentTarget.checked,
    });
  };

  return (
    <SearchBox
      onChange={onChange}
      onSearch={onSearch}
      onCheckCategory={onCheckCategory}
    />
  );
};
export default SearchBoxContainer;
