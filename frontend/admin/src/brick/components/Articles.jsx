import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import matt from '../assets/images/catalan2.jpg'
import Button from 'sq-web-components-core-react/forms/Button'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Dialog, {DialogHeader, DialogContent, DialogFooter  } from 'sq-web-components-core-react/collections/Dialog'
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import Checkbox from 'sq-web-components-core-react/forms/Checkbox'
import List, { ListItem } from "sq-web-components-core-react/collections/List"
import Badge from "sq-web-components-core-react/elements/Badge"
import {IconMoreHorizontal} from "sq-web-icons"

class Articles extends Component {
    
    constructor() {
        super()
        this.state = {articles: []}
    }

    componentWillMount() {
        this.props.registerBrickView(this.props.location.pathname, this.props.history)
    }

    async componentDidMount() {
        if (this.state.articles.length  == 0) {
            let response
            try {
                response = await fetch('api/brick/redactor/articles')
            } catch(err) {
                console.log(err)
            }
            if (response.status === 200) {
                let articles
                try {
                    articles = await response.json()
                    this.setState({articles: articles})
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }


    getArticlesComponents = () => {
        return this.state.articles.map( (article, index) => {
            return (
                <ListItem key={index}>
                    <Badge level="success"></Badge> { article.title }
                </ListItem>
            )
        })
    }

    render() {
        return (
            <Row>
                <RowItem>
                    <Link to={ 'admin/article/' } >
                        <Button block size="large">Write an Article</Button>
                    </Link>
                </RowItem>
                <RowItem>
                    <List divided size="large"> 
                        <ListItem style={{fontSize: "0.9rem", textAlign: "right"}}>
                            <Badge size="small" level="success"></Badge> published
                            &nbsp;
                            <Badge size="small" level="info"></Badge> draft
                        </ListItem>
                        {this.getArticlesComponents()}
                    </List>
                </RowItem>
                <RowItem style={{fontSize: "2em", textAlign: "center"}}>
                    <IconMoreHorizontal/>
                </RowItem>
            </Row>
        )
    }
}

export default Articles



