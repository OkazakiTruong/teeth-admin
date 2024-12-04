import ToastifyContainer from "../ToastifyContainer";
import "./global.scss";

export const metadata = {
  title: "Dental Clinic - Toả sáng nụ cười Việt",
  description: "Dental Clinic",
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
