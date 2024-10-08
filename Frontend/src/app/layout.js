import StyledComponentsRegistry from "../../lib/registry.jsx";
import "./globals.css";
export const metadata = {
  title: "Tourism",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children} </StyledComponentsRegistry>
      </body>
    </html>
  );
}
