interface Props {
  params: { id: number };
}

const page = ({ params: { id } }: Props) => {
  return <div> user {id}</div>;
};

export default page;
