import banner_1 from "../../assets/image/banner-01.png";
import banner_2 from "../../assets/image/banner-02.png";
import banner_3 from "../../assets/image/banner-03.png";
import banner_4 from "../../assets/image/banner-04.png";
import banner_5 from "../../assets/image/banner-05.png";
import banner_6 from "../../assets/image/banner-06.png";
import banner_7 from "../../assets/image/banner-07.png";
import icon_1 from "../../assets/image/ico-c-1.png";
import icon_2 from "../../assets/image/ico-c-2.png";
import icon_3 from "../../assets/image/ico-c-3.png";
import icon_4 from "../../assets/image/ico-c-4.png";
import icon_5 from "../../assets/image/ico-c-5.png";
import icon_6 from "../../assets/image/ico-c-6.png";
import icon_7 from "../../assets/image/ico-c-7.png";
import icon_8 from "../../assets/image/ico-c-8.png";
import tag_1 from "../../assets/image/tag-1.png";
import tag_2 from "../../assets/image/tag-2.png";
import tag_3 from "../../assets/image/tag-3.png";
import tag_4 from "../../assets/image/tag-4.png";
import icon_vod from "../../assets/image/ico-vod.png";
import icon_market from "../../assets/image/ico-market.png";
import icon_star from "../../assets/image/ico-star.png";
import dasol from "../../assets/image/dasol.png";
import namjoo from "../../assets/image/namjoo.jpeg";
import jerry from "../../assets/image/jerry.jpeg";
import bhyunnie from "../../assets/image/bhyunnie.png";
import "../../styles/refactor.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {});

  return (
    <div className="main">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={500}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={banner_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_7} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="category">
        <a href="index.jsp?boramMain=category/category.jsp?category=a">
          <span className="c01">
            <img src={icon_1} alt="" />
          </span>
          <br />
          운동
        </a>
        <a href="index.jsp?boramMain=category/category.jsp?category=b">
          <span className="c02">
            <img src={icon_2} alt="" />
          </span>
          <br />
          요리
        </a>
        <a href="index.jsp?boramMain=category/category.jsp?category=c">
          <span className="c03">
            <img src={icon_3} alt="" />
          </span>
          <br />
          미술
        </a>
        <a href="index.jsp?boramMain=category/category.jsp?category=d">
          <span className="c04">
            <img src={icon_4} alt="" />
          </span>
          <br />
          사진/영상
        </a>
        <a href="index.jsp?boramMain=category/category.jsp?category=e">
          <span className="c05">
            <img src={icon_5} alt="" />
          </span>
          <br />
          개발
        </a>
        <a href="index.jsp?boramMain=category/category.jsp?category=f">
          <span className="c06">
            <img src={icon_6} alt="" />
          </span>
          <br />
          음악
        </a>
        <a href="index.jsp?boramMain=category/category.jsp?category=g">
          <span className="c07">
            <img src={icon_7} alt="" />
          </span>
          <br />
          외국어
        </a>
        <a href="index.jsp?boramMain=category/category.jsp?category=h">
          <span className="c08">
            <img src={icon_8} alt="" />
          </span>
          <br />
          기타
        </a>
      </div>
      <div className="section01">
        <p className="title">지금바로 원하는 클래스를 찾아보세요!</p>
        <div className="tags">
          <img src={tag_1} alt="" />
          <img src={tag_2} alt="" />
          <img src={tag_3} alt="" />
          <img src={tag_4} alt="" />
        </div>
        <div className="po-slider">
          <div className="swiper mySwiper mainswiper">
            <div className="swiper-wrapper mainswiper">
              {/* <%
		                //List<LessonDto> list = ldao.getAllDatas();
		                List<LessonDto> list = ldao.getAllLimitData(12);
		                for(LessonDto dto:list)
		                {
		                %>
		                	<div className="swiper-slide mainswiper">
		                	<div className="imgbox">
		                		<img src="savePhoto/<%=dto.getPhoto() %>" className="swiper-img" lnum="<%=dto.getLnum() %>">
		                	</div>
								<p className="swipertitle"><%=dto.getTitle() %></p>
								<p className="money"><%=nf.format(dto.getPrice()) %>원</p>
		                	</div>
		                <%
		                }
		                %> */}
            </div>
          </div>
          <div className="swiper-button-next mainswiper"></div>
          <div className="swiper-button-prev mainswiper"></div>
        </div>
      </div>
      <div className="section02">
        <div className="se02_myclassName">
          <span>
            <b>VOD! 집에서 편하게 집중하는 나만의 클래스</b>
            <br />
            BORAM3 나의 클래스
          </span>
          <img src={icon_vod} alt="" />
        </div>
        <div className="se02_cart">
          <span>
            <b>결제하고 보람차게 수업듣자</b>
            <br />
            BORAM3 장바구니
          </span>
          <img src={icon_market} alt="" />
        </div>
      </div>
      <div className="section03">
        <p className="title">BORAM3 요리를 부탁해</p>
        <div className="po-slider">
          <div className="swiper mySwiper sub01">
            <div className="swiper-wrapper sub01">
              {/* <%
		                List<LessonDto> sub1list = ldao.getCategoryPersonData("요리", 12);
		                for(LessonDto dto:sub1list)
		                {
		                %>
		                	<div className="swiper-slide sub01">
		                	<div className="imgbox">
		                		<img src="savePhoto/<%=dto.getPhoto() %>" className="swiper-img" lnum="<%=dto.getLnum() %>">
		                	</div>
								<p className="swipertitle"><%=dto.getTitle() %></p>
		                	</div>
		                <%
		                }
		                %> */}
            </div>
          </div>
          <div className="swiper-button-next sub01"></div>
          <div className="swiper-button-prev sub01"></div>
        </div>
      </div>
      <div className="section03-2">
        <p className="title">BORAM의 영어 노하우</p>
        <div className="po-slider">
          <div className="swiper mySwiper sub02">
            <div className="swiper-wrapper sub02">
              {/* <%
		                //List<LessonDto> sub2list = ldao.getCategoryPersonData("외국어", 12);
		                List<LessonDto> sub2list = ldao.getEnglishData("영어", "영포자", "토익", "토플", "오픽");
		                for(LessonDto dto:sub2list)
		                {
		                %>
		                	<div className="swiper-slide sub02">
		                	<div className="imgbox">
		                		<img src="savePhoto/<%=dto.getPhoto() %>" className="swiper-img" lnum="<%=dto.getLnum() %>">
		                	</div>
								<p className="swipertitle"><%=dto.getTitle() %></p>
		                	</div>
		                <%
		                }
		                %> */}
            </div>
          </div>
          <div className="swiper-button-next sub02"></div>
          <div className="swiper-button-prev sub02"></div>
        </div>
      </div>
      <div className="section04">
        <p className="title">BORAM3 개발자 소개</p>

        <div className="se04layout">
          <span>
            <a
              href="https://github.com/Leedasol2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={dasol} alt="" />
            </a>
            <p className="name">이다솔</p>
            <p className="job">백엔드 개발자</p>
            <p className="mark">
              <img src={icon_star} alt="" />
              5.0(24)
            </p>
          </span>

          <span>
            <a
              href="https://github.com/anjoo-k"
              target="_blank"
              rel="noreferrer"
            >
              <img className="main_profile" src={namjoo} alt="" />
            </a>
            <p className="name">김남주</p>
            <p className="job">백엔드 개발자</p>
            <p className="mark">
              <img src={icon_star} alt="" />
              5.0(24)
            </p>
          </span>

          <span>
            <a
              href="https://github.com/bhyunnie"
              target="_blank"
              rel="noreferrer"
            >
              <img className="main_profile" src={bhyunnie} alt="" />
            </a>
            <p className="name">안병현</p>
            <p className="job">백엔드 개발자</p>
            <p className="mark">
              <img src={icon_star} alt="" />
              5.0(25)
            </p>
          </span>
          <span>
            <a
              href="https://github.com/jerry0339"
              target="_blank"
              rel="noreferrer"
            >
              <img className="main_profile" src={jerry} alt="" />
            </a>
            <p className="name">전찬의</p>
            <p className="job">백엔드 개발자</p>
            <p className="mark">
              <img src={icon_star} alt="" />
              5.0(25)
            </p>
          </span>
        </div>
      </div>
      <div className="section05">
        <p className="title">BORAM3과 함께하는 슬기로운 운동생활 </p>
        <div className="po-slider">
          <div className="swiper mySwiper sub03">
            <div className="swiper-wrapper sub03">
              {/* <%
		                List<LessonDto> sub3list = ldao.getCategoryPersonData("운동", 12);
		                for(LessonDto dto:sub3list)
		                {
		                %>
		                	<div className="swiper-slide sub03">
			                	<div className="imgbox">
			                		<img src="savePhoto/<%=dto.getPhoto() %>" className="swiper-img" lnum="<%=dto.getLnum() %>">
			                	</div>
				                <p className="swipertitle"><%=dto.getTitle() %></p>
		                	</div>
		                <%
		                }
		                %> */}
            </div>
          </div>
          <div className="swiper-button-next sub03"></div>
          <div className="swiper-button-prev sub03"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
