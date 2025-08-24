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
    <View style={[styles.container, { }]}>

      {/* Header */}
      <View style={{ flex: 0 }}>
        <View style={{ height: 50 }}></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 8,
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
              flex: 1,
              textAlign: "center",
              fontSize: 16,
              fontFamily: FONTS.interMedium,
            }}
          >
            Chấm công GPS
          </Text>
        </View>
      </View>

      {/* Content chấm công */}
      <View style={{ flex: 1, paddingHorizontal: 16, gap: 16, flexDirection: "column" }}>
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
              }}
            >
              Tỉ lệ chấm công đúng giờ trong tháng
            </Text>
            <View style={{ marginTop: 20 }}>
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

      {/* Button hoàn thành */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 12,
          flex: 0,
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
