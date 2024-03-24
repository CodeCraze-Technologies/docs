---
sidebar_position: 3
---


# App build & release
To build and release your Flutter app, you can follow these general steps:

1. **Preparing for Release:**

   - **Update Version**: Ensure that you've updated the version number of your app in the `pubspec.yaml` file. Increment the version number following semantic versioning guidelines (major.minor.patch).

   - **Configure App Signing**: For Android, you need to configure app signing to generate a signing key and store it securely. For iOS, you need to ensure your app is properly provisioned and signed.

   - **Prepare Assets**: Make sure all necessary assets (such as images, fonts, etc.) are included and properly referenced in your Flutter project.

2. **Building the App:**

   - **For Android:**
     - Run `flutter build apk` to build the APK file of your app. This command generates the APK file in the `build/app/outputs/flutter-apk` directory.
     - If you want to build a release APK, add the `--release` flag to the command: `flutter build apk --release`.

   - **For iOS:**
     - Run `flutter build ios` to build the iOS version of your app. This command generates an Xcode project in the `build/ios` directory.
     - If you want to build a release version for iOS, you need to use Xcode to archive and export the app.

3. **Testing:**

   - Before releasing your app, it's essential to thoroughly test it to ensure it functions as expected. Test on both Android and iOS devices, and consider using emulators/simulators for a wider range of testing.

4. **Releasing the App:**

   - **For Android:**
     - If you're releasing your app on the Google Play Store, you need to sign the APK with your app's signing key and then upload it to the Play Console. Follow the [Play Console's instructions to create a new release and upload your APK file.](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en)
     - If you want to distribute your app outside the Play Store, you can share the APK file directly with your users.

   - **For iOS:**
     - To release your app on the App Store, you need to use Xcode to archive and submit your app. Follow [Apple's guidelines for App Store submission and distribution.](https://developer.apple.com/ios/submit/)

5. **Monitoring and Maintenance:**

   - After releasing your app, monitor its performance and user feedback. Address any issues or bugs promptly, and consider releasing updates with new features or improvements regularly.

Remember to familiarize yourself with the platform-specific guidelines and requirements for app distribution on both Android and iOS. Additionally, ensure compliance with any legal or regulatory requirements applicable to your app and its content.