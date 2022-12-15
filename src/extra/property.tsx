export const getPropertyDescriptor = () => {
  const users: Record<string, string | number> = {
    name: "Nabin saud",
    age: 19,
    email: "nabin@gmail.com",
  };

  const getProperty = Object.getOwnPropertyDescriptor(users, "name");
  console.log(getProperty);

  //   jsx
  // <p>{ JSON.stringify(getProperty)}</p>
};
