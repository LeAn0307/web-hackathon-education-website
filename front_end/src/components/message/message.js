import React from "react";
import "./message.css";
export default function Message() {
  return (
    <div
      id="body"
      className="container-fluid"
      style={{ margin: "auto", marginTop: "5em"}}
    >
      <div id="frame">
        <div id="sidepanel">
          <div id="profile">
            <div className="wrap">
              <img
                id="profile-img"
                src="https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-09-at-5.37.37-PM.jpg?resize=1024%2C781&ssl=1"
                className="online"
                alt=""
              />
              <p>Lê An</p>
              <i
                className="fa fa-chevron-down expand-button"
                aria-hidden="true"
              />
              <div id="status-options">
                <ul>
                  <li id="status-online" className="active">
                    <span className="status-circle" /> <p>Online</p>
                  </li>
                  <li id="status-away">
                    <span className="status-circle" /> <p>Away</p>
                  </li>
                  <li id="status-busy">
                    <span className="status-circle" /> <p>Busy</p>
                  </li>
                  <li id="status-offline">
                    <span className="status-circle" /> <p>Offline</p>
                  </li>
                </ul>
              </div>
              <div id="expanded">
                <label htmlFor="twitter">
                  <i className="fa fa-facebook fa-fw" aria-hidden="true" />
                </label>
                <input name="twitter" type="text" defaultValue="mikeross" />
                <label htmlFor="twitter">
                  <i className="fa fa-twitter fa-fw" aria-hidden="true" />
                </label>
                <input name="twitter" type="text" defaultValue="ross81" />
                <label htmlFor="twitter">
                  <i className="fa fa-instagram fa-fw" aria-hidden="true" />
                </label>
                <input name="twitter" type="text" defaultValue="mike.ross" />
              </div>
            </div>
          </div>
          <div id="search">
            <label htmlFor>
              <i className="fa fa-search" aria-hidden="true" />
            </label>
            <input type="text" placeholder="Search contacts..." />
          </div>
          <div id="contacts">
            <ul>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status online" />
                  <img
                    src="https://i.pinimg.com/736x/90/6b/95/906b95b1470504d01d4d1ef8b410c0d8.jpg"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Lợi</p>
                    <p className="preview">
                      Nostrud nulla esse labore sint qui aute ullamco ut
                      occaecat.
                    </p>
                  </div>
                </div>
              </li>
              <li className="contact active">
                <div className="wrap">
                  <span className="contact-status busy" />
                  <img
                    src="https://i.pinimg.com/474x/54/a8/d2/54a8d2d3f62625216bd01a57d3e030dd.jpg"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Thánh Tông</p>
                    <p className="preview">
                      Code thì chạy nhưng trong lòng ko hiểu tại sao
                    </p>
                  </div>
                </div>
              </li>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status away" />
                  <img
                    src="https://i.pinimg.com/originals/d5/4d/39/d54d398868761db57bb3df62fa38f300.jpg"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Thái Tổ</p>
                    <p className="preview">yeahh, code chạy rồi....</p>
                  </div>
                </div>
              </li>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status online" />
                  <img
                    src="https://static.boredpanda.com/blog/wp-content/uploads/2017/05/cute-wholesome-dog-puppie-memes-21-59071808c1c09__700.jpg"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Lợi</p>
                    <p className="preview">Đáp án A nha</p>
                  </div>
                </div>
              </li>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status busy" />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-w0heBdOu3GKXYfOCZ4skU2aMA_KROcIXQ&usqp=CAU"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Hoàng</p>
                    <p className="preview">Làm được chưa?</p>
                  </div>
                </div>
              </li>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status" />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3P-J_CKyNwQXHcAENJ0xfzUHTrlz6xaW0Gg&usqp=CAU"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Bính</p>
                    <p className="preview">Ok :)</p>
                  </div>
                </div>
              </li>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status" />
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Lộc</p>
                    <p className="preview">Thôi sang năm sau t học lại.</p>
                  </div>
                </div>
              </li>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status busy" />
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVFRUSGBgSGBgRGBESGBEYGBgSGBgZGRgYGBkcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCE0NDQ0NDQ0NDE0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ/NDQ0ND80NDQ0NDExND8xMf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABHEAACAQMCAwUEBwUEBwkAAAABAgADBBESIQUGMRMiQVFhMnGBkQcUQlKhscEjM3KS0RUWJPBDU3Sys7TxJTU2YmOio8LS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECBAMF/8QAIxEBAQACAwACAgIDAAAAAAAAAAECEQMSITFBBBMUYSIyUf/aAAwDAQACEQMRAD8A88BkgkWYYM7HPUhMAvGYwMwp2aCTHzFAEwRDMaAoSyNmwCfIE490tqofXdU6C2yrw5XZmq0qVV6vZ1Ups2qorEEliQBgAbesxllMWpjtyKYbCddzeCnaU7qnSoarh9DJURKioyawwpq+dKnCt121Y6AQb/i+i2tq60rUvcGutQNQplR2TKq6FPdXKtvgDOJn9sOlcbLIyst+J1tFK1dKdDtb5RnUiGkmkqupaRGgFi25IONOwySZ1cOtC13WtK60GqWhdlq0qaIj6WVMPTVQrDvBhtnu4OQY/bDpWfAgsstKXEWNg9z2NnrS5SgP8PQ09k1N2fu6cE6tG/Ub9MnPPxLBcEKi6qdvUKoAqhntqTvpUbAanY4HnN45zLxLjYrXkRkzyFjNIFoEdjGkoBoJMIwWElAGDCjYk1QsxR9MUaFvGzDYSJp6JBgxGADHzIpGMTFGZYDZjqIwWSLAaovdPuP5S6thitxoH/U3H/N0pUenntOquaNVi1SnU1uMVHo1RTWpuDl1NN+8cAkjAJGcZnnyY3LWm8bJ8gvxjhNt63NVh7sEZ+an5QeIWjCpxCmdls+1ZEPRdd3QpHT5ZVp3VK9J0FJ6P7NCDTSm5QoBq2LFWLZLsxJ8SfDAHZccSp1DcF6JzeBFrFahGpabKy6O6dB1IpOdWcHpnby/Xk13jj4v+64T/Dj/AOVT+omkt+I3L8Tr2teqGpU6isAEppgC5old0UMcK2MZ3meu6tKqiUnpt2dJQtMK4FRD9ohyhDatsgr9lcYOSSsrmjRY1KdF9bAIz1KzVCw1rUZm7gyxKgahgDyPUv15HfEVvy9cjhz0WpVRWaq9VaOk5KL9VXV5fbb+Uzl4xb6KpTcaEoIQeoKW9NSD8oQrW4omgKD9kz9qQa3f7TCqCH7PAGAdsePWc11WDNkLpAVEVc6sJTppTXJwMnSgycDfPSenHjcb6zllLHE4kDidLCQOs9WELSMyUiMVksEeYDSRlkZEAYooo0HijRQLdmg5jmBiaCjiICFIhCCxhQSIUlhrBUSTEBYhoIAkqwJFjgxARzAfMWJHqj6pQLiRtJHaQsZAJEBxJILCUc5EHEmZYJEgiZZA6TqIkTiBzERiJI4kZgNFHigW2Yo2IQgNFEYoDER1EePiA0kUQcSRZQsRCHGIxufnAlQyOtVVRkmci1qjnCABems7/KdltwdWOXJY+Orp8BPHLmxxe2HBln/Tja+p59r5b/lGa+TGQQcdR44mmThFMdFHukFxwqmcjQvUjw8AZ5/yP6e38X+1Ct0h8RH1gzpuuXBjKFhnwlOWekdLDYbZm8eaV458GWLvDQsyKk4YZEkM9tvEjAYQ5G5gDI3EMxsSpXMyQSs6WWc7QI4oeBFBtZxCMI4kUsRRiYswCAhYgrJFlCCwwsQjwCAAkHZmqcDOgH+Y+Xuj1yThB1bqfITR8Mt1GBgbTm5uTXkdPBx9va5rPh+PDH6S3t7MA5xmXFvbKR0E6Vs08vltOS5PoY+K9bWA/Dc4wOk0FKzUevvieiB0k2u2dq8NJHSZ3ifDA4KsN/Bv0M9BdZUXtMEnIG8srOXseShWo1CrZAzj+k78yz5t4duHXHTB+HSUtBsqJ2cOW/HzubDrdpWMjMPEEie7wMBHjYiMoFpE4krGARCIcRSXTFA6lMcmBmLMinzHEbMWYEgMmUzmUyVWgTRwZHqhK0DmarisB7v6/rNfwzwMwd8+KufLTNnwRiyAicPN/tX0Px/jTV0bkATrp3KnxEow5HUfjJqeDPHTs00CXHrAqXS+crUpHpkxnVV98WEkdbVDOC7fx8olvE6FwPTI/GDdr3TLIVlOaa/cwOpmWszlT6MRNJxO3LHB94mfSnpdh7vnOjiusnB+RPEuI0eKdbiDiJhCgsZYlRtBMPEYiBHFHxFKJsxRgIjMqKLEQjiASrHjiKAgYWuATBkogSnrren9AJt+FUyiHHXGZlbSvqq94AFRj0I8DNzYNlRicPJfX0+DGSeMtccYPbshVDoyWLNpJ0jLKhP2vADxM2z2DISASwUBwx8ttj67wqNJ9WVVAfv4XM6LlmUacsSepPUn9BMXKa8j2xwyl3ant8aM+OJW8Rp1BTeoqlyucIvUkDOPjO+ljR7Qz0xHtU1EqR16jpt5iZmTdnyyPA726eoiVqDBKhdWASsjU9IyGLEacHy3+Hjo1oEZXcjwJx0lg9i6+y5K+TeEjZCOvWbuW/p5zG4/e2f4rZgKTjoMzIHh7shrEqq9BqOCx8hNxxSp3Wz5TC3VVnK5PdQFEQdM57ze8zfHvtNPHmk63bkIjYh4ixO581HiMRDMjaVKRgMY5MjcxtNCikWY8Lp0rHxDQQ9EioiI+IRWDmAQig5jgwHJjCIxCQOgwwYe74Gbbg77LMTmarhT7DE5OfH13/iZfTYW9RQsruJrUfGhgMgoTnBUHHeU4O+0SOcSuuOL00PeJJH2VBJ+QnNHfr1JQ4NXKFDXfSft5w+PINLXhFvUpth31BF0qWJZzn7xx4YlGvNaY/c3JPgAp3nTR4/Tbdg6E+FRWX8TsZdJ8+Nabru9JX3FQTmtrtXGVYEeYMGu8qa0ouYXOwH2tpnOIIFcqPsAL8QNz+MveKPkg6WbSc90ZMzlw5Zi33jmdPDj9vn/AJGX0haDExglp1uKk0iYwnMiYxaAcyPMJoEilFFpihFhTkhMiQyQGFMZHpkpgNAjMbMPEWmAyy65b4BUu3KqdKJ7b4zjPQAeLGU6ISQACSTgAdST0E9w5S4OLegiEAORqfH3yBkn8vhPPPLrGscd1heLcAp29anRSi7mpjDamJ6gEnAwevTAxicxsnouUIIKnYea+YnshQdcSh5k4JTqoXJCFd9fTHxnPll28ro4943xibesHGCcecZeHYYlNO/oMyD+xbrUcPT052c6tRHuHWdtCwuKZzqR/TDKf1E58pp9PDLcSpZ1T0b5AQm4dUPtMce5ZOl2U9tWUnwbbPuPQ/CQXPFlHiPnELdA+qKm4O/mMD5+cjqVCR7upPQe+VlzxFywGNTt7FFN3Pv+6Jfcv8r3FVg90SFB1Cimyjy959TPWY69rmz5vqLjk7hwKtUIzqOkEj7IxvJ+ZeTLe4RmRVp1MFg6AAMfJwOo9es0tpbqihVGAOgkPELlUHeOAep95wB7ydpccrvxy56vtfPFemyMVYEFSVIPgR1EiIm9+kCxpOBc0gQdXZ1UI0nV9lyPPbHxEwbTtxu5ty2aqNoDQmkbGWgXgCOxjKYD4ihZihNVMGkoec4MMGFTZigK0MQHjAR4hFFzyjQDXlEHcBi2PVVJH4gT3C2nh/KVUJd02PmR81InpvMN5+z7JWZWrEIGXO2xdiSOihVOfE5AG5nPyTdemN1GtAmO4rf9tUKg9ymSigdGYbFj5+QnHacTqW1E0lYVVZSErajrFRs5BQ5KqBuN+o6QLClhPdOfKa8dvDjv/KrCku0m7DMhoNOa44wtNyj4G2oE9CoO+PdtMR75XSx+rbYKqy/dYAj8ZxDhVrq1dhSB8G0JkHy6Tkrc1UE3LqfRckn0AHUzve9psutSN98jxl1ZWN7dXLXL1tSL1VRdbsfD2RnOkeXX8ppWXA290reAL+zzn2iW+fT8AJZVagXrN22/Lly1LdJFOJT8xcPNxSKJV0PsQwxgkbgNtkDO+RuCBLBEZt2Bx4L/AFjVkXGCrD1A/pGN1WbNvP8AmS0qOotiyu9Sk9QOi4y1PQ+XxtuVYA7btPMWM+hWt0GSuDtjPjifPVz7TfxN+ZnXx5bjxyx0gdpC5kjSNp6VgMYQhFiTYWqPGxHlEghiCBJVEB0WSYjLDaA0EtHJg5ii05bYfWaQPRmKfzKQPxnq3HuH03QBqophR39tRNPSVYYHgQfwE8o5ZA+s0yRnSxcL5sFJUfPE33G6xwtPOWf9pUbzPgvu9PQTxz89evHO2UxcNqgZhjZE9lfTpk+uwmit0AUiUll1l3RM47d19PrqaiANjPpMXzqpd6QG+NTYxsBtvNpcuBmYjm+sy1KL4PZBgtUjyLDY/DM1hPXlzWybU9C1qZDgHrlfPboZqeF62IRvE5OBjf4S+tnsmRnV6ZCKWbSykhQMzJ8rcaXt81gyhmLAAMdO+QOnunrqfLx3l8aewWFPQgHkBI7GulV3YZIpt2YOCE1Ls2CfaOcg42GMdcysrcXVxoQsoI3qYIx6L6zotbtQoVGXSg0gLjbHpMybYy3j8xegwa2rSdJUN4FgWGfUAjPzlQ93U+8fwkLXD/ece5micdeV5IO44q9NwlRU1MTo0H2wAO8FOSPLGT0njXOFuiXdUIulWIcKPs6wGI+ZM9Sv7RKzo9QazTxg5KNgHIGpcZ38xPPvpAsytyaoOUrgEeasoCspHyPxnRhNMZZdmRZYBSTEQcT1ZRFIxEmYQCIEcULEUoljgxBYSoZlBLDnRb8Oqv7KMR54nYnL9yfsfMy7NqowcS+p8r1z10j4yT+6lbxKyKr+XiBc0ifB/wAcHH44mperUZ3NRtTBiuoDTsDsMe6Q8H5f7Fi7kEhcL6EkbyZqiu7EeJ1EeR6H8RPLl9xe/wCPdZx121TG8sUudtpUoDJ1cicdj6cT16m04regajnJJQYymBgv11HzMetU2J/GScHJClj9s6vgekutM+W+rEWNPHsJ/KsZLJBuFA+ElFbMkRxJ60ZUj6B13B8GXYj4wywgMwieJdXypUvWXZxqX76jcfxKOvvHynXTrK41KQQfEEGVmqc1ZD7SMUf7y9D/ABDoZ7Ycn/XJy/jS+4rS8uNCk4O0895z4iKjIg+yC5952H4Ca2w4tUZ+zqqofGQV9l18SAenula3I3au7tUKiozNpVQcAnYZzOmWa24Otxy1Xn2IxE9No/R7RA71Sqx9NA/SdachWY6iofQvj8hHbFrTyYiRkT2I8lWOMGmffrcn85G3ItnnIRh6a2P5x3iaryDTHnr39xLL7tT+YxR3hp1UuXrYYxSp/wAgJE7qXB6QORTpj1CKM+/aWCSZVnncq1JHEtmoGAo+QxHNop8B8hO/R/0iVJm5NdVebNfuj5RxYjyHyEslWEEk7nVUVLJSMYG/kAJj+Mct1qZNW3BZumgnIKnqCJ6OacfshEz+lmPu48xs6uod5WR12ZG6qf1HrJKrADM9AueF0X9tFJ8D0I+I3kNLgVupyEzj72W3+M87qurHmsmqwNtwe4uiAncpbE1WG7jyQeXr4zVWXKlNBjXWI9WXb3d3YTRpRA2A6bSQLLa87llb8qI8t0/svVHoSh/MZ/GRVeAVB7FRT6OpH4g/pNGBGImdrM8p9sq3C7gH2Ub1DDr5b4ka8Orn/RN/NT//AFNaViAjUanNkyH1C4/1T/NP6yM8KuD9j5so/WbIwCkSQvNkzFLlikxV6mpnTdSjuoXPXcEEy7WmFwAMATr0xtI856dvNOfL27qELDAhhffHwPWNppGKccUxJMCODGySItMeTbRpOxpAlMQ9HlCUDykg901aaRr6yQLHKZiAxM2kLTHCw1hATO2pABYJkjRhIocRYh4MWmFBiPiOQI+0tAECNmGTBPuk0G6xmEICERE8EYEWPSERFgyxkOPSMR6QsGMQfSUBgxwDH0nzjhPWTaGwfSDDIi0ygcRoWiKNGzLmZX6QavEadEV7OtTprQSo9cMtNmde5o0hkYZHf8R1mpVjKTnfP9n3XT9w/wCk1UjE8A45xipZXF9UuabU6dKotMBKAcV1ZMNpFPBGC3Unr0lRf89cTWytqwuP2lWrdI7dnbnK0xQ0DGjAxrboPGXHLn/hy491x/vU55pd8NVLW3rhiWuHr0ypAwoo9lgg+vaH5SNPUfpF5t4hb3FGjaVNOq2Fw+EosS2ahY95TgBUzt5mdH9s8Vr8Jo3lvcIr0luHuWZKWXWmzaQi6CobSvhp6zLc38RUcVcutRlS1NtppAFv2lmyZAPgDVJPulzyFc6uB36H/RLc4/he3DD8Q0gsPoz4txW8Y169dHtkZ6LJ2dFHNUIrKRpQbd4fa+EnuOZ7unxs2zVM22g1BS0UtgLU1Pb06vaUnrA+hE/4Gr/tL/8ACpTO/SxX7DiSVcH9pZsm3m616PX0BBj7Dcu8/wB+1C+atcamo24qUj2dAaajVUphsKozvUXrkTovOc+IJwmhcdv+3uLmooqdnb/uEQqV06NPtYOcZ9Zib23+q01GDm/sqdT0GbpXHwxQHzl1zHppWnB6bAsFSpdMoAyy1qyvgDxOAQJRruV+crs2F/Vrsr3FkV060RdOvuAFUABAZWMreC8f44y21wlSpdU61SolWjToIwpqjKpDlF7hZW1L06eInFyfxyitfipq0nNCtTqXDW7YD6BX06CuRhgtZs77aTK57k8OahfWFSqtC8NTFvWILYoVAr06mMqynV3W6jPnuQ2398blONvaPUBt2Y0UQrTGlzTDIQwXU2XwME/blbwLmXi9xaU6iVGdzfpbOyUaJxbtTVu8FTCqDnLY2z1mc53snfid+9MsGtVW5GnrhTQQn0wH1Z/8s2v0IH/B1v8AaD/w6cCk47x3jtve07M3dLVcMnZ6aduUC1ahRAzGlnbG+x+M9Oo1a9Cy13Lo9ajRqVKlRcaSyKz5ACqMYA8B0nm/Pn/fth77T/mWm95+uRT4ddMfGkafxqFaf/3kqvOOTOduJVby2S4rFqNd3p6TTt01MFIGGVAdmK9D6TcfSZxi4tLMVaD6HNammrSj9xkqEjDAjqo+U8fs+Kon9nEJUU2tY1GdgND/AOIVwUPjgDB9Z6h9NAxYDfpc0/8Acqwjl4fxbitLhtxfXNxTcPQp1LYolLUj1G0AsAig7um3eG04/o35s4hc3oo3dUutSi1RFNOiu4ZSGBRQfZDyq4lw/wCrcE1mvVf699VApuSVp6ddTSgzsNv/AGzg5V4qg4nw5lSogFKlatrGNdR0enrXHVSzjB9JR0f3y4ywunS6QLZkMytRtSxRqwpKFPZnoWHU9My643zFxZrKjxGhWpUqTUlSrSC02Y3Ar1KTOgdG7p0rtq2/PBpYh04hU11FNuVcIpAV9VytPDjxA1ZHqJveMXXa8uI+hE1BF0UxpUaLlkyB4Z06j6sYF/8AR5X4lXpfWLuslSnWUGkqLTV1Ks6uXCIvl5mbLT75mfo7X/s226+w3j/6jzSaYQWj/OTHgaD6/OKUArnyEh4hZrXpPRcHRVUowUkHSeuD4SQMfIQg7eQGJbGVVZ8s21O1eyUVBRqatSlst3yC2Gxt7IlfU+jzhz0UostbRQeo6AVDnVVCasnG47i/jNOpaSAyWLtSW/KFmly12oqGq4ZWLPlcOmgjTj7sDhPJlnb0q9GkKoS7Ts6gd9RKhXXunHdOHb8JoswSwkXar5e4Db2NNqVuKgV3NQ621HWVVTg46YUTk5k5TtL5ke4WoTTUovZvo2Jyc7HO8vtQiDHyjRtm+J8iWNwtFaq1MWtJbZND6SKadAxxufHPqYdzyTZO9u7CoTZpTpUhrOkJSbUuoY7xz1PjNCcn+kWn/O8nooU5OshcVbkq5e5DrVVnJRlqe2pTHQ9euxlTbfRlw1Kgci4dUbUtvUcNSByD00hiNuhJz45mzLAeIiFQR6bUjcq2pr17grUL3dN6FXL91kqBVYBcbHCjeTcu8AoWKNTt1cK79odb6zq0hdjgbYUS17QeAMQb/Jl1U2o+Jcr2txc07uotTtaGgoVfCg02Lrlcb94zu4zwuld0Wt62so5UsEOk91gw3x5gTsZsxDI8o0bZq85BsKlCjbstXRadp2YDkMO1fW+o433EsuP8Eo3lIUa+ooHWphW0trUMo3HoxlqGicRF2z3EOVLWvb07WoKhpW+koquQ3cVkXLY32Y/OBW5NtHe3qlageySlSpFXI0pRYumrbvHJ3Mvizf0xG72PzmtJtm05DsVWuoWrpuwoqZc7hai1RpOO73lHwna3K1qbNbErU7Bei6+/+8ar7ePvMfhLdlPmcRaW8z840m6g4Xw2nbUUo0tQSmCqhjqOCxY5PjuxnYEkSoT5+ozC0e/5wux9l6n5xQNHqfnFCbOY58IoooWYkiigSPAWNFAkWGIopK0jcwF6iKKEpzH8IooUj4RmjRREpvCCP1EUUqYjTpCWKKSrA1ZztVbziiljNc7VW6Zka3Dke0doopqfDKTtW23O86EY5iiiq6IoopFf/9k="
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Thúy Kiều</p>
                    <p className="preview">Tiễn dong</p>
                  </div>
                </div>
              </li>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status" />
                  <img
                    src="https://1.bp.blogspot.com/-vDfh8cptr8o/XVfs53wZVhI/AAAAAAAARUY/g3yEp9liRjgXDYMhWhZsK9iW39y4zKuKACLcBGAs/s1600/bo-hinh-nen-baby-cute-cuc-dang-yeu-cho-dien-thoai-1.jpg"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Thúy Vân</p>
                    <p className="preview">T làm ra rồi nè.</p>
                  </div>
                </div>
              </li>
              <li className="contact">
                <div className="wrap">
                  <span className="contact-status" />
                  <img
                    src="http://emilcarlsson.se/assets/jonathansidwell.png"
                    alt=""
                  />
                  <div className="meta">
                    <p className="name">Lê Lộc</p>
                    <p className="preview">
                      <span>You:</span>Thôi t đi ngủ
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div id="bottom-bar">
            <button id="addcontact">
              <i className="fa fa-user-plus fa-fw" aria-hidden="true" />{" "}
              <span>Add contact</span>
            </button>
            <button id="settings">
              <i className="fa fa-cog fa-fw" aria-hidden="true" />{" "}
              <span>Settings</span>
            </button>
          </div>
        </div>
        <div className="content">
          <div className="contact-profile">
            <img
              src="https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-09-at-5.37.37-PM.jpg?resize=1024%2C781&ssl=1"
              alt=""
            />
            <p>Lê An</p>
            <div className="social-media">
              <i className="fa fa-facebook" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
          </div>
          <div className="messages">
            <ul>
              <li className="sent">
                <img
                  src="https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-09-at-5.37.37-PM.jpg?resize=1024%2C781&ssl=1"
                  alt=""
                />
                <p>Bài này làm sao ạ?</p>
              </li>
              <li className="replies">
                <img
                  src="https://i.pinimg.com/474x/54/a8/d2/54a8d2d3f62625216bd01a57d3e030dd.jpg"
                  alt=""
                />
                <p>
                  Em làm theo hướng dẫn file này nha
                  https://i.pinimg.com/54a8e030dd.jpg
                </p>
              </li>
              <li className="replies">
                <img
                  src="https://i.pinimg.com/474x/54/a8/d2/54a8d2d3f62625216bd01a57d3e030dd.jpg"
                  alt=""
                />
                <p>Có gì nhắn thầy</p>
              </li>
              <li className="sent">
                <img
                  src="https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-09-at-5.37.37-PM.jpg?resize=1024%2C781&ssl=1"
                  alt=""
                />
                <p>Dạ em làm được rồi. Cám ơn thầy.</p>
              </li>
              <li className="replies">
                <img
                  src="https://i.pinimg.com/474x/54/a8/d2/54a8d2d3f62625216bd01a57d3e030dd.jpg"
                  alt=""
                />
                <p>Nhớ làm hết deadline nha.</p>
              </li>
              <li className="replies">
                <img
                  src="https://i.pinimg.com/474x/54/a8/d2/54a8d2d3f62625216bd01a57d3e030dd.jpg"
                  alt=""
                />
                <p>Làm xong sớm thầy cho tiếp. Đừng lo.</p>
              </li>
              <li className="sent">
                <img
                  src="https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-09-at-5.37.37-PM.jpg?resize=1024%2C781&ssl=1"
                  alt=""
                />
                <p>Em sẽ cố gắng.</p>
              </li>
              <li className="replies">
                <img
                  src="https://i.pinimg.com/474x/54/a8/d2/54a8d2d3f62625216bd01a57d3e030dd.jpg"
                  alt=""
                />
                <p>Chúc em làm bài tốt.</p>
              </li>
            </ul>
          </div>
          <div className="message-input">
            <div className="wrap">
              <input type="text" placeholder="nhập và enter" />
              <i className="fa fa-paperclip attachment" aria-hidden="true" />
              <button className="submit">
                <i className="fa fa-paper-plane" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
