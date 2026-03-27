import profilePic from "../../assets/images/profile.png";
import aureola from "../../assets/images/aureolaBlue.png";
import useTranslations from "../hooks/useTranslations";
export default function SobreMi() {
  const t = useTranslations();

  return (
    <>
      <div className="relative">
        <img
          src={aureola}
          alt="Decoracion"
          className="w-75 mx-auto mb-3 mt-10 md:mt-10 md:w-150 md:h-20 lg:w-5xl lg:h-15xl lg:mx-auto"
        />
        <h3
          className="text-3xl font-bold text-center mt-10 md:text-5xl md:mt-7 lg:text-7xl lg:mt-7 relative"
          style={{
            opacity: 1,
            transform: "scale(1)",
            textShadow: "0 0 10px rgba(180, 210, 255, 0.8)",
          }}
        >
          &lt;{t.contactTitle}/&gt;
        </h3>
      </div>
      <img
        src={profilePic}
        alt="Imagen de Perfil"
        className="w-[65cqw] h-[65cqw] sm:w-[40cqw] sm:h-[40cqw] md:w-[40cqw] md:h-[40cqw] lg:w-[20cqw] lg:h-[20cqw] rounded-lg shadow-md border-2 border-gray-300 mx-auto mt-10 lg:mt-15 object-cover bg-gray-800/30"
        style={{ objectPosition: "0% 25%" }}
      />
      <p className="font-mono ml-10 mr-10 text-center text-lg mt-10 md:text-xl md:mt-10 lg:ml-60 lg:mr-60">
        {t.aboutText}
      </p>
    </>
  );
}
