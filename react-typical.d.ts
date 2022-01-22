declare module 'react-typical' {
  interface TypicalProps {
    steps: (string | number)[];
    wrapper: string;
    loop: number;
  }
  declare const Typical: React.FC<TypicalProps>;

  export default Typical;
}