import Navbar from "@components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </div>
  );
};

export default Layout;