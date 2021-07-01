import React from 'react'
import "./Contest.css"

export default function Contest() {
    return (
      <div>
        <div className="container" style={{ marginTop: "5em" }}>
          <div className="row">
            <div
              style={{ margin: "auto" }}
              id="cuocthi"
              className="container bg_img"
            >
              <br></br>
              <div
                style={{
                  backgroundColor: "rgb(14 97 137 / 65%)",
                  marginLeft: "1px",
                  maxWidth: "400px",
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "70%",
                  maxHeight: "200px",
                  height: "100%",
                  paddingTop: "2em",
                  padding: "auto",
                  margin: "auto",
                  marginTop: "1em",
                }}
              >
                <h1>WEB HACKATHON</h1>
                <br></br>
                <h6>Time: 19:20:54</h6>
                <br></br>
                <h6>Host: Webdev Studio</h6>
                <br></br>
                <br></br>

                <div className="trainer-rank icon align-items-center">
                  <i className="bx bx-user icon" />

                  <div className="icon">100</div>
                  <br></br>
                </div>
                <br></br>

                <button
                  className="bton"
                  onClick={() => {
                    alert("Da tham gia");
                  }}
                  className="btn btn-info canh"
                >
                  Tham gia
                </button>
              </div>
            </div>
            
            {/* end background */}

            <div
              className="row"
              style={{ marginTop: "3em", borderRadius: "40%" }}
            >
              <div className="container">
                <table id="customers">
                  <tbody>
                    <tr>
                      <th style={{ textAlign: "center" }}>Top</th>
                      <th style={{ textAlign: "center" }}>Point</th>
                    </tr>
                    <tr>
                      <td>1. Le A</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>2. Nguyễn B</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>3. Trần Thị C</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>4. Trần Dần</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>5. Trần D</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>6. Lê Thị F</td>
                      <td>5.5</td>
                    </tr>
                    <tr>
                      <td>7. Trần Văn D</td>
                      <td>5.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* /////////////////////////////////// */}
        </div>
      </div>
    );
}
