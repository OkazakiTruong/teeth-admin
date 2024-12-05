import Header from "@/components/Header/Header";
import "./global.scss";
import MenuAdmin from "@/components/MenuAdmin/Menu";
import { Button, ConfigProvider, Space } from "antd";
import Footer from "@/components/Footer/Footer";
import ToastifyContainer from "../ToastifyContainer";

export const metadata = {
  title: "Dental Clinic - Toả sáng nụ cười Việt",
  description: "Dental Clinic",
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
                    itemSelectedBg: "rgba(191, 231, 245, 0.3)",
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
