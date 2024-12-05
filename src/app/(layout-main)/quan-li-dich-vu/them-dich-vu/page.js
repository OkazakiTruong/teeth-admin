"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { DatePicker, Space, Modal } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CustomEditor = dynamic(
  () => {
    return import("../../../../components/custom-editor");
  },
  { ssr: false }
);

export default function Page() {
  const router = useRouter();

  return (
    <section className="section">
      <h1 className="section-heading">Quản lý dịch vụ/ Thêm dịch vụ</h1>
      <h3
        style={{
          marginBottom: "10px",
          fontSize: 20,
          fontWeight: 400,
          color: "#60B8D6",
        }}
      >
        Chọn ảnh nền:
      </h3>
      <Image
        src="/img/grey-img-3.svg"
        width={221}
        height={221}
        style={{ borderRadius: "10px" }}
      />
      <label htmlFor="image" className="image-choose-custom">
        Chọn ảnh
      </label>
      <input type="file" id="image" />
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Tên dịch vụ:</label>
        <input type="text" placeholder="Nhập vào tên dịch vụ" />
      </div>
      <div className="input-row">
        <div className="input-group" style={{ width: 444 }}>
          <label htmlFor="">Người tạo</label>
          <input type="text" placeholder="Nhập vào tên người tạo" />
        </div>
        <div className="input-group">
          <label htmlFor="">Ngày đăng:</label>
          <DatePicker
            style={{ height: 40, width: 327 }}
            placeholder="Chọn ngày tạo"
          />
        </div>
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Nội dung dịch vụ:</label>
        <CustomEditor initialData="Nhập nội dung.." />
      </div>
      <div className="btn-group">
        <button
          className="btn btn-cancel"
          type="button"
          onClick={() => {
            router.push("/quan-li-dich-vu");
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
    </section>
  );
}
