const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footercontent">
          <div className="topfooter">
            <span>
              <p className="footer-hp">3333-3333</p>
              <p className="footer-time">
                평일 10:00 - 18:00
                <br />
                (점심시간 13:00 - 14:00 제외 주말/공휴일 제외)
              </p>
              <a href="https://www.apple.com/kr/app-store/" rel="noreferrer">
                <img
                  src="https://assets.cdn.soomgo.com/icons/icon-download-appstore.svg"
                  alt="앱스토어"
                  className="footerbtn"
                />
                APP STORE
              </a>
              <a href="https://play.google.com/store/apps" rel="noreferrer">
                <img
                  src="https://assets.cdn.soomgo.com/icons/icon-download-palystore.svg"
                  alt="플레이스토어"
                  className="footerbtn"
                />
                PLAY STORE
              </a>
            </span>
            <span className="topfooter-right">
              <span>
                <p className="contop">고객센터</p>
                <p>문의하기</p>
              </span>
              <span>
                <p className="contop">FAQ</p>
                <p>이용안내</p>
                <p>안전정책</p>
                <p>예상금액</p>
                <p>강사찾기</p>
              </span>
              <span>
                <p className="contop">고객센터</p>
                <p>보람가입</p>
                <p>보람센터</p>
                <p>보람가이드</p>
                <p>제품안내</p>
              </span>
              <span>
                <p className="contop">BORAM3</p>
                <p>김남주</p>
                <p>안병현</p>
                <p>이다솔</p>
                <p>전찬의</p>
              </span>
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            이용약관&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개인정보처리방침&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사업자
            정보확인
          </p>
          <p className="f-boram3">
            (주)BORAM3 은 SEMI PROJECT 입니다
            <br />
          </p>
          <br />
          <p className="f-address">
            상호명:(주)BORAM3 · 개인정보책임관리자:BORAM3· 주소:서울특별시
            강남구 보람타워 3층
            <br />
            사업자등록번호:333-33-33333· 통신판매업신고증:제 3333-서울강남-3333
            호 · 직업정보제공사업 신고번호:서울청 제 3333-33호
            <br />
            고객센터:3333-333 · 이메일:BORAM3@naver.com
            <br />
            Copyright ©Brave Mobile Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
