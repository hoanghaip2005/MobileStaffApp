import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Alert,
  Button,
} from "react-native";
import { BulletList } from "../components/BulletList";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";

import { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProp = StackNavigationProp<RootStackParamList, "GPSAttendance">;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
});
const FONTS = {
  interMedium: "Inter-Medium",
  interSemiBold: "Inter-SemiBold",
  interBold: "Inter-Bold",
  interBlack: "Inter-Black",
  interBlackItalic: "Inter-BlackItalic",
  interBoldItalic: "Inter-BoldItalic",
  interExtraBold: "Inter-ExtraBold",
  interExtraBoldItalic: "Inter-ExtraBoldItalic",
  interExtraLight: "Inter-ExtraLight",
  interExtraLightItalic: "Inter-ExtraLightItalic",
  interLight: "Inter-Light",
  interLightItalic: "Inter-LightItalic",
  interMediumItalic: "Inter-MediumItalic",
} as const;

export default function GPSAttendanceScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleBackToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  const handleGPSAttendance = () => {
    if (isCheckingIn) {
      // Logic cho checkout
      Alert.alert("Thành công", "Đã chấm công ra thành công!");
      setIsCheckingIn(false);
    } else {
      // Logic cho checkin
      Alert.alert("Thành công", "Đã chấm công vào thành công!");
      setIsCheckingIn(true);
    }
  };

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <View style={[styles.container, {}]}>
      {/* Header */}
      <View style={{ flex: 0 }}>
        <View style={{ height: 50 }}></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
            position: "relative",
          }}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M9.66667 16L5 12M5 12L9.66667 8M5 12H19"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          <Text
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: 16,
              fontFamily: FONTS.interMedium,
            }}
          >
            Chấm công GPS
          </Text>
        </View>
      </View>

      {/* Content chấm công thành công */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          gap: 16,
          flexDirection: "column",
          display: "none",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: FONTS.interBold,
            fontSize: 16,
          }}
        >
          Xác thực vị trí chấm công
        </Text>
        <View style={{ alignItems: "center", padding: 16, paddingBottom: 8 }}>
          <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <Path
              d="M48.9217 84.2927C49.2153 84.564 49.6004 84.7147 50.0001 84.7147C50.3999 84.7146 50.7849 84.5639 51.0785 84.2927C61.2316 74.5428 81.8457 51.9456 81.6983 37.9486C81.7066 33.7806 80.8928 29.6519 79.3036 25.7988C77.7143 21.9457 75.3807 18.4438 72.4364 15.4937C69.4921 12.5435 65.9949 10.203 62.145 8.60607C58.2951 7.00914 54.168 6.18714 50 6.18713C45.832 6.18713 41.7049 7.00912 37.855 8.60605C34.0051 10.203 30.5079 12.5435 27.5636 15.4936C24.6193 18.4438 22.2857 21.9456 20.6964 25.7987C19.1071 29.6518 18.2933 33.7805 18.3016 37.9485C18.141 51.9215 38.7777 74.569 48.9217 84.2927ZM36.4953 37.9485C37.213 20.0474 62.7897 20.0525 63.5047 37.9486C63.5047 41.5302 62.0819 44.9652 59.5492 47.4978C57.0166 50.0304 53.5816 51.4532 50 51.4532C46.4183 51.4532 42.9833 50.0304 40.4507 47.4978C37.9181 44.9651 36.4953 41.5301 36.4953 37.9485ZM84.5276 83.1516C84.4082 97.2827 15.5914 97.2829 15.4724 83.1515C15.4724 78.0873 24.3974 75.0394 34.4947 73.5857C35.2054 74.4446 36.2227 75.5453 36.9799 76.3992C24.4599 77.8997 18.5985 81.1508 18.5985 83.1516C18.5985 86.2151 30.8371 90.6542 50.0001 90.6542C69.163 90.6542 81.4016 86.2151 81.4016 83.1516C81.4016 81.1509 75.5402 77.8997 63.0202 76.3992L64.1144 75.18C64.5833 74.6487 65.0522 74.1172 65.5054 73.5857C75.6026 75.0395 84.5276 78.0873 84.5276 83.1516Z"
              fill="url(#paint0_linear_81_5645)"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_81_5645"
                x1="67.2638"
                y1="6.18713"
                x2="19.2923"
                y2="84.7614"
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#00E1E1" />
                <Stop offset="1" stopColor="#24BABB" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            justifyContent: "center",
          }}
        >
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.3334 9.99999C18.3334 14.6024 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6024 1.66675 9.99999C1.66675 5.39762 5.39771 1.66666 10.0001 1.66666C14.6025 1.66666 18.3334 5.39762 18.3334 9.99999ZM13.3587 7.47471C13.6028 7.71879 13.6028 8.11452 13.3587 8.3586L9.19202 12.5253C8.94795 12.7693 8.55222 12.7693 8.30814 12.5253L6.64147 10.8586C6.3974 10.6145 6.3974 10.2188 6.64147 9.97471C6.88555 9.73064 7.28128 9.73064 7.52536 9.97471L8.75008 11.1994L10.6124 9.33708L12.4748 7.47471C12.7189 7.23064 13.1146 7.23064 13.3587 7.47471Z"
              fill="#12B76A"
            />
          </Svg>
          <Text style={{ fontFamily: FONTS.interSemiBold, fontSize: 16 }}>
            Thành công
          </Text>
        </View>
        <View style={{ gap: 48, paddingHorizontal: 16 }}>
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.interMedium,
                fontSize: 14,
                color: "#667085",
              }}
            >
              Vị trí hiện tại
            </Text>
            <Text
              style={{
                fontFamily: FONTS.interMedium,
                fontSize: 14,
                color: "#3B76DA",
                textAlign: "center",
              }}
            >
              371 Nguyễn Kiệm Phường 3 Quận Gò Vấp, Hồ Chí Minh
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.interSemiBold,
                fontSize: 16,
                color: "#111927",
                textAlign: "center",
                lineHeight: 20,
                flex: 1,
              }}
            >
              Tỉ lệ chấm công đúng giờ trong tháng
            </Text>
            <View style={{ marginTop: 20, flex: 1 }}>
              {/* Container cho tiến trình vòng tròn */}
              <View
                style={{
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 200,
                  height: 200,
                }}
              >
                {/* Vòng tròn nền */}
                <Svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  style={{ position: "absolute" }}
                >
                  <Path
                    d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM18.7889 100C18.7889 144.852 55.1484 181.211 100 181.211C144.852 181.211 181.211 144.852 181.211 100C181.211 55.1484 144.852 18.7889 100 18.7889C55.1484 18.7889 18.7889 55.1484 18.7889 100Z"
                    fill="#E9FFFF"
                  />
                </Svg>

                {/* Vòng tròn tiến trình (90%) */}
                <Svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  style={{ position: "absolute" }}
                >
                  <Circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="url(#progressGradient)"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray="565.48"
                    strokeDashoffset={565.48 * (1 - 0.9)} // 90% progress
                    strokeLinecap="round"
                    transform="rotate(-90 100 100)"
                  />
                  <Defs>
                    <LinearGradient
                      id="progressGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#00E1E1" />
                      <Stop offset="1" stopColor="#24BABB" />
                    </LinearGradient>
                  </Defs>
                </Svg>

                {/* Text hiển thị % ở giữa */}
                <View
                  style={{
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.interMedium,
                      fontSize: 43.75,
                      color: "#111927",
                    }}
                  >
                    90%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Content chấm công không thành công */}
      <View
        style={{
          flex: 1,
          paddingLeft: 16,
          paddingRight: 16,
          gap: 16,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: FONTS.interBold,
            fontSize: 16,
          }}
        >
          Xác thực vị trí chấm công
        </Text>
        <View style={{ alignItems: "center", padding: 16, paddingBottom: 8 }}>
          <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <Path
              d="M48.9217 84.2927C49.2153 84.564 49.6004 84.7147 50.0001 84.7147C50.3999 84.7146 50.7849 84.5639 51.0785 84.2927C61.2316 74.5428 81.8457 51.9456 81.6983 37.9486C81.7066 33.7806 80.8928 29.6519 79.3036 25.7988C77.7143 21.9457 75.3807 18.4438 72.4364 15.4937C69.4921 12.5435 65.9949 10.203 62.145 8.60607C58.2951 7.00914 54.168 6.18714 50 6.18713C45.832 6.18713 41.7049 7.00912 37.855 8.60605C34.0051 10.203 30.5079 12.5435 27.5636 15.4936C24.6193 18.4438 22.2857 21.9456 20.6964 25.7987C19.1071 29.6518 18.2933 33.7805 18.3016 37.9485C18.141 51.9215 38.7777 74.569 48.9217 84.2927ZM36.4953 37.9485C37.213 20.0474 62.7897 20.0525 63.5047 37.9486C63.5047 41.5302 62.0819 44.9652 59.5492 47.4978C57.0166 50.0304 53.5816 51.4532 50 51.4532C46.4183 51.4532 42.9833 50.0304 40.4507 47.4978C37.9181 44.9651 36.4953 41.5301 36.4953 37.9485ZM84.5276 83.1516C84.4082 97.2827 15.5914 97.2829 15.4724 83.1515C15.4724 78.0873 24.3974 75.0394 34.4947 73.5857C35.2054 74.4446 36.2227 75.5453 36.9799 76.3992C24.4599 77.8997 18.5985 81.1508 18.5985 83.1516C18.5985 86.2151 30.8371 90.6542 50.0001 90.6542C69.163 90.6542 81.4016 86.2151 81.4016 83.1516C81.4016 81.1509 75.5402 77.8997 63.0202 76.3992L64.1144 75.18C64.5833 74.6487 65.0522 74.1172 65.5054 73.5857C75.6026 75.0395 84.5276 78.0873 84.5276 83.1516Z"
              fill="url(#paint0_linear_81_5645)"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_81_5645"
                x1="67.2638"
                y1="6.18713"
                x2="19.2923"
                y2="84.7614"
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#00E1E1" />
                <Stop offset="1" stopColor="#24BABB" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            justifyContent: "center",
          }}
        >
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.42651 8.96791C6.85847 4.65597 8.07446 2.5 10.0001 2.5C11.9257 2.5 13.1417 4.65597 15.5737 8.96791L15.8767 9.50522C17.8977 13.0884 18.9081 14.88 17.9949 16.19C17.0816 17.5 14.8221 17.5 10.3031 17.5H9.69703C5.17805 17.5 2.91856 17.5 2.0053 16.19C1.09203 14.88 2.10251 13.0884 4.12346 9.50523L4.42651 8.96791ZM10.0001 6.04167C10.3453 6.04167 10.6251 6.32149 10.6251 6.66667V10.8333C10.6251 11.1785 10.3453 11.4583 10.0001 11.4583C9.6549 11.4583 9.37508 11.1785 9.37508 10.8333V6.66667C9.37508 6.32149 9.6549 6.04167 10.0001 6.04167ZM10.0001 14.1667C10.4603 14.1667 10.8334 13.7936 10.8334 13.3333C10.8334 12.8731 10.4603 12.5 10.0001 12.5C9.53984 12.5 9.16675 12.8731 9.16675 13.3333C9.16675 13.7936 9.53984 14.1667 10.0001 14.1667Z"
              fill="#FFC013"
            />
          </Svg>

          <Text style={{ fontFamily: FONTS.interSemiBold, fontSize: 16 }}>
            Không thành công
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.interMedium,
              fontSize: 14,
              color: "#667085",
              textAlign: "center",
              paddingHorizontal: 56,
            }}
          >
            Vị trí hiện tại đang cách 250m, quá xa so với địa điểm được phép
            chấm công
          </Text>
        </View>
        <View>
          <View style={{ gap: 16, paddingVertical: 16  }}>
            <View
              style={{
                gap: 6,
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.interSemiBold,
                  fontSize: 16,
                  color: "#111927",
                }}
              >
                Hướng dẫn nhanh
              </Text>
            </View>
            <BulletList
              items={[
                'Hãy bật "Chế độ chính xác cao" trong cài đặt GPS',
                'Đứng gần vị trí cho phép chấm công & thử lại',
                'Nếu bạn đang thật sự ở gần quán → chọn "Báo lỗi GPS"'
              ]}
              textStyle={{
                fontFamily: FONTS.interMedium,
                fontSize: 14,
                color: "#667085",
              }}
              bulletColor="#667085"
              gapBetweenItems={6}
            />
          </View>
          <View>
            <View style={{ gap: 6 }}>
              <Text
                style={{
                  fontFamily: FONTS.interMedium,
                  fontSize: 14,
                  color: "#667085",
                }}
              >
                Địa điểm chấm công hợp lệ:
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.16675 6.76218C2.16675 3.49616 4.77009 0.833313 8.00008 0.833313C11.2301 0.833313 13.8334 3.49616 13.8334 6.76218C13.8334 8.33891 13.3841 10.0319 12.5897 11.4946C11.7963 12.9554 10.6372 14.2248 9.18709 14.9026C8.43379 15.2547 7.56637 15.2547 6.81307 14.9026C5.363 14.2248 4.20383 12.9554 3.41045 11.4946C2.6161 10.0319 2.16675 8.33891 2.16675 6.76218ZM8.00008 1.83331C5.33904 1.83331 3.16675 4.03163 3.16675 6.76218C3.16675 8.16022 3.5685 9.69025 4.28922 11.0173C5.01091 12.3461 6.03076 13.4331 7.23651 13.9966C7.72145 14.2233 8.27871 14.2233 8.76365 13.9966C9.9694 13.4331 10.9893 12.3461 11.7109 11.0173C12.4317 9.69025 12.8334 8.16022 12.8334 6.76218C12.8334 4.03163 10.6611 1.83331 8.00008 1.83331ZM8.00008 5.16665C7.17165 5.16665 6.50008 5.83822 6.50008 6.66665C6.50008 7.49507 7.17165 8.16665 8.00008 8.16665C8.82851 8.16665 9.50008 7.49507 9.50008 6.66665C9.50008 5.83822 8.82851 5.16665 8.00008 5.16665ZM5.50008 6.66665C5.50008 5.28593 6.61937 4.16665 8.00008 4.16665C9.38079 4.16665 10.5001 5.28593 10.5001 6.66665C10.5001 8.04736 9.38079 9.16665 8.00008 9.16665C6.61937 9.16665 5.50008 8.04736 5.50008 6.66665Z"
                  fill="#667085"
                />
              </Svg>

              <Text
                style={{
                  fontFamily: FONTS.interMedium,
                  fontSize: 14,
                  color: "#667085",
                }}
              >
                371 Nguyễn Kiệm Phường 3 Quận Gò Vấp, Hồ Chí Minh
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Button báo lỗi GPS */}
      <View style={{ flexDirection: "row", gap: 16, paddingHorizontal: 16, paddingVertical: 12 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#093762",
            shadowColor: "#101828",
            shadowOffset: {
              width: 0,
              height: 0.1,
            },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 2,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: "#093762",
              fontFamily: FONTS.interMedium,
              fontSize: 14,
            }}
          >
            Báo lỗi GPS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#093762",
            shadowColor: "#101828",
            shadowOffset: {
              width: 0,
              height: 0.1,
            },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 2,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: "#093762",
              fontFamily: FONTS.interMedium,
              fontSize: 14,
            }}
          >
            Thực hiện lại
          </Text>
        </TouchableOpacity>
      </View>

      {/* Button hoàn thành */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 12,
          flex: 0,
          display: "none",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#093762",
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#093762",
            shadowColor: "#101828",
            shadowOffset: {
              width: 0,
              height: 0.1,
            },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: FONTS.interMedium,
              fontSize: 14,
            }}
          >
            Hoàn thành
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
