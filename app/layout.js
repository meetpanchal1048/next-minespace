import styles from "./page.module.css";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: "0_0",
  description: "0_0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <GoogleTagManager gtmId="G-V6473FKC3W" />
      </head>
      <body className={styles.mainBody}>{children}</body>
    </html>
  );
}
