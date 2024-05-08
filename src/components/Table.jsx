import React, { useState } from "react";
import { Table, ScrollArea } from "@mantine/core";
import cx from "clsx";

const data = [
  {
    name: "Athena Weissnat",
    company: "Little - Rippin",
    email: "Elouise.Prohaska@yahoo.com",
  },
  // rest of the data...
];

export default function TableScroll() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{row.company}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700}>
        <Table.Thead
          className={cx(
            "sticky",
            "top-0",
            "bg-gray-100", // Tailwind CSS equivalent of '--mantine-color-body'
            "transition-shadow",
            "header", // Using direct class names for Tailwind CSS and CSS module
            { scrolled }
          )}
          style={{ boxShadow: scrolled ? "var(--mantine-shadow-sm)" : "none" }}
        >
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Company</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
