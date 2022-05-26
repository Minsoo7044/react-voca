import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">영단어</Link>
      </h1>
      <div className="menu">
        <Link to="#x" className="link">
          단어 추가
        </Link>
        <Link to="#x" className="link">
          Day 추가
        </Link>
      </div>
    </div>
  )
}

export default Header