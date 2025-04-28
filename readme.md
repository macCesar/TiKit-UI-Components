# TiKit UI Components - Demo App 👋

Want to see what **TiKit UI Components** look like in a real app? You're in the right place!

This is a simple cross-platform [**Titanium SDK**](https://titaniumsdk.com) mobile app (iOS & Android) built using [**PurgeTSS**](https://purgetss.com) and, of course, showcasing the components from our [**TiKit UI**](https://purgetss.com/tikit/) library.

We've built the entire demo using **TiKit Components** so you can get a feel for them. The content you see (like text and images) is mostly hard-coded right in the `alloy.js` file – just to keep things simple for the demo. In your own apps, you'd typically hook these components up to real data using Alloy/Backbone Collections or by fetching data from your APIs.

## Getting Started 🚀

Ready to check it out? Here’s how:

1.  **Prerequisites**: Make sure you have the [Titanium SDK](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_Getting_Started/) and [Node.js](https://nodejs.org/) (which includes npm) set up on your machine.
2.  **Install PurgeTSS**: If you haven't already, you'll need the PurgeTSS command-line tool:
    ```bash
    npm install -g purgetss
    ```
3.  **Get the Code**: Clone this repository to your local machine:
    ```bash
    git clone <repository_url>  # Replace <repository_url> with the actual URL
    cd <repository_directory>   # Move into the project folder
    ```
4.  **Install Dependencies** (if any are defined in package.json):
    ```bash
    npm install
    ```
5.  **Build and Run**: Use the Titanium CLI to build and run the app on your simulator/emulator or a connected device:
    ```bash
    # For iOS Simulator:
    ti build -p ios -T simulator

    # For Android Emulator/Device:
    ti build -p android -T device
    ```

## What's Inside? ✨

This demo app showcases several core TiKit components in action:

### Alerts

See how TiKit handles those important pop-up messages for information or confirmation.

<p align="center">
  <img src="./purgetss/images/1. alerts.png" width="480" alt="iOS Alerts Demo Screen">
</p>

### Avatars

Check out the different styles for representing users or entities with images/icons.

<p align="center">
  <img src="./purgetss/images/2. avatars.png" width="480" alt="iOS Avatars Demo Screen">
</p>

### Buttons

Explore the various button styles TiKit offers for user interactions and actions.

<p align="center">
<img src="./purgetss/images/3. buttons.png" width="480" alt="iOS Buttons Demo Screen">
</p>

### Cards

See how you can group and display information neatly using TiKit's card components.

<p align="center">
<img src="./purgetss/images/4. cards.png" width="480" alt="iOS Cards Demo Screen">
</p>

### Tabs

Look at how TiKit helps organize content into navigable sections using styled tabs.

<p align="center">
<img src="./purgetss/images/5. tabs.png" width="480" alt="iOS Tabs Demo Screen">
</p>
