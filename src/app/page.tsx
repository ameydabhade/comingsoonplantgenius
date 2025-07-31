import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* PlantGenius Logo */}
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="PlantGenius Logo"
                width={120}
                height={120}
                priority
                className="drop-shadow-lg rounded-[20px]"
              />
            </div>
          </div>


          {/* Tagline */}
          <p className="text-xl md:text-2xl text-black mb-8 font-light">
            Premium Plant-Based Protein & Health Supplements
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-[#95CD84]/20 rounded-full text-[#22748D] font-semibold text-lg mb-12 shadow-md">
            <div className="w-2 h-2 bg-[#95CD84] rounded-full mr-3 animate-pulse"></div>
            Coming Soon
          </div>

          {/* Description */}
          <p className="text-lg text-black/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            We're crafting premium plant-based protein and health supplements designed to fuel your wellness journey. Experience the genius of nature's nutrition, scientifically optimized for peak performance.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#95CD84] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#22748D] hover:bg-[#22748D]/90 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#95CD84]/30 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-[#22748D] mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Contact Information
          </h3>
          
          {/* Address */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[#22748D] mb-2">Address</h4>
            <address className="text-black/80 not-italic leading-relaxed text-sm">
              <div className="space-y-1">
                <div>A-0801, Saanvi Nirman Celesta</div>
                <div>Nr.Green City, B/H Sharandip Mensans</div>
                <div>Ghuma Talav Road, Ghuma</div>
                <div>Ahmedabad 380058</div>
                <div>Gujarat, India</div>
              </div>
            </address>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-3 text-[#95CD84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@plantgenius.in" className="text-black/80 hover:text-[#22748D] transition-colors text-sm">
                info@plantgenius.in
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-3 text-[#95CD84]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+917698844134" className="text-black/80 hover:text-[#22748D] transition-colors text-sm">
                +91 76988 44134
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-black/60 text-sm">
            © 2025 PlantGenius. Fueling your wellness with nature's genius.
          </p>
        </div>
      </div>
    </div>
  );
}
