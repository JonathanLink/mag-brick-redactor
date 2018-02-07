import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Button from 'sq-web-components-core-react/forms/Button'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Dialog, {DialogHeader, DialogContent, DialogFooter  } from 'sq-web-components-core-react/collections/Dialog'
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import Checkbox from 'sq-web-components-core-react/forms/Checkbox'
import List, { ListItem } from "sq-web-components-core-react/collections/List"
import Badge from "sq-web-components-core-react/elements/Badge"
import {IconMoreHorizontal} from "sq-web-icons"
import { say }  from "cowsay"

import '../assets/styles.css'

import brick from '../brick.json'

class Articles extends Component {
    
    constructor() {
        super()
        console.log(say({text: "hey"}))
        this.state = {articles: []}
    }

    componentWillMount() {
        this.props.setBackButton(false)
    }

    async componentDidMount() {
        if (this.state.articles.length  == 0) {
            let response
            try {
                response = await fetch('http://' + brick.basePath + '/api/brick/redactor/articles')
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
                    <Badge level={ (article.isPosted) ? "success": "info" }></Badge> <Link to={"/redactor/article/" + article._id}>{ article.title }</Link>
                </ListItem>
            )
        })
    }

    render() {
        return (
            <Row>
                <RowItem style={ { textAlign: "right"} } >
                    <Link to={ '/redactor/article/' } >
                        <Button level="success">Write an Article</Button>
                    </Link>
                </RowItem>
                <RowItem style={{ marginTop: "5rem"}} >
                    <List divided size="large" className="articles-list"> 
                        <ListItem style={{fontSize: "0.9rem", textAlign: "left"}}>
                            <Badge size="small" level="success"></Badge> published
                            &nbsp;
                            <Badge size="small" level="info"></Badge> draft
                        </ListItem>
                        { this.getArticlesComponents() }
                    </List>
                </RowItem>
            </Row>
        )
    }
}

export default Articles



