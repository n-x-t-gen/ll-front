let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Evento teste",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Evento teste com hora",
    start: todayStr + "T16:20:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
