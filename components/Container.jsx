import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

export default function Container({ children }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView vertical={true}>{children}</ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
