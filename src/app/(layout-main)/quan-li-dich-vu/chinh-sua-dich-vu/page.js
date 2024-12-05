"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

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
        src="/img/service-img/kham-tong-quat.jpg"
        width={221}
        height={221}
        style={{ borderRadius: "10px", objectFit: "cover" }}
      />
      <label htmlFor="image" className="image-choose-custom">
        Chọn ảnh
      </label>
      <input type="file" id="image" />
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Tiêu đề bài viết:</label>
        <input
          type="text"
          placeholder="Nhập vào tiêu đề bài viết"
          defaultValue={`Khám tổng quát răng miệng`}
        />
      </div>
      <div className="input-row">
        <div className="input-group" style={{ width: 444 }}>
          <label htmlFor="">Tác giả:</label>
          <input
            type="text"
            placeholder="Nhập vào tên tác giả"
            defaultValue="Minh Thanh"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Ngày tạo:</label>
          <DatePicker
            style={{ height: 40, width: 327 }}
            placeholder="Chọn ngày"
            defaultValue={dayjs("2018-07-08")}
          />
        </div>
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Nội dung bài viết:</label>
        <CustomEditor
          initialData={`        <div className="service-content">
          <p>
            Dịch vụ khám tổng quát răng miệng tại Dental Clinic bao gồm các bước như sau:
          </p>
          <ol>
            <li>
                1. Khám tổng quát và kiểm tra tình trạng răng miệng:
                <p>Nha sĩ sẽ kiểm tra tổng thể khoang miệng, bao gồm răng, nướu, và xương hàm để phát hiện các vấn đề về sâu răng, viêm nướu, hoặc những bất thường khác. Điều này bao gồm việc kiểm tra màu sắc, hình dáng, và vị trí của từng chiếc răng cũng như tình trạng chung của nướu.</p>
            </li>
            <li>
                2. Chụp X-quang (nếu cần thiết):
                <p>Trong một số trường hợp, nha sĩ sẽ yêu cầu chụp X-quang để kiểm tra sâu hơn các cấu trúc bên dưới nướu, giúp phát hiện những vấn đề không thể nhìn thấy bằng mắt thường như răng sâu ẩn, răng khôn mọc lệch, hay những dấu hiệu của bệnh lý xương hàm.</p>
            </li>
            <li>
                3. Tư vấn về vệ sinh và chăm sóc răng miệng:
                <p>Sau khi kiểm tra, nha sĩ sẽ tư vấn về cách chăm sóc răng miệng tại nhà như cách chải răng đúng cách, sử dụng chỉ nha khoa, và chế độ ăn uống phù hợp để duy trì sức khỏe răng miệng tốt.</p>
            </li>
            <li>
                4. Lên kế hoạch điều trị (nếu phát hiện vấn đề):
                <p>Nếu phát hiện ra các vấn đề cần điều trị, nha sĩ sẽ lên kế hoạch chi tiết về các bước điều trị tiếp theo, ví dụ như hàn răng, làm sạch cao răng, hoặc thậm chí là nhổ răng khôn. Các bước này sẽ được thảo luận kỹ với bệnh nhân để đảm bảo phù hợp với tình trạng răng miệng và mong muốn cá nhân của họ.</p>
            </li>
            <li>
                5. Tư vấn và nhắc nhở lịch tái khám:
                <p>Nha sĩ sẽ khuyên bệnh nhân nên tái khám định kỳ, thường là mỗi 6 tháng để đảm bảo sức khỏe răng miệng được duy trì tốt và phát hiện sớm các vấn đề tiềm ẩn.</p>
            </li>
          </ol>
          <p>Đến với Dental Clinic không chỉ giúp đảm bảo sức khỏe răng miệng mà còn mang lại sự an tâm cho bệnh nhân thông qua quá trình chăm sóc chu đáo và tư vấn tận tình từ các bác sĩ có tay nghề cao.</p>          
        </div>`}
        />
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
