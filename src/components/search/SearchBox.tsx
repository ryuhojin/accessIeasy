import styles from "./styles/SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <input type="text" placeholder="https://www.sample.com" />
        <button>&nbsp;&nbsp;검 사&nbsp;&nbsp;</button>
      </div>
      <br />
      <br />
      <ul className={styles.Desc}>
        <li>검색창에 검사하고자 하는 URL을 입력하세요.</li>
        <li>
          해당 검사 플랫폼은 무료로 운영이 됩니다.{" "}
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
