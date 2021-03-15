import React from "react";

function Review(): JSX.Element {
  return (
    <>
      <section className="home__section buymed-whyus">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-12 reason-item">
              <div className="row">
                <div className="col-xl-12 col-md-4 col-4">
                  <i className="icomoon icon-quality mr-1"></i>
                </div>
                <div className="col-xl-12 col-md-8 col-8 description">
                  <div className="content">
                    <div className="title">sản phẩm chất lượng</div>
                    <div className="sub-title">
                      từ nhà máy, nhà phân phối uy tín
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 reason-item">
              <div className="row">
                <div className="col-xl-12 col-md-4 col-4 fontawesome">
                  <i className="icomoon icon-news-professional mr-1" />
                </div>
                <div className="col-xl-12 col-md-8 col-8 description">
                  <div className="content">
                    <div className="title">tin tức chuyên môn</div>
                    <div className="sub-title">
                      cập nhật tin tức mới, và chính xác
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 reason-item">
              <div className="row">
                <div className="col-xl-12 col-md-4 col-4">
                  <i className="icomoon icon-ship-express mr-1" />
                </div>
                <div className="col-xl-12 col-md-8 col-8 description">
                  <div className="content">
                    <div className="title">giao hàng nhanh</div>
                    <div className="sub-title">
                      đảm bảo trong 36 giờ, an toàn và tin cậy
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 reason-item">
              <div className="row">
                <div className="col-xl-12 col-md-4 col-4">
                  <i className="icomoon icon-support mr-1" />
                </div>
                <div className="col-xl-12 col-md-8 col-8 description">
                  <div className="content">
                    <div className="title">đội ngũ chuyên nghiệp</div>
                    <div className="sub-title">
                      tư vấn miễn phí, tận tình và chu đáo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home__section home__cta">
        <div className="container-fluid py-5 home__cta-overlay">
          <div className="row text-center text-white">
            <div className="col-12">
              <h4>Đăng nhập để tìm hiểu sản phẩm</h4>
            </div>
            <div className="col-12">
              <a
                className="login btn btn-secondary home__cta-btn m-2"
                data-modal="true"
                href="/authentications/login"
              >
                <i className="fas fa-sign-in-alt mr-1" />
                Đăng nhập
              </a>
              <a
                className="register btn btn-primary home__cta-btn m-2"
                data-modal="true"
                href="/authentications/signup"
              >
                <i className="fas fa-user-md mr-1" />
                Tạo tài khoản
              </a>
              <a
                className="call btn btn-info home__cta-btn m-2 d-inline-block d-sm-none"
                href="tel:02873008840"
              >
                <i className="fas fa-phone mr-1" />
                02 873 008 840
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 home__section home__faq">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-primary mb-3">Câu hỏi thường gặp</h2>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360029452912-C%C3%A1ch-%C4%91%C4%83ng-k%C3%BD-v%C3%A0-%C4%91%C4%83ng-nh%E1%BA%ADp-t%C3%A0i-kho%E1%BA%A3n-t%E1%BA%A1i-thuocsi-vn"
              target="_blank"
              title="Cách đăng ký và đăng nhập tài khoản tại thuocsi.vn"
            >
              Cách đăng ký và đăng nhập tài khoản tại thuocsi.vn
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360029452652-H%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-%C4%91%E1%BA%B7t-h%C3%A0ng"
              target="_blank"
              title="⭑ Hướng dẫn đặt hàng"
            >
              ⭑ Hướng dẫn đặt hàng
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360030488231-Qu%C3%AAn-m%E1%BA%ADt-kh%E1%BA%A9u-%C4%91%C4%83ng-nh%E1%BA%ADp"
              target="_blank"
              title="Quên mật khẩu đăng nhập"
            >
              Quên mật khẩu đăng nhập
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360029505332-D%C3%B9ng-th%E1%BB%AD-t%E1%BA%A1i-website-thuocsi-vn-"
              target="_blank"
              title="Dùng thử tại website thuocsi.vn"
            >
              Dùng thử tại website thuocsi.vn
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360030159252-Nh%C6%B0-th%E1%BA%BF-n%C3%A0o-l%C3%A0-h%C3%A0ng-c%E1%BA%ADn-date-H%E1%BA%A1n-s%E1%BB%AD-d%E1%BB%A5ng-c%C3%B2n-bao-l%C3%A2u-"
              target="_blank"
              title="Như thế nào là hàng cận date? Hạn sử dụng còn bao lâu?"
            >
              Như thế nào là hàng cận date? Hạn sử dụng còn bao lâu?
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360029773811-Thanh-to%C3%A1n-b%E1%BA%B1ng-h%C3%ACnh-th%E1%BB%A9c-chuy%E1%BB%83n-kho%E1%BA%A3n-nh%C6%B0-th%E1%BA%BF-n%C3%A0o-"
              target="_blank"
              title="Thanh toán bằng hình thức chuyển khoản như thế nào?"
            >
              Thanh toán bằng hình thức chuyển khoản như thế nào?
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360030900651-T%E1%BA%A1i-sao-t%C3%B4i-kh%C3%B4ng-thanh-to%C3%A1n-%C4%91%C6%B0%E1%BB%A3c"
              target="_blank"
              title="Tại sao tôi không thanh toán được"
            >
              Tại sao tôi không thanh toán được
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360029453432-Xu%E1%BA%A5t-h%C3%B3a-%C4%91%C6%A1n-%C4%91%E1%BB%8F-t%E1%BA%A1i-thuocsi-vn-"
              target="_blank"
              title="Xuất hóa đơn đỏ tại thuocsi.vn?"
            >
              Xuất hóa đơn đỏ tại thuocsi.vn?
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360029396272-T%C3%B4i-mu%E1%BB%91n-ch%E1%BB%89nh-l%E1%BA%A1i-%C4%91%C6%A1n-h%C3%A0ng-th%C3%AC-l%C3%A0m-c%C3%A1ch-n%C3%A0o-"
              target="_blank"
              title="Tôi muốn chỉnh lại đơn hàng thì làm cách nào?"
            >
              Tôi muốn chỉnh lại đơn hàng thì làm cách nào?
            </a>
          </div>
          <div className="col-12 col-sm-6">
            <a
              className="home__faq-item"
              href="https://thuocsi.zendesk.com/hc/vi/articles/360030403531-Th%E1%BB%9Di-gian-giao-h%C3%A0ng-d%E1%BB%B1-ki%E1%BA%BFn"
              target="_blank"
              title="Thời gian giao hàng dự kiến"
            >
              Thời gian giao hàng dự kiến
            </a>
          </div>
          <div className="col-12 text-center mt-3">
            <a
              className="btn btn-white"
              href="https://thuocsi.zendesk.com/hc/vi/categories/360001885792-C%C3%A2u-h%E1%BB%8Fi-th%C6%B0%E1%BB%9Dng-g%E1%BA%B7p-Q-A-"
              target="_blank"
            >
              Xem tất cả câu hỏi
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
