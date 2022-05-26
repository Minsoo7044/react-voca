import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";

function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  const addDay = () => {
    fetch(`http://localhost:3001/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("추가 완료");
        history.push(`/`);
      }
    });
  };

  return (
    <div>
      <h3>현재 일수 : {days.length} </h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}

export default CreateDay;
