import SearchBox from "@/components/search/SearchBox";
import useInput from "@/libs/hooks/useInput";

const SearchBoxContainer = () => {
  const [url, onChange] = useInput("");

  const onSearch = () => {
    // onSearch Process
    //1. URL검사
    //2. 모든 서브URL가져오기
    //3. URL및 서브URL 리스트에 추가
    //4. 검사 프로세스
  };

  return <SearchBox />;
};
export default SearchBoxContainer;
