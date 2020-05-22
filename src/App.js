import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
// This is a poc of how to pull request
export default function App() {
  return (
    <div className="App">
      <Badge text="IRL" color={colors.purple} />
      <Badge text="IRL" color={colors.grey} />
    </div>
  );
}
