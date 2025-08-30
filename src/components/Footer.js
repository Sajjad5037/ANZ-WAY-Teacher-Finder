export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; 2025 Homebridge Clone. All rights reserved.</p>
        </div>

        {/* Right section: simple links */}
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline">Terms of Service</a>
          <a href="#" className="text-sm hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
