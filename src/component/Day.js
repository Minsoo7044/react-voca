import data from "../db/data.json";
import Word from "./Word";
import { useParams } from "react-router-dom";

function Day() {
  const {day} = useParams();
  const wordList = data.words.filter((word) => word.day === Number(day));
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word}/>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Day;
