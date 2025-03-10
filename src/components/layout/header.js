import logo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headercontent">
        <a href="index.jsp" className="logo">
          <img src={logo} alt="로고" />
        </a>

        <div className="searchbar">
          <form action="" method="get">
            <div className="searchinput">
              <div className="searchimg">
                <img
                  alt="검색아이콘"
                  className="simg"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiIHN0cm9rZT0iI0I1QjVCNSIgc3Ryb2tlLXdpZHRoPSIxLjYiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGN4PSI2LjUiIGN5PSI2LjUiIHI9IjYuNSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im0xMS41IDExLjUgNSA1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                />
              </div>
              <input
                type="search"
                placeholder="무엇을 배우고 싶나요?"
                className="searchtext"
                name="searchtext"
              ></input>
            </div>
          </form>
        </div>
        {/* <%
            	if(loginok==null){%>
            		<!-- 로그인 전 버튼 -->
		            <div className="headerlogin">
		                <a href="index.jsp?boramMain=login/loginform.jsp" className="loginbtn">로그인</a>
		                <button type="button" className="gaipbtn" onclick="location.href='index.jsp?boramMain=member/memberform.jsp'">회원가입</button>
		            </div>
            	<%}else{%>
            		<!-- 로그인 후 버튼 -->
	              <div className="headerlogout">
	              <form action="login/logoutaction.jsp">
	              	<button type="submit" className="logoutbtn">로그아웃</button>
	              	<!-- <a href="index.jsp?boramMain=login/logoutaction.jsp" className="logoutbtn">로그아웃</a> -->
	              </form>
	                <a href="index.jsp?boramMain=cart/mycartform.jsp" className="cart">장바구니 <span className="cnt"><%= cartSize %></span></a>
	                <button type="button" className="mypage" onclick="location.href='index.jsp?boramMain=mypage/myprofile.jsp'">마이페이지</button>
	            </div>
				<%}%> */}
      </div>
    </div>
  );
};

export default Header;
