interface TypewriterProps {
  content?: string;
  classNames: string;
}

export const Typerwriter = ({ content, classNames }: TypewriterProps) => {
  return <div className={classNames}>{content}</div>;
};
