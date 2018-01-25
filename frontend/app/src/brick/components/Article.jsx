import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Badge from 'sq-web-components-core-react/elements/Badge'
import {IconSentimentSatisfied, IconSentimentNeutral, IconSentimentDissatisfied, IconArrowup } from "sq-web-icons"
import MediaObject, {MediaObjectMedia, MediaObjectImage,MediaObjectContent} from "sq-web-components-core-react/collections/MediaObject"
import List, { ListItem } from "sq-web-components-core-react/collections/List"

import '../assets/styles.css'
import '../assets/custom.css'

class Article extends Component {

    constructor(props) {
        super(props)
        this.state = { cover: "", title:"", content: "",  date: "", view: 0, trending: [] }
    }

    componentWillMount() {
        this.props.setBackButton('/articles', this.props.history)
        window.scrollTo(0, 0);
    }

    async componentDidMount() {
        const articleId = this.props.match.params.id
        if (articleId) { 
            await this.fetchArticle(articleId)
        }
        await this.incrementViews(articleId)
        await this.fetchTrending(articleId)
    }

    incrementViews = async (id) => {
        let response
        try {
            response = await fetch('http://' + ((process.env.NODE_ENV !== "production") ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/article/views/' + id, {method: "PUT", body: JSON.stringify({"id": id})})
        } catch(err) {
            console.log(err)
        }
        console.log(response)
    }


    fetchArticle = async (id) => {
        let response
        try {
            response = await fetch('http://' + ((process.env.NODE_ENV !== "production") ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/article/' + id)
        } catch(err) {
            console.log(err)
        }
        if (response.status === 200) {
            try {
                const article = await response.json()
                this.setState( { cover: article[0].cover, title: article[0].title, content: article[0].content,  date: article[0].createdAt, views:  article[0].views } )
            } catch (err) {
                console.log(err)
            }
        }
    }

    fetchTrending = async (id) => {
        let response
        try {
            response = await fetch('http://' + ((process.env.NODE_ENV !== "production") ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/public/trending')
        } catch(err) {
            console.log(err)
        }
        if (response.status === 200) {
            try {
                const trending = await response.json()
                this.setState( { trending: trending } )
            } catch (err) {
                console.log(err)
            }
        }
    }
    
    render() {
        
        const trending = this.state.trending.map( (article, index) =>  (<ListItem key={index} className="trending-list-item">   
                            <a href={ '/article/' + article._id } >    
                                <Heading size="large" style={{marginBottom: "1rem"}}>{article.title}</Heading>
                                {article.intro}
                            </a>
                        </ListItem>))


        let articleContent = this.state.content
        const REGEX_REMOVE_IMG = /<img[^>]+\>/i
        articleContent = articleContent.replace(REGEX_REMOVE_IMG, '')

        return (
       
            <div className="article">
                <img className="article-cover" src={ this.state.cover }/>
                <Card>
                    <CardItem>
                        <Heading size="xlarge" className="article-title" >{ this.state.title  }</Heading>
                        <Heading size="small">{ this.state.date }</Heading>
                    </CardItem>
                    <CardItem className="article-content" dangerouslySetInnerHTML={ {__html: articleContent} }>
                    </CardItem>
                    {/*<CardItem className="article-sentiment">
                        <Heading size="medium">What's your reaction to that article?</Heading>
                        <IconSentimentSatisfied/>
                        <IconSentimentNeutral/>
                        <IconSentimentDissatisfied/>
                    </CardItem>*/}

                    <br/>
                    <Heading size="large" style={{ paddingLeft: "0.6rem", borderBottom: "0.05rem solid lightgray", marginBottom: "1rem", marginTop: "3rem"}}>Most Read</Heading>
                    <List horizontal style={{marginBottom: "10rem", paddingBottom: "1rem", borderBottom: "0.05rem solid lightgray"}}>
                        { trending }
                    </List> 

                </Card>
               
            </div>
          
        
        )       
  }
}

export default Article



