import { useState } from "react";
import { apiClient } from "../../../services/apiClient";
import {
  User,
  Phone,
  Mail,
  BookOpen,
  GraduationCap,
  MapPin,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import LadyPicture from "../../../assets/LadyPicture.png";

// ---- Reusable field: works as input / select / textarea via `as` prop ----
interface FieldProps {
  label: string;
  icon: LucideIcon;
  value: string;
  error?: string;
  as?: "input" | "select" | "textarea";
  type?: string;
  placeholder?: string;
  options?: string[];
  className?: string;
  onChange: (v: string) => void;
}

function Field({
  label,
  icon: Icon,
  value,
  error,
  as = "input",
  type = "text",
  placeholder,
  options,
  className = "",
  onChange,
}: FieldProps) {
  const cls = `w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:border-[#248bc7] ${
    error
      ? "border-[#248bc7] focus:ring-red-400"
      : "border-[#248bc7] focus:ring-[#248bc7]"
  } ${as === "select" && !value ? "text-slate-400" : "text-slate-700"}`;

  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-slate-800 mb-1.5">
        {label}
      </label>

      <div className="relative">
        <Icon
          className={`w-4 h-4 absolute left-3 text-[#248bc7] ${
            as === "textarea"
              ? "top-3"
              : "top-1/2 -translate-y-1/2"
          }`}
        />

        {as === "select" ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cls}
          >
            <option value="" disabled>
              {placeholder}
            </option>

            {options?.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        ) : as === "textarea" ? (
          <textarea
            rows={3}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={`${cls} resize-none`}
          />
        ) : (
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={cls}
          />
        )}
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

const TESTS = ["IELTS", "TOEFL", "PTE", "None"];

const initial = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  programme: "",
  degree: "",
  destination: "",
  message: "",
  testPrep: "None",
  score: "0",
};

export default function ConsultationForm() {
  const [v, setV] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState(false);

  const update = (key: string, value: string) => {
    setV({ ...v, [key]: value });
    setErrors({ ...errors, [key]: "" });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const err: Record<string, string> = {};

    if (v.firstName.trim().length < 3)
      err.firstName = "At least 3 characters";

    if (v.lastName.trim().length < 3)
      err.lastName = "At least 3 characters";

    if (!/^\+?[0-9\s-]{7,15}$/.test(v.phone))
      err.phone = "Invalid Phone Number";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      err.email = "Invalid Email";

    if (!v.programme.trim())
      err.programme = "Required";

    if (!v.degree)
      err.degree = "Required";

    if (!v.destination)
      err.destination = "Required";

    setErrors(err);

    if (Object.keys(err).length === 0) {
      try {
        await apiClient.post('/appointments', {
          name: `${v.firstName.trim()} ${v.lastName.trim()}`,
          email: v.email,
          phone: v.phone,
          program: v.programme,
          degree: v.degree,
          destination: v.destination,
          testType: v.testPrep,
          testScore: v.score,
          additionalMessage: v.message,
          status: 'Pending',
        });
      } catch (apiErr) {
        console.error('Failed to post appointment to API:', apiErr);
      }
      setToast(true);
      setTimeout(() => setToast(false), 3000);
      setV(initial);
    }
  }

  return (
    <div className="bg-[#248bc7] mt-10 min-h-screen p-6 md:p-10 font-sans">
      {toast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-white rounded-xl shadow-lg px-4 py-3 text-sm font-medium">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          Message sent successfully
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col p-10 md:flex-row gap-6 md:gap-8 lg:gap-25 items-stretch">
        
        <div className="w-full md:w-2/5 relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[420px] w-full group ">
  
          <img
           src={LadyPicture}
           alt="Consultant"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />


          <div className="absolute inset-0 bg-" />

          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:mb-6">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl mr-30 text-wrap font-extrabold">
              Unlock Your Global Opportunities
            </h2>

            <p className="text-white/85 text-2xl mt-3 max-w-sm">
              Himaaus guides you through education, career, and visa solutions
              worldwide. Let's make your aspirations a reality.
            </p>

            <div className="mt-6 flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>

              <span className="text-sm font-s text-white">
                Expert guidance available 24/7
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-wrap font-extrabold text-white mr-50">
            <span className="text-secondary">
              Don't know from
            </span>{" "}
            where to start?
          </h1>

          <p className="text-white/90 text-xl mt-2 mb-6">
            Book an appointment now by filling below form and our expert will
            contact you soon after.
          </p>

          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="First Name"
                icon={User}
                value={v.firstName}
                error={errors.firstName}
                placeholder="Enter your first name"
                onChange={(x) => update("firstName", x)}
              />

              <Field
                label="Last Name"
                icon={User}
                value={v.lastName}
                error={errors.lastName}
                placeholder="Enter your last name"
                onChange={(x) => update("lastName", x)}
              />

              <Field
                label="Phone Number"
                icon={Phone}
                value={v.phone}
                error={errors.phone}
                placeholder="+977 9876543210"
                onChange={(x) => update("phone", x)}
              />

              <Field
                label="Email Address"
                icon={Mail}
                value={v.email}
                error={errors.email}
                placeholder="example@email.com"
                type="email"
                onChange={(x) => update("email", x)}
              />

              <Field
                label="Desired Programme"
                icon={BookOpen}
                value={v.programme}
                error={errors.programme}
                placeholder="Engineering / IT / MBBS"
                onChange={(x) => update("programme", x)}
              />

              <Field
                label="Desired Degree"
                icon={GraduationCap}
                value={v.degree}
                error={errors.degree}
                as="select"
                placeholder="Select desired degree"
                options={[
                  "Bachelor's",
                  "Master's",
                  "PhD",
                  "Diploma",
                ]}
                onChange={(x) => update("degree", x)}
              />
            </div>

            <Field
              label="Desired Destination"
              icon={MapPin}
              value={v.destination}
              error={errors.destination}
              as="select"
              placeholder="Select desired destination"
              options={[
                "United Sate",
                "United Kingdom",
                "Australia",
                "Canada",
                "Japan",
                "New zealand",
                "Germany",
                "Sweden"

              ]}
              className="md:w-[calc(50%-0.625rem)]"
              onChange={(x) => update("destination", x)}
            />

            <Field
              label="Additional Message"
              icon={MessageCircle}
              value={v.message}
              as="textarea"
              placeholder="Tell us more about your requirements..."
              onChange={(x) => update("message", x)}
            />

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-slate-800 mb-3">
                Test Preparation
              </p>

              <div className="flex flex-wrap gap-6">
                {TESTS.map((t) => (
                  <label
                    key={t}
                    className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      checked={v.testPrep === t}
                      onChange={() =>
                        setV({
                          ...v,
                          testPrep: t,
                          score: "0",
                        })
                      }
                      className="w-4 h-4 text-blue-600"
                    />
                    {t}
                  </label>
                ))}
              </div>

              {v.testPrep !== "None" && (
                <div className="mt-4 pt-4 border-t border-[#248bc7] flex items-center gap-2 text-sm font-medium text-slate-700">
                  {v.testPrep} Score:
                  <input
                    value={v.score}
                    onChange={(e) =>
                      update("score", e.target.value)
                    }
                    className="w-24 px-3 py-1.5 rounded-lg border border-[#248bc7] text-sm focus:outline-none focus:ring-2 focus:ring-[#248bc7]"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#248bc7] hover:bg-secondary text-white font-semibold text-l py-2 rounded-lg flex items-center justify-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}