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
        <View>
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
            style={{ position: "relative", zIndex: 2 }}
          >
            <Path
              d="M18 168.008C18 85.1577 85.1577 18 168 18C250.842 18 318 85.1577 318 168.008C318 250.842 250.842 318.004 168 318.004C85.1577 318.008 18 250.846 18 168.008Z"
              stroke="#F2F4F7"
              strokeWidth="35.0449"
              strokeMiterlimit="10"
              strokeDasharray="3.88 7.76"
            />
          </Svg>
        </View>
        <View style={{ paddingVertical: 68 }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
});
