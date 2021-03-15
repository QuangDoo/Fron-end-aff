import React from "react";
import Link from "next/link";

const Nav = (): JSX.Element => {
  return (
    <nav className="buymed-nav">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <div className="buymed-logo mr-2">
              <a href="/" title="thuocsi.vn">
                <img
                  alt="thuocsi.vn"
                  className="img-fluid"
                  src="https://thuocsi.vn/assets/buymed/logos/logo-icon-inverse-0b2c86569d4f524c701d36a672b0e6a64d8f61ba1d543bbe822b0fb282164ac2.svg"
                  title="thuocsi.vn"
                />
              </a>
            </div>
            <ul className="nav text-capitalize">
              <li
                className="buymed-nav__item"
                data-path="/products"
                data-target="navigation.navLink"
              >
                <Link href="/products">
                  <a
                    className="buymed-nav__link"
                    href="/products?current_tab=new_arrival"
                    title="Sản Phẩm"
                  >
                    <i className="buymed-nav__icon icomoon icon-product" />
                    <span className="buymed-nav__title">Sản Phẩm</span>
                  </a>
                </Link>
              </li>
              <li
                className="buymed-nav__item"
                data-path="/ingredients"
                data-target="navigation.navLink"
              >
                <a
                  className="buymed-nav__link"
                  href="/ingredients"
                  title="Hoạt chất"
                >
                  <i className="buymed-nav__icon icomoon icon-ingredients" />
                  <span className="buymed-nav__title">Hoạt chất</span>
                </a>
              </li>
              <li
                className="buymed-nav__item"
                data-path="/quick-order"
                data-target="navigation.navLink"
              >
                <a
                  className="buymed-nav__link"
                  href="/quick-order"
                  title="Đặt hàng nhanh"
                >
                  <i className="buymed-nav__icon icomoon icon-quick-order" />
                  <span className="buymed-nav__title">Đặt hàng nhanh</span>
                </a>
              </li>
              <li
                className="buymed-nav__item"
                data-path="/deals"
                data-target="navigation.navLink"
              >
                <a
                  className="buymed-nav__link"
                  href="/deals"
                  title="Khuyến mãi"
                >
                  <i className="buymed-nav__icon fab fa-hotjar" />
                  <span className="buymed-nav__title">Khuyến mãi</span>
                </a>
              </li>
              <li
                className="buymed-nav__item"
                data-path="/promo-codes"
                data-target="navigation.navLink"
              >
                <a
                  className="buymed-nav__link"
                  href="/promo-codes"
                  title="Mã giảm giá"
                >
                  <i className="buymed-nav__icon fas fa-tag" />
                  <span className="buymed-nav__title">Mã giảm giá</span>
                  <span className="buymed-nav__tag badge badge-pill">Mới</span>
                </a>
              </li>
            </ul>
            <div className="buymed-search-container" />
            <div className="header-right header-right--guest">
              <ul className="nav align-items-center">
                <li className="nav-item mr-3">
                  <a
                    className="buymed-nav__link"
                    data-modal="true"
                    data-toggle="tooltip"
                    href="/authentications/login"
                    title="Đăng nhập"
                  >
                    <i className="fas fa-sign-in-alt buymed-nav__icon" />
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a
                    className="buymed-nav__link"
                    data-modal="true"
                    data-toggle="tooltip"
                    href="/authentications/signup"
                    data-original-title="Tạo tài khoản"
                  >
                    <i className="fas fa-user-md buymed-nav__icon" />
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a
                    className="buymed-nav__link"
                    data-action="click->demo#startDemo"
                    data-controller="demo"
                    data-toggle="tooltip"
                    href="javascript:void(0)"
                    title="Dùng Thử"
                  >
                    <i className="fas fa-eye buymed-nav__icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
