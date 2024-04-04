import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="bg-orange-700 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://seeklogo.com/images/M/msw-mock-service-worker-logo-88A2A26653-seeklogo.com.png"
                alt="The Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  className="text-gray-100 hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  to="/products"
                >
                  All Products
                </Link>
                <Link
                  className="text-gray-100 hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  to="/products/new"
                >
                  New Product
                </Link>
                {localStorage.getItem("jwt") ? (
                  <LogoutLink />
                ) : (
                  <>
                    <Link
                      className="text-gray-100 hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to="/signup"
                    >
                      Signup
                    </Link>

                    <Link
                      className="text-gray-100 hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      to="/login"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
