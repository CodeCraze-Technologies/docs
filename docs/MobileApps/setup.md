---
sidebar_position: 1
---

# How to run app?

## Run an existing flutter project on IDE

To run an existing Flutter project on an Integrated Development Environment (IDE) like Android Studio or Visual Studio Code, follow these general steps:

1. **Open the IDE:**
   - Launch Android Studio or Visual Studio Code on your computer.

2. **Open the Flutter Project:**
   - In Android Studio: Go to File > Open and navigate to your Flutter project directory. Select the web—master folder and open it.
   - In Visual Studio Code: Open the folder containing your Flutter project.

3. **Get Dependencies:**
   - Open your terminal or command prompt.
   - Navigate to your Flutter project directory.
   - Paste the following command and press Enter:
     ```
     flutter pub get
     ```
   - This command fetches and retrieves the dependencies specified in your pubspec.yaml file.
   ![Get Dependencies image](./img/dependencies.png)

4. **Generate Files:**
   - After getting dependencies, you might need to generate necessary files, such as JSON serialization files, using the build_runner tool.
   - In your terminal, navigate to your Flutter project directory if you're not already there.
   - Paste the following command and press Enter:
   ```
   dart run build_runner build --delete-conflicting-outputs
   ```
   ![Generate files image](./img/generate_files.png)


5. **Configure Emulator/Device:**
   - Ensure that you have an Android emulator running or a physical Android device connected via USB debugging, if you intend to run the project on an Android device.
   - For iOS development on macOS, make sure you have Xcode installed and set up, and have an iOS simulator running or a physical iOS device connected if you want to run the project on iOS.

6. **Run the Project:**
   - In Android Studio:
     - Click on the green play button (Run) in the toolbar.
     - Select the target device (emulator or connected device) from the device dropdown menu.
     - Click on the Run button to build and run the Flutter project on the selected device.
   - In Visual Studio Code:
     - Press `F5` or go to the Run menu and select "Start Debugging" to build and run the Flutter project.
     - Select the target device from the dropdown menu if prompted.
     - Alternatively, you can run the project from the terminal by executing the command `flutter run`.

By following these steps, you should be able to successfully run your existing Flutter project on your preferred IDE. Make sure to troubleshoot any errors that may arise during the build process or runtime execution.

## Change package name:
To change the package name in a Flutter project follow these steps:
1. Open your terminal or command prompt.
2. Past this following command into your terminal.
   ```
   rename setBundleId --targets android,ios --value "com.your.id.com"
   ```
   ![package name image](./img/package_name.png)

## Change app Name
To change the app name in a Flutter project using the `rename` tool, you would typically follow these steps:

1. Open your terminal or command prompt.

2. Paste the following command into your terminal and replace `"YourAppName"` with the desired name for your app:
     ```
     rename setAppName --targets ios,android --value "YourAppName"
     ```
   - This command will run the `rename` tool, which updates the app name in both iOS and Android configurations.
   ![Change app name](./img/Change_app_name.png)


## Change Base URL
To change the value of the `webURL` variable in the `constant.dart` file located in the `lib/resources` directory of your Flutter project, you can follow these steps:

1. Open your Flutter project in your preferred code editor.

2. Navigate to the `constant.dart` file located in the `lib/resources` directory.

3. Locate the `webURL` variable in the file. It may look something like this:
![Chnage home page tab url](./img/base_url.png)

5. Save the changes to the file.

After updating the value of the `webURL` variable, make sure to rebuild your Flutter project to apply the changes. You can then test your app to ensure that it is using the new URL specified in the `constant.dart` file.