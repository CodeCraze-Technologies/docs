---
sidebar_position: 2
---

# Customization
You may Customize as your requirements

## Home page url
:::warning
You may follow those steps if you want to add home page website url or change url
:::

## Change Popular search Gridview url
:::warning
You may follow those steps if you want to add search tab website url or change url
:::

## Change App Color
To change the app's color scheme, such as switching between light (day) and dark themes, in your Flutter project, you can follow these general steps:

1. **Define Theme Data:**
   - Create theme data for both light and dark themes in your Flutter project. Theme data defines the colors, fonts, and styles used throughout the app.

   ```dart
   // Define light theme
   final ThemeData lightTheme = ThemeData(
     // Define light theme colors
     brightness: Brightness.light,
     // Other light theme configurations (e.g., primaryColor, accentColor, etc.)
   );

   // Define dark theme
   final ThemeData darkTheme = ThemeData(
     // Define dark theme colors
     brightness: Brightness.dark,
     // Other dark theme configurations (e.g., primaryColor, accentColor, etc.)
   );
   ```

2. **Toggle Between Themes:**
   - Implement a mechanism to toggle between light and dark themes in your app. This could be done using a switch in the settings or through system preferences.

   ```dart
   // Toggle between light and dark themes
   ThemeData currentTheme = isDarkModeEnabled ? darkTheme : lightTheme;
   ```

3. **Apply Theme Data:**
   - Apply the selected theme data throughout your app. You can do this by wrapping the root widget of your app with a `MaterialApp` and specifying the `theme` property.

   ```dart
   MaterialApp(
     theme: currentTheme,
     // Other MaterialApp configurations (e.g., home, routes, etc.)
   );
   ```

4. **Test Your Themes:**
   - Run your app and verify that the color scheme changes correctly when switching between light and dark themes.
   - Ensure that all UI components adapt appropriately to the selected theme, including text color, background color, and any custom widgets.

By following these steps, you can easily implement light and dark themes in your Flutter app and allow users to switch between them based on their preferences. Remember to test your app thoroughly to ensure a consistent and visually pleasing user experience across both themes.


## Add New Local Language
To add a new local language to your Flutter app, you'll need to follow these general steps:

1. **Prepare Localized Strings:**
   - Collect all the strings used in your app that need to be translated into the new language.
   - Create a new set of localized string files for the new language. Typically, these files are named according to the language code (e.g., `strings_en.dart` for English, `strings_es.dart` for Spanish).

2. **Create Language-Specific String Files:**
   - In your Flutter project, create a new Dart file for the localized strings of the new language. This file will contain a map of key-value pairs, where the keys are identifiers and the values are the translated strings.
   - For example, if you're adding Spanish localization, create a file named `strings_es.dart`.

   ```dart
   // strings_es.dart
   Map<String, String> localizedStrings = {
     'hello': 'Hola',
     'welcome': 'Bienvenido',
     // Add more key-value pairs for other translated strings
   };
   ```

3. **Import and Use Localized Strings:**
   - Import the new language-specific string file into your Dart files where you need to use localized strings.
   - Use the `localizedStrings` map to access the translated strings by their keys.

   ```dart
   // Import statement
   import 'package:your_project/strings_es.dart' as strings;

   // Access localized strings
   String helloText = strings.localizedStrings['hello'];
   String welcomeText = strings.localizedStrings['welcome'];
   ```

4. **Implement Language Switching (Optional):**
   - If your app supports multiple languages and allows users to switch between them, implement functionality to switch the app's language at runtime.
   - You can use packages like `flutter_localizations` and `provider` to manage app localization and update UI dynamically.

5. **Test Your Localization:**
   - Run your app and verify that the localized strings are displayed correctly in the new language.
   - Ensure that the layout and formatting are appropriate for the new language.

6. **Repeat for Other Languages (Optional):**
   - If you plan to add support for more languages, repeat the above steps for each additional language.

By following these steps, you can add support for a new local language to your Flutter app and provide a localized experience for users who prefer that language. Remember to properly manage your localized strings and test your app thoroughly to ensure a smooth localization experience.


## Change App Font
To change the font in your Flutter app, you can follow these general steps:

1. **Choose a Custom Font:**
   - Select a custom font that you want to use in your app. You can either use a font provided by Google Fonts or import your own font files.

2. **Download or Add Font Files:**
   - If you're using Google Fonts, you can select the desired font from the Google Fonts website and follow the instructions to add it to your project.
   - If you have your own font files (e.g., .ttf or .otf files), add them to your Flutter project's `fonts` directory.

3. **Declare Font in `pubspec.yaml`:**
   - Open your `pubspec.yaml` file located in the root directory of your Flutter project.
   - Declare the font files under the `fonts` section. Specify the font family name and the path to the font files.

   ```yaml
   flutter:
     fonts:
       - family: CustomFont
         fonts:
           - asset: fonts/CustomFont-Regular.ttf
           # Add additional font styles if necessary (e.g., bold, italic)
   ```

4. **Load Fonts in Your App:**
   - In your app's main file (e.g., `main.dart`), load the custom font using `TextStyle` or `ThemeData`.

   ```dart
   // Import the custom font family
   import 'package:flutter/material.dart';

   void main() {
     runApp(MyApp());
   }

   class MyApp extends StatelessWidget {
     @override
     Widget build(BuildContext context) {
       return MaterialApp(
         title: 'My App',
         theme: ThemeData(
           // Use the custom font family
           fontFamily: 'CustomFont',
           // Define other theme properties
         ),
         home: MyHomePage(),
       );
     }
   }
   ```

5. **Apply Custom Font in Widgets:**
   - Apply the custom font to specific text widgets by setting the `fontFamily` property.

   ```dart
   Text(
     'Hello, World!',
     style: TextStyle(
       fontFamily: 'CustomFont',
       fontSize: 24,
       // Other text styles
     ),
   );
   ```

6. **Test Your App:**
   - Run your app and verify that the custom font is applied correctly to the text widgets.
   - Ensure that the font style and appearance match your expectations.

By following these steps, you can easily change the font in your Flutter app and apply a custom font throughout your UI. Remember to select a font that complements your app's design and enhances readability.


