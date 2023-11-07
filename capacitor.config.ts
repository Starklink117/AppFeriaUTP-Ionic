import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.feriaUTP',
  appName: 'Feria UTP',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    "cleartext": true
  }
};

export default config;
