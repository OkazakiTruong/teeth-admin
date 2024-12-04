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
    img: "/img/service-img/kham-tong-quat.jpg",
    name: "Khám tổng quát răng miệng",
    detail:
      "Dịch vụ khám tổng quát răng miệng tại Dental Clinic bao gồm nhiều dịch vụ kèm nhiều ưu đãi tới những người mới khám lần đầu",
    link: "/dich-vu/kham-tong-quat-rang-mieng",
  },
  {
    img: "/img/service-img/dieu-tri-sau-rang.jpg",
    name: "Điều trị sâu răng",
    detail:
      "Dịch vụ điều trị sâu răng là một trong những dịch vụ cơ bản thường được mọi người tới thăm khám thường xuyên",
    link: "/dich-vu/dieu-tri-sau-rang",
  },
  {
    img: "/img/service-img/kham_benh.jpg",
    name: "Khám và điều trị bệnh",
    detail:
      "Thực hiện tiếp nhận, sàng lọc, khám chuyên khoa,  xét nghiệm, chuẩn đoán và điều trị bệnh cho thú cưng.",
    link: "/dich-vu/kham-suc-khoe",
  },
  {
    img: "/img/service-img/viem-nha-chu.webp",
    name: "Viêm nha chu",
    detail:
      "Viêm nha chu là một bệnh lý răng miệng thường gặp, không chỉ gây hại cho mô mềm và phá hủy xương xung quanh răng mà còn khiến răng lung lay...",
    link: "/dich-vu/viem-nha-chu",
  },
  {
    img: "/img/service-img/tram-rang.jpg",
    name: "Trám răng",
    detail:
      "Nụ cười rạng rỡ là điểm cộng cho sự tự tin và thành công của mỗi cá nhân mỗi khi đi ra ngoài cũng như gặp gỡ mọi người mọi lúc mọi nơi.",
    link: "/dich-vu/tram-rang",
  },
  {
    img: "/img/service-img/tay-trang-rang.webp",
    name: "Tẩy trắng răng",
    detail:
      "Tẩy trắng răng là phương pháp không xâm lấn giúp làm sáng bề mặt răng đồng thời cũng giúp răng loại bỏ đi những vi khuẩn gây hại bám xung quanh răng giúp răng chắc khoẻ.",
    link: "/dich-vu/tay-trang-rang",
  },
  {
    img: "/img/service-img/lay-cao-rang.jpg",
    name: "Lấy cao răng",
    detail:
      "Lấy cao răng là thủ thuật nha khoa để loại bỏ những mảng bám, vôi răng bám xung quanh hàm răng của bạn.",
    link: "/dich-vu/lay-cao-rang",
  },
  {
    img: "/img/service-img/dan-su.webp",
    name: "Dán sứ Veneer",
    detail:
      "Dán răng sứ Veneer là sử dụng miếng dán sứ mỏng, gắn cố định lên bề mặt răng giúp răng trắng sáng đồng thời bảo vệ răng khỏi các tác nhân bên ngoài.",
    link: "/dich-vu/dan-su-veneer",
  },
  {
    img: "/img/service-img/lay_cao_rang.jpg",
    name: "Lấy cao răng",
    detail:
      "Răng thú cưng ố vàng làm mất thẩm mỹ, mảng bám làm miệng có mùi hôi, viêm lợi, sâu răng, và khó khăn trong việc ăn uống? Đừng lo, Dental Clinic đã có giải pháp lý tưởng cho thú cưng của bạn!",
    link: "/dich-vu/lay-cao-rang",
  },
  {
    img: "/img/service-img/boc-su.webp",
    name: "Bọc răng sứ Ceramill",
    detail:
      "Răng sứ Ceramill là loại răng làm hoàn toàn từ sứ, có nguồn gốc từ công nghệ Đức giúp bảo tồn răng gốc, bảo hành trọn đời.",
    link: "/dich-vu/boc-rang-su-ceramill",
  },
  {
    img: "/img/service-img/nieng-rang.jpg",
    name: "Niềng răng mắc cài",
    detail:
      "Hiệu quả chỉnh nha cao: Niềng răng mắc cài kim loại mang đến hiệu quả cao giúp nắn chỉnh răng về đúng vị trí, cải thiện khớp cắn.",
    link: "/dich-vu/nieng-rang-mac-cai",
  },
  {
    img: "/img/service-img/trong-rang.jpg",
    name: "Trồng răng Implant",
    detail:
      "Trì hoãn quá lâu việc trồng răng có thể dẫn đến hậu quả nghiêm trọng, lâu dần xương hàm ở vị trí răng mất bị tiêu xương dẫn đến tình trạng hóp má.",
    link: "/dich-vu/trong-rang-implant",
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
                className="table-column column-content"
              >
                {article.detail}
              </div>
              <div className="table-column">08/07/2018</div>
              <div className="table-column">Đặng Thị Minh Thanh</div>
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
