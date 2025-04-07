import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="용정중학교 총동창회" />
      </div>
      <div className="auth-links">
        <Link to="/login" className="auth-button">로그인</Link>
        <span> | </span>
        <Link to="/register" className="auth-button">회원가입</Link>
      </div>
    </header>
  );
}

export default Header;