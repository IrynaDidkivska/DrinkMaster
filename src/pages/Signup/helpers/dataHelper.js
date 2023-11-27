import moment from "moment";

export const handleDateChangeHelper = (formik, name, value) => {
  // Перевірка, чи value є екземпляром moment
  const formattedDate =
    value instanceof moment ? value.format("DD/MM/YYYY") : value;
  formik.setFieldTouched(name, true, false); // Помітити поле як торкнуте, без валідації
  formik.handleChange({
    target: {
      name,
      value: formattedDate,
    },
  });
};

// Конвертує дату з формату фронта DD/MM/YYYY на формат беку YYYY-MM-DD
export const convertDateFormatHelper = (dateStr) => {
  const parts = dateStr.split("/");
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Convert to YYYY-MM-DD
  }
  return dateStr; // Return the original string if it's not in expected format
};
