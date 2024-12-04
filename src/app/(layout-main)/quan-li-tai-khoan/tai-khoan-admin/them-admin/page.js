"use client";
import React, { useState } from "react";
import { Select, DatePicker, Modal, Input } from "antd";
import "./style.scss";
import PetItem from "@/components/PetItem/PetItem";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Page() {
  const [numberPet, setNumberPet] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (numberPet > 1) {
      setNumberPet(numberPet - 1);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeNumberPet = (e) => {
    setNumberPet(+e.target.value);
  };
  return (
    <section className="section">
      <Modal
        title="Xóa thông tin thú cưng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa thông tin thú cưng?</p>
      </Modal>
      <h1 className="section-heading">
        QUẢN LÝ TÀI KHOẢN/ ADMIN/ TẠO TÀI KHOẢN
      </h1>
      <div
        className="wrapper"
        style={{
          display: "flex",
          width: "100%",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <div
          className="image"
          style={{ width: "30%", display: "flex", justifyContent: "center" }}
        >
          <Image
            src="/img/grey-img-3.svg"
            width={211}
            height={211}
            style={{ borderRadius: "10px", marginTop: "36px" }}
          />
        </div>
        <form
          action=""
          className="form"
          style={{
            width: "70%",
            borderLeft: "2px solid rgba(0, 0, 0, 0.1)",
            padding: "30px 20px",
          }}
        >
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Tên tài khoản</label>
              <input type="text" placeholder="Nhập tên tài khoản" />
            </div>
          </div>
          <div className="">
            <div style={{ fontWeight: "600" }}>Chọn ảnh đại diện</div>
            <button
              style={{
                display: "block",
                border: "1px solid black",
                padding: "7px 10px",
                borderRadius: "7px",
                margin: "15px 0",
                background: "white",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Chọn ảnh
            </button>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ marginBottom: "15px", fontWeight: "600" }}>
              Giới tính
            </div>
            <div style={{ display: "flex" }}>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  value="male"
                  defaultChecked
                  name="gender"
                  style={{
                    marginRight: "10px",
                    width: "24px",
                    height: "24px",
                    accentColor: "#60b8d6",
                  }}
                />
                Nam
              </label>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  style={{
                    margin: "0 10px 0 20px",
                    width: "24px",
                    height: "24px",
                    accentColor: "#60b8d6",
                  }}
                />
                Nữ
              </label>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  value="other"
                  name="gender"
                  style={{
                    margin: "0 10px 0 20px",
                    width: "24px",
                    height: "24px",
                    accentColor: "#60b8d6",
                  }}
                />
                Khác
              </label>
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Nhập email..." />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Số điện thoại</label>
              <input type="text" placeholder="Nhập số điện thoại..." />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Ngày sinh:</label>
              <DatePicker
                placeholder="Chọn ngày sinh"
                style={{
                  width: 444,
                  height: 40,
                  border: "1px solid rgba(0, 0, 0, 0.4)",
                  borderRadius: 7,
                }}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Chức vụ</label>
              <input type="text" placeholder="Điền chức vụ" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Phân quyền</label>
              <Select
                placeholder="Lựa chọn"
                style={{
                  width: 444,
                  height: 40,
                  border: "1px solid rgba(0, 0, 0, 0.4)",
                  borderRadius: 7,
                }}
                options={[
                  {
                    value: "admin",
                    label: "Quản trị",
                  },
                  {
                    value: "user",
                    label: "Người dùng",
                  },
                ]}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Mật khẩu</label>
              <Input.Password
                placeholder="Nhập họ và tên"
                style={{
                  width: 444,
                  height: 40,
                  border: "1px solid rgba(0, 0, 0, 0.4)",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Tài khoản Facebook</label>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Tài khoản Instagram</label>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="">Tài khoản Tiktok</label>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ marginBottom: "15px", fontWeight: "600" }}>
              Kích hoạt
            </div>
            <div style={{ display: "flex" }}>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  value="active"
                  defaultChecked
                  name="active"
                  style={{
                    marginRight: "10px",
                    width: "24px",
                    height: "24px",
                    accentColor: "#60b8d6",
                  }}
                />
                Kích hoạt
              </label>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  value="notActive"
                  name="active"
                  style={{
                    margin: "0 10px 0 20px",
                    width: "24px",
                    height: "24px",
                    accentColor: "#60b8d6",
                  }}
                />
                Không kích hoạt
              </label>
            </div>
          </div>
          <div className="input-row">
            <button
              style={{
                width: "200px",
                height: "45px",
                border: "1px solid #60b8d6",
                borderRadius: "7px",
                background: "#60b8d6",
                fontWeight: "600",
                color: "white",
                cursor: "pointer",
                marginRight: "25px",
              }}
            >
              Lưu
            </button>
            <button
              style={{
                width: "200px",
                height: "45px",
                border: "1px solid #60b8d6",
                borderRadius: "7px",
                background: "white",
                fontWeight: "600",
                color: "#60b8d6",
                cursor: "pointer",
              }}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
