---
sidebar_position: 2
---

# Customization
You may Customize as your requirements


## Change App Color
To change the app's color scheme
   1. Goto resources directory.
   2. Open app_color.dart then change the color

![Change App Color](./img/change-app-color.jpeg)



## Change app Logo
To replace the app logo you can follow these steps:

1. **Replace `logo.png` in Assets:**
   - Navigate to the `assets/images` directory in your Flutter project.
   - Delete the existing `logo.png` file.
   - Paste your own logo file and ensure it is named `logo.png`.

   ![Replace logo image](./img/logo1.png)

2. **Update Launcher Icon:**
   - Open your terminal or command prompt.
   - Navigate to your Flutter project directory.
   - Run the following command to update the app launcher icon using:
     ```
     dart run flutter_launcher_icons -f icon_launcher.yaml
     ```
   ![Update Launcher Icon](./img/logo2.png)

3. **Verify Changes:**
   - Once the command has been executed successfully, verify that the new launcher icon has been applied to your app.

