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
      <h1 className="section-heading">Quản lý bài viết/ Thêm bài viết</h1>
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
        src="/img/articles/my-art-1.png"
        width={221}
        height={221}
        style={{ borderRadius: "10px" }}
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
          defaultValue={`Cầu răng sứ và implant? Nên chọn phương pháp nào để đạt hiệu quả cao?`}
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
          <label htmlFor="">Ngày đăng:</label>
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
          initialData={`  
            <div class="contents-area">
  <div class="nodes">
    <div class="heading-1">
      <span>
        <span class="heading-1-span">
          Cầu răng sứ và implant? Nên chọn phương pháp nào để đạt
          <br />
          hiệu quả cao?
          <br />
        </span>
        <span class="heading-1-span2">
          Mất răng không chỉ làm giảm thẩm mỹ mà còn ảnh hưởng đến chức năng
          nhai và sức khỏe răng miệng. Cầu
          <br />
          răng sứ và implant là hai phương pháp phục hồi răng mất hiệu quả. Vậy
          cầu răng sứ và implant là gì? Nên chọn
          <br />
          phương pháp phục hình răng mất nào để đạt hiệu quả cao? Hãy cùng
          Dental Clinic tìm hiểu chi tiết trong bài
          <br />
          viết sau đây.
        </span>
      </span>
    </div>
  </div>
  <div class="nodes2">
    <div class="heading-2">1. Cầu răng sứ là gì? Ưu và nhược điểm </div>
  </div>
  <div class="nodes3">
    <div class="normal-text">
      <span>
        <span class="normal-text-span">
          Cầu răng sứ là phương pháp phục hình răng dựa trên cơ chế sử dụng 2
          chiếc răng bên cạnh răng mất để làm trụ nâng đỡ, sau đó gắn cầu răng
          sứ lên trên.
          <br />
          Cầu răng sứ sẽ có từ 2, 3 hoặc 4 răng gắn liền với nhau, màu sắc tự
          nhiên tương tự như răng thật nên đảm bảo tính thẩm mỹ cho khuôn mặt.
          <br />
          Ưu điểm của cầu răng sứ:
          <br />
        </span>
        <ul class="normal-text-span2">
          <li>Chi phí thấp hơn: </li>
        </ul>
        <ul class="normal-text-span3">
          <li>
            So với cấy ghép implant, chi phí làm cầu răng sứ thường rẻ hơn, vì
            thế giải pháp này phù hợp với tài chính nhiều khách hàng.
          </li>
        </ul>
        <ul class="normal-text-span4">
          <li>Thời gian thực hiện nhanh chóng: </li>
        </ul>
        <ul class="normal-text-span5">
          <li>
            Quy trình làm cầu răng sứ nhanh hơn so với cấy ghép implant. Thông
            thường chỉ mất từ 2 đến 3 buổi hẹn với bác sĩ là có thể hoàn thành.
          </li>
        </ul>
        <ul class="normal-text-span6">
          <li>Khả năng thẩm mỹ tốt: </li>
        </ul>
        <ul class="normal-text-span7">
          <li>
            Cầu răng sứ  có màu sắc tự nhiên, trùng với màu răng thật và được
            chế tác hài hòa về hình dáng nên đảm bảo tính thẩm mỹ cao.
          </li>
        </ul>
      </span>
    </div>
  </div>
  <div class="nodes4">
    <img
      class="_3-fd-01-a-01-220-b-4-f-39-b-074-ddaf-4-f-0-dc-58-a"
      src="/img/articles/my-art-1.png"
    />
  </div>
  <div class="nodes3">
    <div class="normal-text2">
      <span>
        <span class="normal-text-2-span">
          Nhược điểm của cầu răng sứ:
          <br />
        </span>
        <ul class="normal-text-2-span2">
          <li>Xâm lấn răng thật:</li>
        </ul>
        <ul class="normal-text-2-span3">
          <li>
             Để đặt cầu răng sứ, bác sĩ phải mài nhỏ các răng thật nằm bên cạnh
            răng mất, nên gây tổn hại đến răng thật dù những răng này không bị
            hư hại.
          </li>
        </ul>
        <ul class="normal-text-2-span4">
          <li>Nguy cơ tiêu xương hàm:</li>
        </ul>
        <ul class="normal-text-2-span5">
          <li>
             Cầu răng sứ chỉ thay thế phần răng bên trên, không có tác dụng thay
            thế chân răng, về lâu dài có thể dẫn đến tình trạng tiêu xương hàm.
          </li>
        </ul>
        <ul class="normal-text-2-span6">
          <li>Tuổi thọ ngắn hơn:</li>
        </ul>
        <ul class="normal-text-2-span7">
          <li>
             So với cấy ghép implant, cầu răng sứ có tuổi thọ ngắn hơn, khách
            hàng cần phải thay thế sau 7 – 10 năm sử dụng.
          </li>
        </ul>
        <ul class="normal-text-2-span8">
          <li>Chức năng nhai hạn chế:</li>
        </ul>
        <ul class="normal-text-2-span9">
          <li>
             Cầu răng sứ không mang lại cảm giác ăn nhai tự nhiên như răng cấy
            ghép implant.
          </li>
        </ul>
      </span>
    </div>
  </div>
  <div class="nodes3">
    <div class="normal-text3">
      Thời gian thực hiện làm cầu răng sứ:
      <br />
      Quy trình làm cầu răng sứ thường diễn ra từ 2 đến 3 buổi hẹn với bác sĩ,
      mỗi buổi cách nhau khoảng 1 tuần. Tổng thời gian thực hiện cầu răng sứ dao
      động từ 1 đến 2 tuần, tùy vào tình trạng răng của khách hàng và tay nghề
      của bác sĩ.
    </div>
  </div>
  <div class="nodes2">
    <div class="heading-2">2. Trồng răng implant là gì? </div>
  </div>
  <div class="nodes3">
    <div class="normal-text2">
      <span>
        <span class="normal-text-2-span10">
          Trồng răng implant là phương pháp phục hồi răng mất bằng cách cấy ghép
          một trụ implant làm từ Titanium vào xương hàm để thay thế cho chân
          răng thật. Sau khi trụ implant được tích hợp chặt chẽ với xương, một
          mão răng sứ sẽ được gắn lên trên trụ, đáp ứng chức năng ăn nhai và
          thẩm mỹ như răng thật.
          <br />
          Ưu điểm của trồng răng implant:
          <br />
        </span>
        <ul class="normal-text-2-span11">
          <li>Phục hồi chức năng ăn nhai như răng thật:</li>
        </ul>
        <ul class="normal-text-2-span12">
          <li>
             Răng implant có khả năng khôi phục chức năng nhai đến 90%, giúp
            khách hàng ăn uống thoải mái mà không phải lo lắng răng bị lung lay.
          </li>
        </ul>
        <ul class="normal-text-2-span13">
          <li>Ngăn ngừa tiêu xương hàm: </li>
        </ul>
        <ul class="normal-text-2-span14">
          <li>
            Khi cấy ghép implant, trụ implant đóng vai trò là chân răng, giúp
            kích thích xương hàm và ngăn ngừa tình trạng tiêu xương khi mất
            răng.
          </li>
        </ul>
        <ul class="normal-text-2-span15">
          <li>Không xâm lấn răng thật: </li>
        </ul>
        <ul class="normal-text-2-span16">
          <li>
            Trồng răng implant không cần mài hay xâm lấn các răng khỏe mạnh kế
            bên như trong phương pháp cầu răng sứ.
          </li>
        </ul>
        <ul class="normal-text-2-span17">
          <li>Thẩm mỹ tự nhiên: </li>
        </ul>
        <ul class="normal-text-2-span18">
          <li>
            Răng implant có màu sắc và hình dáng giống hệt răng thật, đảm bảo
            hài hòa với các răng còn lại trên cung hàm.
          </li>
        </ul>
        <ul class="normal-text-2-span19">
          <li>Tuổi thọ cao:</li>
        </ul>
        <ul class="normal-text-2-span20">
          <li>
             Răng implant có thể tồn tại từ 20 năm trở lên nếu được chăm sóc
            đúng cách, thậm chí có thể sử dụng vĩnh viễn mà không cần thay thế.
          </li>
        </ul>
        <ul class="normal-text-2-span21">
          <li>An toàn, không gây hại cho cơ thể: </li>
        </ul>
        <ul class="normal-text-2-span22">
          <li>
            Trụ implant làm từ Titanium, là vật liệu tương thích sinh học cao
            với cơ thể nên không gây dị ứng và tích hợp tốt với xương hàm.
          </li>
        </ul>
      </span>
    </div>
  </div>
  <div class="nodes4">
    <img class="implant" src="/img/articles/my-art-2.png" />
  </div>
  <div class="nodes3"></div>
  <div class="nodes2">
    <div class="heading-22">
      <ol class="heading-22-span">
        <li>Nên trồng răng implant hay cầu răng sứ?</li>
      </ol>
    </div>
  </div>
  <div class="nodes3">
    <div class="normal-text3">
      Cầu răng sứ và cấy ghép implant đều là các phương pháp phục hình răng hiện
      đại và hiệu quả. Để lựa chọn giải pháp phù hợp nhất, bác sĩ cần đánh giá
      kỹ lưỡng dựa trên các yếu tố như độ tuổi, tình trạng sức khỏe răng miệng,
      khả năng tài chính và sức khỏe tổng quát của bạn. 
    </div>
  </div>
  <div class="nodes3">
    <div class="normal-text2">
      <span>
        <span class="normal-text-2-span23">
          Trồng răng implant giúp bảo tồn răng thật và đảm bảo kết quả phục hình
          răng mất gần như trọn đời nếu chăm sóc tốt. Kỹ thuật cắm implant là
          lựa chọn tối ưu cho những khách hàng đang gặp các vấn đề sau: 
          <br />
        </span>
        <ul class="normal-text-2-span24">
          <li>Mất một, 2 răng hoặc nhiều răng: </li>
        </ul>
        <ul class="normal-text-2-span25">
          <li>
            Khi bị mất một hoặc nhiều răng và muốn bảo vệ các răng xung quanh mà
            không cần mài răng thì cấy ghép implant là giải pháp phù hợp để khôi
            phục răng mất, đảm bảo chức năng ăn nhai và thẩm mỹ
          </li>
        </ul>
        <ul class="normal-text-2-span26">
          <li>Mất răng toàn hàm:</li>
        </ul>
        <ul class="normal-text-2-span27">
          <li>
             Trong trường hợp mất răng toàn hàm trên hoặc hàm dưới, khách hàng
            có thể chọn cấy ghép implant All on 4 hoặc All on 6 để phục hình
            răng mất, giúp ăn nhai thoải mái và ngăn ngừa tiêu xương hàm.
          </li>
        </ul>
        <ul class="normal-text-2-span28">
          <li>
            Người mong muốn chỉ phục hình một lần, đảm bảo kết quả trọn đời
          </li>
        </ul>
        <ul class="normal-text-2-span29">
          <li>
            : Trồng răng Implant chỉ cần phục hình một lần duy nhất bằng phẫu
            thuật đặt trụ, sau đó gắn mão sứ lên trên. Tuổi thọ của răng implant
            lên đến
          </li>
        </ul>
      </span>
    </div>
  </div>
  <div class="nodes3">
    <div class="normal-text2">
      <span>
        <span class="normal-text-2-span30">
          Cầu răng sứ chỉ phù hợp với các trường hợp sau đây:
          <br />
        </span>
        <ul class="normal-text-2-span31">
          <li>Mất một hoặc vài răng liên tiếp:</li>
        </ul>
        <ul class="normal-text-2-span32">
          <li>
             Cầu răng sứ là giải pháp phù hợp trong trường hợp mất một hoặc một
            vài răng liền kề nhau. Phương pháp này yêu cầu các răng bên cạnh vẫn
            khỏe mạnh để làm trụ, giúp phục hồi răng mất hiệu quả.
          </li>
        </ul>
        <ul class="normal-text-2-span33">
          <li>Không đủ điều kiện cấy ghép implant:</li>
        </ul>
        <ul class="normal-text-2-span34">
          <li>
             Đối với những người không có đủ mật độ xương hàm hoặc không muốn
            trải qua quá trình phẫu thuật implant, cầu răng sứ là lựa chọn thay
            thế.
          </li>
        </ul>
        <ul class="normal-text-2-span35">
          <li>Chi phí hạn chế:</li>
        </ul>
        <ul class="normal-text-2-span36">
          <li>
             Nếu ngân sách không đủ để làm implant, cầu răng sứ có chi phí thấp
            hơn là lựa chọn phù hợp vì vẫn có thể đáp ứng yêu cầu về thẩm mỹ và
            chức năng ăn nhai trong thời gian ngắn.
          </li>
        </ul>
        <ul class="normal-text-2-span37">
          <li>Cần phục hình nhanh chóng:</li>
        </ul>
        <ul class="normal-text-2-span38">
          <li>
             Thời gian thực hiện cầu răng sứ nhanh hơn nhiều so với trồng răng
            implant, thường chỉ mất khoảng 2 – 3 tuần.
          </li>
        </ul>
      </span>
    </div>
  </div>
  <div class="nodes4">
    <img
      class="_21-d-3601-c-2-e-25-4-d-41-95-bc-d-105-d-3-b-02-def"
      src="/img/articles/my-art-3.png"
    />
  </div>
  <div class="nodes3">
    <div class="normal-text3">
      Dù phù hợp với các trường hợp trên nhưng về cơ bản khi làm cầu răng sứ sẽ
      cần phải mài mòn các răng thật bên cạnh nên không bảo tồn được cấu trúc
      răng tự nhiên. Về lâu dài, răng trụ có thể suy yếu, thậm chí có nguy cơ
      mất thêm răng. Ngoài ra, tình trạng tiêu xương hàm do mất răng cũng không
      được khắc phục.
    </div>
  </div>
  <div class="nodes3">
    <div class="normal-text3">
      Qua bài viết trên, hy vọng khách hàng đã hiểu về sự khác biệt giữa phương
      pháp cấy ghép răng implant và cầu răng sứ. Để lựa chọn được phương pháp
      phù hợp với tình trạng sức khỏe răng miệng, khách hàng nên trực tiếp đến
      các cơ sở nha khoa uy tín để bác sĩ có chuyên môn thăm khám. Từ đó tự tin
      khôi phục răng mất với nụ cười tự tin, rạng rỡ.
    </div>
  </div>
  <div class="nodes3">
    <div class="normal-text4"></div>
  </div>
</div>
            `}
        />
      </div>
      <div className="btn-group">
        <button
          className="btn btn-cancel"
          type="button"
          onClick={() => {
            router.push("/quan-li-bai-viet");
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
