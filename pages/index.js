import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div>
      Hello world :)
      <Throws />
    </div>
  );
}

function Throws() {
  throw new Error("Some failure");

  return <div>The error component</div>;
}

// You can wrap the <Throws /> component in this to see it happen on both SSR and non-SSR errors.
function BrowserOnly({ children }) {
  console.log("Browser only");
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    setShouldRender(true);
  }, []);

  return shouldRender ? <>{children}</> : null;
}
