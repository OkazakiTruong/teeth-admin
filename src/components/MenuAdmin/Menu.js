"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import {
  FileTextOutlined,
  CalendarOutlined,
  BookOutlined,
  TeamOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Menu, DatePicker } from "antd";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Thống kê", "1", <FileTextOutlined />),
  getItem("Quản lý lịch đặt", "sub1", <CalendarOutlined />, [
    getItem("Lịch khám răng", "2"),
    getItem("Lịch chăm sóc răng", "3"),
    getItem("Lịch thẩm mỹ răng", "4"),
  ]),
  getItem("Quản lý bài viết", "5", <BookOutlined />),
  getItem("Quản lý tài khoản", "sub2", <TeamOutlined />, [
    getItem("Tài khoản nhân viên", "6"),
    getItem("Tài khoản người dùng", "7"),
  ]),
  getItem("Quản lý dịch vụ", "8", <ProductOutlined />),
];

export default function MenuAdmin() {
  const router = useRouter();
  const pathname = usePathname();

  const [currentSelect, setCurrentSelect] = useState("1");

  useEffect(() => {
    if (pathname === "/") {
      setCurrentSelect("1");
    }
    if (pathname.match(/quan-li-lich-dat\/lich-kham-rang/)) {
      setCurrentSelect("2");
    }
    if (pathname.match(/quan-li-lich-dat\/lich-cham-soc-rang/)) {
      setCurrentSelect("3");
    }
    if (pathname.match(/quan-li-lich-dat\/lich-tham-my-rang/)) {
      setCurrentSelect("4");
    }
    if (pathname.match(/quan-li-bai-viet/)) {
      setCurrentSelect("5");
    }
    if (pathname.match(/quan-li-tai-khoan\/tai-khoan-admin/)) {
      setCurrentSelect("6");
    }
    if (pathname.match(/quan-li-tai-khoan\/tai-khoan-user/)) {
      setCurrentSelect("7");
    }
    if (pathname.match(/quan-li-dich-vu/)) {
      setCurrentSelect("8");
    }
  }, []);

  const onClick = (e) => {
    if (e.key === "1") {
      setCurrentSelect("1");
      router.push("/");
    }
    if (e.key === "2") {
      setCurrentSelect("2");
      router.push("/quan-li-lich-dat/lich-kham-rang");
    }
    if (e.key === "3") {
      setCurrentSelect("3");
      router.push("/quan-li-lich-dat/lich-cham-soc-rang");
    }
    if (e.key === "4") {
      setCurrentSelect("4");
      router.push("/quan-li-lich-dat/lich-tham-my-rang");
    }
    if (e.key === "5") {
      setCurrentSelect("5");
      router.push("/quan-li-bai-viet");
    }
    if (e.key === "6") {
      setCurrentSelect("6");
      router.push("/quan-li-tai-khoan/tai-khoan-admin");
    }
    if (e.key === "7") {
      setCurrentSelect("7");
      router.push("/quan-li-tai-khoan/tai-khoan-user");
    }
    if (e.key === "8") {
      setCurrentSelect("8");
      router.push("/quan-li-dich-vu");
    }
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        selectedKeys={[`${currentSelect}`]}
        defaultOpenKeys={["sub1", "sub2"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
