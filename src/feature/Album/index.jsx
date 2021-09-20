import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {
  albumList: PropTypes.array.isRequired
};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      avatar:
        "https://avatar-ex-swe.nixcdn.com/song/2020/10/12/0/7/e/3/1602477673421.jpg",
      bgImage:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/11/02/c/4/b/1/1604299335097_600.jpg",
      coverImage:
        "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545_500.jpg",
      creator: "Hương Ly",
      lyric: "https://lrc-nct.nixcdn.com/2020/10/13/7/4/f/8/1602557634151.lrc",
      music:
        "https://aredir.nixcdn.com/NhacCuaTui1004/TheThai-HuongLy-6728509.mp3?st=qVioiGtmYX37y3go7I0ArA&e=1631635351",
      title: "Thế Thái",
      url: "https://www.nhaccuatui.com/bai-hat/the-thai-huong-ly.73T5LuURl5Bo.html",
    },
    {
      id: 2,
      avatar:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/08/26/e/b/d/3/1566795080105.jpg",
      bgImage:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/08/26/e/b/d/3/1566795080105_600.jpg",
      coverImage:
        "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545_500.jpg",
      creator: "Đinh Tùng Huy",
      lyric: "https://lrc-nct.nixcdn.com/null",
      music:
        "https://aredir.nixcdn.com/NhacCuaTui1021/NguoiLaThoangQua-DinhTungHuy-7079855.mp3?st=q-E8CICpQPUhr5NJRJBK-g&e=1631635351",
      title: "Người Lạ Thoáng Qua",
      url: "https://www.nhaccuatui.com/bai-hat/nguoi-la-thoang-qua-dinh-tung-huy.Av6pujWaijMb.html",
    },
    {
      id: 3,
      avatar:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/04/06/c/6/7/6/1617694258591.jpg",
      bgImage:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/04/06/c/6/7/6/1617694258591_600.jpg",
      coverImage:
        "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545_500.jpg",
      creator: "Phát Hồ, X2X",
      lyric: "https://lrc-nct.nixcdn.com/null",
      music:
        "https://aredir.nixcdn.com/NhacCuaTui1021/YeuLaCuoi-PhatHoX2X-7084519.mp3?st=LKnsIc7K-gACZ_x01qDaqg&e=1631635351",
      title: "Yêu Là Cưới",
      url: "https://www.nhaccuatui.com/bai-hat/yeu-la-cuoi-phat-ho-ft-x2x.sme954UUZsz0.html",
    },
  ];
  return <div>
      <h2 className="text-center text-4xl pt-6">Có thể bạn thích</h2>
      <AlbumList className="grid grid-cols-3 gap-11 mx-auto" albumList={albumList}/>
  </div>;
}

export default AlbumFeature;
