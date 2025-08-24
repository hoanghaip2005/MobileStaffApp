import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  StatusBar,
} from "react-native";

import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

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
  interRegular: "Inter-Regular",
} as const;

type FaceIDAttendanceScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FaceIDAttendance"
>;

export default function FaceIDAttendanceScreen() {
  const navigation = useNavigation<FaceIDAttendanceScreenNavigationProp>();
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFaceScan = () => {
    setIsScanning(true);
    setScanResult("");

    // Simulate face scanning process
    setTimeout(() => {
      setIsScanning(false);
      const success = Math.random() > 0.3; // 70% success rate for demo

      if (success) {
        setScanResult("success");
        Alert.alert(
          "Chấm công thành công!",
          "FaceID đã được xác thực thành công.",
          [{ text: "OK" }]
        );
      } else {
        setScanResult("failed");
        Alert.alert(
          "Chấm công thất bại",
          "Không thể xác thực FaceID. Vui lòng thử lại.",
          [{ text: "Thử lại", onPress: () => setScanResult("") }]
        );
      }
    }, 3000);
  };

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
            paddingVertical: 16,
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
            Chấm công FaceID
          </Text>
        </View>
      </View>

      {/* Content Scanning FaceID */}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          gap: 16,
          paddingHorizontal: 16,
        }}
      >
        <View style={{ marginBottom: 44 }}>
          <Text
            style={{
              fontFamily: FONTS.interSemiBold,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Xác thực khuôn mặt
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 240,
              height: 240,
              borderRadius: 120,
              backgroundColor: "##D9D9D9",
              position: "absolute",
              zIndex: 1,
            }}
          ></View>
          <Svg
            width="336"
            height="336"
            viewBox="0 0 336 336"
            fill="none"
            style={{ position: "relative", zIndex: 2, display: "none" }}
          >
            <Path
              d="M18 168.008C18 85.1577 85.1577 18 168 18C250.842 18 318 85.1577 318 168.008C318 250.842 250.842 318.004 168 318.004C85.1577 318.008 18 250.846 18 168.008Z"
              stroke="#F2F4F7"
              strokeWidth="35.0449"
              strokeMiterlimit="10"
              strokeDasharray="3.88 7.76"
            />
          </Svg>
          <Svg
            width="336"
            height="336"
            viewBox="0 0 336 336"
            fill="none"
            style={{ position: "relative", zIndex: 2 }}
          >
            <Path
              d="M18 168.008C18 85.1577 85.1577 18 168 18C250.842 18 318 85.1577 318 168.008C318 250.842 250.842 318.004 168 318.004C85.1577 318.008 18 250.846 18 168.008Z"
              stroke="url(#paint0_linear_125_872)"
              strokeWidth="35.0449"
              strokeMiterlimit="10"
              strokeDasharray="3.88 7.76"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_125_872"
                x1="243"
                y1="18"
                x2="98.5525"
                y2="318.002"
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#00E1E1" />
                <Stop offset="1" stopColor="#24BABB" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
        {/* Process Scanning */}
        <View style={{ paddingVertical: 68, display: "none" }}>
          <Text
            style={{
              fontFamily: FONTS.interRegular,
              fontSize: 14,
              color: "#6C737F",
              textAlign: "center",
            }}
          >
            Đang quét khuôn mặt...
          </Text>
        </View>

        {/* Notification Success */}

        <View style={{ paddingVertical: 68, gap: 10 }}>
          <View style={{ gap: 6 }}>
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
              <Text
                style={{
                  fontFamily: FONTS.interSemiBold,
                  fontSize: 16,
                  color: "#111927",
                }}
              >
                Thành công
              </Text>
            </View>
            <Text
              style={{
                fontFamily: FONTS.interMedium,
                fontSize: 14,
                color: "#667085",
                textAlign: "center",
              }}
            >
              Bạn đã chấm công thành công lúc 08:00
            </Text>
          </View>
          <Text
            style={{
              fontFamily: FONTS.interSemiBold,
              fontSize: 16,
              color: "#111927",
              textAlign: "center",
            }}
          >
            Chúc bạn một ca làm tốt!
          </Text>
        </View>
      </View>

      {/* Bottom Button Container */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 20,
          paddingTop: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#D0D5DD",
            shadowColor: "#101828",
            shadowOffset: {
              width: 0,
              height: 0.1,
            },
            shadowOpacity: 0.01,
            shadowRadius: 1,
            elevation: 1,
            display: "none",
          }}
        >
          <Text
            style={{
              color: "#344054",
              fontFamily: FONTS.interMedium,
              fontSize: 14,
            }}
          >
            Hủy
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nút xem nhiệm vụ hôm nay */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 20,
          paddingTop: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#093762",
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "##093762",
            shadowColor: "#101828",
            shadowOffset: {
              width: 0,
              height: 0.1,
            },
            shadowOpacity: 0.01,
            shadowRadius: 1,
            elevation: 1,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: FONTS.interMedium,
              fontSize: 14,
            }}
          >
            Xem nhiệm vụ hôm nay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
});
