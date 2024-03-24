---
sidebar_position: 1
---

# Mandatory setup/Changes

## Run an existing flutter project on IDE

To run an existing Flutter project on an Integrated Development Environment (IDE) like Android Studio or Visual Studio Code, follow these general steps:

1. **Open the IDE:**
   - Launch Android Studio or Visual Studio Code on your computer.

2. **Open the Flutter Project:**
   - In Android Studio: Go to File > Open and navigate to your Flutter project directory. Select the `pubspec.yaml` file and open it.
   - In Visual Studio Code: Open the folder containing your Flutter project.

3. **Install Dependencies:**
   - If you haven't installed the project dependencies yet, you may need to run `flutter pub get` in the terminal of your IDE or in the command line within the project directory to fetch and install the required dependencies specified in the `pubspec.yaml` file.

4. **Configure Emulator/Device:**
   - Ensure that you have an Android emulator running or a physical Android device connected via USB debugging, if you intend to run the project on an Android device.
   - For iOS development on macOS, make sure you have Xcode installed and set up, and have an iOS simulator running or a physical iOS device connected if you want to run the project on iOS.

5. **Run the Project:**
   - In Android Studio:
     - Click on the green play button (Run) in the toolbar.
     - Select the target device (emulator or connected device) from the device dropdown menu.
     - Click on the Run button to build and run the Flutter project on the selected device.
   - In Visual Studio Code:
     - Press `F5` or go to the Run menu and select "Start Debugging" to build and run the Flutter project.
     - Select the target device from the dropdown menu if prompted.
     - Alternatively, you can run the project from the terminal by executing the command `flutter run`.

6. **Monitor Output:**
   - Once the project is running, monitor the output console in the IDE for any errors or messages related to the build process or app execution.

By following these steps, you should be able to successfully run your existing Flutter project on your preferred IDE. Make sure to troubleshoot any errors that may arise during the build process or runtime execution.


## Change app Logo
To change the app logo in your Flutter project, you typically need to replace the default app icon with your custom icon. Here's a general guide on how to achieve this:

1. **Prepare Your Custom Logo:**
   - Design or obtain your desired app logo in the appropriate dimensions. Flutter requires the logo to be in specific sizes for different platforms:
     - Android: `ic_launcher.png` in multiple sizes (e.g., drawable-mdpi, drawable-hdpi, drawable-xhdpi, drawable-xxhdpi, drawable-xxxhdpi).
     - iOS: `AppIcon.appiconset` containing various sized images (e.g., 20x20, 40x40, 60x60, 120x120, 180x180).

2. **Replace Default Logo Files:**
   - In your Flutter project directory, navigate to the following paths:
     - For Android: `android/app/src/main/res/`
     - For iOS: `ios/Runner/Assets.xcassets/AppIcon.appiconset/`
   - Replace the default logo files (`ic_launcher.png` for Android and various sized images for iOS) with your custom logo files, ensuring you maintain the same file names and dimensions.

3. **Update `pubspec.yaml`:**
   - Open your `pubspec.yaml` file located in the root directory of your Flutter project.
   - Ensure that you specify the correct path to your custom app logo files under the `flutter` section:
     ```yaml
     flutter:
       # ... other configurations
       assets:
         - android/app/src/main/res/ic_launcher.png
         - ios/Runner/Assets.xcassets/AppIcon.appiconset/
     ```

4. **Run the App:**
   - Once you've replaced the default logo files and updated the `pubspec.yaml`, rebuild your Flutter project.
   - You can do this by running `flutter clean` followed by `flutter build` in your terminal or by running your project again through your IDE.
   - After rebuilding, launch the app on your preferred device or emulator to see the changes reflected in the app's icon.

By following these steps, you should be able to change the app logo in your Flutter project to your custom logo. Make sure to replace the default logo files with your custom logo files and update the `pubspec.yaml` accordingly for both Android and iOS platforms.

## Change app Name
To change the app name in your Flutter project, you'll need to adjust it in several places across your project. Here's a step-by-step guide:

1. **Update `pubspec.yaml`:**
   - Open your `pubspec.yaml` file located in the root directory of your Flutter project.
   - Find the `name` field under the `flutter` section and modify it to your desired app name.
   - This step ensures that your app's name is correctly identified by Flutter.

   ```yaml
   flutter:
     # other configurations...
     name: your_app_name
   ```

2. **Update AndroidManifest.xml (for Android):**
   - Navigate to `android/app/src/main/AndroidManifest.xml` in your Flutter project.
   - Find the `<application>` tag and update the `android:label` attribute with your new app name.
   - This change ensures that your app name is displayed correctly on Android devices.

   ```xml
   <application
       android:name="io.flutter.app.FlutterApplication"
       android:label="Your App Name"
       ...
   ```

3. **Update Info.plist (for iOS):**
   - Navigate to `ios/Runner/Info.plist` in your Flutter project.
   - Find the `<key>CFBundleName</key>` entry and update the `<string>` value with your new app name.
   - This ensures that your app name is displayed correctly on iOS devices.

   ```xml
   <key>CFBundleName</key>
   <string>Your App Name</string>
   ```

4. **Update the App Display Name (Optional):**
   - Additionally, you may want to update the display name of your app on the home screen of the device.
   - For Android, this can be done by modifying the `android:label` attribute under the `<application>` tag in `AndroidManifest.xml`.
   - For iOS, you can change the display name by updating the `<key>CFBundleDisplayName</key>` entry in `Info.plist`.

5. **Rebuild and Run the App:**
   - After making the changes, rebuild your Flutter project to apply the modifications.
   - You can do this by running `flutter clean` followed by `flutter build` in your terminal or by running your project again through your IDE.
   - Launch the app on your preferred device or emulator to see the changes reflected in the app's name.

By following these steps, you should be able to change the app name in your Flutter project across both Android and iOS platforms. Remember to update the relevant configuration files and rebuild your project to apply the changes.


## Change Base URL
To change the base URL in your Flutter project, you'll typically want to configure it in a centralized location, allowing for easy modification and access throughout your application. Here's a step-by-step guide on how to achieve this:

1. **Create a Configuration File (Optional):**
   - You can create a separate Dart file to store your base URL. This file will typically contain a constant variable holding the base URL string.
   - For example, create a file named `api_config.dart` in your project's directory.

   ```dart
   // api_config.dart

   class APIConfig {
     static const String baseURL = 'https://your_base_url.com';
   }
   ```

2. **Import Configuration File:**
   - Import the `api_config.dart` file wherever you need to access the base URL in your project.

   ```dart
   // import statement in your Dart file
   import 'package:your_project_name/api_config.dart';
   ```

3. **Usage:**
   - Now, you can use the `baseURL` constant from the `APIConfig` class throughout your project.

   ```dart
   // Example usage
   String endpoint = '${APIConfig.baseURL}/your_endpoint';
   ```

4. **Changing the Base URL:**
   - Whenever you need to change the base URL, you can simply modify the value of the `baseURL` constant in the `api_config.dart` file.
   - By centralizing the base URL in this way, you ensure that all API requests in your project reference the same base URL, simplifying maintenance and updates.

   ```dart
   // Updated base URL
   class APIConfig {
     static const String baseURL = 'https://your_new_base_url.com';
   }
   ```

5. **Testing:**
   - After updating the base URL, ensure to test your application thoroughly to verify that it's communicating with the new URL as expected.

By following these steps and centralizing the base URL in a configuration file, you can easily change the base URL in your Flutter project without having to modify multiple files or locations throughout your codebase.