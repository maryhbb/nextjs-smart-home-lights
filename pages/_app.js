import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  {
    name: "Living Room",
    isOn: false,
  },
  {
    name: "Kitchen",
    isOn: true,
  },
  {
    name: "Bedroom",
    isOn: false,
  },
  {
    name: "Bathroom",
    isOn: true,
  },
  {
    name: "Garage",
    isOn: true,
  },
  {
    name: "Porch",
    isOn: false,
  },
  {
    name: "Garden",
    isOn: false,
  },
  {
    name: "Office",
    isOn: true,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function setAllLights(value) {
    return setLights((lights) =>
      lights.map((light) => ({ ...light, isOn: value }))
    );
  }

  function toggleLight(name) {
    setLights((lights) =>
      lights.map((light) => {
        return light.name === name ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  const isOnCount = lights.reduce(
    (onCount, light) => (light.isOn ? onCount + 1 : onCount),
    0
  );

  return (
    <Layout isDimmed={isOnCount === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        setAllLights={setAllLights}
        isOnCount={isOnCount}
      />
    </Layout>
  );
}
