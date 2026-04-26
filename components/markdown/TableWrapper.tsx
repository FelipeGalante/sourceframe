import type { ComponentPropsWithoutRef } from "react";
import { jsx } from "react/jsx-runtime";

export function TableWrapper(props: ComponentPropsWithoutRef<"table">) {
  return jsx("div", {
    className: "pm-table-scroll",
    children: jsx("table", { ...props }),
  });
}
