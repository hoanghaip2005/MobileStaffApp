import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import Svg, {
  Path,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
  Text as SvgText,
  Mask,
  Circle,
  Pattern,
  Use,
  Image as SvgImage,
} from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { FONTS } from "../utils/fonts";
import { Calendar, LocaleConfig, DateData } from "react-native-calendars";

// Locale for Vietnamese labels similar to the provided design
LocaleConfig.locales.vn = {
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthNamesShort: [
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
  ],
  dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  today: "Hôm nay",
};
LocaleConfig.defaultLocale = "vn";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ScheduleView = () => {
  const navigation = useNavigation<NavigationProp>();
  const [currentMonth, setCurrentMonth] = React.useState<string>(
    new Date().toISOString().slice(0, 10)
  );

  const shiftMonth = (delta: number) => {
    const date = new Date(currentMonth);
    date.setDate(1);
    date.setMonth(date.getMonth() + delta);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    setCurrentMonth(`${year}-${month}-${day}`);
  };

  const formatMonth = (value: any) => {
    const d = new Date(value);
    const month = d.getMonth() + 1;
    return `Tháng ${month}`;
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", gap: 8 }}>
      {/* Header */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
            position: "relative",
          }}
        >
          <View style={{ gap: 8 }}>
            <View style={{ width: 40, height: 40, padding: 8 }}></View>
            <View style={{ width: 40, height: 40, padding: 8 }}></View>
          </View>
          <Text
            style={{
              fontFamily: FONTS.interMedium,
              fontSize: 16,
              color: "#111927",
              textAlign: "center",
              position: "absolute",
              left: 0,
              right: 0,
            }}
          >
            Lịch ca
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{ padding: 8, borderRadius: 40, width: 40, height: 40 }}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                  fill="#1C274C"
                />
              </Svg>
            </View>
            {/* Icon Add */}
            <LinearGradient
              colors={["#00E1E1", "#24BABB"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                borderRadius: 40,
                padding: 8,
                gap: 10,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                width: 40,
                height: 40,
              }}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M13 6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289C11.1054 5.48043 11 5.73478 11 6V11H6C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13H11V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19C12.2652 19 12.5196 18.8946 12.7071 18.7071C12.8946 18.5196 13 18.2652 13 18V13H18C18.2652 13 18.5196 12.8946 18.7071 12.7071C18.8946 12.5196 19 12.2652 19 12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11H13V6Z"
                  fill="white"
                />
              </Svg>
            </LinearGradient>
          </View>
        </View>
      </View>

      {/* Chart */}
      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            flexDirection: "column",
            gap: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 14,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#EAECF0",
            shadowColor: "#101828",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 1,
            elevation: 1,
          }}
        >
          <Text>Thống kê</Text>
          <View style={{ gap: 12 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Số lần đi trễ / về sớm</Text>
              <Text>2</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Nghỉ đột xuất</Text>
              <Text>1</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Tăng ca / đổi ca</Text>
              <Text>1</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Tạm ứng lương / đề xuất</Text>
            <Text>3</Text>
          </View>
        </View>
      </View>

      {/* Schedule */}
      <View style={{ paddingHorizontal: 16, borderBottomWidth: 1, borderColor: "#EAECF0" }}>
        <View
          style={{
            overflow: "hidden",
          }}
        >
            {/* External calendar header to avoid internal padding */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingLeft: 0,
                paddingRight: 0,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  color: "#22DDDD",
                  fontFamily: FONTS.interSemiBold,
                  fontSize: 14,
                }}
              >
                Nhoy Tea
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <TouchableOpacity onPress={() => shiftMonth(-1)}>
                  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <Path
                      d="M5.44322 8.24686L9.86354 12.5333C10.1394 12.8008 10.6667 12.6387 10.6667 12.2864L10.6667 3.71345C10.6667 3.36118 10.1394 3.19905 9.86354 3.46652L5.44322 7.75298C5.29669 7.89508 5.29669 8.10476 5.44322 8.24686Z"
                      fill="#667085"
                    />
                  </Svg>
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#22DDDD",
                    fontFamily: FONTS.interSemiBold,
                    fontSize: 14,
                  }}
                >
                  {formatMonth(currentMonth)}
                </Text>
                <TouchableOpacity onPress={() => shiftMonth(1)}>
                  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <Path
                      d="M10.5568 8.24686L6.13646 12.5333C5.86064 12.8008 5.33334 12.6387 5.33334 12.2864L5.33334 3.71345C5.33334 3.36118 5.86064 3.19905 6.13646 3.46652L10.5568 7.75298C10.7033 7.89508 10.7033 8.10476 10.5568 8.24686Z"
                      fill="#667085"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>

            <Calendar
              current={currentMonth}
              onMonthChange={(m: DateData) => setCurrentMonth(m.dateString)}
              hideArrows
              style={{ paddingLeft: 0, paddingRight: 0 }}
              renderHeader={() => <View style={{ height: 0 }} />}
              key={currentMonth.slice(0, 7)}
              firstDay={1}
              enableSwipeMonths
              theme={{
                textDayFontFamily: FONTS.interMedium,
                textMonthFontFamily: FONTS.interSemiBold,
                textDayHeaderFontFamily: FONTS.interMedium,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 14,
                monthTextColor: "#111927",
                arrowColor: "#111927",
                calendarBackground: "#fff",
                textSectionTitleColor: "#344054",
                selectedDayBackgroundColor: "#00D4D4",
                selectedDayTextColor: "#fff",
                // Style for previous/next month days
                textDayFontColor: "#98A2B3",
                textDisabledColor: "#98A2B3",
                // Today styling
                todayBackgroundColor: "#00E1E1",
                todayTextColor: "#fff",
                // Override weekday header styles
                "stylesheet.calendar.header": {
                  header: {
                    paddingLeft: 0,
                    paddingRight: 0,
                  },
                  dayHeader: {
                    color: "#344054",
                    fontFamily: FONTS.interMedium,
                    textAlign: "center",
                    textAlignVertical: "center",
                    width: 48,
                    height: 48,
                    lineHeight: 48,
                    borderRadius: 24,
                    overflow: "hidden",
                    alignSelf: "center",
                  },
                  week: {
                    flexDirection: "row",
                    justifyContent: "space-around",
                    backgroundColor: "#F7F7F7",
                  },
                },
                // Custom day styling
                "stylesheet.calendar.main": {
                  dayContainer: {
                    position: "relative",
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    overflow: "hidden",
                  },
                  day: {
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    textAlign: "center",
                    textAlignVertical: "center",
                    lineHeight: 48,
                    fontFamily: FONTS.interMedium,
                    fontSize: 16,
                  },
                  today: {
                    backgroundColor: "#00E1E1",
                    borderRadius: 24,
                  },
                  todayText: {
                    color: "#fff",
                    fontWeight: "bold",
                  },
                },
                "stylesheet.calendar.footer": {
                  footer: {
                    borderWidth: 1,
                    borderColor: "#EAECF0",
                    borderRadius: 14,
                    backgroundColor: "#fff",
                    shadowColor: "#101828",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.06,
                    shadowRadius: 2,
                    elevation: 2,
                  },
                },
              }}
              markingType="multi-dot"
              markedDates={{
                // Example dates with different dot colors
                "2025-08-01": { dots: [{ color: "#EAAA08" }] }, // Pending approval
                "2025-08-05": { dots: [{ color: "#EAAA08" }] },
                "2025-08-08": { dots: [{ color: "#6172F3" }] }, // Other reason
                "2025-08-12": { dots: [{ color: "#6172F3" }] },
                "2025-08-15": { dots: [{ color: "#EAAA08" }] },
                "2025-08-18": { dots: [{ color: "#6172F3" }] },
                "2025-08-22": { dots: [{ color: "#EAAA08" }] },
                "2025-08-25": { dots: [{ color: "#6172F3" }] },
                "2025-08-28": { dots: [{ color: "#EAAA08" }] },
                "2025-08-31": { dots: [{ color: "#6172F3" }] },
              }}
              // Custom day renderer to add dots
              dayComponent={({
                date,
                state,
                marking,
              }: {
                date?: any;
                state?: string;
                marking?: any;
              }) => {
                const isToday =
                  date?.dateString === new Date().toISOString().slice(0, 10);
                const isCurrentMonth = state === "today" || state === "";
                const isPrevMonth = state === "disabled";
                const isNextMonth = state === "disabled";

                return (
                  <View style={{ position: "relative", width: 48, height: 48 }}>
                    <View
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        backgroundColor: isToday ? "#00E1E1" : "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: isToday
                            ? "#fff"
                            : isCurrentMonth
                            ? "#111927"
                            : "#98A2B3",
                          fontFamily: FONTS.interMedium,
                          fontSize: 16,
                          fontWeight: isToday ? "bold" : "normal",
                        }}
                      >
                        {date?.day}
                      </Text>
                    </View>

                    {/* Dots for different states */}
                    {marking?.dots && marking.dots.length > 0 && (
                      <View
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          marginLeft: -2.5,
                        }}
                      >
                        {marking.dots.map((dot: any, index: number) => (
                          <View
                            key={index}
                            style={{ marginBottom: index > 0 ? 2 : 0 }}
                          >
                            {dot.color === "#EAAA08" && (
                              <Svg
                                width="5"
                                height="5"
                                viewBox="0 0 5 5"
                                fill="none"
                              >
                                <Circle
                                  cx="2.50008"
                                  cy="2.5"
                                  r="2.5"
                                  fill="#EAAA08"
                                />
                              </Svg>
                            )}
                            {dot.color === "#6172F3" && (
                              <Svg
                                width="5"
                                height="5"
                                viewBox="0 0 5 5"
                                fill="none"
                              >
                                <Circle
                                  cx="2.5"
                                  cy="2.5"
                                  r="2.5"
                                  fill="#6172F3"
                                />
                              </Svg>
                            )}
                            {dot.color === "#98A2B3" && (
                              <Svg
                                width="6"
                                height="5"
                                viewBox="0 0 6 5"
                                fill="none"
                              >
                                <Circle
                                  cx="3"
                                  cy="2.5"
                                  r="2.5"
                                  fill="#98A2B3"
                                />
                              </Svg>
                            )}
                          </View>
                        ))}
                      </View>
                    )}

                    {/* Previous month dots */}
                    {isPrevMonth && (
                      <View
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          marginLeft: -3,
                        }}
                      >
                        <Svg width="6" height="5" viewBox="0 0 6 5" fill="none">
                          <Circle cx="3" cy="2.5" r="2.5" fill="#98A2B3" />
                        </Svg>
                      </View>
                    )}

                    {/* Next month dots */}
                    {isNextMonth && (
                      <View
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          marginLeft: -3,
                        }}
                      >
                        <Svg width="6" height="5" viewBox="0 0 6 5" fill="none">
                          <Defs>
                            <SvgLinearGradient
                              id="nextMonthGradient"
                              x1="4.25"
                              y1="-1.47632e-07"
                              x2="1.84259"
                              y2="5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <Stop stopColor="#00E1E1" />
                              <Stop offset="1" stopColor="#24BABB" />
                            </SvgLinearGradient>
                          </Defs>
                          <Circle
                            cx="3"
                            cy="2.5"
                            r="2.5"
                            fill="url(#nextMonthGradient)"
                          />
                        </Svg>
                      </View>
                    )}
                  </View>
                );
              }}
            />
          </View>
        </View>

      {/* Bottom Bar */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <View style={{ alignItems: "center", position: "relative" }}>
          {/* Icon */}
          <View
            style={{
              alignSelf: "center",
              zIndex: 2,
              width: 54,
              height: 54,
              borderRadius: 50,
              // Outer shadow (approx: X0 Y12 Blur16 Spread-4, #101828 @ 8%)
              shadowColor: "#101828",
              shadowOffset: { width: 0, height: 12 },
              shadowOpacity: 0.08,
              shadowRadius: 16,
              elevation: 8,
            }}
          >
            <View
              style={{
                width: 54,
                height: 54,
                borderRadius: 50,
                // Inner shadow (approx: X0 Y4 Blur6 Spread-2, #101828 @ 3%)
                shadowColor: "#101828",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.03,
                shadowRadius: 6,
              }}
            >
              <ExpoLinearGradient
                colors={["#00E1E1", "#24BABB"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  flex: 1,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  style={{ width: 24, height: 24, tintColor: "white" }}
                  source={require("../../assets/bottomBar/leaf.png")}
                />
              </ExpoLinearGradient>
            </View>
          </View>
          {/* Navigate */}
          <View style={{ marginTop: -27, zIndex: 2, alignItems: "center" }}>
            <Svg width="430" height="75" viewBox="0 0 430 75" fill="none">
              <Path
                d="M429 0C429.552 3.02799e-06 430 0.447717 430 1V74C430 74.5523 429.552 75 429 75H1C0.447718 75 1.30862e-08 74.5523 0 74V1C0 0.447715 0.447715 0 1 0H150.573C160.045 0 168.436 5.51876 175.079 12.2711C185.237 22.597 199.371 29 215 29C230.629 29 244.763 22.597 254.921 12.2711C261.564 5.51876 269.955 0 279.427 0H429Z"
                fill="url(#paint0_linear_22_551)"
              />
              <Defs>
                <SvgLinearGradient
                  id="paint0_linear_22_551"
                  x1="110"
                  y1="-3.07011e-08"
                  x2="108.499"
                  y2="75"
                  gradientUnits="userSpaceOnUse"
                >
                  <Stop stopColor="#F8F8F8" />
                  <Stop offset="1" stopColor="#EBEBEB" />
                </SvgLinearGradient>
              </Defs>
            </Svg>
          </View>
          {/* Button Feature */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 16,
              paddingRight: 16,
              zIndex: 3,
            }}
          >
            {/* Button Left */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  paddingVertical: 12.5,
                  paddingHorizontal: 15,
                }}
              >
                <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <Path
                    d="M9.52 3.34016L4.13 7.54016C3.23 8.24016 2.5 9.73016 2.5 10.8602V18.2702C2.5 20.5902 4.39 22.4902 6.71 22.4902H18.29C20.61 22.4902 22.5 20.5902 22.5 18.2802V11.0002C22.5 9.79016 21.69 8.24016 20.7 7.55016L14.52 3.22016C13.12 2.24016 10.87 2.29016 9.52 3.34016Z"
                    stroke="#667085"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M12.5 18.4902V15.4902"
                    stroke="#667085"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>

                <Text
                  style={{
                    fontFamily: FONTS.interRegular,
                    fontSize: 12,
                    color: "#667085",
                  }}
                >
                  Trang chủ
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                  paddingVertical: 12.5,
                  paddingHorizontal: 15,
                }}
                onPress={() => navigation.navigate("ScheduleView")}
              >
                <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <Path
                    d="M8.25 3C8.25 2.58579 7.91421 2.25 7.5 2.25C7.08579 2.25 6.75 2.58579 6.75 3V4.57926C5.31067 4.69451 4.36577 4.97737 3.67157 5.67157C2.97737 6.36577 2.69451 7.31067 2.57926 8.75H22.4207C22.3055 7.31067 22.0226 6.36577 21.3284 5.67157C20.6342 4.97737 19.6893 4.69451 18.25 4.57926V3C18.25 2.58579 17.9142 2.25 17.5 2.25C17.0858 2.25 16.75 2.58579 16.75 3V4.5129C16.0847 4.5 15.339 4.5 14.5 4.5H10.5C9.66097 4.5 8.91527 4.5 8.25 4.5129V3Z"
                    fill="url(#paint0_linear_138_5985)"
                  />
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 12.5C2.5 11.661 2.5 10.9153 2.5129 10.25H22.4871C22.5 10.9153 22.5 11.661 22.5 12.5V14.5C22.5 18.2712 22.5 20.1569 21.3284 21.3284C20.1569 22.5 18.2712 22.5 14.5 22.5H10.5C6.72876 22.5 4.84315 22.5 3.67157 21.3284C2.5 20.1569 2.5 18.2712 2.5 14.5V12.5ZM17.5 14.5C18.0523 14.5 18.5 14.0523 18.5 13.5C18.5 12.9477 18.0523 12.5 17.5 12.5C16.9477 12.5 16.5 12.9477 16.5 13.5C16.5 14.0523 16.9477 14.5 17.5 14.5ZM17.5 18.5C18.0523 18.5 18.5 18.0523 18.5 17.5C18.5 16.9477 18.0523 16.5 17.5 16.5C16.9477 16.5 16.5 16.9477 16.5 17.5C16.5 18.0523 16.9477 18.5 17.5 18.5ZM13.5 13.5C13.5 14.0523 13.0523 14.5 12.5 14.5C11.9477 14.5 11.5 14.0523 11.5 13.5C11.5 12.9477 11.9477 12.5 12.5 12.5C13.0523 12.5 13.5 12.9477 13.5 13.5ZM13.5 17.5C13.5 18.0523 13.0523 18.5 12.5 18.5C11.9477 18.5 11.5 18.0523 11.5 17.5C11.5 16.9477 11.9477 16.5 12.5 16.5C13.0523 16.5 13.5 16.9477 13.5 17.5ZM7.5 14.5C8.05228 14.5 8.5 14.0523 8.5 13.5C8.5 12.9477 8.05228 12.5 7.5 12.5C6.94772 12.5 6.5 12.9477 6.5 13.5C6.5 14.0523 6.94772 14.5 7.5 14.5ZM7.5 18.5C8.05228 18.5 8.5 18.0523 8.5 17.5C8.5 16.9477 8.05228 16.5 7.5 16.5C6.94772 16.5 6.5 16.9477 6.5 17.5C6.5 18.0523 6.94772 18.5 7.5 18.5Z"
                    fill="url(#paint1_linear_138_5985)"
                  />
                  <Defs>
                    <SvgLinearGradient
                      id="paint0_linear_138_5985"
                      x1="17.5"
                      y1="2.25"
                      x2="7.67464"
                      y2="22.4046"
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#00E1E1" />
                      <Stop offset="1" stopColor="#24BABB" />
                    </SvgLinearGradient>
                    <SvgLinearGradient
                      id="paint1_linear_138_5985"
                      x1="17.5"
                      y1="2.25"
                      x2="7.67464"
                      y2="22.4046"
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#00E1E1" />
                      <Stop offset="1" stopColor="#24BABB" />
                    </SvgLinearGradient>
                  </Defs>
                </Svg>

                <Svg width="70" height="18" viewBox="0 0 70 18">
                  <Defs>
                    <SvgLinearGradient
                      id="textGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <Stop offset="0%" stopColor="#00E1E1" />
                      <Stop offset="100%" stopColor="#24BABB" />
                    </SvgLinearGradient>
                  </Defs>
                  <SvgText
                    x="35"
                    y="13"
                    textAnchor="middle"
                    fontSize="12"
                    fontFamily="Inter"
                    fill="url(#textGradient)"
                  >
                    Lịch ca
                  </SvgText>
                </Svg>
              </TouchableOpacity>
            </View>
            {/* Button right */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                  paddingVertical: 12.5,
                  paddingHorizontal: 15,
                }}
              >
                <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <Mask id="path-1-inside-1_22_569" fill="white">
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9606 1.75H14.0394C15.6427 1.74999 16.8997 1.74999 17.9039 1.84547C18.9274 1.94279 19.7655 2.14457 20.5044 2.59732C21.2781 3.07144 21.9286 3.72194 22.4027 4.49563C22.8554 5.23445 23.0572 6.07256 23.1545 7.09611C23.25 8.10029 23.25 9.35725 23.25 10.9606V12.0278C23.25 13.1691 23.25 14.064 23.2007 14.7868C23.1505 15.5223 23.0468 16.1344 22.8123 16.7004C22.2287 18.1093 21.1093 19.2287 19.7004 19.8123C18.8955 20.1457 17.9786 20.2197 16.7233 20.2413C16.2842 20.2489 16.0061 20.2545 15.7941 20.2779C15.596 20.2999 15.5192 20.332 15.4742 20.3582C15.4268 20.3857 15.3622 20.436 15.2501 20.5898C15.1287 20.7564 14.9916 20.9865 14.7742 21.3539L14.2321 22.2697C13.4585 23.5767 11.5415 23.5767 10.7679 22.2697L10.2258 21.3539C10.0083 20.9865 9.87122 20.7564 9.74985 20.5898C9.63772 20.436 9.57313 20.3857 9.52572 20.3582C9.48078 20.332 9.40399 20.2999 9.20588 20.2779C8.99387 20.2545 8.71575 20.2489 8.27666 20.2413C7.02138 20.2197 6.10454 20.1457 5.29957 19.8123C3.89066 19.2287 2.77128 18.1093 2.18769 16.7004C1.95323 16.1344 1.8495 15.5223 1.79932 14.7868C1.74999 14.064 1.75 13.1691 1.75 12.0278L1.75 10.9606C1.74999 9.35726 1.74999 8.10029 1.84547 7.09611C1.94279 6.07256 2.14457 5.23445 2.59732 4.49563C3.07144 3.72194 3.72194 3.07144 4.49563 2.59732C5.23445 2.14457 6.07256 1.94279 7.09611 1.84547C8.10029 1.74999 9.35726 1.74999 10.9606 1.75ZM7.23809 3.33873C6.32434 3.42561 5.74291 3.59223 5.27938 3.87628C4.70752 4.22672 4.22672 4.70752 3.87628 5.27938C3.59223 5.74291 3.42561 6.32434 3.33873 7.23809C3.25079 8.163 3.25 9.34876 3.25 11V12C3.25 13.1751 3.25041 14.0189 3.29584 14.6847C3.34081 15.3438 3.42737 15.7736 3.57351 16.1264C4.00486 17.1678 4.83223 17.9951 5.8736 18.4265C6.38923 18.6401 7.04706 18.7199 8.3025 18.7416L8.33432 18.7421C8.73232 18.749 9.08109 18.7549 9.37097 18.787C9.68246 18.8215 9.9871 18.8912 10.2799 19.0615C10.5702 19.2304 10.7795 19.4559 10.9621 19.7063C11.1307 19.9378 11.304 20.2306 11.5004 20.5623L12.0587 21.5057C12.2515 21.8313 12.7485 21.8313 12.9412 21.5057L13.4996 20.5623C13.6959 20.2306 13.8692 19.9378 14.0379 19.7063C14.2204 19.4559 14.4298 19.2304 14.7201 19.0615C15.0129 18.8912 15.3175 18.8215 15.629 18.787C15.9189 18.7549 16.2676 18.749 16.6656 18.7421L16.6975 18.7416C17.9529 18.7199 18.6108 18.6401 19.1264 18.4265C20.1678 17.9951 20.9951 17.1678 21.4265 16.1264C21.5726 15.7736 21.6592 15.3438 21.7042 14.6847C21.7496 14.0189 21.75 13.1751 21.75 12V11C21.75 9.34876 21.7492 8.163 21.6613 7.23809C21.5744 6.32434 21.4078 5.74291 21.1237 5.27938C20.7733 4.70752 20.2925 4.22672 19.7206 3.87628C19.2571 3.59223 18.6757 3.42561 17.7619 3.33873C16.837 3.25079 15.6512 3.25 14 3.25H11C9.34876 3.25 8.163 3.25079 7.23809 3.33873Z"
                    />
                    <Path d="M9.5 11.5C9.5 12.0523 9.05228 12.5 8.5 12.5C7.94772 12.5 7.5 12.0523 7.5 11.5C7.5 10.9477 7.94772 10.5 8.5 10.5C9.05228 10.5 9.5 10.9477 9.5 11.5Z" />
                    <Path d="M13.5 11.5C13.5 12.0523 13.0523 12.5 12.5 12.5C11.9477 12.5 11.5 12.0523 11.5 11.5C11.5 10.9477 11.9477 10.5 12.5 10.5C13.0523 10.5 13.5 10.9477 13.5 11.5Z" />
                    <Path d="M17.5 11.5C17.5 12.0523 17.0523 12.5 16.5 12.5C15.9477 12.5 15.5 12.0523 15.5 11.5C15.5 10.9477 15.9477 10.5 16.5 10.5C17.0523 10.5 17.5 10.9477 17.5 11.5Z" />
                  </Mask>
                  <Path
                    d="M9.90279 19.7098L10.335 19.9612L10.7121 19.3129L10.2799 19.0615L9.84765 18.8101L9.47058 19.4585L9.90279 19.7098ZM10.9606 1.75L10.9606 2.75H10.9606V1.75ZM14.0394 1.75L14.0394 2.75L14.0394 2.75L14.0394 1.75ZM17.9039 1.84547L17.8092 2.84098L17.8092 2.84098L17.9039 1.84547ZM20.5044 2.59732L21.0269 1.74468L21.0269 1.74468L20.5044 2.59732ZM22.4027 4.49563L23.2553 3.97314L23.2553 3.97313L22.4027 4.49563ZM23.1545 7.09611L24.15 7.00145L24.15 7.00145L23.1545 7.09611ZM23.25 10.9606L22.25 10.9606V10.9606H23.25ZM23.25 12.0278L22.25 12.0278L22.25 12.0278L23.25 12.0278ZM23.2007 14.7868L24.1984 14.8549L24.1984 14.8549L23.2007 14.7868ZM22.8123 16.7004L21.8884 16.3177L21.8884 16.3177L22.8123 16.7004ZM19.7004 19.8123L20.0831 20.7362L20.0831 20.7362L19.7004 19.8123ZM16.7233 20.2413L16.7405 21.2412L16.7405 21.2412L16.7233 20.2413ZM15.7941 20.2779L15.684 19.284L15.684 19.284L15.7941 20.2779ZM15.4742 20.3582L14.9715 19.4937L14.9715 19.4937L15.4742 20.3582ZM15.2501 20.5898L14.442 20.0008L14.442 20.0008L15.2501 20.5898ZM14.7742 21.3539L13.9136 20.8445L13.9136 20.8445L14.7742 21.3539ZM14.2321 22.2697L15.0926 22.7791L15.0926 22.7791L14.2321 22.2697ZM10.7679 22.2697L11.6284 21.7604L11.6284 21.7604L10.7679 22.2697ZM10.2258 21.3539L9.36524 21.8632L9.36524 21.8632L10.2258 21.3539ZM9.74985 20.5898L8.94172 21.1788L8.94172 21.1788L9.74985 20.5898ZM9.52572 20.3582L10.0285 19.4937L10.0285 19.4937L9.52572 20.3582ZM9.20588 20.2779L9.31594 19.284L9.31594 19.284L9.20588 20.2779ZM8.27666 20.2413L8.25943 21.2412L8.25943 21.2412L8.27666 20.2413ZM5.29957 19.8123L4.91689 20.7362L4.91689 20.7362L5.29957 19.8123ZM2.18769 16.7004L3.11157 16.3177L3.11157 16.3177L2.18769 16.7004ZM1.79932 14.7868L0.801635 14.8549L0.801635 14.8549L1.79932 14.7868ZM1.75 12.0278L2.75 12.0278L2.75 12.0278L1.75 12.0278ZM1.75 10.9606L2.75 10.9606L2.75 10.9606L1.75 10.9606ZM1.84547 7.09611L2.84098 7.19076L1.84547 7.09611ZM2.59732 4.49563L1.74468 3.97313L1.74468 3.97313L2.59732 4.49563ZM4.49563 2.59732L3.97313 1.74468L3.97313 1.74468L4.49563 2.59732ZM7.09611 1.84547L7.00145 0.849957L7.00145 0.849957L7.09611 1.84547ZM5.27938 3.87628L5.80188 4.72892L5.80188 4.72892L5.27938 3.87628ZM7.23809 3.33873L7.33274 4.33424L7.33274 4.33424L7.23809 3.33873ZM3.87628 5.27938L4.72892 5.80188L4.72892 5.80188L3.87628 5.27938ZM3.33873 7.23809L2.34322 7.14343L3.33873 7.23809ZM3.29584 14.6847L4.29352 14.6167L4.29352 14.6167L3.29584 14.6847ZM3.57351 16.1264L4.49739 15.7437L4.49739 15.7437L3.57351 16.1264ZM5.8736 18.4265L5.49091 19.3504L5.49091 19.3504L5.8736 18.4265ZM8.3025 18.7416L8.28527 19.7414L8.2853 19.7414L8.3025 18.7416ZM8.33432 18.7421L8.31712 19.742L8.31714 19.742L8.33432 18.7421ZM9.37097 18.787L9.48103 17.7931L9.48103 17.7931L9.37097 18.787ZM10.2799 19.0615L10.7826 18.1971L10.7826 18.1971L10.2799 19.0615ZM10.9621 19.7063L10.1539 20.2953L10.1539 20.2953L10.9621 19.7063ZM11.5004 20.5623L10.6398 21.0717L10.6398 21.0717L11.5004 20.5623ZM12.0587 21.5057L11.1982 22.015L11.1982 22.015L12.0587 21.5057ZM12.9412 21.5057L13.8018 22.015L13.8018 22.015L12.9412 21.5057ZM13.4996 20.5623L14.3601 21.0717L14.3602 21.0717L13.4996 20.5623ZM14.0379 19.7063L13.2298 19.1174L13.2298 19.1174L14.0379 19.7063ZM14.7201 19.0615L15.2229 19.9259L15.2229 19.9259L14.7201 19.0615ZM15.629 18.787L15.5189 17.7931L15.5189 17.7931L15.629 18.787ZM16.6656 18.7421L16.6828 19.742L16.6828 19.742L16.6656 18.7421ZM16.6975 18.7416L16.7147 19.7414L16.7147 19.7414L16.6975 18.7416ZM19.1264 18.4265L19.5091 19.3504L19.5091 19.3504L19.1264 18.4265ZM21.4265 16.1264L22.3504 16.5091L22.3504 16.5091L21.4265 16.1264ZM21.7042 14.6847L20.7065 14.6167L20.7065 14.6167L21.7042 14.6847ZM21.6613 7.23809L22.6568 7.14343L22.6568 7.14343L21.6613 7.23809ZM21.1237 5.27938L20.2711 5.80188L20.2711 5.80188L21.1237 5.27938ZM19.7206 3.87628L19.1981 4.72892L19.1981 4.72892L19.7206 3.87628ZM17.7619 3.33873L17.8566 2.34322L17.8566 2.34322L17.7619 3.33873ZM17.9039 1.84547L17.9985 0.849957C16.9363 0.748955 15.6243 0.749994 14.0394 0.75L14.0394 1.75L14.0394 2.75C15.6612 2.74999 16.8631 2.75102 17.8092 2.84098L17.9039 1.84547ZM20.5044 2.59732L21.0269 1.74468C20.1046 1.17949 19.0954 0.954244 17.9985 0.849957L17.9039 1.84547L17.8092 2.84098C18.7595 2.93133 19.4265 3.10965 19.9819 3.44996L20.5044 2.59732ZM22.4027 4.49563L23.2553 3.97313C22.6987 3.06489 21.9351 2.30126 21.0269 1.74468L20.5044 2.59732L19.9819 3.44996C20.621 3.84162 21.1584 4.37899 21.55 5.01813L22.4027 4.49563ZM23.1545 7.09611L24.15 7.00145C24.0458 5.90463 23.8205 4.89544 23.2553 3.97314L22.4027 4.49563L21.55 5.01813C21.8903 5.57346 22.0687 6.24049 22.159 7.19076L23.1545 7.09611ZM23.25 10.9606L24.25 10.9606C24.25 9.37567 24.251 8.06373 24.15 7.00145L23.1545 7.09611L22.159 7.19076C22.249 8.13685 22.25 9.33883 22.25 10.9606L23.25 10.9606ZM23.2007 14.7868L24.1984 14.8549C24.2505 14.0903 24.25 13.1561 24.25 12.0278L23.25 12.0278L22.25 12.0278C22.25 13.1821 22.2495 14.0377 22.203 14.7188L23.2007 14.7868ZM22.8123 16.7004L23.7362 17.0831C24.0295 16.375 24.1447 15.6414 24.1984 14.8549L23.2007 14.7868L22.203 14.7188C22.1563 15.4032 22.064 15.8938 21.8884 16.3177L22.8123 16.7004ZM19.7004 19.8123L20.0831 20.7362C21.7371 20.0511 23.0511 18.7371 23.7362 17.0831L22.8123 16.7004L21.8884 16.3177C21.4063 17.4816 20.4816 18.4063 19.3177 18.8884L19.7004 19.8123ZM16.7233 20.2413L16.7405 21.2412C17.9967 21.2195 19.0856 21.1494 20.0831 20.7362L19.7004 19.8123L19.3177 18.8884C18.7053 19.1421 17.9605 19.2199 16.7061 19.2415L16.7233 20.2413ZM15.7941 20.2779L15.9041 21.2719C16.0589 21.2547 16.282 21.2491 16.7405 21.2412L16.7233 20.2413L16.7061 19.2415C16.2864 19.2487 15.9533 19.2542 15.684 19.284L15.7941 20.2779ZM15.4742 20.3582L15.977 21.2226C15.956 21.2348 15.9315 21.2474 15.9051 21.2586C15.88 21.2692 15.8605 21.2754 15.8493 21.2786C15.8301 21.284 15.8411 21.2788 15.9041 21.2719L15.7941 20.2779L15.684 19.284C15.4106 19.3143 15.1818 19.3714 14.9715 19.4937L15.4742 20.3582ZM15.2501 20.5898L16.0582 21.1788C16.0927 21.1315 16.1007 21.1269 16.0851 21.1421C16.0761 21.1509 16.061 21.1646 16.0398 21.1807C16.0177 21.1975 15.9959 21.2116 15.977 21.2226L15.4742 20.3582L14.9715 19.4937C14.7621 19.6155 14.6009 19.7827 14.442 20.0008L15.2501 20.5898ZM14.7742 21.3539L15.6347 21.8632C15.8623 21.4788 15.9716 21.2977 16.0582 21.1788L15.2501 20.5898L14.442 20.0008C14.2858 20.2151 14.121 20.4942 13.9136 20.8445L14.7742 21.3539ZM14.2321 22.2697L15.0926 22.7791L15.6347 21.8632L14.7742 21.3539L13.9136 20.8445L13.3715 21.7604L14.2321 22.2697ZM10.7679 22.2697L9.90734 22.7791C11.0681 24.7402 13.9318 24.7402 15.0926 22.7791L14.2321 22.2697L13.3715 21.7604C12.9852 22.4131 12.0148 22.4131 11.6284 21.7604L10.7679 22.2697ZM10.2258 21.3539L9.36524 21.8632L9.90734 22.7791L10.7679 22.2697L11.6284 21.7604L11.0863 20.8445L10.2258 21.3539ZM9.74985 20.5898L8.94172 21.1788C9.02832 21.2977 9.1377 21.4788 9.36524 21.8632L10.2258 21.3539L11.0863 20.8445C10.879 20.4942 10.7141 20.2151 10.558 20.0008L9.74985 20.5898ZM9.52572 20.3582L9.02294 21.2226C9.00401 21.2116 8.98224 21.1975 8.96015 21.1807C8.93897 21.1646 8.92383 21.1509 8.91487 21.1421C8.89925 21.1269 8.90721 21.1315 8.94172 21.1788L9.74985 20.5898L10.558 20.0008C10.399 19.7827 10.2379 19.6155 10.0285 19.4937L9.52572 20.3582ZM9.20588 20.2779L9.09582 21.2719C9.15882 21.2788 9.16988 21.284 9.15062 21.2786C9.13945 21.2754 9.11997 21.2692 9.09484 21.2586C9.06842 21.2474 9.04396 21.2348 9.02297 21.2226L9.52572 20.3582L10.0285 19.4937C9.81814 19.3714 9.58933 19.3143 9.31594 19.284L9.20588 20.2779ZM8.27666 20.2413L8.25943 21.2412C8.71797 21.2491 8.94107 21.2547 9.09583 21.2719L9.20588 20.2779L9.31594 19.284C9.04667 19.2542 8.71354 19.2487 8.29388 19.2415L8.27666 20.2413ZM5.29957 19.8123L4.91689 20.7362C5.91435 21.1493 7.00323 21.2195 8.25943 21.2412L8.27666 20.2413L8.29389 19.2415C7.03952 19.2199 6.29473 19.1421 5.68225 18.8884L5.29957 19.8123ZM2.18769 16.7004L1.26381 17.0831C1.9489 18.7371 3.26295 20.0511 4.91689 20.7362L5.29957 19.8123L5.68225 18.8884C4.51837 18.4063 3.59367 17.4816 3.11157 16.3177L2.18769 16.7004ZM1.79932 14.7868L0.801635 14.8549C0.855299 15.6414 0.9705 16.375 1.26381 17.0831L2.18769 16.7004L3.11157 16.3177C2.93596 15.8938 2.84369 15.4032 2.797 14.7188L1.79932 14.7868ZM1.75 12.0278L0.75 12.0278C0.749997 13.1561 0.749464 14.0903 0.801635 14.8549L1.79932 14.7868L2.797 14.7188C2.75052 14.0377 2.75 13.1821 2.75 12.0278L1.75 12.0278ZM1.84547 7.09611L0.849957 7.00145C0.748955 8.06373 0.749994 9.37567 0.75 10.9606L1.75 10.9606L2.75 10.9606C2.74999 9.33884 2.75102 8.13686 2.84098 7.19076L1.84547 7.09611ZM2.59732 4.49563L1.74468 3.97313C1.17949 4.89544 0.954244 5.90463 0.849957 7.00145L1.84547 7.09611L2.84098 7.19076C2.93133 6.24049 3.10965 5.57347 3.44996 5.01813L2.59732 4.49563ZM4.49563 2.59732L3.97313 1.74468C3.06489 2.30126 2.30126 3.06489 1.74468 3.97313L2.59732 4.49563L3.44996 5.01813C3.84162 4.37899 4.37899 3.84162 5.01813 3.44996L4.49563 2.59732ZM7.09611 1.84547L7.00145 0.849957C5.90463 0.954244 4.89544 1.17949 3.97313 1.74468L4.49563 2.59732L5.01813 3.44996C5.57347 3.10965 6.24049 2.93133 7.19076 2.84098L7.09611 1.84547ZM10.9606 1.75L10.9606 0.75C9.37567 0.749994 8.06373 0.748955 7.00145 0.849957L7.09611 1.84547L7.19076 2.84098C8.13686 2.75102 9.33884 2.74999 10.9606 2.75L10.9606 1.75ZM5.27938 3.87628L5.80188 4.72892C6.08182 4.55737 6.49208 4.41417 7.33274 4.33424L7.23809 3.33873L7.14343 2.34322C6.15659 2.43705 5.404 2.62709 4.75688 3.02364L5.27938 3.87628ZM3.87628 5.27938L4.72892 5.80188C4.9969 5.36457 5.36457 4.9969 5.80188 4.72892L5.27938 3.87628L4.75688 3.02364C4.05047 3.45653 3.45653 4.05047 3.02364 4.75688L3.87628 5.27938ZM3.33873 7.23809L4.33424 7.33274C4.41417 6.49208 4.55737 6.08182 4.72892 5.80188L3.87628 5.27938L3.02364 4.75688C2.62709 5.404 2.43705 6.15659 2.34322 7.14343L3.33873 7.23809ZM3.25 11H4.25C4.25 9.32917 4.25185 8.19928 4.33424 7.33274L3.33873 7.23809L2.34322 7.14343C2.24973 8.12672 2.25 9.36835 2.25 11H3.25ZM3.25 12H4.25V11H3.25H2.25V12H3.25ZM3.29584 14.6847L4.29352 14.6167C4.25095 13.9928 4.25 13.189 4.25 12H3.25H2.25C2.25 13.1613 2.24986 14.045 2.29816 14.7528L3.29584 14.6847ZM3.57351 16.1264L4.49739 15.7437C4.41018 15.5332 4.33503 15.225 4.29352 14.6167L3.29584 14.6847L2.29816 14.7528C2.34659 15.4626 2.44456 16.014 2.64963 16.5091L3.57351 16.1264ZM5.8736 18.4265L6.25628 17.5026C5.45994 17.1728 4.82725 16.5401 4.49739 15.7437L3.57351 16.1264L2.64963 16.5091C3.18248 17.7955 4.20451 18.8175 5.49091 19.3504L5.8736 18.4265ZM8.3025 18.7416L8.31973 17.7417C7.0629 17.7201 6.57852 17.6361 6.25628 17.5026L5.8736 18.4265L5.49091 19.3504C6.19994 19.6441 7.03123 19.7198 8.28527 19.7414L8.3025 18.7416ZM8.33432 18.7421L8.35152 17.7423L8.3197 17.7417L8.3025 18.7416L8.2853 19.7414L8.31712 19.742L8.33432 18.7421ZM9.37097 18.787L9.48103 17.7931C9.13487 17.7548 8.73409 17.7488 8.3515 17.7423L8.33432 18.7421L8.31714 19.742C8.73055 19.7491 9.02731 19.7551 9.26091 19.781L9.37097 18.787ZM10.2799 19.0615L10.7826 18.1971C10.3247 17.9308 9.86822 17.836 9.48103 17.7931L9.37097 18.787L9.26091 19.781C9.49671 19.8071 9.6495 19.8517 9.7771 19.9259L10.2799 19.0615ZM10.9621 19.7063L11.7702 19.1174C11.5407 18.8025 11.2348 18.4601 10.7826 18.1971L10.2799 19.0615L9.7771 19.9259C9.9055 20.0006 10.0184 20.1093 10.1539 20.2953L10.9621 19.7063ZM11.5004 20.5623L12.3609 20.053C12.1725 19.7347 11.973 19.3956 11.7702 19.1174L10.9621 19.7063L10.1539 20.2953C10.2884 20.4799 10.4356 20.7266 10.6398 21.0717L11.5004 20.5623ZM12.9412 21.5057L12.0807 20.9963C12.1874 20.8161 12.3668 20.7499 12.5 20.7499C12.6332 20.7499 12.8126 20.8161 12.9193 20.9963L12.0587 21.5057L11.1982 22.015C11.7781 22.9949 13.2218 22.9949 13.8018 22.015L12.9412 21.5057ZM14.0379 19.7063L13.2298 19.1174C13.027 19.3956 12.8274 19.7347 12.639 20.053L13.4996 20.5623L14.3602 21.0717C14.5644 20.7266 14.7115 20.4799 14.846 20.2953L14.0379 19.7063ZM14.7201 19.0615L14.2173 18.1971C13.7652 18.4601 13.4592 18.8025 13.2298 19.1174L14.0379 19.7063L14.846 20.2953C14.9816 20.1093 15.0945 20.0006 15.2229 19.9259L14.7201 19.0615ZM15.629 18.787L15.5189 17.7931C15.1317 17.836 14.6752 17.9308 14.2173 18.1971L14.7201 19.0615L15.2229 19.9259C15.3505 19.8517 15.5032 19.8071 15.739 19.781L15.629 18.787ZM16.6656 18.7421L16.6485 17.7423C16.2659 17.7488 15.8651 17.7548 15.5189 17.7931L15.629 18.787L15.739 19.781C15.9726 19.7551 16.2694 19.7491 16.6828 19.742L16.6656 18.7421ZM16.6975 18.7416L16.6803 17.7417L16.6484 17.7423L16.6656 18.7421L16.6828 19.742L16.7147 19.7414L16.6975 18.7416ZM19.1264 18.4265L18.7437 17.5026C18.4215 17.6361 17.9371 17.7201 16.6802 17.7417L16.6975 18.7416L16.7147 19.7414C17.9687 19.7198 18.8001 19.6441 19.5091 19.3504L19.1264 18.4265ZM21.4265 16.1264L20.5026 15.7437C20.1728 16.5401 19.5401 17.1728 18.7437 17.5026L19.1264 18.4265L19.5091 19.3504C20.7955 18.8175 21.8175 17.7955 22.3504 16.5091L21.4265 16.1264ZM21.7042 14.6847L20.7065 14.6167C20.665 15.225 20.5898 15.5332 20.5026 15.7437L21.4265 16.1264L22.3504 16.5091C22.5554 16.014 22.6534 15.4626 22.7018 14.7528L21.7042 14.6847ZM21.75 12H20.75C20.75 13.189 20.749 13.9928 20.7065 14.6167L21.7042 14.6847L22.7018 14.7528C22.7501 14.045 22.75 13.1613 22.75 12H21.75ZM21.75 11H20.75V12H21.75H22.75V11H21.75ZM21.6613 7.23809L20.6658 7.33274C20.7481 8.19928 20.75 9.32917 20.75 11H21.75H22.75C22.75 9.36835 22.7503 8.12672 22.6568 7.14343L21.6613 7.23809ZM21.1237 5.27938L20.2711 5.80188C20.4426 6.08182 20.5858 6.49208 20.6658 7.33274L21.6613 7.23809L22.6568 7.14343C22.5629 6.15659 22.3729 5.404 21.9764 4.75688L21.1237 5.27938ZM19.7206 3.87628L19.1981 4.72892C19.6354 4.9969 20.0031 5.36457 20.2711 5.80188L21.1237 5.27938L21.9764 4.75688C21.5435 4.05047 20.9495 3.45653 20.2431 3.02364L19.7206 3.87628ZM17.7619 3.33873L17.6673 4.33424C18.5079 4.41417 18.9182 4.55737 19.1981 4.72892L19.7206 3.87628L20.2431 3.02364C19.596 2.62709 18.8434 2.43705 17.8566 2.34322L17.7619 3.33873ZM14 3.25V4.25C15.6708 4.25 16.8007 4.25185 17.6673 4.33424L17.7619 3.33873L17.8566 2.34322C16.8733 2.24973 15.6316 2.25 14 2.25V3.25ZM11 3.25V4.25H14V3.25V2.25H11V3.25ZM7.23809 3.33873L7.33274 4.33424C8.19928 4.25185 9.32917 4.25 11 4.25V3.25V2.25C9.36835 2.25 8.12672 2.24973 7.14343 2.34322L7.23809 3.33873ZM14.0394 1.75V0.75H10.9606V1.75V2.75H14.0394V1.75ZM23.25 12.0278H24.25V10.9606H23.25H22.25V12.0278H23.25ZM1.75 10.9606L0.75 10.9606L0.75 12.0278L1.75 12.0278L2.75 12.0278L2.75 10.9606L1.75 10.9606ZM12.0587 21.5057L12.9193 20.9963L12.3609 20.053L11.5004 20.5623L10.6398 21.0717L11.1982 22.015L12.0587 21.5057ZM13.4996 20.5623L12.639 20.053L12.0807 20.9963L12.9412 21.5057L13.8018 22.015L14.3601 21.0717L13.4996 20.5623ZM9.5 11.5H8.5V12.5V13.5C9.60457 13.5 10.5 12.6046 10.5 11.5H9.5ZM8.5 12.5V11.5H7.5H6.5C6.5 12.6046 7.39543 13.5 8.5 13.5V12.5ZM7.5 11.5H8.5V10.5V9.5C7.39543 9.5 6.5 10.3954 6.5 11.5H7.5ZM8.5 10.5V11.5H9.5H10.5C10.5 10.3954 9.60457 9.5 8.5 9.5V10.5ZM13.5 11.5H12.5V12.5V13.5C13.6046 13.5 14.5 12.6046 14.5 11.5H13.5ZM12.5 12.5V11.5H11.5H10.5C10.5 12.6046 11.3954 13.5 12.5 13.5V12.5ZM11.5 11.5H12.5V10.5V9.5C11.3954 9.5 10.5 10.3954 10.5 11.5H11.5ZM12.5 10.5V11.5H13.5H14.5C14.5 10.3954 13.6046 9.5 12.5 9.5V10.5ZM17.5 11.5H16.5V12.5V13.5C17.6046 13.5 18.5 12.6046 18.5 11.5H17.5ZM16.5 12.5V11.5H15.5H14.5C14.5 12.6046 15.3954 13.5 16.5 13.5V12.5ZM15.5 11.5H16.5V10.5V9.5C15.3954 9.5 14.5 10.3954 14.5 11.5H15.5ZM16.5 10.5V11.5H17.5H18.5C18.5 10.3954 17.6046 9.5 16.5 9.5V10.5Z"
                    fill="#667085"
                    mask="url(#path-1-inside-1_22_569)"
                  />
                </Svg>

                <Text
                  style={{
                    fontFamily: FONTS.interRegular,
                    fontSize: 12,
                    color: "#667085",
                  }}
                >
                  Chat connect
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                  paddingVertical: 12.5,
                  paddingHorizontal: 15,
                }}
              >
                <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <Circle
                    cx="12.5"
                    cy="12.5"
                    r="11.5"
                    fill="url(#pattern0_22_573)"
                    stroke="#F5FFFF"
                  />
                  <Defs>
                    <Pattern
                      id="pattern0_22_573"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <Use
                        href="#image0_22_573"
                        transform="scale(0.00208333)"
                      />
                    </Pattern>
                    <SvgImage
                      id="image0_22_573"
                      width={480}
                      height={480}
                      preserveAspectRatio="none"
                    />
                  </Defs>
                </Svg>
                <Text
                  style={{
                    fontFamily: FONTS.interRegular,
                    fontSize: 12,
                    color: "#667085",
                  }}
                >
                  Tài khoản
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Home Indicator */}
        <View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default ScheduleView;
