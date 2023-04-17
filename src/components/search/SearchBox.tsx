import React from "react";
import styles from "./styles/SearchBox.module.css";

interface SearchBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onCheckCategory: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onChange, onSearch, onCheckCategory }: SearchBoxProps) => {
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
      <p>
        <strong>검사항목</strong>
      </p>
      <hr />
      <div>
        <input type="checkbox" id="HTML" onClick={onCheckCategory} />
        <label htmlFor="HTML"> HTML</label>&nbsp;&nbsp;
        <input type="checkbox" id="IMAGE" onClick={onCheckCategory} />
        <label htmlFor="IMAGE"> IMAGE</label>&nbsp;&nbsp;
        <input type="checkbox" id="VIDEO" onClick={onCheckCategory} />
        <label htmlFor="VIDEO"> VIDEO</label>&nbsp;&nbsp;
        <input type="checkbox" id="COLOR" onClick={onCheckCategory} />
        <label htmlFor="COLOR"> COLOR</label>
      </div>
      <hr />
      <br />
      <ul className={styles.Desc}>
        <li>검색창에 검사하고자 하는 URL을 입력하세요.</li>
        <li>
          해당 검사 플랫폼은 <strong>무료</strong>로 운영이 됩니다.
        </li>
        <li>
          <strong>WCAG 2.0 Level AA</strong> 기준으로 검사를 진행합니다.
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
