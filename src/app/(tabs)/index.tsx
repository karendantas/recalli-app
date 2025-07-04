import { Home } from "@/components/Screens/Home";
import {
  configureNotificationsChannel,
  requestNotificationsPermissions,
} from "@/services/notifications";
import { useEffect } from "react";

export default function Screen() {
  useEffect(() => {
    configureNotificationsChannel();
    requestNotificationsPermissions();
  }, []);
  return <Home />;
}
