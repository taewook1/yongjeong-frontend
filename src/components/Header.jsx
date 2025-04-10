import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBell, FaSignOutAlt } from "react-icons/fa";
import logo from '../assets/mainlogo2.png';
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="용정중학교 총동창회 로고" />
        </Link>
      </div>

      {user ? (
        <div className="user-icons">
          <FaUserCircle className="icon" title="마이페이지" onClick={() => navigate("/mypage")} />
          <FaBell className="icon" title="알림" />
          <FaSignOutAlt className="icon" title="로그아웃" onClick={handleLogout} />
        </div>
      ) : (
        <div className="auth-links">
          <Link to="/login" className="auth-button">로그인</Link>
          <span> | </span>
          <Link to="/signup" className="auth-button">회원가입</Link>
        </div>
      )}
    </header>
  );
}

export default Header;