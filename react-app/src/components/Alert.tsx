interface Props {
  children: string;
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-oprimary">{children}</div>;
};

export default Alert;
