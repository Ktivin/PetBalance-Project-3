// src/Experts.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import { colors, experts as allExperts } from "./data/experts";

// инициалы + плейсхолдер
const getInitials = (name="") =>
  name.split(" ").filter(Boolean).slice(0,2).map(s=>s[0]?.toUpperCase()||"").join("");

function Avatar({ name, src }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="h-16 w-16 rounded-xl object-cover border"
        style={{ borderColor: "#1F5A4F22" }}
        onError={(e) => { e.currentTarget.src = ""; e.currentTarget.onerror = null; }}
      />
    );
  }
  return (
    <div
      className="h-16 w-16 rounded-xl grid place-items-center border text-lg font-semibold"
      style={{
        borderColor: "#1F5A4F22",
        color: colors.primary,
        background: `radial-gradient(120px 80px at 80% -20%, ${colors.accent}22, transparent 60%),
                     radial-gradient(120px 80px at -20% 100%, ${colors.primary}18, transparent 60%), #fff`,
      }}
      aria-label={name}
    >
      {getInitials(name) || "E"}
    </div>
  );
}

// src/data/experts.js

export const experts = [
  {
    slug: "olexandra-kalinichenko",
    name: "Олександра Калініченко",
    role: "Cпеціаліст по реабілітації",
    tags: ["Реабілітація", "24/7"],
    city: "Полтава / Online",
    photo: "/experts/olexandra.jpg",
    rating: 5,
    bio: `Реабілітація після травм та операцій, контроль болю, ЛФК.
План відновлення + супровід.`,
    experience: ["5+ років практики", "Робота з післяопераційними пацієнтами"],
    education: ["Вет. освіта, курси реабілітації"],
    specialties: ["Ортопедія", "ЛФК"],
    languages: ["Українська", "Русский"],
    prices: { text: "від 199₴", video: "від 449₴" },
    socials: { tg: "https://t.me/yourusername", ig: "", fb: "" },
  },
  {
    slug: "stulii-liubov",
    name: "Стулій Любов",
    role: "Ультразвукова діагностика, гастроентерологія",
    tags: ["Гастроентерологія", "Ультразвук", "24/7"],
    city: "Полтава / Online",
    photo: "/experts/lubov.jpg",
    rating: 5,
    bio: `УЗД органів, консультації з травлення, підбір дієти. 
Пояснюю результати аналізів простою мовою.`,
    experience: ["7+ років у діагностиці", "Автор методичних матеріалів"],
    education: ["Спеціалізація з УЗД, гастроентерологія"],
    specialties: ["УЗД", "ШКТ"],
    languages: ["Українська"],
    prices: { text: "від 199₴", video: "від 449₴" },
    socials: { tg: "", ig: "", fb: "" },
  },
  {
    slug: "sherstjuk-vitalii",
    name: "Шерстюк  Віталій",
    role: "Лікар загальної практики, швидка допомога",
    tags: ["Лікар", "Швидка допомога", "24/7"],
    city: "Полтава / Online",
    photo: "/experts/vitalii.jpg",
    rating: 5,
    bio: `Перша допомога, тріаж ситуацій. 
Допоможу визначити терміновість візиту у клініку.`,
    experience: ["8+ років", "Невідкладні стани"],
    education: ["Ветеринарна медицина"],
    specialties: ["Невідкладні стани", "Терапія"],
    languages: ["Українська"],
    prices: { text: "від 199₴" },
    socials: { tg: "", ig: "", fb: "" },
  },
  {
    slug: "kuznietsova-ievheniia",
    name: "Кузнєцова Євгенія",
    role: "Дерматолог, клінічний патолог",
    tags: ["Дерматологія", "24/7"],
    city: "Полтава / Online",
    photo: "/experts/evgenia.jpg",
    rating: 5,
    bio: `Шкіра, алергії, лабораторна діагностика. 
Складаю план лікування та пояснюю альтернативи.`,
    experience: ["6+ років у дерматології", "Лабораторні протоколи"],
    education: ["Клінічна патологія, дерматологія"],
    specialties: ["Шкіра", "Алергії"],
    languages: ["Українська"],
    prices: { text: "від 199₴", video: "від 449₴" },
    socials: { tg: "", ig: "", fb: "" },
  },
];

export function findExpert(slug) {
  return experts.find((e) => e.slug === slug);
}


export default function Experts() {
  const domains = ["Усі", "Ветеринарія", "Кінологія", "Зоопсихологія", "Дерматологія", "Нутриціологія"];
  const [active, setActive] = useState("Усі");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return allExperts.filter((e) => {
      const matchesDomain =
        active === "Усі" ||
        (active === "Ветеринарія" && /лікар|терап|вет|діагност/i.test(e.role)) ||
        (active === "Кінологія" && /кінолог/i.test(e.role)) ||
        (active === "Зоопсихологія" && /зоопсих/i.test(e.role)) ||
        (active === "Дерматологія" && /дермат/i.test(e.role)) ||
        (active === "Нутриціологія" && /нутриц|харч/i.test(e.role));

      const q = query.trim().toLowerCase();
      const matchesSearch =
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.role.toLowerCase().includes(q) ||
        e.tags.join(" ").toLowerCase().includes(q) ||
        (e.city || "").toLowerCase().includes(q);

      return matchesDomain && matchesSearch;
    });
  }, [active, query]);

  return (
    <div className="min-h-screen" style={{
      background: `radial-gradient(1200px 600px at 100% -10%, ${colors.accent}10 0%, transparent 60%),
                   radial-gradient(1000px 500px at -10% 0%, ${colors.primary}10 0%, transparent 60%), #faf9fb`
    }}>
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* топ-полоса (мобильно) */}
        <section
          className="rounded-2xl p-4 border mb-4"
          style={{ borderColor: `${colors.primary}22`, background: `linear-gradient(135deg, #fff, ${colors.light})` }}
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold" style={{ color: colors.text }}>Наші експерти</h1>

            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Пошук: ім'я, напрям, місто…"
                className="flex-1 rounded-xl border px-4 py-2 text-[15px]"
                style={{ borderColor: `${colors.primary}22` }}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {domains.map((d) => {
                const activeChip = d === active;
                return (
                  <button
                    key={d}
                    onClick={() => setActive(d)}
                    className={`text-sm rounded-full px-3 py-1 border transition ${activeChip ? "shadow-sm" : "hover:shadow"}`}
                    style={{
                      borderColor: `${colors.primary}22`,
                      background: activeChip ? `${colors.primary}10` : "#fff",
                      color: activeChip ? colors.primary : colors.text,
                    }}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* карточки экспертов */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl border bg-white overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderColor: `${colors.primary}22` }}
            >
              <div
                className="p-5"
                style={{
                  background: `radial-gradient(180px 120px at 100% -20%, ${colors.accent}18, transparent 70%),
                               radial-gradient(180px 120px at -10% 120%, ${colors.primary}15, transparent 70%)`,
                }}
              >
                <div className="flex items-start gap-4">
                  <Avatar name={p.name} src={p.photo} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-lg" style={{ color: colors.text }}>{p.name}</h3>
                      <div className="flex items-center gap-0.5 text-amber-500 text-sm" aria-label={`Рейтинг ${p.rating}/5`}>
                        {"★".repeat(p.rating)}{"☆".repeat(5 - p.rating)}
                      </div>
                    </div>
                    <div className="text-sm text-zinc-600">{p.role}</div>
                    <div className="text-xs text-zinc-500 mt-1">{p.city}</div>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border"
                      style={{ borderColor: `${colors.accent}44`, background: `${colors.accent}10`, color: colors.accent }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href="/#book"
                    className="rounded-xl px-3 py-2 text-center font-medium shadow-sm hover:shadow transition"
                    style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`, color: "#fff" }}
                  >
                    Записатися
                  </a>

                  {/* 🔗 Детальніше → страница профиля */}
                  <Link
                    to={`/experts/${p.slug}`}
                    className="rounded-xl px-3 py-2 text-center border"
                    style={{ borderColor: `${colors.primary}22`, color: colors.text }}
                  >
                    Детальніше
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {filtered.length === 0 && (
          <div className="text-center text-zinc-600 mt-10">Нічого не знайдено. Спробуйте інші фільтри або пошук.</div>
        )}
      </main>
    </div>
  );
}
