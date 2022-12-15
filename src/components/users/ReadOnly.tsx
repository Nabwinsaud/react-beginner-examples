export type UserProps = {
  name: string;
  age: string;
  address?: {
    city: string;
    zipcode: string;
  };
  gender: "male" | "female" | "others" | "prefer not to say";
};
export default function ReadOnly(props: Readonly<UserProps>) {
  return (
    <div>
      <ReadOnlyExample {...props} />
    </div>
  );
}

const ReadOnlyExample = ({ name, age, address, gender }: UserProps) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{address?.city}</p>
    </div>
  );
};
