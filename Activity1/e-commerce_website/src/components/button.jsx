export default function Button({ text }) {
  return (
    <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
      {text}
    </button>
  );
}
