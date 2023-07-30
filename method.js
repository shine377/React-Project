let newArray = [
  {
    id: 1,
    dateSubmitted: "31/10/2023, 14:30:01",
    assessmentTitle: "Philosophical orientation",
    extendedBy: 2,
    approvedDueDate: "31/10/2023, 14:30:01",
    Status: "Pending",
  },
  {
    id: 2,
    dateSubmitted: "12/08/2023, 15:53:25",
    assessmentTitle: "Leading theorists",
    extendedBy: 3,
    approvedDueDate: "12/08/2023, 15:53:25",
    Status: "pending",
  },
  {
    id: 3,
    dateSubmitted: "12/08/2023, 15:53:25",
    assessmentTitle: "Nature of mind",
    extendedBy: 3,
    approvedDueDate: "12/08/2023, 15:53:25",
    Status: "pending",
  },
  {
    id: 3,
    dateSubmitted: "14/08/2023, 15:53:25",
    assessmentTitle: "Nature of mind",
    extendedBy: 3,
    approvedDueDate: "17/08/2023, 15:53:25",
    Status: "approved",
  },
  {
    id: 4,
    dateSubmitted: "12/08/2023, 15:53:25",
    assessmentTitle: "Metaphorical orientation",
    extendedBy: 2,
    approvedDueDate: "12/08/2023, 15:53:25",
    Status: "pending",
  },
];
const findMethod = () => {
  const data = newArray?.find((s) => s.assessmentTitle === "Leading theorists");
  const values = {
    id: data.id,
    dateSubmitted: data.dateSubmitted,
    assessmentTitle: data.assessmentTitle,
    extendedBy: data.extendedBy,
    approvedDueDate: data.approvedDueDate,
    Status: data.Status,
  };
  return values;
};

const filterMethod = () => {
  const data = newArray?.filter((s) => s.assessmentTitle === "Nature of mind");
  return data[0];
};

const forEachMethod = () => {
  let value = [];
  newArray.forEach((item) => {
    if (item.assessmentTitle === "Philosophical orientation") {
      value = item;
    }
  });
  return value;
};

const find = findMethod();
const filter = filterMethod();
const methodForEach = forEachMethod();

console.log(find);
console.log(filter);
console.log(methodForEach);
