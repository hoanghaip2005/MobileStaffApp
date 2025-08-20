import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image } from "react-native";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Rect,
} from "react-native-svg";

interface DashboardScreenProps {
  // Add any props you need here
}

// Constants
const COLORS = {
  primary: "#00D6D6",
  primaryDark: "#007D7D",
  secondary: "#004747",
  secondaryLight: "#214848",
  white: "#FFFFFF",
  notification: "#FF4444",
  purple: "#5E27FD",
} as const;

const FONTS = {
  inter: "Inter",
  lexend: "Lexend",
} as const;

const SIZES = {
  screenWidth: 430,
  headerHeight: 221,
  nestedCirclesWidth: 215,
  nestedCirclesHeight: 164,
} as const;

// Reusable styles
const commonTextStyle = {
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0,
} as const;

const titleTextStyle = {
  ...commonTextStyle,
  color: COLORS.white,
  fontFamily: FONTS.inter,
  fontWeight: "400" as const,
} as const;

const boldTextStyle = {
  fontWeight: "800" as const,
} as const;

// Frame styles
const styles = {
  frameContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 0,
  },
  frameContainerShadowA: {
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#101828",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.01, // 6%
    shadowRadius: 1, // blur 2
    elevation: 1,
  },
  frameContainerShadowB: {
    borderRadius: 12,
    shadowColor: "#101828",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.01, // 10%
    shadowRadius: 1, // blur 3
    elevation: 1,
  },
  frameItem: {
    marginBottom: 16,
  },
  frameHeader: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    marginBottom: 4,
  },
  frameTitle: {
    fontSize: 14,
    fontFamily: FONTS.inter,
    color: "#667085",
    fontWeight: "500" as const,
  },
  frameTitleSmall: {
    fontSize: 14,
    fontFamily: FONTS.inter,
    color: "#111927",
    fontWeight: "400" as const,
  },
  frameTitleBold: {
    fontSize: 16,
    fontFamily: FONTS.inter,
    color: "#111927",
    fontWeight: "700" as const,
  },
  titleHref: {
    fontSize: 14,
    fontFamily: FONTS.inter,
    color: "#3B76DA",
    fontWeight: "600" as const,
  },
  collapseIcon: {
    fontSize: 10,
    color: "#999",
    marginLeft: 8,
  },
  hashIcon: {
    fontSize: 14,
    color: "#007D7D",
    fontWeight: "bold" as const,
    marginRight: 8,
  },
  menuText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 16,
    marginBottom: 2,
  },
  vectorDivider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 8,
    marginLeft: 16,
  },
  moodIconsContainer: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    marginLeft: 16,
    gap: 8,
  },
  moodIcon: {
    fontSize: 24,
  },
  marginRight12: {
    marginRight: 12,
  },
  titleCheckBox: {
    fontSize: 14,
    color: "#344054",
    fontFamily: FONTS.inter,
    fontWeight: 400,
    lineHeight: 20,
    marginLeft: 8,
  },
  titleDark900: {
    fontSize: 18,
    color: "#1C4D4D",
    fontFamily: FONTS.inter,
    fontWeight: 600,
    lineHeight: 28,
  },
  title900Dark: {
    fontSize: 18,
    color: "#1C4D4D",
    fontFamily: FONTS.inter,
    fontWeight: 900,
    lineHeight: 20,
  }
} as const;

// SVG Components
const HeaderBackground = () => (
  <Svg
    width={SIZES.screenWidth}
    height={SIZES.headerHeight}
    viewBox="0 0 430 221"
    style={{ position: "absolute", top: 0, left: 0 }}
  >
    <Defs>
      <LinearGradient
        id="paint0_linear_1_860"
        x1="266.5"
        y1="14"
        x2="93"
        y2="220.5"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={COLORS.primary} />
        <Stop offset="1" stopColor={COLORS.primaryDark} />
      </LinearGradient>
    </Defs>
    <Path
      d="M365.403 163.563C648.942 233.127 330.079 -299.741 241.88 -347.865C153.68 -395.988 21.4679 -323.727 -53.4252 -186.465C-128.318 -49.2037 -72.6708 163.538 15.5285 211.662C103.728 259.785 111.854 101.357 365.403 163.563Z"
      fill="url(#paint0_linear_1_860)"
    />
  </Svg>
);

const NestedCircles = () => (
  <Svg
    width={SIZES.nestedCirclesWidth}
    height={SIZES.nestedCirclesHeight}
    viewBox="0 0 215 164"
    style={{ position: "absolute", top: 0, left: 0 }}
  >
    <Defs>
      <LinearGradient
        id="paint0_linear_1_861"
        x1="-0.54727"
        y1="-14.6342"
        x2="-26.7667"
        y2="164.574"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={COLORS.secondary} />
        <Stop offset="1" stopColor={COLORS.secondaryLight} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_861"
        x1="-0.54727"
        y1="-14.6342"
        x2="-26.7667"
        y2="164.574"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={COLORS.secondary} />
        <Stop offset="1" stopColor={COLORS.secondaryLight} />
      </LinearGradient>
    </Defs>
    <Path
      d="M212.72 40.3641C200.58 89.1342 141.718 121.498 81.2481 112.651C20.7778 103.804 -18.4019 57.0955 -6.26228 8.32541C5.87737 -40.4447 64.7394 -72.8085 125.21 -63.9613C185.68 -55.1141 224.86 -8.406 212.72 40.3641Z"
      fill="url(#paint0_linear_1_861)"
      fillOpacity="0.1"
    />
    <Path
      d="M86.9631 89.6912C74.8235 138.461 15.9615 170.825 -44.5088 161.978C-104.979 153.131 -144.159 106.423 -132.019 57.6526C-119.88 8.88245 -61.0176 -23.4814 -0.547278 -14.6342C59.923 -5.78691 99.1028 40.9211 86.9631 89.6912Z"
      fill="url(#paint1_linear_1_861)"
      fillOpacity="0.1"
    />
  </Svg>
);

const NotificationIcon = () => (
  <View style={{ position: "relative" }}>
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M19.4422 12.5782L18.601 13.119V13.119L19.4422 12.5782ZM20.5496 14.3012L21.3909 13.7604L20.5496 14.3012ZM3.45036 14.3012L2.60915 13.7604H2.60915L3.45036 14.3012ZM4.5578 12.5782L5.39901 13.119L4.5578 12.5782ZM19.0296 18.5116L18.7575 17.5493H18.7575L19.0296 18.5116ZM4.97036 18.5116L5.24255 17.5493H5.24255L4.97036 18.5116ZM8.35179 20.7418L8.48606 19.7509C8.0824 19.6962 7.68591 19.8918 7.4837 20.2454C7.28149 20.5991 7.31398 21.04 7.56584 21.3601L8.35179 20.7418ZM15.6482 20.7418L16.4342 21.3601C16.686 21.04 16.7185 20.5991 16.5163 20.2454C16.3141 19.8918 15.9176 19.6962 15.514 19.7509L15.6482 20.7418ZM18.7491 9.5H17.7491V10.2041H18.7491H19.7491V9.5H18.7491ZM19.4422 12.5782L18.601 13.119L19.7084 14.8419L20.5496 14.3012L21.3909 13.7604L20.2834 12.0375L19.4422 12.5782ZM3.45036 14.3012L4.29157 14.8419L5.39901 13.119L4.5578 12.5782L3.71659 12.0375L2.60915 13.7604L3.45036 14.3012ZM5.25087 10.2041H6.25087V9.5H5.25087H4.25087V10.2041H5.25087ZM19.0296 18.5116L18.7575 17.5493C14.333 18.8008 9.66696 18.8008 5.24255 17.5493L4.97036 18.5116L4.69818 19.4738C9.47852 20.826 14.5215 20.826 19.3018 19.4738L19.0296 18.5116ZM4.5578 12.5782L5.39901 13.119C5.9558 12.2527 6.25087 11.2386 6.25087 10.2041H5.25087H4.25087C4.25087 10.8596 4.06363 11.4976 3.71659 12.0375L4.5578 12.5782ZM18.7491 10.2041H17.7491C17.7491 11.2386 18.0442 12.2527 18.601 13.119L19.4422 12.5782L20.2834 12.0375C19.9364 11.4976 19.7491 10.8596 19.7491 10.2041H18.7491ZM3.45036 14.3012L2.60915 13.7604C1.25333 15.8698 2.25945 18.784 4.69818 19.4738L4.97036 18.5116L5.24255 17.5493C4.16264 17.2438 3.62432 15.8799 4.29157 14.8419L3.45036 14.3012ZM20.5496 14.3012L19.7084 14.8419C20.3757 15.8799 19.8374 17.2438 18.7575 17.5493L19.0296 18.5116L19.3018 19.4738C21.7405 18.784 22.7467 15.8698 21.3909 13.7604L20.5496 14.3012ZM12 2.5V3.5C15.1411 3.5 17.7491 6.15158 17.7491 9.5H18.7491H19.7491C19.7491 5.11643 16.3138 1.5 12 1.5V2.5ZM12 2.5V1.5C7.68619 1.5 4.25087 5.11643 4.25087 9.5H5.25087H6.25087C6.25087 6.15158 8.85893 3.5 12 3.5V2.5ZM8.35179 20.7418L7.56584 21.3601C8.5915 22.6639 10.1995 23.5 12 23.5V22.5V21.5C10.8289 21.5 9.79426 20.9581 9.13774 20.1236L8.35179 20.7418ZM8.35179 20.7418L8.21752 21.7328C10.7284 22.073 13.2716 22.073 15.7825 21.7328L15.6482 20.7418L15.514 19.7509C13.1813 20.067 10.8187 20.067 8.48606 19.7509L8.35179 20.7418ZM12 22.5V23.5C13.8005 23.5 15.4085 22.6639 16.4342 21.3601L15.6482 20.7418L14.8623 20.1236C14.2057 20.9581 13.1711 21.5 12 21.5V22.5Z"
        fill={COLORS.white}
      />
    </Svg>
    <View
      style={{
        position: "absolute",
        top: 5,
        right: -1,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.notification,
      }}
    />
  </View>
);

// Circular countdown timer with progress ring and centered time text
const CountdownTimer = ({
  size = 48,
  strokeWidth = 4,
  progress = 0.5, // 0..1
  timeText = "40:00",
}: {
  size?: number;
  strokeWidth?: number;
  progress?: number;
  timeText?: string;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const dashOffset = circumference * (1 - clampedProgress);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        {/* Track */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E6E6E6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={COLORS.purple}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
          fill="none"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "600", color: "#333" }}>
          {timeText}
        </Text>
      </View>
    </View>
  );
};

// Simple feature card used in feature sections
const FeatureCard = ({
  title,
  emoji,
  icon,
  testID,
}: {
  title: string;
  emoji?: string;
  icon?: React.ReactNode;
  testID?: string;
}) => (
  <View testID={testID} style={featureStyles.cardShadowA}>
    <View style={featureStyles.cardShadowB}>
      <View style={featureStyles.card}>
        {icon ? (
          <View>{icon}</View>
        ) : (
          <Text style={featureStyles.icon}>{emoji}</Text>
        )}
        <Text style={featureStyles.title}>{title}</Text>
      </View>
    </View>
  </View>
);

// Icons
const SalaryIcon = () => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
    <Defs>
      <LinearGradient
        id="salary_p0"
        x1={17}
        y1={2.5}
        x2={7.37037}
        y2={22.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset={1} stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="salary_p1"
        x1={12.75}
        y1={17.5}
        x2={12.2685}
        y2={18.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset={1} stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="salary_p2"
        x1={12.75}
        y1={6.5}
        x2={12.2685}
        y2={7.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset={1} stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="salary_p3"
        x1={13.5}
        y1={7.5}
        x2={7.48706}
        y2={14.993}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset={1} stopColor="#24BABB" />
      </LinearGradient>
    </Defs>
    <Circle
      cx={12}
      cy={12.5}
      r={10}
      stroke="url(#salary_p0)"
      strokeWidth={1.5}
    />
    <Path
      d="M12 17.5V18V18.5"
      stroke="url(#salary_p1)"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 6.5V7V7.5"
      stroke="url(#salary_p2)"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 10C15 8.61929 13.6569 7.5 12 7.5C10.3431 7.5 9 8.61929 9 10C9 11.3807 10.3431 12.5 12 12.5C13.6569 12.5 15 13.6193 15 15C15 16.3807 13.6569 17.5 12 17.5C10.3431 17.5 9 16.3807 9 15"
      stroke="url(#salary_p3)"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

const KPIIcon = () => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Path
      d="M13.75 10.5C13.75 10.9142 14.0858 11.25 14.5 11.25H15.1893L13.1768 13.2626C13.0791 13.3602 12.9209 13.3602 12.8232 13.2626L11.2374 11.6768C10.554 10.9934 9.44598 10.9934 8.76256 11.6768L6.46967 13.9697C6.17678 14.2626 6.17678 14.7374 6.46967 15.0303C6.76256 15.3232 7.23744 15.3232 7.53033 15.0303L9.82322 12.7374C9.92085 12.6398 10.0791 12.6398 10.1768 12.7374L11.7626 14.3232C12.446 15.0066 13.554 15.0066 14.2374 14.3232L16.25 12.3107V13C16.25 13.4142 16.5858 13.75 17 13.75C17.4142 13.75 17.75 13.4142 17.75 13V10.5C17.75 10.0858 17.4142 9.75 17 9.75H14.5C14.0858 9.75 13.75 10.0858 13.75 10.5Z"
      fill="url(#paint0_linear_2_57)"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9426 1.75C9.63423 1.74999 7.82519 1.74998 6.41371 1.93975C4.96897 2.13399 3.82895 2.53933 2.93414 3.43414C2.03933 4.32895 1.63399 5.46897 1.43975 6.91371C1.24998 8.32519 1.24999 10.1342 1.25 12.4426V12.5574C1.24999 14.8658 1.24998 16.6748 1.43975 18.0863C1.63399 19.531 2.03933 20.6711 2.93414 21.5659C3.82895 22.4607 4.96897 22.866 6.41371 23.0603C7.82519 23.25 9.63423 23.25 11.9426 23.25H12.0574C14.3658 23.25 16.1748 23.25 17.5863 23.0603C19.031 22.866 20.1711 22.4607 21.0659 21.5659C21.9607 20.6711 22.366 19.531 22.5603 18.0863C22.75 16.6748 22.75 14.8658 22.75 12.5574V12.4426C22.75 10.1342 22.75 8.32519 22.5603 6.91371C22.366 5.46897 21.9607 4.32895 21.0659 3.43414C20.1711 2.53933 19.031 2.13399 17.5863 1.93975C16.1748 1.74998 14.3658 1.74999 12.0574 1.75H11.9426ZM3.9948 4.4948C4.56445 3.92514 5.33517 3.59825 6.61358 3.42637C7.91356 3.25159 9.62178 3.25 12 3.25C14.3782 3.25 16.0864 3.25159 17.3864 3.42637C18.6648 3.59825 19.4355 3.92514 20.0052 4.4948C20.5749 5.06445 20.9018 5.83517 21.0736 7.11358C21.2484 8.41356 21.25 10.1218 21.25 12.5C21.25 14.8782 21.2484 16.5864 21.0736 17.8864C20.9018 19.1648 20.5749 19.9355 20.0052 20.5052C19.4355 21.0749 18.6648 21.4018 17.3864 21.5736C16.0864 21.7484 14.3782 21.75 12 21.75C9.62178 21.75 7.91356 21.7484 6.61358 21.5736C5.33517 21.4018 4.56445 21.0749 3.9948 20.5052C3.42514 19.9355 3.09825 19.1648 2.92637 17.8864C2.75159 16.5864 2.75 14.8782 2.75 12.5C2.75 10.1218 2.75159 8.41356 2.92637 7.11358C3.09825 5.83517 3.42514 5.06445 3.9948 4.4948Z"
      fill="url(#paint1_linear_2_57)"
    />
    <Path
      d="M13.75 10.5C13.75 10.9142 14.0858 11.25 14.5 11.25H15.1893L13.1768 13.2626C13.0791 13.3602 12.9209 13.3602 12.8232 13.2626L11.2374 11.6768C10.554 10.9934 9.44598 10.9934 8.76256 11.6768L6.46967 13.9697C6.17678 14.2626 6.17678 14.7374 6.46967 15.0303C6.76256 15.3232 7.23744 15.3232 7.53033 15.0303L9.82322 12.7374C9.92085 12.6398 10.0791 12.6398 10.1768 12.7374L11.7626 14.3232C12.446 15.0066 13.554 15.0066 14.2374 14.3232L16.25 12.3107V13C16.25 13.4142 16.5858 13.75 17 13.75C17.4142 13.75 17.75 13.4142 17.75 13V10.5C17.75 10.0858 17.4142 9.75 17 9.75H14.5C14.0858 9.75 13.75 10.0858 13.75 10.5Z"
      stroke="url(#paint2_linear_2_57)"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9426 1.75C9.63423 1.74999 7.82519 1.74998 6.41371 1.93975C4.96897 2.13399 3.82895 2.53933 2.93414 3.43414C2.03933 4.32895 1.63399 5.46897 1.43975 6.91371C1.24998 8.32519 1.24999 10.1342 1.25 12.4426V12.5574C1.24999 14.8658 1.24998 16.6748 1.43975 18.0863C1.63399 19.531 2.03933 20.6711 2.93414 21.5659C3.82895 22.4607 4.96897 22.866 6.41371 23.0603C7.82519 23.25 9.63423 23.25 11.9426 23.25H12.0574C14.3658 23.25 16.1748 23.25 17.5863 23.0603C19.031 22.866 20.1711 22.4607 21.0659 21.5659C21.9607 20.6711 22.366 19.531 22.5603 18.0863C22.75 16.6748 22.75 14.8658 22.75 12.5574V12.4426C22.75 10.1342 22.75 8.32519 22.5603 6.91371C22.366 5.46897 21.9607 4.32895 21.0659 3.43414C20.1711 2.53933 19.031 2.13399 17.5863 1.93975C16.1748 1.74998 14.3658 1.74999 12.0574 1.75H11.9426ZM3.9948 4.4948C4.56445 3.92514 5.33517 3.59825 6.61358 3.42637C7.91356 3.25159 9.62178 3.25 12 3.25C14.3782 3.25 16.0864 3.25159 17.3864 3.42637C18.6648 3.59825 19.4355 3.92514 20.0052 4.4948C20.5749 5.06445 20.9018 5.83517 21.0736 7.11358C21.2484 8.41356 21.25 10.1218 21.25 12.5C21.25 14.8782 21.2484 16.5864 21.0736 17.8864C20.9018 19.1648 20.5749 19.9355 20.0052 20.5052C19.4355 21.0749 18.6648 21.4018 17.3864 21.5736C16.0864 21.7484 14.3782 21.75 12 21.75C9.62178 21.75 7.91356 21.7484 6.61358 21.5736C5.33517 21.4018 4.56445 21.0749 3.9948 20.5052C3.42514 19.9355 3.09825 19.1648 2.92637 17.8864C2.75159 16.5864 2.75 14.8782 2.75 12.5C2.75 10.1218 2.75159 8.41356 2.92637 7.11358C3.09825 5.83517 3.42514 5.06445 3.9948 4.4948Z"
      stroke="url(#paint3_linear_2_57)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2_57"
        x1="17.375"
        y1="1.75"
        x2="7.02315"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2_57"
        x1="17.375"
        y1="1.75"
        x2="7.02315"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_2_57"
        x1="17.375"
        y1="1.75"
        x2="7.02315"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_2_57"
        x1="17.375"
        y1="1.75"
        x2="7.02315"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const WindowIcon = () => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
    <Defs>
      <LinearGradient
        id="window_p0"
        x1={16.5455}
        y1={2.5}
        x2={6.35558}
        y2={21.7396}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset={1} stopColor="#24BABB" />
      </LinearGradient>
    </Defs>
    <Path
      d="M19.2727 11.5909H4.72727V17.2274C4.72727 18.006 4.72759 18.5353 4.76101 18.9444C4.79357 19.343 4.8528 19.5471 4.92525 19.6893L4.99538 19.8145C5.17006 20.0992 5.42051 20.3313 5.71981 20.4838L5.84055 20.5353C5.97652 20.584 6.16593 20.6237 6.46466 20.6481C6.87379 20.6815 7.4031 20.6818 8.18164 20.6818H15.8184C16.5969 20.6818 17.1262 20.6815 17.5353 20.6481C17.9339 20.6155 18.138 20.5563 18.2802 20.4838L18.4054 20.4137C18.6901 20.239 18.9222 19.9886 19.0747 19.6893L19.1262 19.5685C19.1749 19.4326 19.2146 19.2432 19.239 18.9444C19.2724 18.5353 19.2727 18.006 19.2727 17.2274V11.5909ZM14.7273 7.04545V6.13636H9.27273V7.04545C9.27273 7.54753 8.86571 7.95455 8.36363 7.95455C7.86156 7.95455 7.45454 7.54753 7.45454 7.04545V6.13903C7.04958 6.14187 6.73154 6.1483 6.46466 6.1701C6.16593 6.19451 5.97652 6.2342 5.84055 6.28285L5.71981 6.33434C5.42051 6.48686 5.17006 6.71895 4.99538 7.00373L4.92525 7.12891C4.8528 7.27109 4.79357 7.4752 4.76101 7.87376C4.72759 8.28288 4.72727 8.81219 4.72727 9.59073V9.77273H19.2727V9.59073C19.2727 8.81219 19.2724 8.28288 19.239 7.87376C19.2146 7.57503 19.1749 7.38562 19.1262 7.24964L19.0747 7.12891C18.9222 6.8296 18.6901 6.57915 18.4054 6.40447L18.2802 6.33434C18.138 6.26189 17.9339 6.20266 17.5353 6.1701C17.2685 6.1483 16.9504 6.14187 16.5455 6.13903V7.04545C16.5455 7.54753 16.1384 7.95455 15.6364 7.95455C15.1343 7.95455 14.7273 7.54753 14.7273 7.04545ZM21.0909 17.2274C21.0909 17.9761 21.0918 18.5923 21.051 19.0927C21.0144 19.5398 20.9414 19.9555 20.7731 20.348L20.695 20.5149C20.3899 21.1135 19.9257 21.6144 19.3562 21.9638L19.1058 22.104C18.6646 22.3288 18.1946 22.4183 17.6836 22.46C17.1832 22.5009 16.567 22.5 15.8184 22.5H8.18164C7.43301 22.5 6.81675 22.5009 6.3164 22.46C5.86927 22.4235 5.45356 22.3505 5.06108 22.1822L4.89417 22.104C4.29557 21.799 3.79467 21.3348 3.44531 20.7653L3.30504 20.5149C3.08025 20.0737 2.99079 19.6036 2.94904 19.0927C2.90816 18.5923 2.90909 17.9761 2.90909 17.2274V9.59073C2.90909 8.8421 2.90816 8.22584 2.94904 7.7255C2.99079 7.21454 3.08025 6.74445 3.30504 6.30327L3.44531 6.05291C3.79467 5.48336 4.29557 5.01918 4.89417 4.71413L5.06108 4.63601C5.45356 4.46765 5.86927 4.39467 6.3164 4.35813C6.64441 4.33133 7.02231 4.32382 7.45454 4.32085V3.40909C7.45454 2.90701 7.86156 2.5 8.36363 2.5C8.86571 2.5 9.27273 2.90701 9.27273 3.40909V4.31818H14.7273V3.40909C14.7273 2.90701 15.1343 2.5 15.6364 2.5C16.1384 2.5 16.5455 2.90701 16.5455 3.40909V4.32085C16.9777 4.32382 17.3556 4.33133 17.6836 4.35813C18.1946 4.39989 18.6646 4.48934 19.1058 4.71413L19.3562 4.8544C19.9257 5.20376 20.3899 5.70466 20.695 6.30327L20.7731 6.47017C20.9414 6.86266 21.0144 7.27836 21.051 7.7255C21.0918 8.22584 21.0909 8.8421 21.0909 9.59073V17.2274Z"
      fill="url(#window_p0)"
    />
  </Svg>
);

const ChartIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0494 1.25H11.9506C11.2858 1.24997 10.7129 1.24994 10.2542 1.31161C9.76252 1.37771 9.29126 1.52677 8.90901 1.90901C8.52676 2.29126 8.3777 2.76252 8.31161 3.25416C8.24993 3.7129 8.24996 4.28577 8.25 4.95063L8.25 7.37804C8.01542 7.29512 7.76298 7.25001 7.5 7.25001H4.5C3.25736 7.25001 2.25 8.25737 2.25 9.50001V21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H21.75V14.5C21.75 13.2574 20.7426 12.25 19.5 12.25H16.5C16.237 12.25 15.9846 12.2951 15.75 12.378L15.75 4.95064C15.75 4.28577 15.7501 3.71291 15.6884 3.25416C15.6223 2.76252 15.4732 2.29126 15.091 1.90902C14.7087 1.52677 14.2375 1.37771 13.7458 1.31161C13.2871 1.24994 12.7142 1.24997 12.0494 1.25ZM20.25 21.25V14.5C20.25 14.0858 19.9142 13.75 19.5 13.75H16.5C16.0858 13.75 15.75 14.0858 15.75 14.5V21.25H20.25ZM14.25 21.25V5.00001C14.25 4.2717 14.2484 3.80091 14.2018 3.45403C14.158 3.12873 14.0874 3.02677 14.0303 2.96967C13.9732 2.91258 13.8713 2.84197 13.546 2.79823C13.1991 2.7516 12.7283 2.75001 12 2.75001C11.2717 2.75001 10.8009 2.7516 10.454 2.79823C10.1287 2.84197 10.0268 2.91258 9.96967 2.96968C9.91258 3.02677 9.84197 3.12873 9.79823 3.45403C9.75159 3.80091 9.75 4.2717 9.75 5.00001V21.25H14.25ZM8.25 21.25V9.50001C8.25 9.08579 7.91421 8.75001 7.5 8.75001H4.5C4.08579 8.75001 3.75 9.08579 3.75 9.50001V21.25H8.25Z"
      fill="url(#paint0_linear_2_62)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2_62"
        x1="17.375"
        y1="1.25"
        x2="7.02315"
        y2="22.75"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const RocketIcon = () => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Path
      d="M3.00297 12.8565C3.29568 13.1496 3.29539 13.6244 3.00232 13.9171L2.84853 14.0708C2.71716 14.202 2.71716 14.4143 2.84853 14.5455C2.9804 14.6772 3.19458 14.6772 3.32646 14.5455L5.0182 12.8558C5.31127 12.5631 5.78614 12.5634 6.07886 12.8565C6.37157 13.1496 6.37128 13.6244 6.07821 13.9171L4.38647 15.6068C3.66896 16.3235 2.50602 16.3235 1.78851 15.6068C1.0705 14.8897 1.0705 13.7266 1.78851 13.0094L1.94231 12.8558C2.23538 12.5631 2.71025 12.5634 3.00297 12.8565Z"
      fill="url(#paint0_linear_1_899)"
    />
    <Path
      d="M7.85705 13.8528C8.14994 14.1456 8.14994 14.6205 7.85705 14.9134L5.74014 17.0303C5.44725 17.3232 4.97238 17.3232 4.67948 17.0303C4.38659 16.7374 4.38659 16.2626 4.67948 15.9697L6.79639 13.8528C7.08928 13.5599 7.56415 13.5599 7.85705 13.8528Z"
      fill="url(#paint1_linear_1_899)"
    />
    <Path
      d="M10.6328 16.6251C10.9257 16.918 10.9257 17.3929 10.6328 17.6857L8.53033 19.7882C8.23744 20.0811 7.76256 20.0811 7.46967 19.7882C7.17678 19.4953 7.17678 19.0204 7.46967 18.7275L9.5721 16.6251C9.86499 16.3322 10.3399 16.3322 10.6328 16.6251Z"
      fill="url(#paint2_linear_1_899)"
    />
    <Path
      d="M7.47223 17.0209C7.76184 17.3171 7.75656 17.7919 7.46042 18.0815L5.75085 19.7535C5.45472 20.0431 4.97987 20.0378 4.69026 19.7417C4.40064 19.4455 4.40592 18.9707 4.70206 18.6811L6.41163 17.0091C6.70777 16.7195 7.18261 16.7248 7.47223 17.0209Z"
      fill="url(#paint3_linear_1_899)"
    />
    <Path
      d="M11.6063 18.4261C11.8991 18.7192 11.8988 19.194 11.6057 19.4868L9.91396 21.1764C9.78259 21.3076 9.78259 21.52 9.91396 21.6512C10.0458 21.7829 10.26 21.7829 10.3919 21.6512L10.5457 21.4976C10.8388 21.2049 11.3136 21.2052 11.6063 21.4982C11.8991 21.7913 11.8988 22.2662 11.6057 22.5589L11.4519 22.7125C10.7344 23.4291 9.57145 23.4291 8.85394 22.7125C8.13593 21.9954 8.13593 20.8323 8.85394 20.1151L10.5457 18.4254C10.8388 18.1327 11.3136 18.133 11.6063 18.4261Z"
      fill="url(#paint4_linear_1_899)"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.992 1.74993L18.1257 1.74999L18.6709 1.74999C19.4245 1.74995 20.064 1.74992 20.5742 1.81822C21.1169 1.89088 21.6242 2.05294 22.0343 2.46136C22.4449 2.87022 22.6082 3.37662 22.6814 3.91856C22.7501 4.42719 22.75 5.06462 22.75 5.81453L22.75 6.358L22.7501 6.49192C22.7506 7.3929 22.7511 8.05265 22.4995 8.65733C22.2482 9.26169 21.7798 9.72745 21.1396 10.3642L21.0445 10.4588L18.7785 12.7152L18.8178 12.7758C19.1587 13.3016 19.4379 13.7323 19.64 14.1047C19.8504 14.4924 20.0034 14.8623 20.0648 15.2748C20.1625 15.9308 20.0741 16.6045 19.8157 17.2227C19.7171 17.4586 19.549 17.701 19.3822 17.9158C19.2064 18.1423 18.9922 18.388 18.7635 18.6369C18.3085 19.132 17.7629 19.6754 17.2803 20.156L17.2733 20.163L17.2001 20.2358C16.5258 20.9073 15.356 20.6912 14.9951 19.7871C14.7962 19.2888 14.7185 19.0975 14.6218 18.9213C14.5313 18.7567 14.4276 18.5996 14.3115 18.4517C14.1891 18.2957 14.0459 18.1508 13.6778 17.7842L13.2548 17.4137C13.1838 17.4213 13.1119 17.4252 13.0389 17.4252C12.46 17.4252 11.9864 17.183 11.5504 16.8518C11.1409 16.5407 10.6885 16.0901 10.1559 15.5596L8.88948 14.2986C8.35683 13.7683 7.90436 13.3177 7.5919 12.9099C7.25931 12.4758 7.01482 12.0027 7.01482 11.4233C7.01482 11.3359 7.02042 11.2501 7.03134 11.1657L6.34386 10.4812C6.30157 10.439 6.28523 10.4228 6.26917 10.4072C5.95301 10.1008 5.58096 9.85708 5.17285 9.68915C5.15212 9.68061 5.13067 9.67211 5.07507 9.6501L4.74565 9.51973C3.79897 9.14507 3.54286 7.92322 4.26681 7.20234L4.27379 7.19538C4.75643 6.71478 5.30208 6.17144 5.79928 5.71843C6.04927 5.49065 6.29596 5.27745 6.52336 5.10239C6.73915 4.93627 6.98217 4.76916 7.21827 4.67132C7.83797 4.41451 8.51283 4.32678 9.1698 4.42375C9.5826 4.48468 9.95325 4.63658 10.3423 4.84599C10.7162 5.0472 11.1486 5.32517 11.6768 5.66472L11.7425 5.70696L14.012 3.447L14.1066 3.35281C14.7465 2.71474 15.2139 2.24873 15.8199 1.99877C16.4256 1.74894 17.0864 1.74936 17.992 1.74993ZM17.6921 13.797C17.9734 14.2322 18.1754 14.5507 18.3217 14.8203C18.4875 15.1258 18.5554 15.3222 18.5812 15.4956C18.6374 15.873 18.5878 16.2708 18.4317 16.6443C18.4128 16.6897 18.3465 16.8038 18.1974 16.9959C18.0573 17.1764 17.8739 17.3881 17.6589 17.622C17.2539 18.0628 16.7662 18.5509 16.3015 19.0138C16.1635 18.6696 16.0627 18.429 15.9366 18.1993C15.8068 17.9631 15.658 17.7378 15.4916 17.5257C15.3039 17.2865 15.0892 17.0727 14.7525 16.7376L14.7163 16.7015C14.75 16.6734 14.7836 16.6449 14.8171 16.6161C15.1468 16.3317 15.516 15.964 15.9405 15.5412L17.6921 13.797ZM18.1257 3.24999C17.0287 3.24999 16.6883 3.26317 16.3919 3.38544C16.0958 3.50758 15.8462 3.73742 15.0705 4.5099L9.98374 9.57519C9.54925 10.0079 9.22322 10.333 8.97823 10.6123C8.73189 10.8931 8.6135 11.0773 8.55796 11.2153C8.52633 11.2938 8.51482 11.3585 8.51482 11.4233C8.51482 11.5409 8.55194 11.6966 8.78258 11.9976C9.02638 12.3158 9.40545 12.6955 9.98374 13.2714L10.0519 13.3393L11.3149 12.0816C11.6084 11.7893 12.0833 11.7903 12.3756 12.0839C12.6679 12.3774 12.6669 12.8522 12.3733 13.1445L11.1148 14.3977L11.1785 14.4612C11.7568 15.037 12.1382 15.4145 12.4578 15.6574C12.76 15.887 12.9179 15.9252 13.0389 15.9252C13.1008 15.9252 13.1612 15.915 13.2315 15.8892C13.3677 15.8391 13.5518 15.7266 13.8373 15.4802C14.1217 15.235 14.4536 14.9051 14.8994 14.4612L19.9861 9.39587C20.7622 8.62303 20.9924 8.37497 21.1146 8.08123C21.2366 7.78784 21.25 7.45104 21.25 6.358L21.25 5.86518C21.25 5.05071 21.2484 4.51561 21.1949 4.11927C21.1443 3.74482 21.0602 3.60822 20.9759 3.52426C20.8911 3.43986 20.7527 3.3555 20.3751 3.30496C19.9763 3.25157 19.4382 3.24999 18.6206 3.24999H18.1257ZM18.3474 6.13275C17.3949 5.18425 15.8519 5.18425 14.8994 6.13275C13.9451 7.08299 13.9451 8.62495 14.8994 9.57519C15.8519 10.5237 17.3949 10.5237 18.3474 9.57519C19.3016 8.62495 19.3016 7.08299 18.3474 6.13275ZM15.9578 7.19565C16.325 6.82996 16.9217 6.82996 17.289 7.19565C17.6545 7.55959 17.6545 8.14835 17.289 8.5123C16.9217 8.87799 16.325 8.87799 15.9578 8.5123C15.5923 8.14835 15.5923 7.55959 15.9578 7.19565ZM10.6542 6.79069C10.2199 6.51224 9.9013 6.31206 9.63147 6.16684C9.3244 6.00158 9.12633 5.93359 8.95076 5.90767C8.56998 5.85147 8.16887 5.90108 7.79253 6.05704C7.74625 6.07622 7.63125 6.1425 7.43837 6.29099C7.25709 6.43054 7.04446 6.61315 6.80953 6.82721C6.36887 7.22872 5.88119 7.7118 5.41817 8.17269L5.62705 8.25536L5.63208 8.25735C5.68116 8.27677 5.71245 8.28915 5.74367 8.302C6.32744 8.54223 6.86009 8.89109 7.31306 9.33006C7.33737 9.35362 7.36126 9.37742 7.39886 9.41485L7.73886 9.75343C7.77541 9.70973 7.81273 9.66629 7.85067 9.62305C8.13281 9.30146 8.49446 8.94134 8.90924 8.52831L10.6542 6.79069Z"
      fill="url(#paint5_linear_1_899)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_899"
        x1="17.3751"
        y1="1.74988"
        x2="7.02318"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_899"
        x1="17.3751"
        y1="1.74988"
        x2="7.02318"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1_899"
        x1="17.3751"
        y1="1.74988"
        x2="7.02318"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1_899"
        x1="17.3751"
        y1="1.74988"
        x2="7.02318"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1_899"
        x1="17.3751"
        y1="1.74988"
        x2="7.02318"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1_899"
        x1="17.3751"
        y1="1.74988"
        x2="7.02318"
        y2="23.25"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset="1" stopColor="#24BABB" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const ShopIcon = () => (
  <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
    <Defs>
      <LinearGradient
        id="shop_p0"
        x1={16.9394}
        y1={2.5}
        x2={14.6195}
        y2={13.0776}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset={1} stopColor="#24BABB" />
      </LinearGradient>
      <LinearGradient
        id="shop_p1"
        x1={17.375}
        y1={12.3726}
        x2={14.2939}
        y2={25.0211}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00E1E1" />
        <Stop offset={1} stopColor="#24BABB" />
      </LinearGradient>
    </Defs>
    <Path
      d="M16.5276 1.75C17.1136 1.75 17.6102 1.74878 18.0188 1.79102C18.4445 1.83505 18.8384 1.93139 19.2102 2.16113C19.5815 2.39079 19.8428 2.69971 20.0725 3.06055C20.1827 3.23378 20.2938 3.43152 20.4094 3.65137L20.7766 4.37598L20.8029 4.43555L22.2063 7.9834C22.3733 8.40559 22.5584 8.9327 22.6125 9.47168C22.6678 10.0229 22.5922 10.6545 22.1604 11.2021C21.6581 11.839 20.8768 12.2499 20.0002 12.25C19.211 12.25 18.5017 11.9153 18.0002 11.3828C17.4987 11.9154 16.7894 12.2499 16.0002 12.25C15.211 12.25 14.5017 11.9153 14.0002 11.3828C13.4987 11.9154 12.7894 12.2499 12.0002 12.25C11.211 12.25 10.5017 11.9153 10.0002 11.3828C9.49874 11.9154 8.78941 12.2499 8.00021 12.25C7.21103 12.25 6.50172 11.9153 6.00021 11.3828C5.49874 11.9154 4.78941 12.2499 4.00021 12.25C3.12361 12.25 2.34238 11.839 1.84006 11.2021C1.40821 10.6545 1.33166 10.0229 1.38693 9.47168C1.44105 8.93274 1.62618 8.40557 1.79318 7.9834L3.19748 4.43555L3.22385 4.37598C3.48592 3.85183 3.70649 3.40705 3.92697 3.06055C4.15671 2.69951 4.41866 2.39087 4.79025 2.16113C5.16203 1.93136 5.55585 1.83504 5.98166 1.79102C6.39007 1.7488 6.88611 1.75 7.47189 1.75H16.5276Z"
      stroke="url(#shop_p0)"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 21.75H22C22.4142 21.75 22.75 22.0858 22.75 22.5C22.75 22.9142 22.4142 23.25 22 23.25H2C1.58579 23.25 1.25 22.9142 1.25 22.5C1.25 22.0858 1.58579 21.75 2 21.75H4L4 13C4.74363 13 5.43309 12.7681 6 12.3727C6.56692 12.7681 7.25638 13 8 13C8.74363 13 9.43309 12.7681 10 12.3727C10.5669 12.7681 11.2564 13 12 13C12.7436 13 13.4331 12.7681 14 12.3727C14.5669 12.7681 15.2564 13 16 13C16.7436 13 17.4331 12.7681 18 12.3727C18.5669 12.7681 19.2564 13 20 13L20 21.75ZM9.5 21.75H14.5V19C14.5 18.0654 14.5 17.5981 14.299 17.25C14.1674 17.022 13.978 16.8326 13.75 16.7009C13.4019 16.5 12.9346 16.5 12 16.5C11.0654 16.5 10.5981 16.5 10.25 16.7009C10.022 16.8326 9.83261 17.022 9.70096 17.25C9.5 17.5981 9.5 18.0654 9.5 19V21.75Z"
      stroke="url(#shop_p1)"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

const featureStyles = {
  row: {
    flexDirection: "row" as const,
    alignItems: "stretch" as const,
    justifyContent: "space-between" as const,
    gap: 16,
    columnGap: 16,
  },
  cardShadowA: {
    flex: 1,
    borderRadius: 8,
    shadowColor: "#101828",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.01,
    shadowRadius: 1,
    elevation: 1,
  },
  cardShadowB: {
    borderRadius: 8,
    shadowColor: "#101828",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 8,
    gap: 8,
    height: 64,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  icon: {
    fontSize: 24,
    padding: 8,
  },
  title: {
    fontSize: 12,
    fontFamily: FONTS.lexend,
    color: "#002C2C",
    fontWeight: "500" as const,
  },
} as const;

// Checkbox icon component
const CheckboxIcon = ({
  checked = false,
  size = 20,
}: {
  checked?: boolean;
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    {checked ? (
      // Checked state
      <>
        <Rect
          x="2"
          y="2"
          width="16"
          height="16"
          rx="4"
          fill="#3B76DA"
          stroke="#3B76DA"
          strokeWidth="1"
        />
        <Path
          d="M7 10L9 12L13 8"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      // Unchecked state
      <Rect
        x="2"
        y="2"
        width="16"
        height="16"
        rx="4"
        stroke="#D0D5DD"
        strokeWidth="1"
        fill="white"
      />
    )}
  </Svg>
);

export default function DashboardScreen(props: DashboardScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={{ position: "relative" }}>
          {/* Background SVGs */}
          <HeaderBackground />
          <NestedCircles />
          <View style={{ height: 130 }} />

          {/* Header Content */}
          <View
            style={{
              position: "absolute",
              top: 63,
              width: SIZES.screenWidth,
              height: 48,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingHorizontal: 16,
            }}
          >
            {/* User Info Section */}
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 25,
                  backgroundColor: COLORS.white,
                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, color: COLORS.primaryDark }}>
                  HM
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={titleTextStyle}>
                  Chào buổi sáng, <Text style={boldTextStyle}>Hoàng Minh</Text>
                </Text>
                <Text
                  style={{
                    ...titleTextStyle,
                    opacity: 0.9,
                    fontFamily: FONTS.lexend,
                  }}
                >
                  Hôm nay bạn đã làm <Text style={boldTextStyle}>20</Text> ca
                  rồi - tuyệt vời!
                </Text>
              </View>
            </View>

            {/* Notification Icon */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 40,
                width: 40,
                padding: 8,
                marginRight: 16,
              }}
            >
              <NotificationIcon />
            </View>
          </View>

          {/* Frame Menu - cùng cấp với header */}
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            {/* Main Menu Container */}
            <View style={styles.frameContainerShadowA}>
              <View style={styles.frameContainerShadowB}>
                <View style={styles.frameContainer}>
                  {/* Today's Schedule Section */}
                  <View style={styles.frameItem}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <Text style={styles.frameTitle}>Ca hôm nay</Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        {/* Search Icon */}
                        <Svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ marginRight: 8 }}
                        >
                          <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.00748 3.40691C7.68755 1.72684 10.5227 1.85455 11.6925 3.95068L12.3415 5.11361C13.1054 6.48243 12.7799 8.20951 11.6616 9.34148C11.6467 9.36188 11.5678 9.47681 11.5579 9.67763C11.5454 9.93395 11.6364 10.5267 12.5548 11.4452C13.473 12.3633 14.0657 12.4545 14.3221 12.4421C14.5231 12.4323 14.6381 12.3533 14.6585 12.3384C15.7905 11.2201 17.5176 10.8946 18.8864 11.6585L20.0493 12.3075C22.1455 13.4773 22.2732 16.3125 20.5931 17.9925C19.6944 18.8912 18.4995 19.6897 17.0953 19.7429C15.0144 19.8218 11.5592 19.2844 8.13738 15.8626C4.71559 12.4408 4.17821 8.98561 4.2571 6.90468C4.31033 5.50048 5.10882 4.30556 6.00748 3.40691ZM10.3827 4.68167C9.78366 3.60833 8.17397 3.36173 7.06814 4.46757C6.29279 5.24291 5.78873 6.09873 5.75602 6.9615C5.69023 8.69685 6.11867 11.7226 9.19804 14.802C12.2774 17.8813 15.3032 18.3098 17.0385 18.244C17.9013 18.2113 18.7571 17.7072 19.5324 16.9319C20.6383 15.826 20.3917 14.2163 19.3183 13.6173L18.1554 12.9683C17.432 12.5646 16.4159 12.7023 15.7026 13.4156L15.7023 13.4158C15.6323 13.4858 15.1865 13.9018 14.395 13.9403C13.5848 13.9797 12.604 13.6157 11.4942 12.5058C10.384 11.3956 10.0201 10.4146 10.0597 9.60427C10.0985 8.81276 10.5147 8.36716 10.5844 8.2975L10.5844 8.29747C11.2977 7.58415 11.4354 6.56801 11.0317 5.8446L10.3827 4.68167Z"
                            fill="#667085"
                          />
                        </Svg>

                        {/* More Options Icon */}
                        <Svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <Path
                            d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
                            fill="#667085"
                          />
                          <Path
                            d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                            fill="#667085"
                          />
                          <Path
                            d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
                            fill="#667085"
                          />
                          <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.7183 1.65371 15.3445 2.37213 16.7869C2.47933 17.0021 2.50208 17.2219 2.4526 17.4068L1.857 19.6328C1.44927 21.1566 2.84337 22.5507 4.3672 22.143L6.59324 21.5474C6.77814 21.4979 6.99791 21.5207 7.21315 21.6279C8.65553 22.3463 10.2817 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C10.5189 21.25 9.12121 20.9025 7.88191 20.2852C7.38451 20.0375 6.78973 19.9421 6.20553 20.0984L3.97949 20.694C3.57066 20.8034 3.19663 20.4293 3.30602 20.0205L3.90163 17.7945C4.05794 17.2103 3.96254 16.6155 3.7148 16.1181C3.09752 14.8788 2.75 13.4811 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75Z"
                            fill="#667085"
                          />
                        </Svg>
                      </View>
                    </View>

                    {/* Schedule Worker Container */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <Text style={styles.frameTitleBold}>08:00 - 16:00</Text>
                      <Text style={styles.titleHref}>Yêu cầu nhanh</Text>
                    </View>

                    {/* {Weather container} */}
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        style={{ marginRight: 6 }}
                      >
                        <Path
                          d="M11.9841 6.68934C12.4806 6.51593 13.0149 6.42157 13.5714 6.42157C14.117 6.42157 14.6411 6.51223 15.1292 6.67915M5.93013 8.84072C5.70625 8.79728 5.47486 8.77451 5.2381 8.77451C3.26565 8.77451 1.66667 10.3547 1.66667 12.3039C1.66667 13.8843 2.7177 15.222 4.16667 15.6718M5.93013 8.84072C5.73922 8.3315 5.63492 7.78073 5.63492 7.20588C5.63492 4.6069 7.7669 2.5 10.3968 2.5C12.8466 2.5 14.8643 4.32809 15.1292 6.67915M5.93013 8.84072C6.40049 8.93199 6.83774 9.1145 7.22222 9.36884M15.1292 6.67915C16.9941 7.31686 18.3333 9.0676 18.3333 11.1275C18.3333 13.0798 17.1302 14.7545 15.4167 15.467"
                          stroke="#3B76DA"
                          stroke-width="1.25"
                          stroke-linecap="round"
                        />
                        <Path
                          d="M9.16667 16.9444C9.16667 17.7115 8.60702 18.3333 7.91667 18.3333C7.22631 18.3333 6.66667 17.7115 6.66667 16.9444C6.66667 16.5237 7.04269 15.9796 7.38226 15.574C7.66527 15.2359 8.16806 15.2359 8.45108 15.574C8.79065 15.9796 9.16667 16.5237 9.16667 16.9444Z"
                          stroke="#3B76DA"
                          stroke-width="1.25"
                        />
                        <Path
                          d="M13.3333 16.9444C13.3333 17.7115 12.7737 18.3333 12.0833 18.3333C11.393 18.3333 10.8333 17.7115 10.8333 16.9444C10.8333 16.5237 11.2094 15.9796 11.5489 15.574C11.8319 15.2359 12.3347 15.2359 12.6177 15.574C12.9573 15.9796 13.3333 16.5237 13.3333 16.9444Z"
                          stroke="#3B76DA"
                          stroke-width="1.25"
                        />
                        <Path
                          d="M11.25 12.7778C11.25 13.5448 10.6904 14.1667 10 14.1667C9.30964 14.1667 8.75 13.5448 8.75 12.7778C8.75 12.3571 9.12602 11.8129 9.46559 11.4073C9.7486 11.0692 10.2514 11.0692 10.5344 11.4073C10.874 11.8129 11.25 12.3571 11.25 12.7778Z"
                          stroke="#3B76DA"
                          stroke-width="1.25"
                        />
                      </Svg>
                      <Text style={styles.frameTitle}>
                        Hôm nay trời mưa - nên đi sớm 10 phút
                      </Text>
                    </View>
                  </View>

                  {/* Countdown row: timer and message on the same line, centered */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderLeftWidth: 2,
                      borderLeftColor: "#3B76DA",
                      height: 68,
                      borderRadius: 4,
                      backgroundColor: "#F5F8FD",
                    }}
                  >
                    <CountdownTimer
                      size={48}
                      strokeWidth={3}
                      progress={0.33}
                      timeText="40:00"
                    />
                    <View style={{ flex: 1 }}>
                      <Text
                        style={[
                          styles.frameTitleSmall,
                          { marginLeft: 8, marginBottom: 0 },
                        ]}
                      >
                        Còn <Text style={{ fontWeight: "700" }}>40</Text> phút
                        nữa tới giờ làm. Hãy chuẩn bị ngay
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      height: 1,
                      width: "100%",
                      backgroundColor: "#E0E0E0",
                      alignSelf: "stretch",
                      marginTop: 16,
                      marginBottom: 16,
                    }}
                  />

                  {/* Ca sắp tới kèm thời gian */}
                  <View style={{ marginBottom: 0 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={[styles.frameTitleBold, styles.marginRight12]}
                      >
                        08:00 - 16:00
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={[styles.frameTitle, styles.marginRight12]}>
                          Ca sắp tới
                        </Text>
                        <Svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <Path
                            d="M8.5 6L13.5 10L8.5 14"
                            stroke="#667085"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Svg>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* {Frame tinh nag} */}
            <View>
              {/* FeatureSectionA */}
              <View style={{ marginBottom: 16 }}>
                <View style={featureStyles.row}>
                  <FeatureCard
                    testID="FeatureCard-Salary"
                    title="Lương"
                    icon={<SalaryIcon />}
                  />
                  <FeatureCard
                    testID="FeatureCard-KPI"
                    title="KPI"
                    icon={<KPIIcon />}
                  />
                  <FeatureCard
                    testID="FeatureCard-Shortcut"
                    title="Đặt lịch"
                    icon={<WindowIcon />}
                  />
                </View>
              </View>

              {/* FeatureSectionB */}
              <View style={{ marginBottom: 0 }}>
                <View style={featureStyles.row}>
                  <FeatureCard
                    testID="FeatureCard-Report"
                    title="Báo cáo"
                    icon={<ChartIcon />}
                  />
                  <FeatureCard
                    testID="FeatureCard-Rocket"
                    title="Trung tâm cải tiến"
                    icon={<RocketIcon />}
                  />
                  <FeatureCard
                    testID="FeatureCard-Cart"
                    title="Nhập hàng"
                    icon={<ShopIcon />}
                  />
                </View>
              </View>

              {/* {Đánh giá cảm xúc} */}
              <View style={[styles.frameContainerShadowA, { marginTop: 16 }]}>
                <View style={styles.frameContainerShadowB}>
                  <View
                    style={[
                      styles.frameContainer,
                      {
                        gap: 12,
                        padding: 0,
                        paddingTop: 16,
                        paddingBottom: 16,
                      },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: 16,
                        paddingRight: 16,
                      }}
                    >
                      <Text style={[styles.frameTitleBold]}>
                        Bạn cảm thấy hôm nay thế nào
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: 16,
                        paddingRight: 16,
                      }}
                    >
                      <Image
                        style={{ width: 44, height: 44 }}
                        source={require("../../assets/emotion-face/pouting-face.gif")}
                      />
                      <Image
                        style={{ width: 44, height: 44 }}
                        source={require("../../assets/emotion-face/pensive-face.gif")}
                      />
                      <Image
                        style={{ width: 44, height: 44 }}
                        source={require("../../assets/emotion-face/neutral-face.gif")}
                      />
                      <Image
                        style={{ width: 44, height: 44 }}
                        source={require("../../assets/emotion-face/slightly-smiling-face.gif")}
                      />
                      <Image
                        style={{ width: 44, height: 44 }}
                        source={require("../../assets/emotion-face/grinning-face.gif")}
                      />
                    </View>
                  </View>
                </View>
              </View>

              {/* Nhiệm vụ hôm nay */}
              <View style={[styles.frameContainerShadowA]}>
                <View style={styles.frameContainerShadowB}>
              <View
                style={{
                  backgroundColor: "#FFF3D1",
                  borderRadius: 12,
                  gap: 12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 16,
                    paddingBottom: 0,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <Path
                        d="M8.37671 15.6164L2.71986 21.2732M11.6944 6.64188L10.1335 8.20276C10.0062 8.33009 9.94252 8.39375 9.86999 8.44433C9.80561 8.48923 9.73617 8.5264 9.6631 8.55506C9.58078 8.58735 9.49249 8.60501 9.31593 8.64032L5.65146 9.37321C4.69916 9.56367 4.22301 9.6589 4.00025 9.90996C3.80618 10.1287 3.71756 10.4214 3.75771 10.711C3.8038 11.0434 4.14716 11.3868 4.83388 12.0735L11.9196 19.1593C12.6063 19.846 12.9497 20.1893 13.2821 20.2354C13.5718 20.2756 13.8645 20.1869 14.0832 19.9929C14.3342 19.7701 14.4295 19.294 14.6199 18.3417L15.3528 14.6772C15.3881 14.5006 15.4058 14.4124 15.4381 14.33C15.4667 14.257 15.5039 14.1875 15.5488 14.1231C15.5994 14.0506 15.663 13.9869 15.7904 13.8596L17.3513 12.2987C17.4327 12.2173 17.4734 12.1766 17.5181 12.1411C17.5578 12.1095 17.5999 12.081 17.644 12.0558C17.6936 12.0275 17.7465 12.0048 17.8524 11.9595L20.3467 10.8905C21.0744 10.5786 21.4383 10.4227 21.6035 10.1707C21.7481 9.95031 21.7998 9.68181 21.7474 9.42354C21.6875 9.12819 21.4076 8.84828 20.8478 8.28846L15.7047 3.14532C15.1448 2.58549 14.8649 2.30558 14.5696 2.24571C14.3113 2.19335 14.0428 2.24506 13.8225 2.38959C13.5705 2.55487 13.4145 2.91872 13.1027 3.64642L12.0337 6.14078C11.9883 6.24659 11.9656 6.2995 11.9373 6.34911C11.9121 6.39319 11.8836 6.43528 11.852 6.47503C11.8165 6.51977 11.7758 6.56047 11.6944 6.64188Z"
                        stroke="#F04438"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </Svg>
                    <Text style={styles.frameTitleBold}>Nhiệm vụ hôm nay</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <Path
                        d="M7.33332 12.6667V8.66669H3.33332C2.96513 8.66669 2.66666 8.36821 2.66666 8.00002C2.66666 7.63183 2.96513 7.33335 3.33332 7.33335H7.33332V3.33335C7.33332 2.96516 7.6318 2.66669 7.99999 2.66669C8.36818 2.66669 8.66666 2.96516 8.66666 3.33335V7.33335H12.6667C13.0348 7.33335 13.3333 7.63183 13.3333 8.00002C13.3333 8.36821 13.0348 8.66669 12.6667 8.66669H8.66666V12.6667C8.66666 13.0349 8.36818 13.3334 7.99999 13.3334C7.6318 13.3334 7.33332 13.0349 7.33332 12.6667Z"
                        fill="#3B76DA"
                      />
                    </Svg>
                    <Text style={styles.titleHref}>Thêm nhiệm vụ</Text>
                  </View>
                </View>
                <View
                  style={{
                    padding: 16,
                    gap: 12,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: 4,
                    }}
                  >
                    <CheckboxIcon checked={false} size={20} />
                    <Text style={styles.titleCheckBox}>
                      Kiểm kê kho cuối ngày
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: 4,
                    }}
                  >
                    <CheckboxIcon checked={false} size={20} />
                    <Text style={styles.titleCheckBox}>
                      Bàn giao công việc cho ca sau
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: 4,
                    }}
                  >
                    <CheckboxIcon checked={false} size={20} />
                    <Text style={styles.titleCheckBox}>
                      Ghi nhận KPI khách hàng phản hồi
                    </Text>
                  </View>
                </View>
                <View style={{ padding: 16, paddingTop: 0 }}>
                  <Text style={styles.titleHref}>Xem thêm</Text>
                </View>
              </View>
              </View>
              </View>

              {/* Thống kê */}
              <View style={[styles.frameContainerShadowA]}>
                <View style={styles.frameContainerShadowB}>
                  <View style={[styles.frameContainer, { gap: 12}]}>
                    <View>
                      <Text style={styles.frameTitleBold}>Thống kê</Text>
                    </View>

                    <View style={{ gap: 12}}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12}}>
                        {/* Số ca làm */}
                        <View style={{flex: 1, borderRadius: 12, backgroundColor: '#F5F8FD', paddingLeft: 12, paddingTop: 12, paddingBottom: 12, gap: 4}}>
                          <View style={{ padding: 10, gap: 10, width: 40, height: 40, borderRadius: 25, backgroundColor: '#D8E4F8' }}>
                            <Svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <Path
                                d="M14.1667 11.6666C14.6269 11.6666 15 11.2935 15 10.8333C15 10.3731 14.6269 9.99998 14.1667 9.99998C13.7064 9.99998 13.3333 10.3731 13.3333 10.8333C13.3333 11.2935 13.7064 11.6666 14.1667 11.6666Z"
                                fill="#3B76DA"
                              />
                              <Path
                                d="M14.1667 15C14.6269 15 15 14.6269 15 14.1666C15 13.7064 14.6269 13.3333 14.1667 13.3333C13.7064 13.3333 13.3333 13.7064 13.3333 14.1666C13.3333 14.6269 13.7064 15 14.1667 15Z"
                                fill="#3B76DA"
                              />
                              <Path
                                d="M10.8333 10.8333C10.8333 11.2935 10.4602 11.6666 10 11.6666C9.53976 11.6666 9.16667 11.2935 9.16667 10.8333C9.16667 10.3731 9.53976 9.99998 10 9.99998C10.4602 9.99998 10.8333 10.3731 10.8333 10.8333Z"
                                fill="#3B76DA"
                              />
                              <Path
                                d="M10.8333 14.1666C10.8333 14.6269 10.4602 15 10 15C9.53976 15 9.16667 14.6269 9.16667 14.1666C9.16667 13.7064 9.53976 13.3333 10 13.3333C10.4602 13.3333 10.8333 13.7064 10.8333 14.1666Z"
                                fill="#3B76DA"
                              />
                              <Path
                                d="M5.83334 11.6666C6.29357 11.6666 6.66667 11.2935 6.66667 10.8333C6.66667 10.3731 6.29357 9.99998 5.83334 9.99998C5.3731 9.99998 5 10.3731 5 10.8333C5 11.2935 5.3731 11.6666 5.83334 11.6666Z"
                                fill="#3B76DA"
                              />
                              <Path
                                d="M5.83334 15C6.29357 15 6.66667 14.6269 6.66667 14.1666C6.66667 13.7064 6.29357 13.3333 5.83334 13.3333C5.3731 13.3333 5 13.7064 5 14.1666C5 14.6269 5.3731 15 5.83334 15Z"
                                fill="#3B76DA"
                              />
                              <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.83334 1.45831C6.17851 1.45831 6.45834 1.73813 6.45834 2.08331V2.71891C7.01 2.7083 7.61777 2.70831 8.28622 2.70831H11.7137C12.3821 2.70831 12.99 2.7083 13.5417 2.71891V2.08331C13.5417 1.73813 13.8215 1.45831 14.1667 1.45831C14.5118 1.45831 14.7917 1.73813 14.7917 2.08331V2.77255C15.0083 2.78907 15.2134 2.80983 15.4075 2.83592C16.3845 2.96728 17.1753 3.24405 17.799 3.86768C18.4226 4.49132 18.6994 5.28211 18.8307 6.25913C18.9584 7.20847 18.9583 8.42148 18.9583 9.95293V11.7137C18.9583 13.2451 18.9584 14.4582 18.8307 15.4075C18.6994 16.3845 18.4226 17.1753 17.799 17.7989C17.1753 18.4226 16.3845 18.6993 15.4075 18.8307C14.4582 18.9583 13.2452 18.9583 11.7137 18.9583H8.28633C6.75488 18.9583 5.54182 18.9583 4.59248 18.8307C3.61546 18.6993 2.82467 18.4226 2.20104 17.7989C1.5774 17.1753 1.30064 16.3845 1.16928 15.4075C1.04164 14.4582 1.04166 13.2451 1.04167 11.7137V9.95296C1.04166 8.4215 1.04164 7.20847 1.16928 6.25913C1.30064 5.28211 1.5774 4.49132 2.20104 3.86768C2.82467 3.24405 3.61546 2.96728 4.59248 2.83592C4.78659 2.80983 4.99172 2.78907 5.20834 2.77255V2.08331C5.20834 1.73813 5.48816 1.45831 5.83334 1.45831ZM4.75904 4.07478C3.92063 4.1875 3.4376 4.39889 3.08492 4.75157C2.73225 5.10424 2.52086 5.58728 2.40813 6.42569C2.38904 6.56767 2.37308 6.71715 2.35974 6.87498H17.6403C17.6269 6.71715 17.611 6.56768 17.5919 6.42569C17.4791 5.58728 17.2678 5.10424 16.9151 4.75157C16.5624 4.39889 16.0794 4.1875 15.241 4.07478C14.3846 3.95964 13.2557 3.95831 11.6667 3.95831H8.33334C6.74432 3.95831 5.61543 3.95964 4.75904 4.07478ZM2.29167 9.99998C2.29167 9.2883 2.29193 8.66892 2.30257 8.12498H17.6974C17.7081 8.66892 17.7083 9.2883 17.7083 9.99998V11.6666C17.7083 13.2557 17.707 14.3846 17.5919 15.2409C17.4791 16.0793 17.2678 16.5624 16.9151 16.9151C16.5624 17.2677 16.0794 17.4791 15.241 17.5918C14.3846 17.707 13.2557 17.7083 11.6667 17.7083H8.33334C6.74432 17.7083 5.61543 17.707 4.75904 17.5918C3.92063 17.4791 3.4376 17.2677 3.08492 16.9151C2.73225 16.5624 2.52086 16.0793 2.40813 15.2409C2.293 14.3846 2.29167 13.2557 2.29167 11.6666V9.99998Z"
                                fill="#3B76DA"
                              />
                            </Svg>
                          </View>
                            <Text style={styles.frameTitleSmall}>Số ca làm</Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              paddingRight: 12,
                              gap: 4,
                            }}
                          >
                            <Text style={styles.title900Dark}>20</Text>
                            <Text style={styles.titleHref}>Xem tổng quan</Text>
                          </View>
                        </View>

                        {/* Công việc hoàn thành */}
                        <View style={{flex: 1, borderRadius: 12, backgroundColor: '#E7F8F0', paddingLeft: 12, paddingTop: 12, paddingBottom: 12, paddingRight: 20, gap: 4}}>
                          <View style={{ padding: 10, gap: 10, width: 40, height: 40, borderRadius: 25, backgroundColor: '#D0F1E1' }}>
                            <Svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <Path
                                d="M12.8275 3.37806L12.4094 3.84262V3.84262L12.8275 3.37806ZM16.1264 6.34714L15.7083 6.8117L16.1264 6.34714ZM18.045 8.46177L17.4741 8.71604V8.71604L18.045 8.46177ZM2.64298 17.357L3.08492 16.9151H3.08492L2.64298 17.357ZM17.357 17.357L16.9151 16.9151L17.357 17.357ZM11.6667 18.3334V17.7084H8.33334V18.3334V18.9584H11.6667V18.3334ZM1.66667 11.6667H2.29167V8.33335H1.66667H1.04167V11.6667H1.66667ZM18.3333 11.3024H17.7083V11.6667H18.3333H18.9583V11.3024H18.3333ZM12.8275 3.37806L12.4094 3.84262L15.7083 6.8117L16.1264 6.34714L16.5445 5.88258L13.2456 2.9135L12.8275 3.37806ZM18.3333 11.3024H18.9583C18.9583 9.89547 18.971 9.00462 18.6159 8.20749L18.045 8.46177L17.4741 8.71604C17.6957 9.21373 17.7083 9.78506 17.7083 11.3024H18.3333ZM16.1264 6.34714L15.7083 6.8117C16.8362 7.82677 17.2524 8.21835 17.4741 8.71604L18.045 8.46177L18.6159 8.20749C18.2609 7.41036 17.5903 6.82379 16.5445 5.88258L16.1264 6.34714ZM8.35816 1.66669V2.29169C9.67633 2.29169 10.1738 2.30134 10.6171 2.47147L10.841 1.88795L11.0649 1.30444C10.3551 1.03204 9.58167 1.04169 8.35816 1.04169V1.66669ZM12.8275 3.37806L13.2456 2.9135C12.3406 2.09901 11.7747 1.57681 11.0649 1.30444L10.841 1.88795L10.6171 2.47147C11.0605 2.64163 11.4346 2.96532 12.4094 3.84262L12.8275 3.37806ZM8.33334 18.3334V17.7084C6.74432 17.7084 5.61543 17.707 4.75905 17.5919C3.92064 17.4792 3.4376 17.2678 3.08492 16.9151L2.64298 17.357L2.20104 17.799C2.82468 18.4226 3.61547 18.6994 4.59249 18.8307C5.55152 18.9597 6.77966 18.9584 8.33334 18.9584V18.3334ZM1.66667 11.6667H1.04167C1.04167 13.2204 1.04034 14.4485 1.16928 15.4075C1.30064 16.3846 1.5774 17.1753 2.20104 17.799L2.64298 17.357L3.08492 16.9151C2.73225 16.5624 2.52086 16.0794 2.40814 15.241C2.293 14.3846 2.29167 13.2557 2.29167 11.6667H1.66667ZM11.6667 18.3334V18.9584C13.2204 18.9584 14.4485 18.9597 15.4075 18.8307C16.3845 18.6994 17.1753 18.4226 17.799 17.799L17.357 17.357L16.9151 16.9151C16.5624 17.2678 16.0794 17.4792 15.241 17.5919C14.3846 17.707 13.2557 17.7084 11.6667 17.7084V18.3334ZM18.3333 11.6667H17.7083C17.7083 13.2557 17.707 14.3846 17.5919 15.241C17.4792 16.0794 17.2678 16.5624 16.9151 16.9151L17.357 17.357L17.799 17.799C18.4226 17.1753 18.6994 16.3846 18.8307 15.4075C18.9597 14.4485 18.9583 13.2204 18.9583 11.6667H18.3333ZM1.66667 8.33335H2.29167C2.29167 6.74434 2.293 5.61545 2.40814 4.75906C2.52086 3.92065 2.73225 3.43761 3.08492 3.08494L2.64298 2.643L2.20104 2.20106C1.5774 2.82469 1.30064 3.61548 1.16928 4.5925C1.04034 5.55154 1.04167 6.77967 1.04167 8.33335H1.66667ZM8.35816 1.66669V1.04169C6.79615 1.04169 5.56202 1.04037 4.59906 1.16925C3.6186 1.30047 2.82516 1.57693 2.20104 2.20106L2.64298 2.643L3.08492 3.08494C3.43711 2.73275 3.92164 2.52106 4.76488 2.4082C5.62563 2.293 6.76093 2.29169 8.35816 2.29169V1.66669Z"
                                fill="#12B76A"
                              />
                              <Path
                                d="M10.8333 2.08331V4.16665C10.8333 6.13083 10.8333 7.11292 11.4435 7.72312C12.0537 8.33331 13.0358 8.33331 15 8.33331H18.3333"
                                stroke="#12B76A"
                                stroke-width="1.25"
                              />
                              <Path
                                d="M5 13.75L6.11111 15L8.33333 12.5"
                                stroke="#12B76A"
                                stroke-width="1.25"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </Svg>
                          </View>
                            <Text style={styles.frameTitleSmall}>Công việc hoàn thành</Text>
                            <Text style={styles.title900Dark}>20</Text>
                        </View>
                      </View>
                      <View>
                        <View style={{borderRadius: 12, backgroundColor: '#FFF9E7', padding: 16, gap: 4}}>
                          <View style={{ padding: 10, gap: 10, width: 40, height: 40, borderRadius: 25, backgroundColor: '#FFECB8' }}>
                            <Svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10 2.29163C5.74281 2.29163 2.29167 5.74276 2.29167 9.99996C2.29167 14.2572 5.74281 17.7083 10 17.7083C14.2572 17.7083 17.7083 14.2572 17.7083 9.99996C17.7083 5.74276 14.2572 2.29163 10 2.29163ZM1.04167 9.99996C1.04167 5.05241 5.05245 1.04163 10 1.04163C14.9476 1.04163 18.9583 5.05241 18.9583 9.99996C18.9583 14.9475 14.9476 18.9583 10 18.9583C5.05245 18.9583 1.04167 14.9475 1.04167 9.99996ZM10 4.37496C10.3452 4.37496 10.625 4.65478 10.625 4.99996V5.2639C11.9837 5.50718 13.125 6.52797 13.125 7.91663C13.125 8.2618 12.8452 8.54163 12.5 8.54163C12.1548 8.54163 11.875 8.2618 11.875 7.91663C11.875 7.35124 11.4049 6.75279 10.625 6.53953V9.43057C11.9837 9.67385 13.125 10.6946 13.125 12.0833C13.125 13.472 11.9837 14.4927 10.625 14.736V15C10.625 15.3451 10.3452 15.625 10 15.625C9.65482 15.625 9.375 15.3451 9.375 15V14.736C8.01631 14.4927 6.875 13.472 6.875 12.0833C6.875 11.7381 7.15482 11.4583 7.5 11.4583C7.84518 11.4583 8.125 11.7381 8.125 12.0833C8.125 12.6487 8.59508 13.2471 9.375 13.4604V10.5693C8.01631 10.3261 6.875 9.30528 6.875 7.91663C6.875 6.52797 8.01631 5.50718 9.375 5.2639V4.99996C9.375 4.65478 9.65482 4.37496 10 4.37496ZM9.375 6.53953C8.59508 6.75279 8.125 7.35124 8.125 7.91663C8.125 8.48201 8.59508 9.08047 9.375 9.29373V6.53953ZM10.625 10.7062V13.4604C11.4049 13.2471 11.875 12.6487 11.875 12.0833C11.875 11.5179 11.4049 10.9195 10.625 10.7062Z"
                                fill="#FFC013"
                              />
                            </Svg>
                          </View>
                          <Text>Lương tích lũy</Text>
                          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 4}}>
                            <Text style={styles.title900Dark}>2,760,000</Text>
                            <Text style={styles.titleHref}>Xem tổng quan</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
