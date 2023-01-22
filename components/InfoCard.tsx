import type { NextPage } from "next";
import {Card, Text, Row, Col, Button} from "@nextui-org/react"

interface Props{
    title: string;
    label: string;
    imageURL: string;
    extra: string;
}

const InfoCard : NextPage<Props> = (props) =>{
    const {title,label,imageURL,extra} = props;
    return (
        <Card>
            <Card.Header css={{position:"absolute",top:5}}>
                <Col>
                    <Text b size={12} transform="uppercase" color="#ffffffAA">
                        {label}
                    </Text>
                    <Text h4 color="white">
                        {title}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image src={imageURL}></Card.Image>
            <Card.Footer
                isBlurred
                css={{position: "absolute", bgBlur:"f111466",bottom:0 }}
            >
                <Row>
                    <Col>
                        <Text color="d1d1d1" size={18}> {extra}</Text>
                    </Col>
                    <Col>
                    <Row justify="flex-end">
                        <Button flat auto rounded color="primary">
                            <Text b css={{color:"inherit",size:12,transform:"uppercase"}}>
                                See Gear
                            </Text>
                        </Button>
                    </Row>
                    </Col>
                </Row> 
            </Card.Footer>
        </Card>
    )
}

export default InfoCard;