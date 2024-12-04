import React from "react";
import Image from "next/image";
import "./style.scss";

export default function page() {
  return (
    <section className="statistical-section">
      <h1 className="statistical-heading">THỐNG KÊ</h1>
      <div className="statistical-content-one">
        <div className="statistical-content-one-item">
          <div className="item-heading">
            <div className="item-heading-content">
              <p>Lượng người truy cập</p>
              <h3>5,123</h3>
            </div>
            <div className="item-heading-icon">
              <Image
                src="/icon/dash_broad_1.svg"
                alt=""
                width={35}
                height={26}
              />
            </div>
          </div>
          <div className="item-content">
            <Image src="/icon/ic-trending-up-24px.svg" width={26} height={26} />
            <p>
              <span>8.5%</span> so với ngày hôm qua
            </p>
          </div>
        </div>
        <div className="statistical-content-one-item">
          <div className="item-heading">
            <div className="item-heading-content">
              <p>Lượng lịch đặt</p>
              <h3>480</h3>
            </div>
            <div className="item-heading-icon">
              <Image
                src="/icon/dash_broad_2.svg"
                alt="image"
                width={32}
                height={36}
              />
            </div>
          </div>
          <div className="item-content">
            <Image
              src="/icon/ic-trending-up-24px.svg"
              width={26}
              height={26}
              alt="image"
            />
            <p>
              <span>1.8%</span> so với tuần trước
            </p>
          </div>
        </div>
        <div className="statistical-content-one-item">
          <div className="item-heading">
            <div className="item-heading-content">
              <p>Tổng lịch đặt thành công</p>
              <h3>420</h3>
            </div>
            <div className="item-heading-icon">
              <Image
                src="/icon/dash_broad_3.svg"
                alt="image"
                width={35}
                height={26}
              />
            </div>
          </div>
          <div className="item-content">
            <Image
              src="/icon/ic-trending-down-24px.svg"
              width={26}
              height={26}
              alt="image"
            />
            <p>
              <span>4.3%</span> so với tuần trước
            </p>
          </div>
        </div>
      </div>
      <div className="statistical-content-two">
        <h2 className="statistical-content-two-heading">Lịch đặt trong tuần</h2>
        <Image
          src="/img/dashbroad/db_img_1.svg"
          width={1024}
          height={452}
          style={{ boxShadow: "0 0 4px rgba(0,0,0,0.2)", borderRadius: "22px" }}
          alt="image"
        />
        <div className="statistical-content-two-wrapper">
          <Image
            src="/img/dashbroad/db_img_2.svg"
            width={557}
            height={297}
            style={{
              boxShadow: "0 0 4px rgba(0,0,0,0.2)",
              borderRadius: "22px",
            }}
            alt="image"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3>Chi Tiết Lịch Đặt</h3>
            <Image
              src="/img/dashbroad/db_img_3.svg"
              width={444}
              height={254}
              style={{
                boxShadow: "0 0 4px rgba(0,0,0,0.2)",
                borderRadius: "22px",
              }}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
