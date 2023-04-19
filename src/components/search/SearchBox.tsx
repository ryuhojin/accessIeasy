import React from "react";
import styles from "./styles/SearchBox.module.css";

interface SearchBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onCheckCategory: (e: React.MouseEvent<HTMLInputElement>) => void;
  onCheckAllCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  onChange,
  onSearch,
  onCheckCategory,
  onCheckAllCategory,
}: SearchBoxProps) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <input
          type="text"
          placeholder="https://www.sample.com 형식으로 URL을 입력하세요"
          onChange={onChange}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key == "Enter") return onSearch();
          }}
        />
        <button onClick={onSearch}>&nbsp;&nbsp;검 사&nbsp;&nbsp;</button>
      </div>
      <br />
      <p className={styles.CategoryWrapper}>
        <strong>검사항목(24개)</strong>
        <div>
          <input type="checkbox" id="NOALL" onChange={onCheckAllCategory} />
          <label htmlFor="NOALL"> 모든 검사</label>
        </div>
      </p>
      <hr />
      <div>
        <input type="checkbox" id="NO0" onClick={onCheckCategory} />
        <label htmlFor="NO0"> 1번 항목</label>
        <input type="checkbox" id="NO1" onClick={onCheckCategory} />
        <label htmlFor="NO1"> 2번 항목</label>
        <input type="checkbox" id="NO2" onClick={onCheckCategory} />
        <label htmlFor="NO2"> 3번 항목</label>
        <input type="checkbox" id="NO3" onClick={onCheckCategory} />
        <label htmlFor="NO3"> 4번 항목</label>
        <input type="checkbox" id="NO4" onClick={onCheckCategory} />
        <label htmlFor="NO4"> 5번 항목</label>
        <input type="checkbox" id="NO5" onClick={onCheckCategory} />
        <label htmlFor="NO5"> 6번 항목</label>
        <input type="checkbox" id="NO6" onClick={onCheckCategory} />
        <label htmlFor="NO6"> 7번 항목</label>
        <input type="checkbox" id="NO7" onClick={onCheckCategory} />
        <label htmlFor="NO7"> 8-1번 항목</label>
        <input type="checkbox" id="NO8" onClick={onCheckCategory} />
        <label htmlFor="NO8"> 8-2번 항목</label>
        <input type="checkbox" id="NO9" onClick={onCheckCategory} />
        <label htmlFor="NO9"> 9번 항목</label>
        <input type="checkbox" id="NO10" onClick={onCheckCategory} />
        <label htmlFor="NO10"> 10번 항목</label>
        <input type="checkbox" id="NO11" onClick={onCheckCategory} />
        <label htmlFor="NO11"> 11번 항목</label>
        <input type="checkbox" id="NO12" onClick={onCheckCategory} />
        <label htmlFor="NO12"> 12번 항목</label>
        <input type="checkbox" id="NO13" onClick={onCheckCategory} />
        <label htmlFor="NO13"> 13번 항목</label>
        <input type="checkbox" id="NO14" onClick={onCheckCategory} />
        <label htmlFor="NO14"> 14번 항목</label>
        <input type="checkbox" id="NO15" onClick={onCheckCategory} />
        <label htmlFor="NO15"> 15번 항목</label>
        <input type="checkbox" id="NO16" onClick={onCheckCategory} />
        <label htmlFor="NO16"> 16번 항목</label>
        <input type="checkbox" id="NO17" onClick={onCheckCategory} />
        <label htmlFor="NO17"> 17번 항목</label>
        <input type="checkbox" id="NO18" onClick={onCheckCategory} />
        <label htmlFor="NO18"> 18번 항목</label>
        <input type="checkbox" id="NO19" onClick={onCheckCategory} />
        <label htmlFor="NO19"> 19번 항목</label>
        <input type="checkbox" id="NO20" onClick={onCheckCategory} />
        <label htmlFor="NO20"> 20번 항목</label>
        <input type="checkbox" id="NO21" onClick={onCheckCategory} />
        <label htmlFor="NO21"> 21번 항목</label>
        <input type="checkbox" id="NO22" onClick={onCheckCategory} />
        <label htmlFor="NO22"> 22번 항목</label>
        <input type="checkbox" id="NO23" onClick={onCheckCategory} />
        <label htmlFor="NO23"> 23번 항목</label>
        <input type="checkbox" id="NO24" onClick={onCheckCategory} />
        <label htmlFor="NO24"> 24번 항목</label>
      </div>
      <hr />
      <br />
      <ul className={styles.Desc}>
        <li>검색창에 검사하고자 하는 URL을 입력하세요.</li>
        <li>
          해당 검사 플랫폼은 <strong>무료</strong>로 운영이 됩니다.
        </li>
        <li>
          <strong>KWCAG 2.1</strong> 기준으로 검사를 진행합니다.
        </li>
        <li>
          문의사항은 <strong>interarea@naver.com / 010-5547-6842 </strong>로
          문의해주세요.
        </li>
      </ul>
    </div>
  );
};
export default SearchBox;
