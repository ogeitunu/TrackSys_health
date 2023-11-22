import React from "react";
import CustomScrollbar from "grommet"; // Import custom scrollbar component
import { Sidebar, Avatar, Button, Nav, Icons,  } from "grommet";

const MyComponent = () => {
  return (
    <div>
      <CustomScrollbar>
        {
          <Sidebar
            background="brand"
            round="small"
            header={
              <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            }
            footer={<Button icon={<Icons.Help />} hoverIndicator />}
          >
            <Nav gap="small">
              <Button icon={<Icons.Projects />} hoverIndicator />
              <Button icon={<Icons.Clock />} hoverIndicator />
            </Nav>
          </Sidebar>
        }
      </CustomScrollbar>
    </div>
  );
};

export default MyComponent;
