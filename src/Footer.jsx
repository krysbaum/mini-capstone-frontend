export function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-orange-600">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-100 sm:text-center dark:text-gray-100">
          © 2024{" "}
          <a href="localhost:5173" className="hover:underline">
            LAB3Y3™ |
          </a>
          | All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 dark:text-gray-100 sm:mt-0">
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>

          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>

          <a href="#" className="hover:underline me-4 md:me-6">
            Licensing
          </a>

          <a href="#" className="hover:underline">
            Contact
          </a>
        </ul>
      </div>
    </footer>
  );
}
