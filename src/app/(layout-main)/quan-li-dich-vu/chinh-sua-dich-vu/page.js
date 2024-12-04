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
          color: "#911A1D",
        }}
      >
        Chọn ảnh nền:
      </h3>
      <Image
        src="/img/service-img/cap_cuu_247.jpg"
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
          defaultValue={`Dịch vụ cấp cứu 24/24`}
        />
      </div>
      <div className="input-row">
        <div className="input-group" style={{ width: 444 }}>
          <label htmlFor="">Tác giả:</label>
          <input
            type="text"
            placeholder="Nhập vào tên tác giả"
            defaultValue="Bùi Quang Trưởng"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Ngày tạo:</label>
          <DatePicker
            style={{ height: 40, width: 327 }}
            placeholder="Chọn ngày"
            defaultValue={dayjs("2024-02-03")}
          />
        </div>
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Nội dung bài viết:</label>
        <CustomEditor
          initialData={`        <div className="service-content">
          <p>
            Khi thú cưng của bạn gặp phải các tình huống khẩn cấp, nguy hiểm
            như khó đẻ, nuốt dị vật, ngộ độc, tai nạn, cắn nhau,… hãy liên hệ
            ngay với chi nhánh Petpals gần bạn nhất để nhận được các hỗ trợ y tế
            kịp thời. Dịch vụ cấp cứu thú cưng của chúng tôi hoạt động 24/24 tất
            cả các ngày bao gồm cả các ngày cuối tuần và lễ, tết. Dưới đây là
            thông tin liên hệ của các chi nhánh Petpals, vì tính cấp bách hãy
            liên hệ ngay tới hotline chi nhánh gần bạn nhất để nhận được hỗ trợ
            kịp thời:
          </p>
          <p>
            Để đảm bảo rằng thú cưng của bạn luôn nhận được sự chăm sóc tốt
            nhất. Petpals có đội ngũ bác sĩ thú y giàu kinh nghiệm, được đào tạo
            bài bản, chuyên sâu luôn sẵn sàng đáp ứng mọi tình huống khẩn cấp,
            cấp cứu liên quan đến sức khỏe của thú cưng của bạn.
          </p>
          <p>
            Bên cạnh đó, hệ thống không ngừng nâng cấp và đầu tư các trang thiết
            bị y tế hiện đại và công nghệ tiên tiến giúp chẩn đoán chính xác và
            điều trị hiệu quả. Sử dụng các dụng cụ và thiết bị y tế hàng đầu
            trong ngành thú y để đảm bảo khả năng chẩn đoán nhanh chóng và xử lý
            các tình huống khẩn cấp một cách chính xác.
          </p>
          <div>
            <p>
              Với dịch vụ cấp cứu thú cưng 24/24 của Petpals, bạn có thể yên tâm
              vì:
            </p>
            <ul style ={{listStyle:"inherit"}}>
              <li>
                Dịch vụ hoạt động 24/24 tất cả các ngày trong tuần bao gồm cả
                các ngày nghỉ và lễ tết.
              </li>
              <li>
                Đội ngũ bác sĩ và nhân viên luôn sẵn sàng túc trực, với kinh
                nghiệm và kiến thức chuyên môn, họ sẽ đưa ra những quyết định
                nhanh chóng và chính xác để cứu sống, cải thiện tình trạng sức
                khỏe cho thú cưng của bạn.
              </li>
              <li>
                Petpals hiểu rằng trong mọi tình huống khẩn cấp, thú cưng của
                bạn cận có sự chăm sóc và điều trị ngay lập tức. Do vậy, chúng
                tôi đặt sự ưu tiên cao nhất cho các trường hợp này, đảm bảo thú
                cưng của bạn nhận được sự chăm sóc và điều trị ngay khi được
                tiếp nhận.
              </li>
              <li>
                Các thiết bị máy móc, vật tư y tế và dụng cụ hỗ trợ quá trình
                cấp cứu luôn sẵn sàng.
              </li>
              <li>
                Chúng tôi luôn tận dụng tối đa mọi nguồn lực để tiết kiệm chi
                phí cho khách hàng, bạn có thể yên tâm rằng sẽ luôn nhận được
                chất lượng dịch vụ tốt nhất với chi phí phù hợp.
              </li>
            </ul>
            Đội ngũ Petpals sẽ đồng hành cùng bạn và thú cưng của mình trong mọi
            tình huống khẩn cấp, cấp cứu. Chúng tôi luôn sẵn sàng để hỗ trợ và
            đảm bảo rằng thú cưng của bạn nhận được sự chăm sóc y tế tốt nhất,
            bất kể khung thời gian hay tình huống khẩn cấp nào.
          </div>
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
