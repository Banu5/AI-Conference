import { check, service2 } from "../assets";

const MissionBox = () => (
  <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden flex-1">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={service2}
        className="h-full w-full object-cover"
        width={630}
        height={750}
        alt="Conference Hall"
      />
    </div>
    {/* Gradient overlay and content */}
    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
      <h4 className="h4 mb-4">Conference Hall</h4>
      <ul className="body-2 mb-[3rem] text-white leading-relaxed">
        <li className="flex items-start mb-4">
          <img width={24} height={24} src={check} alt="check" className="mt-1" />
          <span className="ml-4">Tiered auditorium</span>
        </li>
        <li className="flex items-start mb-4">
          <img width={24} height={24} src={check} alt="check" className="mt-1" />
          <span className="ml-4">85 fixed seats, with built-in writing tablet</span>
        </li>
        <li className="flex items-start mb-4">
          <img width={24} height={24} src={check} alt="check" className="mt-1" />
          <span className="ml-4">AV equipment</span>
        </li>
        <li className="flex items-start mb-4">
          <img width={24} height={24} src={check} alt="check" className="mt-1" />
          <span className="ml-4">Air-conditioning</span>
        </li>
        <li className="flex items-start mb-4">
          <img width={24} height={24} src={check} alt="check" className="mt-1" />
          <span className="ml-4">Extra, movable furniture available</span>
        </li>
        <li className="flex items-start">
          <img width={24} height={24} src={check} alt="check" className="mt-1" />
          <span className="ml-4">
            Coupled with a spacious foyer – venue is ideal for attendees to mingle and network over refreshments
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default MissionBox;