import React from "react";

export default function Detail() {
  return (
    <div>
      <div className="container" style={{ marginTop: "7em" }}>
        <div className="row">
          <div className="container" style={{ marginTop: "auto" }}>
            <div className="row">
              <div
                className="container"
                style={{ maxWidth: "1000px", width: "100%" }}
              >
                <iframe
                  style={{
                    margin: "auto",
                    maxWidth: "1000px",
                    width: "100%",
                    maxHeight: "80vh",
                  }}
                  width="900"
                  height="400"
                  src="https://www.youtube.com/embed/m9mNsYJbkNg"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <br></br>
          <br></br>
        </div>
        <div className="comtainer" style={{ margin: "auto" }}>
          <div className="row" style={{ margin: "auto" }}>
            <div class="container">
              <ul class="nav nav-tabs">
                <li class="active">
                  <a data-toggle="tab" href="#home">
                    Tài liệu:
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu1">
                    Ghi chú:
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu2">
                    Hỏi đáp:
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu3">
                    Bài tập:
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu4">
                    Nội dung bài:
                  </a>
                </li>
              </ul>
              <div id="h3" class="tab-content">
                <div id="home" class="tab-pane fade in active">
                  <br></br>
                  <h3>Tài liệu:</h3>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h6>1. Java Script thật sự là gì? </h6>
                  <p>
                    JavaScript (en-US) (viết tắt là "js") là một ngôn ngữ lập
                    trình mang đầy đủ tính năng của một ngôn ngữ lập trình động
                    mà khi nó được áp dụng vào một tài liệu HTML, nó có thể đem
                    lại khả năng tương tác động trên các trang web. Cha đẻ của
                    ngôn ngữ này là Brendan Eich, đồng sáng lập dự án Mozilla,
                    quỹ Mozilla, và tập đoàn Mozilla. JavaScript thật sự rất
                    linh hoạt. Bạn có thể bắt đầu với các bước nhỏ, với thư viện
                    ảnh, bố cục có tính thay đổi và phản hồi đến các nút nhấn.
                    Khi có nhiều kinh nghiệm hơn, bạn có thể tạo ra các trò
                    chơi, hoạt họa 2D hoặc 3D, ứng dụng cơ sở dữ liệu toàn diện
                    và nhiều thứ khác!
                  </p>
                  <br></br>
                  <h6>2.How to build your first website with Contentful </h6>
                  <p>
                    Create your free Contentful account. Clone a sample repo and
                    install a few dependencies. Create a new "data bucket", or
                    space, to store content. Generate a Content Management API
                    access token. Generate a Content Delivery API access token.
                    Import data into the space.
                  </p>
                  <br></br>
                  <h6>3. Link tham khảo</h6>
                  <p>https://www.youtube.com/watch?v=TaNeOcfqCy8</p>
                  <p>https://itviec.com/blog/tai-lieu-javascript/ </p>
                  <p>
                    https://www.contentful.com/blog/2020/06/10/build-a-static-site-with-contentful-artist/
                  </p>
                  <p>https://www.youtube.com/watch?v=TaNeOcfqCy8</p>
                  <p>
                    https://ehkoo.com/bai-viet/free-javascript-books-beginner-advanced
                  </p>
                  <p>https://www.youtube.com/watch?v=TaNeOcfqCy8</p>
                </div>
                <div id="menu1" class="tab-pane fade">
                  <br></br>

                  <h3>Ghi chú:</h3>
                  <br></br>
                  <br></br>

                  <div className="btn-mar">
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        alert("Hien ra giao dien ghi chu!");
                      }}
                    >
                      Ghi chú
                    </button>

                    <a
                      href="https://www.notion.so/Props-c2602a5f7394454ea43ac49991957db2"
                      className="btn btn-info btn-mar"
                    >
                      Notion
                    </a>
                  </div>
                </div>
                <div id="menu2" class="tab-pane fade">
                  <h3>Hỏi đáp</h3>
                  <br></br>
                  <br></br>

                  <div className="row">
                    <form role="form">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          required
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </form>
                    <div className="col-sm-2 text-center">
                      <img
                        src="https://i.pinimg.com/474x/f6/7a/dc/f67adc157905920b8dae5e8d85107611.jpg"
                        className="img-circle"
                        height={50}
                        width={50}
                        alt="Avatar"
                      />
                    </div>
                    <div className="col-sm-10">
                      <h4>
                        Anja <small>Sep 29, 2015, 9:12 PM</small>
                      </h4>
                      <p>
                        Keep up the GREAT work! I am cheering for you!! Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                      <br />
                    </div>
                    <div className="col-sm-2 text-center">
                      <img
                        src="https://i.pinimg.com/originals/06/7d/e2/067de2cf9f6b67f12e16f8eaf627e872.jpg"
                        className="img-circle"
                        height={50}
                        width={50}
                        alt="Avatar"
                      />
                    </div>
                    <div className="col-sm-10">
                      <h4>
                        John Row <small>Sep 25, 2015, 8:25 PM</small>
                      </h4>
                      <p>
                        I am so happy for you man! Finally. I am looking forward
                        to read about your trendy life. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                      <br />
                      <p>
                        <span className="badge">1</span> Comment:
                      </p>
                      <br />
                      <br />
                      <br />
                      <div className="row">
                        <div className="col-sm-2 text-center">
                          <img
                            src="data:image/jpeg;base64,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"
                            className="img-circle"
                            height={50}
                            width={50}
                            alt="Avatar"
                          />
                        </div>
                        <div className="col-xs-10">
                          <h4>
                            Nested Bro <small>Sep 25, 2015, 8:28 PM</small>
                          </h4>
                          <p>Me too! WOW!</p>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ////////////////////end question */}
                </div>
                <div id="menu3" class="tab-pane fade">
                  <h3>Bài tập</h3>
                  <br></br>
                  <br></br>

                  <div>
                    <h1>
                      1. Lệnh nào sau đây dùng để bắt đầu chạy chương trình?
                    </h1>
                    <label className="container">
                      <input
                        type="radio"
                        defaultChecked="checked"
                        name="radio"
                      />
                      npm start
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      npm i
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      mck start
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      gducky start
                    </label>
                  </div>
                  <br></br>
                  <br></br>

                  <div>
                    <h1>2. Java Script là gì nhờ ?</h1>
                    <label className="container">
                      <input
                        type="radio"
                        defaultChecked="checked"
                        name="radio"
                      />
                      Là một ngôn ngữ lập trình thông dịch được phát triển từ
                      các ý niệm nguyên mẫu.
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      Ngôn ngữ này được dùng rộng rãi cho các trang web cũng như
                      phía máy chủ.
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      Nó vốn được phát triển bởi Brendan Eich tại Hãng truyền
                      thông Netscape với cái tên đầu tiên Mocha,
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      Cả a,b và c đều đúng
                    </label>
                  </div>
                  <br></br>
                  <br></br>

                  <div>
                    <h1>
                      3. Lệnh nào sau đây dùng để tạo liên kết với hình ảnh ?
                    </h1>
                    <label className="container">
                      <input
                        type="radio"
                        defaultChecked="checked"
                        name="radio"
                      />
                      the "a"
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      the img
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      the h4
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      the div
                    </label>
                  </div>

                  <br></br>
                  <br></br>

                  <div>
                    <h1>
                      4. Bạn hiểu được bao nhiêu phần trăm bài học hôm nay?
                    </h1>
                    <label className="container">
                      <input
                        type="radio"
                        defaultChecked="checked"
                        name="radio"
                      />
                      50%
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      100%
                      <span className="checkmark" />
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      75%
                    </label>
                    <label className="container">
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                      0%
                    </label>
                  </div>
                </div>
                <div id="menu4" class="tab-pane fade">
                  <h3>Nội dung bài</h3>
                  <br></br>
                  <br></br>
                  <h6>1. jsconfig.json ? </h6>
                  <p>
                    Một jsconfig.json tập tin định nghĩa một dự án JavaScript
                    trong VS Mã. Mặc dù jsconfig.jsoncác tệp không bắt buộc,
                    nhưng bạn sẽ muốn tạo một tệp trong các trường hợp như: Nếu
                    không phải tất cả các tệp JavaScript trong không gian làm
                    việc của bạn nên được coi là một phần của một dự án
                    JavaScript. jsconfig.jsoncho phép bạn loại trừ một số tệp
                    không hiển thị trong IntelliSense. Để đảm bảo rằng một tập
                    hợp con các tệp JavaScript trong không gian làm việc của bạn
                    được coi là một dự án duy nhất. Điều này hữu ích nếu bạn
                    đang làm việc với mã kế thừa sử dụng phụ thuộc toàn cầu ngầm
                    thay vì importsphụ thuộc. Nếu không gian làm việc của bạn
                    chứa nhiều ngữ cảnh dự án, chẳng hạn như mã JavaScript
                    front-end và back-end. Đối với không gian làm việc nhiều dự
                    án, hãy tạo jsconfig.jsontại thư mục gốc của mỗi dự án. Bạn
                    đang sử dụng trình biên dịch TypeScript để biên dịch mã
                    nguồn JavaScript ở cấp thấp hơn. Để xác định một dự án
                    JavaScript cơ bản, hãy thêm một jsconfig.jsonvào gốc của
                    không gian làm việc của bạn:
                  </p>
                  <img
                    className="image"
                    src="https://code.visualstudio.com/assets/docs/languages/javascript/jsx.png"
                  />

                  <br></br>
                  <h6>2. Chữ ký hàm ? </h6>
                  <p>
                    Khi bạn viết các lệnh gọi hàm JavaScript, VS Code hiển thị
                    thông tin về chữ ký hàm và đánh dấu tham số mà bạn hiện đang
                    hoàn thành:
                  </p>

                  <h6>3. Et velit deserunt magna consectetur ? </h6>
                  <p>
                    Nhập tự động tăng tốc độ mã hóa bằng cách đề xuất các biến
                    có sẵn trong suốt dự án của bạn và các phụ thuộc của nó. Khi
                    bạn chọn một trong các đề xuất này, VS Code sẽ tự động thêm
                    nhập cho nó vào đầu tệp. Chỉ cần bắt đầu nhập để xem các đề
                    xuất cho tất cả các ký hiệu JavaScript có sẵn trong dự án
                    hiện tại của bạn. Các đề xuất nhập tự động hiển thị nơi
                    chúng sẽ được nhập từ:
                  </p>
                  <img
                    className="image"
                    src="https://code.visualstudio.com/assets/docs/languages/javascript/auto-import-before.png"
                  />

                  <br></br>
                  <h6>4. Định dạng? </h6>
                  <p>
                    Bộ định dạng JavaScript tích hợp của VS Code cung cấp định
                    dạng mã cơ bản với các giá trị mặc định hợp lý. Các
                    javascript.format.* thiết lập cấu hình được xây dựng trong
                    định dạng. Hoặc, nếu được xây dựng trong định dạng là nhận
                    được trong cách, thiết lập "javascript.format.enable"để
                    falsevô hiệu hóa nó. Để có các kiểu định dạng mã chuyên biệt
                    hơn, hãy thử cài đặt một trong các tiện ích mở rộng định
                    dạng JavaScript từ Marketplace . JSX và thẻ đóng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
