import SearchBox from "@/components/search/SearchBox";
import useInput from "@/libs/hooks/useInput";
import {
  getDocumentFromUrl,
  getParsedDocument,
  getUrlFromDocument,
} from "@/libs/utils/urls";

const SearchBoxContainer = () => {
  const [rootUrl, onChange] = useInput("");

  const onSearch = async () => {
    const rootDoc = await getDocumentFromUrl(rootUrl);
    const subUrlFromRootDoc = await getUrlFromDocument(rootDoc);
    const allUrls = [rootUrl, ...subUrlFromRootDoc];

    for (let i = 0, len = allUrls.length; i < len; i++) {
      const _doc = await getDocumentFromUrl(allUrls[i]);
      const document = await getParsedDocument(_doc);
      console.log(document);
    }
  };
  return <SearchBox onChange={onChange} onSearch={onSearch} />;
};
export default SearchBoxContainer;
