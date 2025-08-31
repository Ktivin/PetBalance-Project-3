// src/data/experts.js
export const colors = {
  primary: "#1F5A4F",
  accent:  "#F37483",
  light:   "#F2FAFD",
  text:    "#111827",
};

// 🔹 список експертів (фото клади в /public/experts/*)
export const experts = [
  {
    slug: "olexandra-kalinichenko",
    name: "Олександра Калініченко",
    role: "Cпеціаліст по реабілітації",
    tags: ["Реабілітація", "24/7"],
    city: "Полтава / Online",
    photo: "/experts/olexandra.jpg",
    rating: 5,
    bio: `Спеціалізація: реабілітація після травм та операцій, контроль болю, ЛФК.
Працюю онлайн та офлайн. Допоможу скласти план відновлення і супроводжуватиму до результату.`,
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
Пояснюю результати аналізів простою мовою, даю чіткі кроки.`,
  },
  {
    slug: "sherstjuk-vitalii",
    name: "Шерстюк  Віталій",
    role: "Лікар загальної практики, швидка допомога",
    tags: ["Лікар", "Швидка допомога", "24/7"],
    city: "Полтава / Online",
    photo: "/experts/vitalii.jpg",
    rating: 5,
    bio: `Загальна практика, перша допомога, тріаж ситуацій. 
Допоможу визначити терміновість візиту в клініку і що робити «зараз».`,
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
  },
];

// 🔹 хелпер
export function findExpert(slug) {
  return experts.find((e) => e.slug === slug);
}
