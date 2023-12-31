import { Provider } from "react-redux";

import { store } from "./store";

export const StoreProvider = (props: WithChildren) => {
  return <Provider store={store} {...props} />;
};
