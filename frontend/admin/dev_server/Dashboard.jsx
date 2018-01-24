import React, { Component } from 'react'
import Heading from 'sq-web-components-core-react/elements/Heading'
import {IconEditmode, IconSave} from "sq-web-icons"
import List, { ListItem } from "sq-web-components-core-react/collections/List"
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import Form, {
  FormItem,
  FormAddon,
  FormActions
} from "sq-web-components-core-react/forms/Form"
import Input from "sq-web-components-core-react/forms/Input"
import Button from "sq-web-components-core-react/forms/Button"
import ButtonGroup from "sq-web-components-core-react/forms/ButtonGroup"


class Dashboard extends Component {

    constructor(props) {
        super(props)
       
    }

    render() {
        
        return (
            <Row>
               <Heading>Dashboard</Heading>
            </Row> 
        )
  }
}

export default Dashboard



