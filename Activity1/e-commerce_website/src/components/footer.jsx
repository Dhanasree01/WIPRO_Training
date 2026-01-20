export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16 px-10 py-10">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">ShopON</h2>
          <p className="text-gray-400">
            <i>Best fashion store </i>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><i>Home</i></li>
            <li><i>Category</i></li>
            <li><i>AboutUS</i></li>
            <li><i>Contact</i></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Chennai</p>
          <p className="text-gray-400">+44 444 44444</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © All rights reserved.
      </p>
    </footer>
  );
}
