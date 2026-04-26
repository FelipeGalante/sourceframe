import type { ComponentPropsWithoutRef } from "react";

export function TableWrapper(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="pm-table-scroll">
      <table {...props} />
    </div>
  );
}
