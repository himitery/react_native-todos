# React Native Todos

### ⚙ Install

#### ✔ Chocolatey

    > Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

#### ✔ Node JS

    > choco install -y nodejs.install

    > node --version
    > npm  --version

#### ✔ React Native CLI

    > npm install --global react-native-cli

#### ✔ JDK

    > choco install -y jdk15

    > java  --version
    > javac --version

#### ✔ Android Studio

    https://developer.android.com/studio

##### SDK Settings

    Configure > SDK Manager

    Android SDK Platform 29
    Intel x86 Atom System Image
    Google APIs Intel x86 Atom System Image
    Google APIS Intel x86 Atom_64 System Image

##### Environment Variables

    ANDROID_HOME: C:\Users\{user name}\AppData\Local\Android\Sdk

    Path: C:\Users\{user name}\AppData\Local\Android\Sdk\platform-tools

---

### ⚙ Create Project

    > react-native init {App name}

    > cd ".\{App name}"

    > npm run android
