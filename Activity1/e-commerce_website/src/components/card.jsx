export default function Card({ title, subtitle }) {
  return (
    <div className="rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      
      <img
        src="https://cdn.shopify.com/s/files/1/0121/8376/5088/files/Clothing_Brands_for_Women_in_India_480x480.jpg?v=1724181790"
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{subtitle}</p>
      </div>

    </div>
  );
}
