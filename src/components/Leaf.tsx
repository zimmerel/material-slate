// import { makeStyles } from "@material-ui/core";
import React from "react";
import type { Text } from "slate";
import type { RenderLeafProps } from "slate-react";

// const useStyles = makeStyles({
//   fill: {
//     backgroundColor: (props: { fill?: boolean }) => {
//       return props.fill ? "yellow" : "";
//     },
//   },
// });

export interface LeafProps extends RenderLeafProps {
  leaf: Text;
}

export function Leaf(props: LeafProps): JSX.Element {
  const { attributes, leaf } = props;
  let { children } = props;

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = (
      <pre>
        <code>{children}</code>
      </pre>
    );
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.fill) {
    children = <span style={{ backgroundColor: leaf.fill }}>{children}</span>;
  }

  return <span {...attributes}>{children}</span>;
}

export default Leaf;
