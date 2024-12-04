import Header from "@/components/Header/Header";
import "./global.scss";
import MenuAdmin from "@/components/MenuAdmin/Menu";
import { Button, ConfigProvider, Space } from "antd";
import Footer from "@/components/Footer/Footer";
import ToastifyContainer from "../ToastifyContainer";

export const metadata = {
  title: "Petpals - Chữa lành từ trái tim",
  description: "Petpals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastifyContainer />
        <Header />
        <main>
          <div className="main-wrapper">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#60b8d6",
                  fontFamily: "Roboto",
                },
                components: {
                  DatePicker: {
                    inputFontSize: 16,
                  },
                  Menu: {
                    itemBg: "transparent",
                    subMenuItemBg: "transparent",
                    activeBarBorderWidth: 0,
                    itemSelectedBg: "rgba(145, 26, 29, 0.05)",
                    itemBorderRadius: 0,
                  },
                },
              }}
            >
              <div className="main-wrapper--left">
                <MenuAdmin />
              </div>
              <div className="main-wrapper--right">{children}</div>
            </ConfigProvider>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
