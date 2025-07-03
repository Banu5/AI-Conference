import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserTie, FaBuilding } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ContactSection = () => (
  <section className="w-full max-w-7xl mx-auto px-4 py-20">
    {/* Section Title */}
    <h2
      className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
      style={{ fontFamily: "'Anta', sans-serif" }}
    >
      Get in Touch
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {/* Left Large Box: Robot */}
      <div
        className="flex items-center justify-center min-h-[320px] rounded-3xl shadow-xl border-4 border-[#7f9cf5]"
        style={{
          background: "transparent"
        }}
      >
        <img src="/hi.png" alt="Robot" className="w-96 h-96 object-contain" />
      </div>
      {/* Right Large Box: Contact Person */}
      <div
        className="relative flex flex-col items-center justify-center min-h-[320px] rounded-3xl shadow-xl p-8 border-4 border-[#7f9cf5] bg-black/60"
      >
        {/* Large profile image */}
        <div
          className="w-44 h-44 rounded-full absolute -top-24 left-1/2 -translate-x-1/2 bg-white flex items-center justify-center text-7xl border-4 border-[#7f9cf5]"
        >
          <FaUserTie className="text-[#7f9cf5]" />
        </div>
        <div className="mt-32 w-full flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 text-white text-2xl font-bold">
            <FaUserTie className="text-[#7f9cf5]" />
            Dr. Pradeep Gajanayake
          </div>
          <div className="flex items-center gap-2 mb-2 text-white/80 text-lg">
            <HiOutlineOfficeBuilding className="text-[#a78bfa]" />
            Conference Manager
          </div>
          <div className="flex items-center gap-2 mb-2 text-white/80 text-lg">
            <FaPhoneAlt className="text-[#7f9cf5]" />
            +94 77 152 2444
          </div>
          <div className="flex items-center gap-2 mb-2 text-white/80 text-lg">
            <FaEnvelope className="text-[#a78bfa]" />
            manager@colomboconference.org
          </div>
          <div className="flex items-center gap-2 mb-2 text-white/80 text-lg">
            <MdAlternateEmail className="text-[#7f9cf5]" />
            manager@aiconference.org
          </div>
          <div className="flex items-center gap-2 mt-2 text-white/70 text-base">
            <FaBuilding className="text-[#a78bfa]" />
            Venue: gapHQ
          </div>
        </div>
      </div>
    </div>
    {/* Bottom 3 Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* GAP HQ Address */}
      <div
        className="rounded-3xl shadow-xl p-8 flex flex-col items-center border-4 border-[#7f9cf5] bg-black/60"
      >
        <FaMapMarkerAlt className="text-3xl text-[#7f9cf5] mb-3" />
        <div className="text-xl font-bold text-white mb-2">gapHQ</div>
        <div className="text-white/80 text-center">
          Science Tower, 120/10A, Vidya Mawatha,<br />
          Colombo 07, Sri Lanka
        </div>
      </div>
      {/* Phone Numbers */}
      <div
        className="rounded-3xl shadow-xl p-8 flex flex-col items-center border-4 border-[#7f9cf5] bg-black/60"
      >
        <FaPhoneAlt className="text-3xl text-[#7f9cf5] mb-3" />
        <div className="text-xl font-bold text-white mb-2">Phone</div>
        <div className="text-white/80 text-center">
          +94 112 322 508<br />
          +94 770 175 456
        </div>
      </div>
      {/* Emails */}
      <div
        className="rounded-3xl shadow-xl p-8 flex flex-col items-center border-4 border-[#7f9cf5] bg-black/60"
      >
        <FaEnvelope className="text-3xl text-[#7f9cf5] mb-3" />
        <div className="text-xl font-bold text-white mb-2">Email</div>
        <div className="text-white/80 text-center">
          secretary@colomboconference.org<br />
          admin@gaphq.lk
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;