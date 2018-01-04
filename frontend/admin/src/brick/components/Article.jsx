import React, { Component } from 'react'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Badge from 'sq-web-components-core-react/elements/Badge'
import {IconEditmode, IconSave} from "sq-web-icons"
import MediaObject, {MediaObjectMedia, MediaObjectImage,MediaObjectContent} from "sq-web-components-core-react/collections/MediaObject"
import List, { ListItem } from "sq-web-components-core-react/collections/List"
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import Form, {
  FormItem,
  FormAddon,
  FormActions
} from "sq-web-components-core-react/forms/Form"
import Input from "sq-web-components-core-react/forms/Input"
import Textarea from "sq-web-components-core-react/forms/Textarea"
import Button from "sq-web-components-core-react/forms/Button"
import ButtonGroup from "sq-web-components-core-react/forms/ButtonGroup"

class Article extends Component {

    constructor(props) {
        super(props)
        //this.publish = this.publish.bind(this)
    }

    publish = async() => {
        let request
        try {
            request = await fetch('http://' + location.host + '/api/brick/redactor/article', {method: "POST", body: JSON.stringify({title: "test"}) })
        } catch(err) {
            console.log(err)
        }
        console.log(request)
    }

    componentWillMount() {
        this.props.registerBrickView(this.props.location.pathname, this.props.history)
    }

    render() {
        
        return (
            <Row>
                <RowItem>
                    <FormItem>
                        <Input style={ {fontSize: "1.2rem", fontWeight: "bold"} } size="large" name="article-title" placeholder="Type the headline of your article here" />
                    </FormItem>
                    <FormItem>
                        <Textarea size="large" />
                    </FormItem>
                </RowItem>
                <RowItem style={ {textAlign: "center"} }>
                    <ButtonGroup>
                        <Button>Insert Text</Button>
                        <Button>Insert Image</Button>
                        <Button>Insert Video</Button>
                    </ButtonGroup>
                </RowItem>
                <RowItem style={ {float: "right", marginTop: "3rem"} }>
                    <ButtonGroup>
                        <Button>Save for later</Button>
                        <Button level="success" onClick={ this.publish } >Publish</Button>
                    </ButtonGroup>
                </RowItem>
            </Row>
        )       
  }
}

export default Article



