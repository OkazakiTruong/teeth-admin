"use client";
import React, { useState } from "react";
import "./style.scss";
import { Input, Space, Select, Pagination, Modal } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Search } = Input;
const data = [
  {
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Minh Thanh",
    title: "Cầu răng sứ và implant...",
    detail: "Mất răng không chỉ làm giảm thẩm mỹ mà còn ảnh hưởng đến...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-3.jpg",
    date: "08/12/2023",
    author: "Minh Thanh",
    title: "Trụ implant là gì...",
    detail: "Trụ implant là một trong những bộ phận quan trọng...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-5.jpg",
    date: "07/11/2023",
    author: "Minh Thanh",
    title: "Trám răng cửa giá từ.... ",
    detail:
      "Trám răng cửa bao nhiêu tiền tùy thuộc vào tình trạng răng, vị trí...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-2.jpg",
    date: "01/10/2023",
    author: "Minh Thanh",
    title: "Cách sử dụng miếng dán...",
    detail: `Miếng dán trắng răng là giải pháp “cứu cánh” để khắc phục nhữn...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-8.jpg",
    date: "11/09/2023",
    author: "Minh Thanh",
    title: "30 tuổi niềng răng mất...",
    detail: `Ở tuổi 30, xương hàm đã cứng cáp
 và răng cố định vì thế niềng răng ...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-9.jpg",
    date: "11/09/2023",
    author: "Minh Thanh",
    title: "Răng số 8 bị sâu vỡ phải... ",
    detail: `Với các trường hợp răng số 8 bị 
sâu vỡ, biện pháp khắc phục...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-10.jpg",
    date: "10/08/2023",
    author: "Minh Thanh",
    title: "Nhổ răng khôn có được...",
    detail: `Răng khôn đa phần dễ bị mọc lệch, 
mọc ngầm nên chi phí phẫu thuật...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-11.jpg",
    date: "06/03/2023",
    author: "Minh Thanh",
    title: "Cấy ghép implant có ng...",
    detail: `Để hiểu hơn về dịch vụ cấy ghép 
implant cũng như các lưu ý nhằm ...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-14.jpg",
    date: "11/05/2023",
    author: "Minh Thanh",
    title: "Cắt lợi là gì & Có nên cắt...",
    detail: `Cắt lợi (hay cắt nướu) là một thủ 
thuật nha khoa giúp loại bỏ phần ...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-16.jpg",
    date: "10/05/2023",
    author: "Minh Thanh",
    title: "Hàn răng bằng composite",
    detail: `Hàn răng bằng composite là phương
pháp giúp cải thiện tính thẩm mỹ...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-18.jpg",
    date: "10/03/2023",
    author: "Minh Thanh",
    title: "6 bước trong quy trình hàn",
    detail: `Hàn răng là phương pháp phổ biến
nhất để điều trị và khôi phục các...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-20.jpg",
    date: "10/02/2023",
    author: "Minh Thanh",
    title: "Hàn răng bao lâu thì ...",
    detail: `Hàn răng là một một kỹ thuật nha 
khoa giúp phục hồi lại những tổn...`,
  },
  {
    img: "/img/articles/article-8.jpg",
    date: "09/01/2023",
    author: "Minh Thanh",
    title: "Bọc răng sứ mất từ 2 – 7...",
    detail: `Nụ cười rạng rỡ, nhan sắc thăng 
hạng chỉ sau vài ngày nhờ bọc răng...`,
  },
  {
    img: "/img/articles/article-19.jpg",
    date: "12/12/2022",
    author: "Minh Thanh",
    title: "Cầu răng sứ và implant...",
    detail: `Mất răng không chỉ làm giảm thẩm
mỹ mà còn ảnh hưởng đến chức...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-20.jpg",
    date: "01/12/2022",
    author: "Minh Thanh",
    title: "Cấy ghép implant có nguy...",
    detail: `Phương pháp cấy ghép implant sẽ
đảm bảo an toàn, phục hồi răng... `,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-6.jpg",
    date: "11/11/2022",
    author: "Minh Thanh",
    title: "Siết niềng răng có đau k...",
    detail: `Siết niềng răng được thực hiện khi
khách hàng sử dụng phương pháp...`,
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
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
        return item.title.trim().match(value.trim());
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
        title="Xóa bài viết?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa bài viết không?</p>
      </Modal>
      <h1 className="section-heading">Quản lý bài viết</h1>
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
            <label htmlFor="">Tìm kiếm bài viết</label>
            <Search
              placeholder="Nhập tiêu đề bài viết"
              style={{ width: 328, height: 36 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link href="/quan-li-bai-viet/them-bai-viet" className="add-new-btn">
          + Thêm bài viết
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
              <div className="table-column">{article.title}</div>
              <div className="table-column">{article.detail}</div>
              <div className="table-column">{article.date}</div>
              <div className="table-column">{article.author}</div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => {
                    router.push("/quan-li-bai-viet/chinh-sua-bai-viet");
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
