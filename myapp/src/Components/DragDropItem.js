import { v4 as uuidv4 } from "uuid";
export const data = [
  {
    id: "1",
  },
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: "Drag and Drop",
    items: data,
  },
  [uuidv4()]: {
    title: "Drag and Drop",
    items: [],
  },
};
