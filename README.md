# 🌿 Plantora — AI Cassava Health Diagnostics

**Plantora** is a high-performance mobile application designed for the automated detection of cassava pathologies using computer vision and on-device machine learning. By embedding the AI directly into the **Plantora** workflow, the system provides offline, real-time diagnostics for farmers and extension workers.

## Overview

The system enables users to capture leaf images and receive instantaneous diagnostic feedback. Built with a focus on **Edge Intelligence**, it eliminates the need for cloud dependency, making it ideal for remote agricultural zones with limited internet connectivity.

### Supported Pathologies

The model is trained to identify and classify the following conditions:

- [Cassava Mosaic Disease - CMD](https://en.wikipedia.org/wiki/Cassava_mosaic_viruses)
- [Cassava Green Mottle - CGM](https://en.wikipedia.org/wiki/Cassava_green_mottle_virus)
- [Cassava Brown Streak Disease - CBSD](https://en.wikipedia.org/wiki/Cassava_green_mottle_virus)
- [Cassava Bacterial Blight - CBB](https://en.wikipedia.org/wiki/Bacterial_blight_of_cassava)
- Healthy Cassava Leaves

## 📱Features

- 📸 Scan plant leaves using camera
- 🖼️ Upload images from gallery
- 🧠 AI-powered disease detection
- 📊 Health analysis and confidence score
- ⚡ Fast and simple user experience
- 🎯 Designed for farmers and agricultural use

## 🛠️ Tech Stack

- React Native (Expo)
- Expo Router
- Reanimated (animations)
- Expo Camera
- Image Picker
- TensorFlow Lite
- MobileNetV2
- Data Source - Kaggle

## ⚙️ Installation

1. Clone the repository

   ```bash
   git clone <https://github.com/hymmns/plantora.git>
   cd plantora
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```

## 👤 Author

Taiwo Sholadoye
