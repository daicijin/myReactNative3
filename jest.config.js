module.exports = {
  preset: "@testing-library/react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    uuid: require.resolve('uuid'),  // <- 追加
  },
};
