import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Z CRM</h2>
        <p>Please turn on your VPN</p>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        Next.js CRM | Developed by Zana with ❤ &copy;
      </footer>
    </>
  );
}

export default Layout;
