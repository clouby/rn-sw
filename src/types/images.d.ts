declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png' {
  const value: import('react-native').ImageSourcePropType
  export default value
}
