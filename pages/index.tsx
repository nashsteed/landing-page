import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Button, Text } from "@nextui-org/react";
import { Container, Navbar, Grid, Col } from '@nextui-org/react';
import InfoCard from '@/components/infocard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      {/* Navbar */}
        <Navbar isCompact variant={"static"}>
          <Navbar.Brand>
            <Text b color = "inherit">
              Kev's Studio
            </Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link href="#">Equipment</Navbar.Link>
            <Navbar.Link href="#">Projects</Navbar.Link>
            <Navbar.Link href="#">Discography</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link href="#">Login</Navbar.Link>
            <Navbar.Item>
                <Button auto flat href="#">Sign Up</Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height":"500px","backgroundImage":"url(https://littlevisuals.co/images/eyjafjallajokull.jpg)"}}>
        <Grid xs={12} sm={6} alignItems="center">
            <Col css={{"width":"100%"}}>
                <Text b size={70} css={{"textAlign":"center"}}>
                      The Front Man Of Tame Impala
                </Text>
                <Button size="md" shadow color="gradient" css={{"width":"100%","marginTop":"10px"}}>
                  Tour Studio
                </Button>
            </Col>
        </Grid>
      </Grid.Container>

      {/* 3 Displaying Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard title={'Synths'} label={'Equipment'} imageURL={'https://littlevisuals.co/images/switch.jpg'} extra={"JUNO-106,Prophet"}></InfoCard>
        </Grid>

        <Grid xs={12} sm={4}>
          <InfoCard title={'Microphones'} label={'Equipment'} imageURL={'https://littlevisuals.co/images/switch.jpg'} extra={"JUNO-106,Prophet"}></InfoCard>
        </Grid>

        <Grid xs={12} sm={4}>
          <InfoCard title={'Monitors'} label={'Equipment'} imageURL={'https://littlevisuals.co/images/switch.jpg'} extra={"JUNO-106,Prophet"}></InfoCard>
        </Grid>

      </Grid.Container>

    </Container>
  )
}
