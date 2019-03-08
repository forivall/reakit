import * as React from "react";

export type unstable_HiddenState = {
  /** Tell whether it's visible or not */
  visible: boolean;
};

export type unstable_HiddenActions = {
  /** Change the `visible` state to `true` */
  show: () => void;
  /** Change the `visible` state to `false` */
  hide: () => void;
  /** Toggle the `visible` state */
  toggle: () => void;
};

// TODO: Accept function for the entire options or for each value
export type unstable_HiddenStateOptions = Partial<unstable_HiddenState>;

export type unstable_HiddenStateReturn = unstable_HiddenState &
  unstable_HiddenActions;

export function useHiddenState({
  visible: initialVisible = false
}: unstable_HiddenStateOptions = {}): unstable_HiddenStateReturn {
  const [visible, setVisible] = React.useState(initialVisible);

  const show = () => {
    if (!visible) setVisible(true);
  };

  const hide = () => {
    if (visible) setVisible(false);
  };

  const toggle = () => setVisible(!visible);

  return {
    visible,
    show,
    hide,
    toggle
  };
}

const keys: Array<keyof unstable_HiddenStateReturn> = [
  "visible",
  "show",
  "hide",
  "toggle"
];

useHiddenState.keys = keys;