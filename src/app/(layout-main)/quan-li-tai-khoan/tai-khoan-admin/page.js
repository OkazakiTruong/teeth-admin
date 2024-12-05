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
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Bùi Quang Trưởng",
    position: "Bác sĩ",
    gender: true,
    phoneNumber: "0975654956",
    email: "buiquangtruong@gmail.com",
    status: true,
  },
  {
    name: "Hoàng Minh Hạnh",
    position: "Bác sĩ",
    gender: false,
    phoneNumber: "0977354955",
    email: "hoangminhhang@gmail.com",
    status: true,
  },
  {
    name: "Hoàng Minh Duyên",
    position: "Bác sĩ",
    gender: false,
    phoneNumber: "0557354956",
    email: "hoangminhduyen@gmail.com",
    status: true,
  },
  {
    name: "Hoàng Đức Trung",
    position: "Nhân viên",
    gender: true,
    phoneNumber: "0937324946",
    email: "hoangductrung@gmail.com",
    status: true,
  },
  {
    name: "Trần Văn Trung",
    position: "Nhân viên",
    gender: true,
    phoneNumber: "0956354946",
    email: "tranvantrung@gmail.com",
    status: true,
  },
  {
    name: "Nguyễn Nhâm Quỳnh",
    position: "Bác sĩ",
    gender: false,
    phoneNumber: "0337354955",
    email: "nguyennhamquynh@gmail.com",
    status: true,
  },
  {
    name: "Trần Văn Linh",
    position: "Bác sĩ",
    gender: true,
    phoneNumber: "0975554956",
    email: "tranvanlinh@gmail.com",
    status: true,
  },
  {
    name: "Nguyễn Thị Thảo",
    position: "Nhân viên",
    gender: false,
    phoneNumber: "0977771956",
    email: "nguyenthithao@gmail.com",
    status: true,
  },
  {
    name: "Bùi Văn Đoan",
    position: "Nhân viên",
    gender: true,
    phoneNumber: "0973354956",
    email: " buivandoan@gmail.com",
    status: true,
  },
  {
    name: "Bùi Thị Thu",
    position: "Nhân viên",
    gender: true,
    phoneNumber: "0973354956",
    email: "buithithu@gmail.com",
    status: true,
  },
  {
    name: "Đoàn Thị Trang",
    position: "Nhân viên",
    gender: true,
    phoneNumber: "0977354956",
    email: "doanthitrang@gmail.com",
    status: true,
  },
  {
    name: "Hoàng Thị Linh",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0973354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
];
export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [account, setAccount] = useState(data);
  const handleSearch = (value) => {
    if (value === "") {
      setAccount(data);
    } else {
      let searchData = data.filter((item) => {
        return item.name.trim().match(value.trim());
      });
      setAccount(searchData);
    }
  };
  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setAccount(data);
    }
  };
  const handleDelete = () => {
    setIsModalOpen(true);
  }
  const handleOk = () => {
    toast.success("Xóa tài khoản thành công!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const getDetail = () => {
    router.push("/quan-li-tai-khoan/tai-khoan-admin/chi-tiet-admin");
  }
  return (
    <section className="section">
      <Modal
        title="Xóa tài khoản"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa tài khoản này không?</p>
      </Modal>
      <h1 className="section-heading">
        Quản lý tài khoản/ admin
      </h1>
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
            <label htmlFor="">Tìm kiếm tài khoản:</label>
            <Search
              placeholder="Nhập tên nhân viên"
              style={{ width: 328, height: 36 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link
          href="/quan-li-tai-khoan/tai-khoan-admin/them-admin"
          className="add-new-btn"
        >
          + Thêm nhân viên
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column first-column">Stt</div>
          <div className="table-column">Tên tài khoản</div>
          <div className="table-column">Chức vụ</div>
          <div className="table-column">Giới tính</div>
          <div className="table-column">Số điện thoại</div>
          <div className="table-column">Email</div>
          <div className="table-column">Trạng thái</div>
          <div className="table-column">Thao tác</div>
        </div>
        {account.map((acc, index) => {
          return (
            <div className="table-row" key={index}>
              <div className="table-column first-column">{index + 1}</div>
              <div
                className="table-column"
              // style={{ display: "flex", justifyContent: "flex-start" }}
              >
                {acc.name}
              </div>
              <div className="table-column">{acc.position}</div>
              <div className="table-column">
                {acc.gender && "Nam"}
                {!acc.gender && "Nữ"}
              </div>
              <div className="table-column">{acc.phoneNumber}</div>
              <div className="table-column">{acc.email}</div>
              <div className="table-column">
                {acc.status && "Kích hoạt"}
                {!acc.status && "Chưa kích hoạt"}
              </div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={getDetail}
                />
                <Image
                  src="/icon/mdi_trash.svg"
                  alt="trash"
                  width={24}
                  height={24}
                  onClick={handleDelete}
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
