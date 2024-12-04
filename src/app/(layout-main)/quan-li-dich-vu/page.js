"use client";
import React, { useState } from "react";
import "./style.scss";
import { Input, Space, Select, Pagination, Modal } from "antd";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const { Search } = Input;
const data = [
  {
    img: "/img/service-img/cap_cuu_247.jpg",
    name: "Cấp cứu 24/24",
    detail:
      "Dịch vụ hoạt động 24/24, hãy liên hệ hotline của Petpals để chúng tôi hỗ trợ bạn kịp thời",
    link: "/dich-vu/cap-cuu-24-24",
  },
  {
    img: "/img/service-img/tiem-vaccine.jpg",
    name: "Tiêm phòng Vaccine",
    detail:
      "Chúng tôi sử dụng vaccine hàng đầu từ Mỹ và Châu Âu. Bạn sẽ luôn an tâm với lựa chọn tiên chủng tại Petpals",
    link: "/dich-vu/tiem-phong-vaccine",
  },
  {
    img: "/img/service-img/kham_benh.jpg",
    name: "Khám và điều trị bệnh",
    detail:
      "Thực hiện tiếp nhận, sàng lọc, khám chuyên khoa,  xét nghiệm, chuẩn đoán và điều trị bệnh cho thú cưng.",
    link: "/dich-vu/kham-suc-khoe",
  },
  {
    img: "/img/service-img/sieu_am.jpg",
    name: "Siêu âm - nội khoa",
    detail:
      "Chúng tôi có máy siêu âm chuyên dụng phục vụ các BOSS đến siêu âm thai, nội khoa, chuyên khoa.",
    link: "/dich-vu/sieu-am-x-quang-xet-nghiem",
  },
  {
    img: "/img/service-img/chup-xquang.jpg",
    name: "Chụp X - Quang",
    detail:
      "Dịch vụ chụp X - Quang chất lượng cao phục vụ cho chẩn đoán hình ảnh, phẫu thuật xương khớp hiệu quả.",
    link: "/dich-vu/sieu-am-x-quang-xet-nghiem",
  },
  {
    img: "/img/service-img/phau_thuat.jpg",
    name: "Phẫu thuật ngoại khoa",
    detail:
      "Đội ngũ bác sĩ của chúng tôi đã thực hiện rất nhiều ca phẫu thuật đa chấn thương cứu sống các bạn vật nuôi",
    link: "/dich-vu/phau-thuat-ngoai-khoa",
  },
  {
    img: "/img/service-img/dich-vu-triet-san-1-425x313.jpg",
    name: "Triệt sản thẩm mỹ",
    detail:
      "Petpal là nơi gửi gắm các bạn thú cưng cần triệt sản, không đau, không xấu, vết mổ liền nhanh.",
    link: "/dich-vu/triet-san",
  },
  {
    img: "/img/service-img/ho_sinh.jpg",
    name: "Đỡ đẻ hộ sinh",
    detail:
      "Bác sĩ cùng trang thiết bị tại Petpals luôn túc trực cùng các bé cún, miu cho một kỳ vượt cạn an toàn.",
    link: "/dich-vu/do-de-ho-sinh",
  },
  {
    img: "/img/service-img/lay_cao_rang.jpg",
    name: "Lấy cao răng",
    detail:
      "Răng thú cưng ố vàng làm mất thẩm mỹ, mảng bám làm miệng có mùi hôi, viêm lợi, sâu răng, và khó khăn trong việc ăn uống? Đừng lo, Petpals đã có giải pháp lý tưởng cho thú cưng của bạn!",
    link: "/dich-vu/lay-cao-rang",
  },
  {
    img: "/img/service-img/kham_benh2.jpg",
    name: "Khám sức khỏe",
    detail:
      "Bạn mới đón thú cưng về và muốn kiểm tra xem bé có đang gặp phải vấn đề gì về sức khoẻ không? Hoặc đơn giản là bạn muốn kiểm tra, tầm soát sức khoẻ hàng năm cho bé thú cưng của mình? ",
    link: "/dich-vu/kham-benh",
  },
  {
    img: "/img/service-img/spa.jpg",
    name: "Spa-grooming",
    detail:
      "Dịch vụ tắm, spa, cắt tỉa lông, làm đẹp, chúng tôi luôn chăm sóc cẩn thận, chu đáo, kỹ càng nhất cho thú cưng của bạn.",
    link: "/dich-vu/spa-grooming",
  },
  {
    img: "/img/service-img/khachsan.jpg",
    name: "Khách sạn thú cưng",
    detail:
      "Địa chỉ tin cậy với hệ thống lưu trú chất lượng. “Sen” sẽ hoàn toàn yên tâm khi vắng mặt, hoặc cần nghỉ ngơi.",
    link: "/dich-vu/khach-san-thu-cung",
  },
];

export default function Page() {
  const router = useRouter();
  const [articleList, setArticleList] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    toast.success("Xóa thành công!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeNumberPet = (e) => {
    setNumberPet(+e.target.value);
  };

  const handleSearch = (value) => {
    if (value === "") {
      setArticleList(data);
    } else {
      let searchData = data.filter((item) => {
        return item.name.trim().match(value.trim());
      });
      setArticleList(searchData);
    }
  };
  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setArticleList(data);
    }
  };
  return (
    <section className="section">
      <Modal
        title="Xóa dịch vụ?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa dịch vụ không?</p>
      </Modal>
      <h1 className="section-heading">Quản lý dịch vụ</h1>
      <div
        className="filter"
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="">Tìm kiếm dịch vụ:</label>
            <Search
              placeholder="Nhập tiêu đề bài viết"
              style={{ width: 328, height: 36 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link href="/quan-li-dich-vu/them-dich-vu" className="add-new-btn">
          + Thêm dịch vụ
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">Stt</div>
          <div className="table-column">Hình ảnh</div>
          <div className="table-column">Tiêu đề</div>
          <div className="table-column">Nội dung</div>
          <div className="table-column">Ngày đăng</div>
          <div className="table-column">Người viết</div>
          <div className="table-column">Tùy chọn</div>
        </div>
        {articleList.map((article, index) => {
          return (
            <div className="table-row" key={article.id}>
              <div className="table-column">{index + 1}</div>
              <div className="table-column">
                <Image
                  src={article.img}
                  width={40}
                  height={26}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="table-column"
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                {article.name}
              </div>
              <div
                className="table-column"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "justify",
                }}
              >
                {article.detail}
              </div>
              <div className="table-column">08/07/2018</div>
              <div className="table-column">Bùi Quang Trưởng</div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => {
                    router.push("/quan-li-dich-vu/chinh-sua-dich-vu");
                  }}
                />
                <Image
                  src="/icon/mdi_trash.svg"
                  alt="trash"
                  width={24}
                  height={24}
                  onClick={showModal}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        defaultCurrent={1}
        total={2}
        defaultPageSize={20}
        showSizeChanger={false}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      />
    </section>
  );
}
