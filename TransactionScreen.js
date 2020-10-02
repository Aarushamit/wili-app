import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      scannedData: "",
      buttonState: "normal",
    };
  }
  getCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      hasCameraPermission: status === "granted",
      buttonState: "clicked",
      scanned: false,
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    console.log("handle function executed");
    this.setState({
      scannedData: data,
      buttonState: "normal",
      scanned: true,
    });
  };
  render() {
    const hasCameraPermission = this.state.hasCameraPermission;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;
    if (buttonState === "clicked" && hasCameraPermission) {
      console.log("scan started");
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    } else if (buttonState === "normal") {
      return (
        <View style={styles.container}>
          <Text style={styles.displayText}>
            {hasCameraPermission === true
              ? this.state.scannedData
              : "request camera permission"}
          </Text>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={this.getCameraPermission}
          >
            <Text> scan QR code </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  displayText: {
    fontSize: 15,
    textDecorationLine: "underline",
  },

  scanButton: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
  },
});
