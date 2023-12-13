import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";

import dayjs from "dayjs";

import { useState } from "react";

const DateTimeContainer = ({ dateChange, date }) => {
  const [value, setValue] = useState(dayjs(date ? date : Date.now()));

  const chooseDate = (message) => {
    setValue(message);
  };

  dateChange(value.toISOString());

  return (
    <>
      <DateTimePicker value={value} chooseDate={chooseDate} />
    </>
  );
};

const DateTimePicker = ({ value, chooseDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        label="Schedule Date & Time"
        value={value}
        onChange={(newValue) => chooseDate(newValue)}
      />
    </LocalizationProvider>
  );
};

export default DateTimeContainer;
