import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-green-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-10">
        {/* Logo və təsvir */}
        <div className="flex flex-row items-center text-left gap-4 max-w-full">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/src/assets/greentechno.svg"
              alt="GreenTech"
              className="h-14 sm:w-20 md:w-24 lg:w-20 lg:h-auto transition-all duration-300"
            />
          </Link>

          <p className="text-sm md:text-base leading-relaxed max-w-xs">
            GreenTech ekoloji texnologiyalara və startaplara dəstək verən
            platformadır. Gəlin birlikdə dünyanı daha yaşıl edək!
          </p>
        </div>

        {/* Naviqasiya Linkləri */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm sm:text-base">
          <Link to="/startups" className="hover:text-green-300 transition">
            Startaplar
          </Link>
          <Link to="/investors" className="hover:text-green-300 transition">
            İnvestorlar
          </Link>
          <Link to="/events" className="hover:text-green-300 transition">
            Tədbirlər
          </Link>
          <Link to="/resources" className="hover:text-green-300 transition">
            Resurslar
          </Link>
          <Link to="/about" className="hover:text-green-300 transition">
            Haqqımızda
          </Link>
        </div>

        {/* Sosial Media */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="#"
            className="text-green-300 hover:text-green-100 transition"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-green-300 hover:text-green-100 transition"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-green-300 hover:text-green-100 transition"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-green-300 hover:text-green-100 transition"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Alt yazı */}
      <div className="text-center text-xs sm:text-sm mt-10 opacity-75">
        © {new Date().getFullYear()} GreenTech. Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
};

export default Footer;
