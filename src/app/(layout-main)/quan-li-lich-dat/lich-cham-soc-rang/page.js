"use client";
import React, { useEffect, useState } from "react";
import { Input, Space, Select, Modal } from "antd";
import { Pagination } from "antd";
import { useRouter } from "next/navigation";

import Image from "next/image";
import "./style.scss";
import Link from "next/link";

const data = [
  {
    id: "9d48cbac-6476-4700-a319-0e12bbedc627",
    bookingType: "kbBooking",
    bookingStatus: "pending",
    bookingDate: "2024-03-19",
    bookingTime: "9:00 - 10:00",
    userName: "Bùi Quang Trưởng",
    userNumber: "0977354956",
    userEmail: "buiquangtruong1105@gmail.com",
    userPets: [
      {
        petId: "c1ed8af2-f770-4ec5-b503-dd98856026a8",
        petName: "John",
        petType: "dog",
        petOld: "1",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
      {
        petId: "d8bfbef5-0ae6-422a-a0bb-c45eb3b2ca10",
        petName: "Meo",
        petType: "cat",
        petOld: "3",
        petSex: "female",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "a0025536-e351-4eed-b7e4-4298baa40aef",
    bookingType: "kbBooking",
    bookingStatus: "pending",
    bookingDate: "2024-01-02",
    bookingTime: "10:00 - 11:00",
    userName: "Trần Đức Trung",
    userNumber: "0944354956",
    userEmail: "tranductrung1182@gmail.com",
    userPets: [
      {
        petId: "9935fce4-3e8c-4386-b12f-1079bd882d77",
        petName: "SuSu",
        petType: "dog",
        petOld: "1",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
      {
        petId: "a2752c84-03d8-43f1-b43f-93821109428c",
        petName: "OhS",
        petType: "cat",
        petOld: "3",
        petSex: "female",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "3cd73cd3-12a8-4ecb-b34b-767ce9a9858f",
    bookingType: "kbBooking",
    bookingStatus: "pending",
    bookingDate: "2023-01-02",
    bookingTime: "10:00 - 11:00",
    userName: "Hoàng Trung Đức",
    userNumber: "0944354956",
    userEmail: "hoangtrungduc324@gmail.com",
    userPets: [
      {
        petId: "6ae0ad84-142e-4827-9624-fd861665b162",
        petName: "Mini",
        petType: "cat",
        petOld: "3",
        petSex: "female",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "af978dd5-d4b3-4090-88da-ca1135491155",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-09-11",
    bookingTime: "10:00 - 11:00",
    userName: "Bùi Văn Quỳnh",
    userNumber: "0977564956",
    userEmail: "buivanquynh234@gmail.com",
    userPets: [
      {
        petId: "0f7fdb7d-dab7-4db5-a3e3-bef7374b0b26",
        petName: "Kaka",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "52e503bc-2732-4cc8-91b6-3104617bfd63",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "10:00 - 11:00",
    userName: "Phạm Văn Ngọc",
    userNumber: "0345354956",
    userEmail: "phamvanngoc@gmail.com",
    userPets: [
      {
        petId: "6edddf37-b645-4816-b7ee-1992a40e5043",
        petName: "Kaka",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "c0ff9b00-ef1b-4ccc-ab50-d00da91e6f24",
    bookingType: "kbBooking",
    bookingStatus: "cancel",
    bookingDate: "2023-07-08",
    bookingTime: "10:00 - 11:00",
    userName: "Trần Thanh Chương",
    userNumber: "0345354956",
    userEmail: "tranthanhchuong234@gmail.com",
    userPets: [
      {
        petId: "cdd4c303-f7e0-4e29-ade8-fcef339ddc9c",
        petName: "Kaka",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "2685585d-8545-4693-b5b8-955e2b324e2d",
    bookingType: "kbBooking",
    bookingStatus: "cancel",
    bookingDate: "2023-07-08",
    bookingTime: "16:00 - 17:00",
    userName: "Bùi Thị Huyền",
    userNumber: "0345354956",
    userEmail: "buithihuyen234@gmail.com",
    userPets: [
      {
        petId: "667e6260-88d3-48f7-8274-ab2af235f4e1",
        petName: "Kaka",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "44865432-c752-40d8-847f-bd2c1391a337",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "16:00 - 17:00",
    userName: "Hoàng Văn Công",
    userNumber: "0977453345",
    userEmail: "hoangvancong234@gmail.com",
    userPets: [
      {
        petId: "58c177ce-e1a2-4c62-9a72-c7014e8efdc6",
        petName: "Kiki",
        petType: "dog",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "1ea14427-32b3-4792-a905-94aff0db5bcf",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "16:00 - 17:00",
    userName: "Phạm Quang Lực",
    userNumber: "0977453345",
    userEmail: "hoangvancong234@gmail.com",
    userPets: [
      {
        petId: "a15e7c3e-c037-4aca-824e-a1dc500455aa",
        petName: "Chó",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "9c848c21-7717-4aa1-8bd3-79319ea39921",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Hoàng Thị Mỹ Duyên",
    userNumber: "0888354956",
    userEmail: "duyenhoang2002@gmail.com",
    userPets: [
      {
        petId: "880e93a4-d2b6-4143-b156-cb0f20ee1e7c",
        petName: "Chó",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "a920a42f-c451-4080-9b30-29dfef2d18f5",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Đỗ Hoàng Dũng",
    userNumber: "0847887456",
    userEmail: "dohoangdung55@gmail.com",
    userPets: [
      {
        petId: "98090c81-8620-4443-aafb-f5711185b51a",
        petName: "Chó",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "67f24dc8-6093-4687-a1e3-9443e51801a9",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Trần Thế Anh",
    userNumber: "0948474956",
    userEmail: "trantheanh55@gmail.com",
    userPets: [
      {
        petId: "2ecb34af-1c4f-41d9-9d27-d2eb40e88538",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "6b72f86b-4e47-4be9-bafe-30cd759b6d72",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Đoàn Văn Chinh",
    userNumber: "0948474956",
    userEmail: "doanvanchinh44@gmail.com",
    userPets: [
      {
        petId: "f47a8861-d274-4268-b75e-9d573a6ee7b0",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "b8639ad2-0a84-44e9-b5ce-6c19220388ef",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Bùi Tuấn Anh",
    userNumber: "0948474956",
    userEmail: "buituananh44@gmail.com",
    userPets: [
      {
        petId: "b00ba9e4-b3d5-4356-a5a5-367e9307e5ea",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "3150bf1a-83e6-4e92-96e2-a1ad759a95e4",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Hồ Văn Đức",
    userNumber: "0389489056",
    userEmail: "buituananh44@gmail.com",
    userPets: [
      {
        petId: "de5661b3-c4be-47ee-9b84-c5461609f8c4",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "21fad70a-be35-4a0d-8b2a-27d475989b22",
    bookingType: "kbBooking",
    bookingStatus: "cancel",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Nguyễn Thị Nhâm",
    userNumber: "0998798446",
    userEmail: "nguyenthinham@gmail.com",
    userPets: [
      {
        petId: "0c937047-ca76-47be-a8e0-b554b83a3e07",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "ab618346-9c61-49a6-b7cb-88d95599d682",
    bookingType: "kbBooking",
    bookingStatus: "cancel",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Hoàng Văn Kiên",
    userNumber: "0380980956",
    userEmail: "hoangvankien@gmail.com",
    userPets: [
      {
        petId: "0baa68aa-4c8c-4424-baae-22bdea44d6e6",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "4589c2b1-974e-43e6-b766-020fe10da533",
    bookingType: "kbBooking",
    bookingStatus: "cancel",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Hoàng Tuần Hiệp",
    userNumber: "0974747446",
    userEmail: "hoangvankien@gmail.com",
    userPets: [
      {
        petId: "2bbf4a27-390f-4cbe-90d8-87c819028d53",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "ee20a2dc-42e6-4d87-9852-07c779c599db",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Hoàng Thị Mỹ Linh",
    userNumber: "0974747446",
    userEmail: "hoangvankien@gmail.com",
    userPets: [
      {
        petId: "7a2bb955-85f8-49f3-acd3-a66f32e61da4",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
  {
    id: "a251222e-b1f4-4da4-af23-0591ad8fbf75",
    bookingType: "kbBooking",
    bookingStatus: "done",
    bookingDate: "2023-07-08",
    bookingTime: "15:00 - 16:00",
    userName: "Trần Đức Quyên",
    userNumber: "0347757476",
    userEmail: "hoangvankien@gmail.com",
    userPets: [
      {
        petId: "85c24737-01d5-44f8-aa47-ceb33e4565fc",
        petName: "Chós",
        petType: "cat",
        petOld: "2",
        petSex: "male",
        staffId: "fe090a69-9d7f-4dad-a398-56556be0658e",
        petNote: "Khám định kỳ",
      },
    ],
  },
];

const { Search } = Input;
export default function Page() {
  const router = useRouter();
  const [bookingData, setBookingData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [total, setTotal] = useState(80);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    if (value === "all") {
      setBookingData(data);
    } else {
      let searchData = data.filter((item) => {
        return item.bookingStatus === value;
      });
      console.log(searchData);
      setBookingData(searchData);
      setTotal(searchData.length);
    }
  };

  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setBookingData(data);
    }
  };

  const handleSearch = (value, _e, info) => {
    if (value === "") {
      setBookingData(data);
    } else {
      let searchData = data.filter((item) => {
        return item.id.trim() === value.trim();
      });
      setBookingData(searchData);
      setTotal(searchData.length);
    }
  };

  return (
    <section className="section">
      <Modal
        title="Xóa lịch đặt"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa thông tin lịch đặt không?</p>
      </Modal>
      <h1 className="section-heading">QUẢN LÝ LỊCH ĐẶT/ CHĂM SÓC RĂNG</h1>
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
            <label htmlFor="">Tìm kiếm lịch đặt:</label>
            <Search
              placeholder="Nhập mã lịch đặt"
              style={{ width: 328, height: 36 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="">Trạng thái:</label>
            <Select
              defaultValue="all"
              onChange={handleChange}
              style={{
                width: 213,
              }}
              options={[
                {
                  value: "all",
                  label: "Tất cả",
                },
                {
                  value: "pending",
                  label: "Chờ khám",
                },
                {
                  value: "done",
                  label: "Đã khám",
                },
                {
                  value: "cancel",
                  label: "Đã hủy",
                },
              ]}
            />
          </div>
        </div>
        <Link
          href="/quan-li-lich-dat/lich-cham-soc-rang/them-lich-dat"
          className="add-new-btn"
        >
          + Thêm lịch đặt
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column first-column">Stt</div>
          <div className="table-column">Mã lịch đặt</div>
          <div className="table-column">Khách hàng</div>
          <div className="table-column">Số điện thoại</div>
          <div className="table-column">Ngày đặt</div>
          <div className="table-column">Trạng thái</div>
          <div className="table-column">Tùy chọn</div>
        </div>
        {bookingData.map((booking, index) => {
          return (
            <div className="table-row" key={booking.id}>
              <div className="table-column first-column">{index + 1}</div>
              <div className="table-column">{booking.id}</div>
              <div className="table-column">{booking.userName}</div>
              <div className="table-column">{booking.userNumber}</div>
              <div className="table-column">{booking.bookingDate}</div>
              <div className="table-column">
                {booking.bookingStatus === "pending" && (
                  <span className="s-wait">Chờ khám</span>
                )}
                {booking.bookingStatus === "done" && (
                  <span className="s-done">Đã khám</span>
                )}
                {booking.bookingStatus === "cancel" && (
                  <span className="s-cancel">Đã hủy</span>
                )}
              </div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => {
                    router.push(
                      `/quan-li-lich-dat/lich-cham-soc-rang/${booking.id}`
                    );
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
        total={total}
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
