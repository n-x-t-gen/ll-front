let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, "");
console.log(todayStr);

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Planejar semana",
    daysOfWeek: ["1"],
    start: todayStr,
    color: "#4C2C72",
  },
  {
    title: "event",
    start: "2023-10-09",
    duration: "02:00",
  },
  {
    groupId: "3",
    title: "Criar petição",
    start: "2023-10-18",
    color: "#4C2C72",
  },
  {
    id: createEventId(),
    title: "Cobrar recursos",
    start: "2023-10-23",
    color: "#4C2C72",
  },
  {
    groupId: "2",
    title: "Audiência",
    start: "2023-10-23",
    url: "https://google.com/",
  },
  {
    groupId: "2",
    title: "Planejamento de audiência",
    start: "2023-10-20",
    end: "2023-10-24",
    color: "#4C2C72",
  },
];

export function createEventId() {
  console.log(todayStr);
  return String(eventGuid++);
}
