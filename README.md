# react-native-anonymous-login
Example repository for [Anonymous login in React Native using Firebase](https://enappd.com/blog/anonymous-login-in-react-native-apps-with-firebase/129/)

# Welcome to Enappd

**Enappd** provides you latest app starters and free app starters to get your app up and running. We are on our mission to reduce the time taken to develop an average app. In this mission our goals are 

- Create an app store with countless number of App starters with production quality
- Create an open marketplace for every developer to share their starters for others - Free or Paid
- Create awesome SaaS products and apps to drastically reduce the time required to create an app from scratch


# Development configuration 

## MacOS

```
brew update 
brew install nvm
mkdir ~/.nvm
source ~/.zshrc
nvm install 18
nvm use 18
````

Then I had an error React Native packager.sh: line 11: node: command not found so I have followed the stackoverflow answer:  

```
ln -s $(which node) /usr/local/bin/node
```

# MacOS to target android 

Check that inside Android Studio/Android SDK Manager the following modules are installed:  

Android SDK Tool  
Android SDK Platform-tools  
Android SDK Build-tools  

edit your shell profile (.bashrc, .zshrc, ...) with the following lines:  

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
source $HOME/.zshrc
```

Test with :  
`npx expo start` if using expo  
or  
`npx react-native run-android`







