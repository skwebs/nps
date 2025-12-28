export default function Footer() {
  return (
    <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500  border-t border-gray-200  md:px-5 text-center text-sm text-white py-3">
      © {new Date().getFullYear()} NPS Kanhauli. All rights reserved.
    </div>
  );
}
