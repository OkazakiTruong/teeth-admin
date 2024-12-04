import ToastifyContainer from "../ToastifyContainer";
import "./global.scss";

export const metadata = {
  title: "Petpals - Chữa lành từ trái tim",
  description: "Petpals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastifyContainer />
        {children}
      </body>
    </html>
  );
}
