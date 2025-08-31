// src/ExpertProfile.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./components/Header";
import { colors, findExpert } from "./data/experts";

export default function ExpertProfile() {
  const { slug } = useParams();
  const e = findExpert(slug);

  if (!e) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-md mx-auto p-5">
          <h1 className="text-xl font-semibold mb-3">Експерта не знайдено</h1>
          <Link to="/experts" className="text-blue-600">← Повернутися до списку</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{
      background: `radial-gradient(1000px 500px at 120% -20%, ${colors.accent}10, transparent 60%),
                   radial-gradient(800px 400px at -20% 0%, ${colors.primary}10, transparent 60%), #faf9fb`
    }}>
      <Header />

      <main className="max-w-md mx-auto px-4 py-5 sm:max-w-2xl">
        <div className="mb-3">
          <Link to="/experts" className="text-sm" style={{ color: colors.primary }}>← До всіх експертів</Link>
        </div>

        <section className="rounded-2xl border bg-white overflow-hidden" style={{ borderColor: `${colors.primary}22` }}>
          {/* Фото / галерея */}
          <div className="p-4">
            <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border" style={{ borderColor: `${colors.primary}22` }}>
              {e.photo ? (
                <img src={e.photo} alt={e.name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full grid place-items-center text-4xl font-semibold"
                     style={{ color: colors.primary, background: `${colors.primary}0F` }}>
                  {e.name.split(" ").map(w=>w[0]).slice(0,2).join("")}
                </div>
              )}
            </div>

            {/* мини-галерея (если есть) */}
            {Array.isArray(e.gallery) && e.gallery.length > 0 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {e.gallery.map((g, i) => (
                  <img key={i} src={g} alt={`${e.name} ${i+1}`} className="h-16 w-full object-cover rounded-lg border" style={{ borderColor: `${colors.primary}22` }} />
                ))}
              </div>
            )}
          </div>

          {/* Контент */}
          <div className="px-4 pb-5">
            <h1 className="text-2xl font-bold" style={{ color: colors.text }}>{e.name}</h1>
            <div className="text-[15px] text-zinc-700 mt-1">{e.role}</div>
            <div className="text-xs text-zinc-500 mt-1">{e.city}</div>

            <div className="mt-3 flex items-center gap-1 text-amber-500" aria-label={`Рейтинг ${e.rating}/5`}>
              {"★".repeat(e.rating)}{"☆".repeat(5 - e.rating)}
            </div>

            {/* Теги */}
            {e.tags?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border"
                        style={{ borderColor: `${colors.accent}44`, background: `${colors.accent}10`, color: colors.accent }}>
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Спеціалізації */}
            {e.specialties?.length > 0 && (
              <div className="mt-4">
                <h2 className="font-semibold mb-2" style={{ color: colors.text }}>Спеціалізації</h2>
                <div className="flex flex-wrap gap-2">
                  {e.specialties.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full border"
                          style={{ borderColor: `${colors.primary}22`, color: colors.text }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Біо */}
            {e.bio && (
              <div className="mt-4 rounded-xl p-4 border bg-white" style={{ borderColor: `${colors.primary}14` }}>
                <h2 className="font-semibold mb-2" style={{ color: colors.text }}>Про фахівця</h2>
                <p className="text-[15px] leading-6 text-zinc-700 whitespace-pre-line">{e.bio}</p>
              </div>
            )}

            {/* Досвід / Освіта */}
            {(e.experience?.length || e.education?.length) && (
              <div className="mt-4 grid gap-3">
                {e.experience?.length > 0 && (
                  <div className="rounded-xl p-4 border" style={{ borderColor: `${colors.primary}14` }}>
                    <h3 className="font-semibold mb-2" style={{ color: colors.text }}>Досвід</h3>
                    <ul className="list-disc pl-5 text-[15px] text-zinc-700 space-y-1">
                      {e.experience.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                  </div>
                )}
                {e.education?.length > 0 && (
                  <div className="rounded-xl p-4 border" style={{ borderColor: `${colors.primary}14` }}>
                    <h3 className="font-semibold mb-2" style={{ color: colors.text }}>Освіта</h3>
                    <ul className="list-disc pl-5 text-[15px] text-zinc-700 space-y-1">
                      {e.education.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Мови */}
            {e.languages?.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2" style={{ color: colors.text }}>Мови</h3>
                <div className="flex flex-wrap gap-2 text-[15px]">
                  {e.languages.map((l) => <span key={l} className="px-2 py-1 rounded border" style={{ borderColor: `${colors.primary}22` }}>{l}</span>)}
                </div>
              </div>
            )}

            {/* Ціни */}
            {e.prices && (
              <div className="mt-4 rounded-xl p-4 border bg-white" style={{ borderColor: `${colors.primary}14` }}>
                <h3 className="font-semibold mb-2" style={{ color: colors.text }}>Тарифи</h3>
                <ul className="text-[15px] text-zinc-700 space-y-1">
                  {e.prices.text && <li>Текстова консультація — <b>{e.prices.text}</b></li>}
                  {e.prices.video && <li>Відеозв’язок 25 хв — <b>{e.prices.video}</b></li>}
                  {e.prices.support && <li>Супровід 7 днів — <b>{e.prices.support}</b></li>}
                </ul>
              </div>
            )}

            {/* Соцпосилання фахівця */}
            {(e.socials?.tg || e.socials?.ig || e.socials?.fb) && (
              <div className="mt-4 flex gap-2">
                {e.socials.tg && (
                  <a href={e.socials.tg} target="_blank" rel="noopener noreferrer"
                     className="rounded-xl px-3 py-2 border" style={{ borderColor: `${colors.primary}22` }}>
                    Telegram
                  </a>
                )}
                {e.socials.ig && (
                  <a href={e.socials.ig} target="_blank" rel="noopener noreferrer"
                     className="rounded-xl px-3 py-2 border" style={{ borderColor: `${colors.primary}22` }}>
                    Instagram
                  </a>
                )}
                {e.socials.fb && (
                  <a href={e.socials.fb} target="_blank" rel="noopener noreferrer"
                     className="rounded-xl px-3 py-2 border" style={{ borderColor: `${colors.primary}22` }}>
                    Facebook
                  </a>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a
                href="/#book"
                className="rounded-xl px-3 py-3 text-center font-semibold shadow-sm hover:shadow transition"
                style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`, color: "#fff" }}
              >
                Записатися
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank" rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 text-center border"
                style={{ borderColor: `${colors.primary}22`, color: colors.text }}
              >
                Написати в Telegram
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
