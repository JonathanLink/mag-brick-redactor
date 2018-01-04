import React, { Component } from 'react'
import Button from 'sq-web-components-core-react/forms/Button'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Dialog, {DialogHeader, DialogContent, DialogFooter  } from 'sq-web-components-core-react/collections/Dialog'
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import Checkbox from 'sq-web-components-core-react/forms/Checkbox'


class Home extends Component {
  render() {
    return (
        <div>
            <Row>
                <RowItem xs={12}>
                    <Button block variant="primary" >Primary</Button>
                </RowItem>
            </Row> 
            <Row>   
                <RowItem xs={12}>
                    <Card>
                        <CardItem>
                            <Heading size="large">Quick introduction</Heading>
                        </CardItem>
                        <CardItem>
                            <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                        </CardItem>
                        <CardActions>
                            <Button variant="text">Share</Button>
                            <Button variant="text">View report</Button>
                        </CardActions>
                    </Card>
                </RowItem>
            </Row>
            <Row>
                <RowItem sm={6}> 
                    <Checkbox name="checkbox-1" isSwitch>Checkbox label 1</Checkbox>
                </RowItem>
                <RowItem sm={6}> 
                    <Checkbox name="checkbox-1" isSwitch>Checkbox label 2</Checkbox>
                </RowItem>
            </Row>
            <Row>   
                <RowItem xs={12}>
                    <Card>
                        <CardItem>
                            <Heading size="large">Quick introduction</Heading>
                        </CardItem>
                        <CardItem>
                            <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                        </CardItem>
                        <CardActions>
                            <Button variant="text">Share</Button>
                            <Button variant="text">View report</Button>
                        </CardActions>
                    </Card>
                </RowItem>
            </Row>
            <Row>   
                <RowItem xs={12}>
                    <Card>
                        <CardItem>
                            <Heading size="large">Quick introduction</Heading>
                        </CardItem>
                        <CardItem>
                            <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                        </CardItem>
                        <CardActions>
                            <Button variant="text">Share</Button>
                            <Button variant="text">View report</Button>
                        </CardActions>
                    </Card>
                </RowItem>
            </Row>
        </div>     
    )
  }
}

export default Home



