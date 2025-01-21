type HeadingProps = {
  level: number;
  children: string;
};

export default function Heading({ level, children }: HeadingProps): any {
  try {
    if (level < 1 || level > 6) {
      throw new Error("level prop value must be in the range [1:6]")
    }
    const Tag: string = "h" + level;
    return <Tag>{children}</Tag>;
  } catch(e: any) {
    console.error(e.message);
  }
}
