export const monthsArray = [
  { en: 'January', uk: 'Січень' },
  { en: 'February', uk: 'Лютий' },
  { en: 'March', uk: 'Березень' },
  { en: 'April', uk: 'Квітень' },
  { en: 'May', uk: 'Травень' },
  { en: 'June', uk: 'Червень' },
  { en: 'July', uk: 'Липень' },
  { en: 'August', uk: 'Серпень' },
  { en: 'September', uk: 'Вересень' },
  { en: 'October', uk: 'Жовтень' },
  { en: 'November', uk: 'Листопад' },
  { en: 'December', uk: 'Грудень' },
];

export const datesArray = Array.from({ length: 31 }, (_, i) => i + 1);

export const yearsArray = Array.from(
  { length: new Date().getFullYear() - 1950 },
  (_, i) => 1951 + i,
);
