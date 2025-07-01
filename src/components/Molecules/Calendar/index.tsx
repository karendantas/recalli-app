import { View } from "react-native";
import {
  Calendar as RNCalendar,
  LocaleConfig,
  CalendarProps,
} from "react-native-calendars";
import { ptBR } from "@/utils/calendarUtils/localeCalendarConfig";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

import { theme } from "@/constants/theme/theme";

export function Calendar({ ...rest }: CalendarProps) {
  return (
    <View>
      <RNCalendar
        hideExtraDays
        style={{ borderRadius: 8 }}
        theme={{
          selectedDayBackgroundColor: theme.colors.highlight,
          selectedDayTextColor: theme.colors.textPrimary,
          monthTextColor: theme.colors.primary,
          arrowColor: theme.colors.primaryLight,
          backgroundColor: theme.colors.inputBackground,
          calendarBackground: theme.colors.inputBackground,
          todayTextColor: theme.colors.highlight,
          dayTextColor: theme.colors.primaryLight,
        }}
        {...rest}
      />
    </View>
  );
}
