import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Trader Community";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Update Trader Details",
        icon: "utility:edit",
      },
      {
        label: "View status changes.",
        icon: "utility:refresh",
      },
      {
        label: "Update your payment details",
        icon: "utility:money",
      },
    ];
  }
}
