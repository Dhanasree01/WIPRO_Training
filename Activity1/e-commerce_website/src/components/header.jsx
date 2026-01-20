import Button from "./button";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm px-6 py-2 flex justify-between">
        <p>Cothing Store</p>
        <div className="space-x-10">
          <span>Login</span>
          <span>Cart</span>
          <span>Favorities</span>
        </div>
      </div>

      {/* Navbar */}
      <div className=" flex justify-between items-center px-8 py-4 shadow bg-blue-200">
        <h1 className="text-4xl font-bold">ShopON</h1>

        <ul className="flex space-x-6  font-medium">
          <li>Home</li>
          <li>Category</li>
          <li>Trends</li>
          <li>AboutUS</li>
          <li>Contact</li>
        </ul>

      </div>

      {/* Hero Section */}
      <div className="bg-sky-100 flex items-center px-12 py-16">
        <div className="max-w-xl">
          <p className="text-blue-600 font-semibold">END SUMMER SALE!!!!🤩</p>
          <h2 className="text-5xl font-bold my-4">
            Collect your <br /> Favorites!   
          </h2>
          <p className="text-gray-600 mb-6">
            Best Cloth Collection By 2026
          </p>
          <Button text="Shop Now" />
        </div>
      </div>
    </>
  );
}
