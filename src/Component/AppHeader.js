import { Header, Button, Menu, Icons } from "grommet";

const AppHeader = () => {
  return (
    <Header background="brand">
      <Button icon={<Icons.Home />} hoverIndicator />
      <Menu label="account" items={[{ label: "logout" }]} />
    </Header>
  );
};

export default AppHeader;
