import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.setItem("flashMessage", "Logged out successfully!");
    window.location.href = "/products";
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="text-gray-100 hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    >
      Logout
    </a>
  );
}
