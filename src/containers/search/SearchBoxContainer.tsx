import SearchBox from "@/components/search/SearchBox";
import useInput from "@/libs/hooks/useInput";
import { validateURL } from "@/libs/utils/validate";

const SearchBoxContainer = () => {
  const [url, onChange] = useInput("");

  const onSearch = async() => {
    // onSearch Process
    //1. URL검사
    //2. 모든 서브URL가져오기
    //3. URL및 서브URL 리스트에 추가
    //4. 검사 프로세스
    const regextResult = await validateURL(url);
    alert(`정규식 통과 여부 : ${regextResult}`);
  };
  return <SearchBox onChange={onChange} onSearch={onSearch} />;
};
export default SearchBoxContainer;
