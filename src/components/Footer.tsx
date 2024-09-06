import { Text } from "@mantine/core";
import { Footerprops } from "@lib/types";

export default function Footer({ year , name , studentId } : Footerprops) {
  return (
    <Text ta={"center"} my={"sm"} c={"gray"} size="sm">
    Copyright © {year} {name} {studentId}
  </Text>
  );
}
