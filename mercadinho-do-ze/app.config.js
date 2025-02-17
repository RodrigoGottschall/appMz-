export default {
  expo: {
    name: process.env.APP_NAME,
    slug: process.env.APP_SLUG,
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#ffffff",
    },
    androidStatusBar: {
      barStyle: "light-content",
      backgroundColor: "#000000",
    },
    androidNavigationBar: {
      barStyle: "dark-content",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#FFFFFF",
      },
      package: process.env.ANDROID_PACKAGE,
    },
    web: {
      favicon: "./assets/logo.png",
    },
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
    plugins: ["expo-font"],
  },
};
