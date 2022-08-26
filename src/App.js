import { useState, useEffect } from "react";
import "./styles.css";
import { Sum } from "./operators/components/sum";
import { Equal } from "./operators/components/equal";
import { Subtract } from "./operators/components/Subtract";
import { Multiplication } from "./operators/components/multiplication";
import { Div } from "./operators/components/div";
import skeletonIf from "./skeletons/ifSkeleton.json";
import Box from "@mui/material/Box";

export default function App() {
  const [conditional, setConditional] = useState(skeletonIf);

  return (
    <div className="App">
      <Box style={{ margin: "10px" }}>
        <Sum />
      </Box>
      <Box style={{ margin: "10px" }}>
        <Equal />
      </Box>
      <Box style={{ margin: "10px" }}>
        <Subtract />
      </Box>
      <Box style={{ margin: "10px" }}>
        <Multiplication />
      </Box>
      <Box style={{ margin: "10px" }}>
        <Div />
      </Box>
    </div>
  );
}
