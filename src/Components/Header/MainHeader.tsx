import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaBell } from "react-icons/fa";
import { aboutLinks } from "./Components/DropdownData/dropDownData";
import { ServicesDropDown } from "./Components/ServicesDropDown/ServicesDropDown";
import { apiClient } from "../../services/apiClient";

export interface NoticeItem {
  id: string | number;
  title: string;
  message: string;
  isImportant?: boolean;
}

const MainHeader = () => {
  const [hideNav, setHideNav] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  //  Mobile / tablet (sm, md) menu state 
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Notices state
  const [notices, setNotices] = useState<NoticeItem[]>([]);

  useEffect(() => {
    async function loadNotices() {
      try {
        const data = await apiClient.get<any[]>('/notices');
        if (Array.isArray(data) && data.length > 0) {
          setNotices(
            data.map((n, idx) => ({
              id: n._id || n.id || idx,
              title: n.title || 'Announcement',
              message: n.content || n.message || n.description || '',
              isImportant: n.isImportant || n.priority === 'High',
            }))
          );
        }
      } catch (err) {
        console.error('Failed to load notices:', err);
      }
    }
    loadNotices();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHideNav(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setHideNav(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close the mobile panel whenever a link inside it is clicked
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div>
      {/* Dynamic Announcement Banner */}
      {notices.length > 0 && (
        <div className="fixed top-0 left-0 right-0 z-[102] bg-[#0084CA] text-white text-xs sm:text-sm font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-sm">
          <FaBell className="text-yellow-300 animate-bounce shrink-0" />
          <span className="font-bold">{notices[0].title}:</span>
          <span className="truncate max-w-xl">{notices[0].message}</span>
        </div>
      )}

      <nav
        className={`fixed ${notices.length > 0 ? "top-10" : "top-6"} left-1/2 z-[101] h-13 w-[min(94%,900px)]
          -translate-x-1/2 rounded-full border border-white
           bg-black/23 backdrop-blur-lg shadow-lg
           transition-all duration-500 ease-in-out
        ${hideNav ? "-translate-y-[150%]" : "translate-y-0"}`}
      >
        {/*  MOBILE / TABLET TOP BAR (sm, md)  */}
        <div className="flex lg:hidden h-full items-center justify-between px-6 text-white">
          <NavLink to="/" end className="flex items-center gap-2" onClick={closeMobileMenu}>
            {/* Replace with your actual logo image if you have one */}
            <span className="font-bold text-sm tracking-wide">
              HIMA <span className="text-secondary">AUS</span>
            </span>
          </NavLink>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="text-2xl"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/*  DESKTOP NAV (lg)  */}
        <ul className="hidden lg:flex h-full items-center justify-between px-6 text-white">
          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>

          {/* About Us — hover dropdown, active state now reflects current route */}
          <li className="group relative">
            <NavLink
              to="/about/company-profile"
              className={({ isActive }) =>
                `flex items-center gap-1 uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
            >
              About us
              <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </NavLink>

            <div
              className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-64
                         invisible opacity-0 translate-y-2
                         group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-200 ease-out"
            >
              <ul className="rounded-2xl bg-black/40 backdrop-blur-lg shadow-lg p-5 space-y-4">
                {aboutLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.href}
                      end
                      className={({ isActive }) =>
                        `block text-sm hover:text-secondary transition pb-1 border-b border-white/20 ${
                          isActive ? "text-secondary" : "text-white/90"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Our Services — hover opens the panel, clicks inside drive the accordion */}
          <li className="group relative">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-1 uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/services"
            >
              Our Services
              <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </NavLink>

            <div
              className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-72
                         invisible opacity-0 translate-y-2
                         group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-200 ease-out"
            >
              <div className="rounded-2xl bg-black/40 backdrop-blur-lg shadow-lg p-5 max-h-[70vh] overflow-y-auto">
                <ServicesDropDown />
              </div>
            </div>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/gallery"
              end
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/blog&news"
            // no "end" — stays highlighted on /blog&news/:id detail pages too
            >
              Blog and News
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/find-us"
              end
            >
              Find Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `uppercase text-sm px-2 py-1 transition hover:text-secondary ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              to="/contact-us"
              end
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* ================= MOBILE / TABLET DROPDOWN PANEL (sm, md) ================= */}
      <div
        className={`lg:hidden fixed left-1/2 -translate-x-1/2 z-[100] w-[min(94%,900px)]
          top-24 rounded-3xl border border-white bg-black/40 backdrop-blur-lg shadow-lg
          text-white overflow-hidden transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <ul className="max-h-[80vh] overflow-y-auto p-5 space-y-1">
          <li>
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "bg-white/10 text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          {/* About Us — accordion, children nested as grandchild */}
          <li className="border-b border-white/20">
            <button
              type="button"
              onClick={() => setMobileAboutOpen((prev) => !prev)}
              className="flex w-full items-center justify-between px-4 py-3 uppercase text-sm font-semibold hover:text-secondary transition"
            >
              About Us
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${
                  mobileAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                mobileAboutOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="overflow-hidden pl-6 pb-2 space-y-1 border-l border-white/20 ml-6">
                {aboutLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.href}
                      end
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `block py-2 text-sm transition hover:text-secondary ${
                          isActive ? "text-secondary" : "text-white/80"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Our Services — accordion, ServicesDropDown renders nested children */}
          <li className="border-b border-white/20">
            <div className="flex w-full items-center justify-between px-4 py-3 uppercase text-sm font-semibold transition">
              <NavLink
                to="/services"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `hover:text-secondary transition ${
                    isActive ? "text-secondary" : "text-white"
                  }`
                }
              >
                Our Services
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="p-1 hover:text-secondary text-white/80 transition"
                aria-label="Toggle services submenu"
              >
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pl-6 pb-2 border-l border-white/20 ml-6">
                <ServicesDropDown onItemClick={closeMobileMenu} />
              </div>
            </div>
          </li>

          <li>
            <NavLink
              to="/gallery"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog&news"
              // no "end" — stays highlighted on /blog&news/:id detail pages too
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/find-us"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Find Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase text-sm font-semibold transition ${
                  isActive ? "text-secondary" : "text-white hover:text-secondary"
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;