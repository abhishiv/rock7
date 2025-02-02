/** @jsx h **/

import { h, component } from "../../dom";
import { rmNodes } from "../../dom/api";
import { ComponentTreeStep, VElement } from "../../dom/types";

export type PortalProps = {
  mount?: HTMLElement;
  children: VElement;
};

export const Portal = component<PortalProps>(
  "Portal",
  (props, { onUnmount, step: parentStep }) => {
    onUnmount((step: any) => {
      if (step && step.dom) rmNodes(step.dom);
    });
    (parentStep as ComponentTreeStep).mount = props.mount;
    return props.children;
  }
);
