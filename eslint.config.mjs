import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "react-hooks/static-components": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
