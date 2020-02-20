import React from 'react';
export default class Image extends React.Component {
    render() {
        return (
            <div>
        <div className="text">
          <h2> Customer's feedback:</h2>
        </div>
        <div className="image">
          <div className="imgfirst">
            <img src="https://anh.24h.com.vn/upload/1-2016/images/2016-02-06/1454751023-1454750573-anh-1.jpg" alt="" />
            <span>Email: toisehat@gmail.com,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt et illum
              repellat magnam. Porro ipsa doloremque officia deserunt rem delectus veniam! Neque molestiae dolores dolorum et
              voluptatum. Eveniet, omnis.</span>
          </div>
          <div className="imgsecond">
            <span>hello what up vasechomn@gmail.com. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor atque
              aperiam exercitationem quas corporis! Fugit, non doloremque nulla deserunt dolore suscipit. Facere ad delectus
              aliquam reprehenderit sequi perferendis magnam consequatur.</span>
            <img src="https://www.qts.edu.vn/uploads/data/1204/content_content_hoc-tieng-anh-voi-nguoi-nuoc-ngoai-la-phuong-phap-duoc-rat-nhieu-nguoi-chon-lua.jpg" alt="" />
          </div>
        </div>
      </div>
        );
    }
}
