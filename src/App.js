import "./main.css";


import {
  Box,
  Carousel,
  Image,
  Text,
  Heading, 
  TextInput,
  Button,
} from "grommet";
import { Google } from "grommet-icons";

function App() {
  return (
    <div className="App">
      <Box direction="row" height="100vh">
        <Box width="60%">
          <Carousel controls={false} play={3000} height="100vh">
            <Image
              fit="cover"
              src="https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Image
              fit="cover"
              src="https://plus.unsplash.com/premium_photo-1679511007776-82c965681dbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Image
              fit="cover"
              src="https://images.unsplash.com/photo-1519645684540-1608e44df582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            />
          </Carousel>
        </Box>

        <Box
          width="40%"
          height="100vh"
          pad="xlarge"
          background="light-3"
          justify="center"
        >
          <Box width="80%" fill="horizontal" align="center">
            <Box as="span" fill="horizontal">
              <Heading
                responsive={true}
                textAlign="start"
                size="xsmall"
                margin="none"
                color="#1F0892"
              >
                Create an account
              </Heading>
              <Text
                textAlign="start"
                size="14px"
                margin={{
                  vertical: "10px",
                }}
              >
                Let's get started with your 30 day free trial
              </Text>
            </Box>

            <Box
              margin={{
                vertical: "2em",
              }}
              fill="horizontal"
            >
              <Button
                margin={{
                  vertical: ".5em",
                }}
              >
                <TextInput placeholder="Name" size="14px" />
              </Button>
              <Button
                margin={{
                  vertical: ".5em",
                }}
              >
                <TextInput placeholder="Email" type="email" size="14px" />
              </Button>
              <Button
                margin={{
                  top: ".5em",
                  bottom: "2em",
                }}
              >
                <TextInput placeholder="Password" type="password" size="14px" />
              </Button>

              <Button
                primary
                label="Create account"
                margin={{
                  vertical: ".5em",
                }}
                color="#1F0892"
                style={{
                  padding: ".5em",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              />
              <Button
                icon={<Google />}
                label="Sign up with Google"
                style={{
                  padding: ".5em",
                  borderRadius: "8px",
                  fontSize: "14px",
                  borderColor: "#AEAFB860",
                  color: "#4285F4",
                }}
                margin={{
                  bottom: "1.5em",
                }}
              />

              <Box as="span">
                <Text
                  size="14px"
                  color="#4285F4"
                  textAlign="center"
                  fontWeight="600"
                >
                  Already have an account?{" "}
                  <Button
                    href="/"
                    style={{ fontWeight: "700", color: "#1F0892" }}
                  >
                    Log in
                  </Button>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
