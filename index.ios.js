import { NativeModules, NativeAppEventEmitter } from "react-native";

const { SpotlightSearch } = NativeModules;

SpotlightSearch.searchItemTapped = callback =>
  NativeAppEventEmitter.addListener("spotlightSearchItemTapped", callback);
//SpotlightSearch.getInitialSearch = () => SpotlightSearch.getInitialSearch();
export default SpotlightSearch;
