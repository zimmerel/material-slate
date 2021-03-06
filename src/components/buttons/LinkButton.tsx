import { ToggleButton } from "./ToggleButton";
import React from "react";
import { useSlate } from "slate-react";
import { ButtonProps } from "@material-ui/core";
import { insertLink, isLinkActive } from "../../plugins";

type Props = ButtonProps;

export default function LinkButton(props: Props): JSX.Element {
  const { children, ...buttonProps } = props;
  const editor = useSlate();

  return (
    <ToggleButton
      value={"link"}
      selected={isLinkActive(editor)}
      onMouseDown={(e) => {
        e.preventDefault();
        // FIXME use dialog instead
        // needed to use prompt so that the selected text would stay the same
        const url = window.prompt("Enter the URL for the link:", "http://");
        if (url) {
          insertLink(editor, url);
        }
      }}
      {...buttonProps}
    >
      {children}
    </ToggleButton>
  );
}
