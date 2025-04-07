import "../styles/DuesInfo.css";

function DuesInfo() {
  return (
    <div className="dues-container">
      <h2>동문회비 납부 안내</h2>
      <p>동문 여러분의 소중한 회비는 용정중학교 총동창회의 발전을 위해 사용됩니다.</p>
      
      <h3>납부 방법</h3>
      <ul>
        <li>💳 계좌이체: 국민은행 123-456-789012 (예금주: 용정중학교 총동창회)</li>
        <li>🏢 현장 납부: 동문회 사무실 방문</li>
        <li>🌐 온라인 결제 시스템 (추후 제공 예정)</li>
      </ul>

      <h3>문의</h3>
      <p>📞 총동창회 사무실: 061-852-9603</p>
    </div>
  );
}

export default DuesInfo;