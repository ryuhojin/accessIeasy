import styles from "./styles/Loading.module.css";

//TODO : P태그 내에 퍼센테이지 
const Loading = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.WrapperFront}>
        <p></p>
      </div>
      <div className={styles.WrapperBack}></div>
    </div>
  );
};
export default Loading;
