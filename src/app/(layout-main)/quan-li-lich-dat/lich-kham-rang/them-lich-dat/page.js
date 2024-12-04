"use client";
import React, { useState } from "react";
import { Select, DatePicker, Modal } from "antd";
import "./style.scss";
import PetItem from "@/components/PetItem/PetItem";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
        QUẢN LÝ LỊCH ĐẶT/ LỊCH KHÁM RĂNG/ THÊM LỊCH ĐẶT
      </h1>
      <form action="" className="form">
        <h2>Thông tin lịch đặt</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Loại lịch hẹn</label>
            <Select
              defaultValue="Thăm khám"
              style={{
                width: 444,
                height: 40,
              }}
              disabled
              options={[
                {
                  value: "kbBooking",
                  label: "Thăm khám",
                },
              ]}
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Ngày đặt:</label>
            <DatePicker
              placeholder="Ngày đặt"
              style={{
                width: 444,
                height: 40,
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Giờ đặt:</label>
            <Select
              defaultValue="9:00 - 10:00"
              style={{ width: 444, height: 40 }}
              options={[
                { value: "9:00 - 10:00", label: "9:00 - 10:00" },
                { value: "10:00 - 11:00", label: "10:00 - 11:00" },
                { value: "11:00 - 12:00", label: "11:00 - 12:00" },
                { value: "13:00 - 14:00", label: "13:00 - 14:00" },
                { value: "14:00 - 15:00", label: "14:00 - 15:00" },
                { value: "15:00 - 16:00", label: "15:00 - 16:00" },
                { value: "16:00 - 17:00", label: "16:00 - 17:00" },
                { value: "18:00 - 19:00", label: "18:00 - 19:00" },
                { value: "19:00 - 20:00", label: "19:00 - 20:00" },
                { value: "20:00 - 21:00", label: "20:00 - 21:00" },
              ]}
            />
          </div>
        </div>
        <h2>Thông tin người dùng:</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Họ và tên</label>
            <input type="text" placeholder="Nhập họ và tên" />
          </div>
          <div className="input-group">
            <label htmlFor="">Số điện thoại</label>
            <input type="text" placeholder="Nhập Số điện thoại" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Nhập họ và tên" />
          </div>
          <div className="input-group">
            <label htmlFor="">Bác sĩ / nhân viên phụ trách</label>
            <Select
              // defaultValue="fe090a69-9d7f-4dad-a398-56556be0658e"
              placeholder="Chọn nhân viên / bác sĩ phụ trách"
              style={{ width: 444, height: 40, color: "black" }}
              options={[
                {
                  value: "fe090a69-9d7f-4dad-a398-56556be0658e",
                  label: "Trịnh Việt Trang",
                },
                {
                  value: "01e7d51c-58c9-4086-a240-d6bda2ea610f",
                  label: "Đỗ Minh Dương",
                },
                {
                  value: "92095615-91ba-49da-8240-8259b96b65ec",
                  label: "Trần Văn Linh",
                },
                {
                  value: "959da571-b7e0-42e4-ab2e-61bbf69b198f",
                  label: "Hoàng Minh Hạnh",
                },
                {
                  value: "f9f21422-2ead-48b2-b423-b0ab943c6e27",
                  label: "Hoàng Thị Mỹ Duyên",
                },
                {
                  value: "c8dfb81c-ac62-4d28-8a88-bae510ed9ad8",
                  label: "Bùi Thị Phương Thảo",
                },
              ]}
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Ghi chú</label>
            <textarea
              type="text"
              placeholder="Tháo mắc cài"
              style={{
                width: 905,
                height: "272px",
                padding: 10,
                borderRadius: 10,
              }}
            />
          </div>
        </div>
        <div className="btn-group" style={{ marginTop: "20px" }}>
          <button
            className="btn btn-cancel"
            type="button"
            onClick={() => {
              router.push("/quan-li-lich-dat/lich-kham-rang");
            }}
          >
            Quay lại
          </button>
          <button
            className="btn btn-save"
            type="button"
            onClick={() => {
              toast.success("Lưu thành công");
            }}
          >
            Lưu
          </button>
        </div>
      </form>
    </section>
  );
}
