import React from "react";
import MainLayout from "src/components/Layout/MainLayout";

function Products(): JSX.Element {
  return (
    <>
      <MainLayout>
        <div
          className="products container-fluid mobile-content my-3 my-sm-5"
          data-controller="products"
        >
          <div className="row flex-nowrap justify-content-between px-lg-5 px-sm-3">
            <div className="products__sidebar pr-4 d-none d-sm-block">
              <aside className="text-capitalize w-100">
                <div className="mb-3">
                  <header className="products__filters-header">
                    <span className="text-muted icomoon icon-tune mr-3" />
                    Bộ lọc tìm kiếm
                  </header>
                </div>
                <hr className="hr mb-3" />
                <div className="mb-3">
                  <form
                    action="/products"
                    className="form-inline justify-content-between"
                    method="get"
                  >
                    <input
                      type="hidden"
                      name="current_tab"
                      id="current_tab"
                      defaultValue="new_arrival"
                    />
                    <div className="products__filter-header mb-2">
                      <label className="mr-2" htmlFor="sort">
                        Sắp xếp
                      </label>
                    </div>
                    <select name="sort" className="custom-select">
                      <option value="new_arrival">Sản phẩm mới</option>
                      <option value="bestsellers">Bán chạy nhất</option>
                      <option value="best_match">Phù hợp nhất</option>
                      <option value="highestprice">Giá: Cao đến Thấp</option>
                      <option value="lowestprice">Giá: Thấp đến Cao</option>
                      <option value="alphabet_az">Tên: A-Z</option>
                      <option value="alphabet_za">Tên: Z-A</option>
                    </select>
                  </form>
                </div>
                <hr className="hr mb-3" />
                <div className="mb-3">
                  <div
                    className="products__filter-header with-toggle"
                    data-target="#categoriesCollapse"
                    data-toggle="collapse"
                  >
                    Nhóm thuốc
                    <i className="fas fa-chevron-right products__filter-expand" />
                  </div>
                  <div
                    className="products__filters collapse show"
                    id="categoriesCollapse"
                  >
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category active"
                        href="/products"
                      >
                        Tất cả sản phẩm
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/co-xuong-khop"
                      >
                        cơ xương khớp
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/da-lieu"
                      >
                        da liễu
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/dau-xoa-cao-xoa"
                      >
                        dầu xoa, cao xoa
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/dong-y"
                      >
                        đông y
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/duoc-my-pham"
                      >
                        dược mỹ phẩm
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/gan-giai-doc"
                      >
                        gan, giải độc
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/giam-dau-ha-sot"
                      >
                        giảm đau, hạ sốt
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/khang-sinh-nam-virus-ki-sinh-trung"
                      >
                        kháng sinh, nấm, virus, kí sinh trùng
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/khang-viem-di-ung"
                      >
                        kháng viêm, dị ứng
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/mau-sinh-pham-y-te-mien-dich"
                      >
                        máu, sinh phẩm y tế, miễn dịch
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/nguoi-viet-dung-hang-viet"
                      >
                        người việt dùng hàng việt
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/nhan-khoa"
                      >
                        nhãn khoa
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/phu-khoa-nam-khoa-noi-tiet"
                      >
                        phụ khoa, nam khoa, nội tiết
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/tai-mui-hong-ho-hap"
                      >
                        tai, mũi, họng, hô hấp
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/than-kinh"
                      >
                        thần kinh
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/than-tiet-nieu"
                      >
                        thận, tiết niệu
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/thuc-pham-chuc-nang"
                      >
                        thực phẩm chức năng
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/tieu-hoa"
                      >
                        tiêu hóa
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/tim-mach"
                      >
                        tim mạch
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/vat-tu-y-te"
                      >
                        vật tư y tế
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/categories/vitamin-va-muoi-khoang"
                      >
                        vitamin và muối khoáng
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/products?cid=-2"
                      >
                        Khác
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="hr mb-3" />
                <div className="mb-3">
                  <div
                    className="products__filter-header with-toggle"
                    data-target="#manufacturersCollapse"
                    data-toggle="collapse"
                  >
                    Nhà sản xuất
                    <i className="fas fa-chevron-right products__filter-expand" />
                  </div>
                  <div
                    className="products__filters collapse show"
                    id="manufacturersCollapse"
                  >
                    <div className="products__filter-item">
                      <a className="products__filter-category" href="/products">
                        Tất cả sản phẩm
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-tnhh-bayer-pharma-ag"
                      >
                        Bayer Pharma
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-sanofi-synthelabo-viet-nam"
                      >
                        Sanofi
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-duoc-pham-glaxosmithkline-gsk"
                      >
                        GSK
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-duoc-hau-giang"
                      >
                        DHG Pharma
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-xuat-nhap-khau-y-te-domesco"
                      >
                        Domesco
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-tnhh-lien-doanh-stada-viet-nam"
                      >
                        Stada|Stella
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-duoc-pham-trung-uong-vidipha"
                      >
                        Vidipha
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-tnhh-mega-lifesciences-vietnam"
                      >
                        Mega
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-duoc-pham-janssen-viet-nam"
                      >
                        Janssen
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-hoa-duoc-pham-mekophar"
                      >
                        Mekophar
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-tnhh-pfizer-pharmaceuticals"
                      >
                        Pfizer
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-tnhh-servier"
                      >
                        Servier
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-galderma-laboratories"
                      >
                        Galderma
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-duoc-pham-duoc-lieu-pharmedic"
                      >
                        Pharmedic
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-abbott-laboratories-s-a"
                      >
                        Abbott
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-us-pharma-usa"
                      >
                        USP Pharma
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-duoc-pham-khanh-hoa-khapharco"
                      >
                        Khapharco
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-duoc-pham-quoc-te-usa"
                      >
                        DPQT USA
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-duoc-pham-nam-ha-naphaco"
                      >
                        Naphaco
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/cong-ty-co-phan-duoc-minh-hai"
                      >
                        Minh Hải
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers/korea-prime-pharma-co"
                      >
                        Korea Prime Pharma Co
                      </a>
                    </div>
                    <div className="products__filter-item">
                      <a
                        className="products__filter-category"
                        href="/manufacturers"
                      >
                        Xem thêm
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="flex-grow-1">
              <div className="px-2 px-sm-0">
                <div className="mb-2">
                  <h1 className="products__header text-capitalize mb-3">
                    Sản Phẩm Mới
                  </h1>
                  Hiển thị <b>1&nbsp;-&nbsp;20</b> trên tổng số <b>657</b> Sản
                  Phẩm
                </div>
              </div>
              <div className="d-none d-sm-block">
                <div className="d-flex justify-content-between flex-wrap align-items-end mb-4">
                  <div className="products__filter-btns">
                    <a className="btn products__filter-btn" href="/products">
                      Tất cả
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=flash_sale"
                    >
                      <i className="fas fa-bolt text-secondary mr-1" />
                      Flash Sale
                      <i className="fas fa-bolt text-secondary ml-1" />
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=big_gift"
                    >
                      Dưỡng da hiệu quả{" "}
                      <i className="fas fa-gift text-secondary" />
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=thuocsi_preference"
                    >
                      Sức khỏe toàn diện
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=point_to_cash"
                    >
                      Cho "Nàng"
                    </a>
                    <a
                      className="btn products__filter-btn active"
                      href="/products?current_tab=new_arrival"
                    >
                      SP Mới
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=decreasing_price"
                    >
                      Giảm giá
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=invoice_exportable"
                    >
                      Hóa đơn nhanh
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=increasing_price"
                    >
                      Tăng giá
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=close_date"
                    >
                      Cận date
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=fast_moving"
                    >
                      Giao nhanh
                    </a>
                    <a
                      className="btn products__filter-btn"
                      href="/products?current_tab=dropship"
                    >
                      Dropship
                    </a>
                  </div>
                </div>
              </div>
              <main className="products__products">
                <div className="d-flex justify-content-center mb-3">
                  <nav
                    aria-label="pager"
                    className="pagy-nav pagination"
                    role="navigation"
                  >
                    <span className="page prev disabled">
                      <i className="fas fa-arrow-left" />{" "}
                    </span>
                    <span className="page current">1 </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=2"
                        rel="next"
                        data-page={2}
                      >
                        2
                      </a>{" "}
                    </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=3"
                        data-page={3}
                      >
                        3
                      </a>{" "}
                    </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=4"
                        data-page={4}
                      >
                        4
                      </a>{" "}
                    </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=5"
                        data-page={5}
                      >
                        5
                      </a>{" "}
                    </span>
                    <span className="page gap">… </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=33"
                        data-page={33}
                      >
                        33
                      </a>{" "}
                    </span>
                    <span className="page next">
                      <a
                        href="/products?current_tab=new_arrival&page=2"
                        rel="next"
                        aria-label="next"
                        data-page={2}
                      >
                        <i className="fas fa-arrow-right" />
                      </a>
                    </span>
                  </nav>
                </div>
                <div className="products__cards mb-3">
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/xigduo-xr-10mg-500mg-astrazeneca-h-28v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/12BD45cCKMH2wZEGn6fFbrZv"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/12BD45cCKMH2wZEGn6fFbrZv")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/xigduo-xr-10mg-500mg-astrazeneca-h-28v"
                            >
                              <h6 className="product-card__name">
                                xigduo xr 10mg/500mg astrazeneca (h/28v)
                              </h6>
                            </a>
                            <div className="product__status mb-2" />
                            <small className="text-muted">
                              Hộp 4 vỉ x 7 viên{" "}
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/than-tiet-nieu">
                                thận, tiết niệu
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/nerazzu-hct-50mg-12-5mg-davipharm-h-30v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/p5REt9cwyXHY58zBZo3sBX1u"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/p5REt9cwyXHY58zBZo3sBX1u")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/nerazzu-hct-50mg-12-5mg-davipharm-h-30v"
                            >
                              <h6 className="product-card__name">
                                nerazzu-hct 50mg/12.5mg davipharm (h/30v)
                              </h6>
                            </a>
                            <div className="product__status mb-2" />
                            <small className="text-muted">
                              Hộp 3 vỉ x 10 viên{" "}
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm: <a href="/categories/tim-mach">tim mạch</a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/natidof-thiocolchicosid-8mg-spm-h-30v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/ZRGBy5Xtx5nAbe9HT99UGzgY"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/ZRGBy5Xtx5nAbe9HT99UGzgY")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/natidof-thiocolchicosid-8mg-spm-h-30v"
                            >
                              <h6 className="product-card__name">
                                natidof thiocolchicosid 8mg spm (h/30v)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 3 vỉ x 10 viên{" "}
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/co-xuong-khop">
                                cơ xương khớp
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/orlistat-120mg-capsules-stada-h-42v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/FA7pBR9bnp3TSXsQUouMP6Bh"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/FA7pBR9bnp3TSXsQUouMP6Bh")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/orlistat-120mg-capsules-stada-h-42v"
                            >
                              <h6 className="product-card__name">
                                orlistat 120mg capsules stada (h/42v)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 2 vỉ x 21 viên nang cứng
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm: <a href="/categories/tieu-hoa">tiêu hóa</a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/sc-vien-uong-chong-co-co-magnum-cramp-zdrovit-h-50v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/54ihsumpfmy0osjqmwvap95ta472"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/54ihsumpfmy0osjqmwvap95ta472")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/sc-vien-uong-chong-co-co-magnum-cramp-zdrovit-h-50v"
                            >
                              <h6 className="product-card__name">
                                [sc] viên uống chống co cơ magnum cramp zdrovit
                                (h/50v)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 5 vỉ x 10 viên
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/thuc-pham-chuc-nang">
                                thực phẩm chức năng
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/sc-vien-ngam-ho-salviasept-zdrovit-h-12v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/ogb7kmqn398wo4dhgdmp4ah58tth"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/ogb7kmqn398wo4dhgdmp4ah58tth")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/sc-vien-ngam-ho-salviasept-zdrovit-h-12v"
                            >
                              <h6 className="product-card__name">
                                [sc] viên ngậm ho salviasept zdrovit (h/12v)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 1 vỉ x 12 viên
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/tai-mui-hong-ho-hap">
                                tai, mũi, họng, hô hấp
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/metsav-metformin-850mg-savipharm-h-100v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/7yzNhfdfQCL9Pq43ppFAjtQ7"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/7yzNhfdfQCL9Pq43ppFAjtQ7")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/metsav-metformin-850mg-savipharm-h-100v"
                            >
                              <h6 className="product-card__name">
                                metsav metformin 850mg savipharm (h/100v)
                              </h6>
                            </a>
                            <div className="product__status mb-2" />
                            <small className="text-muted">
                              Hộp 10 vỉ x 10 viên{" "}
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/than-tiet-nieu">
                                thận, tiết niệu
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/sc-vien-nghe-jacumin-plus-sato-yakuhin-h-60v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/qzs6npys7u5z6r4bhrh5vvpl6122"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/qzs6npys7u5z6r4bhrh5vvpl6122")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/sc-vien-nghe-jacumin-plus-sato-yakuhin-h-60v"
                            >
                              <h6 className="product-card__name">
                                [sc] viên nghệ jacumin plus sato yakuhin (h/60v)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 1 Gói 60 viên nén
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/thuc-pham-chuc-nang">
                                thực phẩm chức năng
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card deal-card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="ribbon price_down">
                            <span className="ribbon-percent">11%</span>
                            <span className="ribbon-status">Giảm</span>
                          </div>
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/tang-qua-combo-1-hop-babytrim-new-200mg-40mg-pharbaco-h-10g-1-5g-1-hop-childestimin-new-desloratadine-2-5mg-pharbaco-h-10g-1-5g-tang-1-hop-akitykity-new-albendazole-200mg-pharbaco-h-2g-1-5g">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/jwDxET87Kjq2F9ukA4WrerD1"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/jwDxET87Kjq2F9ukA4WrerD1")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/tang-qua-combo-1-hop-babytrim-new-200mg-40mg-pharbaco-h-10g-1-5g-1-hop-childestimin-new-desloratadine-2-5mg-pharbaco-h-10g-1-5g-tang-1-hop-akitykity-new-albendazole-200mg-pharbaco-h-2g-1-5g"
                            >
                              <h6 className="product-card__name">
                                [tặng quà] combo 1 hộp babytrim-new 200mg/40mg
                                pharbaco (h/10g/1.5g) + 1 hộp childestimin-new
                                desloratadine 2.5mg pharbaco (h/10g/1.5g) tặng 1
                                hộp akitykity-new albendazole 200mg pharbaco
                                (h/2g/1.5g)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-danger mr-2">
                                Khuyến mãi
                              </span>
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">Combo</small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card deal-card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="ribbon price_down">
                            <span className="ribbon-percent">16%</span>
                            <span className="ribbon-status">Giảm</span>
                          </div>
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/tang-qua-combo-2-hop-amucopect-new-for-children-pharbaco-h-10goi-1-hop-kilecoly-nifuroxazid-200mg-mediplantex-h-10g-1-5g-tang-2-hop-akitykity-new-albendazole-200mg-pharbaco-h-2g-1-5g">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/cdokK6KFLQ87HfuTibSmHx9R"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/cdokK6KFLQ87HfuTibSmHx9R")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/tang-qua-combo-2-hop-amucopect-new-for-children-pharbaco-h-10goi-1-hop-kilecoly-nifuroxazid-200mg-mediplantex-h-10g-1-5g-tang-2-hop-akitykity-new-albendazole-200mg-pharbaco-h-2g-1-5g"
                            >
                              <h6 className="product-card__name">
                                [tặng quà] combo 2 hộp amucopect - new for
                                children pharbaco (h/10gói) + 1 hộp kilecoly
                                nifuroxazid 200mg mediplantex (h/10g/1.5g) tặng
                                2 hộp akitykity-new albendazole 200mg pharbaco
                                (h/2g/1.5g)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-danger mr-2">
                                Khuyến mãi
                              </span>
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">Combo</small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card deal-card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="ribbon price_down">
                            <span className="ribbon-percent">12%</span>
                            <span className="ribbon-status">Giảm</span>
                          </div>
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/tang-qua-combo-2-hop-adkold-new-for-children-2-5mg-0-625mg-pharbaco-h-10goi-1-hop-kidhepet-new-aciclovir-200-mediplantex-h-20g-1-5g-tang-2-hop-akitykity-new-albendazole-200mg-h-2g-1-5g">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/vFMQYFLoCNoH35BT7hQvgbzd"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/vFMQYFLoCNoH35BT7hQvgbzd")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/tang-qua-combo-2-hop-adkold-new-for-children-2-5mg-0-625mg-pharbaco-h-10goi-1-hop-kidhepet-new-aciclovir-200-mediplantex-h-20g-1-5g-tang-2-hop-akitykity-new-albendazole-200mg-h-2g-1-5g"
                            >
                              <h6 className="product-card__name">
                                [tặng quà] combo 2 hộp adkold-new for children
                                2.5mg/0.625mg pharbaco (h/10gói) + 1 hộp
                                kidhepet-new aciclovir 200 mediplantex
                                (h/20g/1.5g) tặng 2 hộp akitykity-new
                                albendazole 200mg (h/2g/1.5g)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-danger mr-2">
                                Khuyến mãi
                              </span>
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">Combo</small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card deal-card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="ribbon price_down">
                            <span className="ribbon-percent">25%</span>
                            <span className="ribbon-status">Giảm</span>
                          </div>
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/mua-3-tang-1-hop-akitykity-new-albendazole-200mg-pharbaco-h-2g-1-5g">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/Gnstqftk5g6Pxz888y8Tsd8d"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/Gnstqftk5g6Pxz888y8Tsd8d")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/mua-3-tang-1-hop-akitykity-new-albendazole-200mg-pharbaco-h-2g-1-5g"
                            >
                              <h6 className="product-card__name">
                                mua 3 tặng 1 hộp akitykity-new albendazole 200mg
                                pharbaco (h/2g/1.5g)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-danger mr-2">
                                Khuyến mãi
                              </span>
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 2 gói x 1.5g
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/khang-sinh-nam-virus-ki-sinh-trung">
                                kháng sinh, nấm, virus, kí sinh trùng
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/irbetan-300-irbesartan-boston-h-50v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/wuxb4qqkoC82GGqgyT1UPxZG"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/wuxb4qqkoC82GGqgyT1UPxZG")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/irbetan-300-irbesartan-boston-h-50v"
                            >
                              <h6 className="product-card__name">
                                irbetan 300 irbesartan boston (h/50v)
                              </h6>
                            </a>
                            <div className="product__status mb-2" />
                            <small className="text-muted">
                              Hộp 5 vỉ x 10 viên{" "}
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm: <a href="/categories/tim-mach">tim mạch</a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/que-gon-bao-thach-goi-20que">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/xGMF5rkDjhAJnFgwnYDL4bmK"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/xGMF5rkDjhAJnFgwnYDL4bmK")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/que-gon-bao-thach-goi-20que"
                            >
                              <h6 className="product-card__name">
                                que gòn bảo thạch (gói/20que)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">Gói 20 que</small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/vat-tu-y-te">vật tư y tế</a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/sc-vien-tang-cuong-sinh-ly-nam-monster-shot-fujina-h-150v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/vr9r2egjqqma9qj6edwa6qxlug17"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/vr9r2egjqqma9qj6edwa6qxlug17")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/sc-vien-tang-cuong-sinh-ly-nam-monster-shot-fujina-h-150v"
                            >
                              <h6 className="product-card__name">
                                [sc] viên tăng cường sinh lý nam monster shot
                                fujina (h/150v)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 1 lọ 150 viên
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/thuc-pham-chuc-nang">
                                thực phẩm chức năng
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/sc-vien-tieu-duong-insuna-fujina-h-120v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/yk76y1roscpesfjvnf0g7tep72qz"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/yk76y1roscpesfjvnf0g7tep72qz")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/sc-vien-tieu-duong-insuna-fujina-h-120v"
                            >
                              <h6 className="product-card__name">
                                [sc] viên tiểu đường insuna fujina (h/120v)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 1 lọ 120 viên
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/thuc-pham-chuc-nang">
                                thực phẩm chức năng
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/sc-vien-ngu-ngon-sleepy-fujina-h-80v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/uy1owxxp7ljxjyh95bven8gkbx6v"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/uy1owxxp7ljxjyh95bven8gkbx6v")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/sc-vien-ngu-ngon-sleepy-fujina-h-80v"
                            >
                              <h6 className="product-card__name">
                                [sc] viên ngủ ngon sleepy fujina (h/80v)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Hộp 1 lọ 80 viên
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/thuc-pham-chuc-nang">
                                thực phẩm chức năng
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/multisun-multivitamin-khoang-chat-capsules-usa-nic-pharma-c-500v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/RUvoEUm8DCwXVFEQvtpdxxbt"
                              style={{
                                backgroundImage:
                                  'url("https://images.thuocsi.vn/RUvoEUm8DCwXVFEQvtpdxxbt")',
                              }}
                              data-loaded="true"
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/multisun-multivitamin-khoang-chat-capsules-usa-nic-pharma-c-500v"
                            >
                              <h6 className="product-card__name">
                                multisun multivitamin &amp; khoáng chất capsules
                                usa nic pharma (c/500v)
                              </h6>
                            </a>
                            <div className="product__status mb-2" />
                            <small className="text-muted">Chai 500 viên</small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/vitamin-va-muoi-khoang">
                                vitamin và muối khoáng
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/orib-sorafenib-tablets-ip-200mg-hetero-c-120v">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/urDLVUut3x5AsBC1JCQgNiCH"
                              style={{
                                backgroundImage:
                                  "url(https://thuocsi.vn/assets/loader/spinner-loop-0323eb4af313e2798aa1311ac1a415c5739b445120b4d6f68a9dd22e085f40d5.gif)",
                              }}
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/orib-sorafenib-tablets-ip-200mg-hetero-c-120v"
                            >
                              <h6 className="product-card__name">
                                orib sorafenib tablets ip 200mg hetero (c/120v)
                              </h6>
                            </a>
                            <div className="product__status mb-2" />
                            <small className="text-muted">
                              Hộp 1 chai 120 viên{" "}
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/mau-sinh-pham-y-te-mien-dich">
                                máu, sinh phẩm y tế, miễn dịch
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="product-card-container">
                    <article className="product-card card">
                      <div className="product-card__main">
                        <div className="product-card__description mb-3">
                          <div className="product-card__new-arrival">Mới</div>
                          <a href="/products/ofloxacin-0-3-traphaco-loc-10c-6ml">
                            <div
                              className="product-card__image mb-3 lozad"
                              data-background-image="https://images.thuocsi.vn/AAdzS7Rafk7YDhXob6cYqpMP"
                              style={{
                                backgroundImage:
                                  "url(https://thuocsi.vn/assets/loader/spinner-loop-0323eb4af313e2798aa1311ac1a415c5739b445120b4d6f68a9dd22e085f40d5.gif)",
                              }}
                            />
                          </a>
                          <div>
                            <a
                              className="text-decoration-none"
                              href="/products/ofloxacin-0-3-traphaco-loc-10c-6ml"
                            >
                              <h6 className="product-card__name">
                                ofloxacin 0.3% traphaco (lốc/10c/6ml)
                              </h6>
                            </a>
                            <div className="product__status mb-2">
                              <span className="badge badge-light display-status mr-1 mb-1 invoice_exportable">
                                <i className="fas mr-1" />
                                Hóa đơn nhanh
                              </span>
                            </div>
                            <small className="text-muted">
                              Lốc 10 chai x 6mL
                            </small>
                            <br />
                            <small className="text-muted product-card__category">
                              Nhóm:{" "}
                              <a href="/categories/khang-sinh-nam-virus-ki-sinh-trung">
                                kháng sinh, nấm, virus, kí sinh trùng
                              </a>
                            </small>
                          </div>
                        </div>
                        <div className="product-card__buy">
                          <a
                            className="btn btn-block btn-sm btn-outline-primary"
                            data-modal="true"
                            href="/authentications/login"
                          >
                            Đăng nhập để có giá tốt
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <nav
                    aria-label="pager"
                    className="pagy-nav pagination"
                    role="navigation"
                  >
                    <span className="page prev disabled">
                      <i className="fas fa-arrow-left" />{" "}
                    </span>
                    <span className="page current">1 </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=2"
                        rel="next"
                        data-page={2}
                      >
                        2
                      </a>{" "}
                    </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=3"
                        data-page={3}
                      >
                        3
                      </a>{" "}
                    </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=4"
                        data-page={4}
                      >
                        4
                      </a>{" "}
                    </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=5"
                        data-page={5}
                      >
                        5
                      </a>{" "}
                    </span>
                    <span className="page gap">… </span>
                    <span className="page">
                      <a
                        href="/products?current_tab=new_arrival&page=33"
                        data-page={33}
                      >
                        33
                      </a>{" "}
                    </span>
                    <span className="page next">
                      <a
                        href="/products?current_tab=new_arrival&page=2"
                        rel="next"
                        aria-label="next"
                        data-page={2}
                      >
                        <i className="fas fa-arrow-right" />
                      </a>
                    </span>
                  </nav>
                </div>
              </main>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Products;
