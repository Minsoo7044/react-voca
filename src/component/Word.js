import { useState } from "react";

function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <tr key={word.id} className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={word.isDone} onChange={toggleDone}/>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={() => setIsShow(!isShow)}>{isShow ? '숨기기' : '뜻 보기'}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}

export default Word;
