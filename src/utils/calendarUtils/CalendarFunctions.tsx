import dayjs, { Dayjs } from "dayjs";
import { DateData, CalendarUtils } from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";

type OrderStartsAtAndEndsAt = {
  startsAt?: DateData;
  endsAt?: DateData;
  selectedDay: DateData;
};

type FormatDatesInText = {
  startsAt: Dayjs;
  endsAt: Dayjs;
};

export type DatesSelected = {
  startsAt: DateData | undefined;
  endsAt: DateData | undefined;
  dates: MarkedDates;
  formatDatesInText: string;
};

function orderStartsAtAndEndsAt({
  startsAt,
  endsAt,
  selectedDay,
}: OrderStartsAtAndEndsAt): DatesSelected {
  if (!startsAt) {
    const day = dayjs(selectedDay.dateString);

    return {
      startsAt: selectedDay,
      endsAt: undefined,
      formatDatesInText: day.format("DD/MM/YYYY"),
      dates: getIntervalDates(selectedDay, selectedDay),
    };
  }

  if (startsAt && endsAt) {
    const day = dayjs(selectedDay.dateString);

    return {
      startsAt: selectedDay,
      endsAt: undefined,
      formatDatesInText: day.format("DD/MM/YYYY"),
      dates: getIntervalDates(selectedDay, selectedDay),
    };
  }

  if (selectedDay.timestamp <= startsAt.timestamp) {
    return {
      startsAt: selectedDay,
      endsAt: startsAt,
      dates: getIntervalDates(selectedDay, startsAt),
      formatDatesInText: formatDatesInText({
        startsAt: dayjs(selectedDay.dateString),
        endsAt: dayjs(startsAt.dateString),
      }),
    };
  }

  if (startsAt && !endsAt && selectedDay.dateString === startsAt.dateString) {
    return {
      startsAt: undefined,
      endsAt: undefined,
      dates: {},
      formatDatesInText: "",
    };
  }

  return {
    startsAt: startsAt,
    endsAt: selectedDay,
    dates: getIntervalDates(startsAt, selectedDay),
    formatDatesInText: formatDatesInText({
      startsAt: dayjs(startsAt.dateString),
      endsAt: dayjs(selectedDay.dateString),
    }),
  };
}

function formatDatesInText({ startsAt, endsAt }: FormatDatesInText) {
  const startFormatted = startsAt.format("DD/MM/YYYY");
  const endFormatted = endsAt.format("DD/MM/YYYY");

  if (startFormatted === endFormatted) {
    return startFormatted;
  }

  return `${startFormatted} - ${endFormatted}`;
}

function getIntervalDates(startsAt: DateData, endsAt: DateData): MarkedDates {
  const start = dayjs(startsAt.dateString);
  const end = dayjs(endsAt.dateString);

  let currentDate = start;
  const datesArray: string[] = [];

  while (currentDate.isBefore(end) || currentDate.isSame(end)) {
    datesArray.push(currentDate.format("YYYY-MM-DD"));
    currentDate = currentDate.add(1, "day");
  }

  let interval: MarkedDates = {};

  datesArray.forEach((date) => {
    interval = {
      ...interval,
      [date]: {
        selected: true,
      },
    };
  });

  return interval;
}

export const calendarUtils = {
  orderStartsAtAndEndsAt,
  formatDatesInText,
  dateToCalendarDate: CalendarUtils.getCalendarDateString,
};
