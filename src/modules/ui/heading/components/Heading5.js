/** @jsx jsx */

import { jsx } from "theme-ui";
import { Text } from "theme-ui";

export default function Heading5(props) {
  return (
    <Text
      as="h5"
      sx={{
        mb: "32px",
        fontSize: "20px",
        fontWeight: "normal",
        lineHeight: "normal",
      }}
      {...props}
    />
  );
}
