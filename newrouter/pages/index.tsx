import {
  inputAdornmentClasses,
  NoSsr,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import PushPinIcon from "@mui/icons-material/PushPin";
const MyCalender = () => {
  const [fade, setIsFade] = useState(true);
  const [positionShift, setPositionShift] = useState<"left" | "right" | "up">(
    "up"
  );
  const CurrentDateDay = dayjs().date();
  const CurrentDateMonth = dayjs().month() + 1;
  const CurrentDateYear = dayjs().year();

  const [CurrentMonth, setCurrentMonth] = useState(dayjs().month() + 1);

  const [CurrentYear, setCurrentYear] = useState(dayjs().year());

  const totalDays = dayjs(`${CurrentYear}-${CurrentMonth}`)
    .endOf("month")
    .date();
  //   console.log(totalDays);
  const firstDayOfNumber = dayjs(`${CurrentYear}-${CurrentMonth}`)
    .startOf("M")
    .day();

  const ArrayMonth = Array.from({ length: totalDays }, (_, i) => i + 1);
  const ArrayMonthSpace = Array.from({ length: firstDayOfNumber }, () => null);

  const [selectedDate, setSelectedDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [inputText, setInputText] = useState("");
  const [dateNotes, setDateNotes] = useState<{ [key: string]: string }>({});

  const handlePrevMonth = () => {
    setIsFade(false);
    setPositionShift("right");
    setTimeout(() => {
      setCurrentMonth((currentMonth) =>
        currentMonth === 1 ? 12 : currentMonth - 1
      );
      setCurrentYear(
        (currentYear) => currentYear - (CurrentMonth === 1 ? 1 : 0)
      );
      setIsFade(true);
    }, 300);
  };

  const handleNextMonth = () => {
    setIsFade(false);
    setPositionShift("left");
    setTimeout(() => {
      setCurrentMonth((currentMonth) =>
        CurrentMonth === 12 ? 1 : currentMonth + 1
      );
      setCurrentYear(
        (currentYear) => currentYear + (CurrentMonth === 12 ? 1 : 0)
      );
      setIsFade(true);
    }, 300);
  };

  const handleClickDate = (day: number) => {
    const dateKey = `${CurrentYear}-${CurrentMonth}-${day}`;
    setSelectedDate({ day, month: CurrentMonth, year: CurrentYear });
    setInputText(dateNotes[dateKey]);
    setOpenDialog(true);
  };

  const handleSave = () => {
    const dateKey = `${CurrentYear}-${CurrentMonth}-${selectedDate.day}`;
    setDateNotes({ ...dateNotes, [dateKey]: inputText });
    setOpenDialog(false);
  };

  const handleSignDate = (day: number) => {
    const dateKey = `${CurrentYear}-${CurrentMonth}-${day}`;
    return dateNotes[dateKey] === null ||
      dateNotes[dateKey] === "" ||
      dateNotes[dateKey] === undefined ? null : (
      <PushPinIcon />
    );
  };

  return (
    <>
      <div className="bg-gray-500 h-full p-10 overflow-hidden flex ">
        <div className="flex items-center pr-4">
          <div
            className="hover:bg-gray-400 rounded-xl bg-gray-600 w-2 pr-12 py-16 "
            onClick={(e) => {
              handlePrevMonth();
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: "50px" }} />
          </div>
        </div>

        <div className="bg-gray-500  text-white pt-5 flex-1 ">
          <div className="flex text-3xl p-4 items-center justify-center">
            {dayjs(`${CurrentYear}`).format("YYYY")}年
            <div>
              {dayjs(`${CurrentYear}-${CurrentMonth}`).add(0, "M").format("M")}
              月
            </div>
          </div>

          <Slide in={fade} mountOnEnter unmountOnExit direction={positionShift}>
            <div className="grid grid-cols-7 text-3xl place-items-center bg-gray-500 h-full pb-20  text-white  gap-3">
              <div>日</div>
              <div>一</div>
              <div>二</div>
              <div>三</div>
              <div>四</div>
              <div>五</div>
              <div>六</div>

              {ArrayMonthSpace.map((space, index) => (
                <div
                  className="border h-full w-full rounded-xl"
                  key={`space_${index}`}
                >
                  {space}
                </div>
              ))}

              {ArrayMonth.map((day) => (
                <div
                  className={`border h-full w-full grid place-items-center rounded-2xl hover:scale-110  duration-75  overflow-hidden transform-gpu ${
                    day === CurrentDateDay &&
                    CurrentDateMonth === CurrentMonth &&
                    CurrentDateYear === CurrentYear
                      ? "border-red-500 border-4"
                      : ""
                  }`}
                  onClick={() => {
                    handleClickDate(day);
                  }}
                  key={`day_${day}`}
                >
                  {day}
                  <div className="absolute top-2 right-2">
                    {handleSignDate(day)}
                  </div>
                </div>
              ))}
            </div>
          </Slide>
        </div>

        <div className="flex items-center pl-4">
          <div
            className="hover:bg-gray-400 rounded-xl bg-gray-600 w-2 pr-12 py-16"
            onClick={(e) => {
              handleNextMonth();
            }}
          >
            <NavigateNextIcon sx={{ fontSize: "50px" }} />
          </div>
        </div>
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>備忘錄</DialogTitle>
        <DialogContent>
          <div>
            {selectedDate.year}年{selectedDate.month}月{selectedDate.day}日
          </div>
          <TextField
            multiline
            value={inputText || ""}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>關閉</Button>
          <Button onClick={() => handleSave()}>儲存</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default () => {
  return (
    <NoSsr>
      <MyCalender />
    </NoSsr>
  );
};
