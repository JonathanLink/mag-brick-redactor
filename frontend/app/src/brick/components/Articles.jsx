import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Button from 'sq-web-components-core-react/forms/Button'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Dialog, {DialogHeader, DialogContent, DialogFooter  } from 'sq-web-components-core-react/collections/Dialog'
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import Checkbox from 'sq-web-components-core-react/forms/Checkbox'
import Badge from 'sq-web-components-core-react/elements/Badge'

import '../assets/styles.css'
import '../assets/custom.css'

class Articles extends Component {
    
    constructor() {
        super()
        this.state = {articles: []}
    }

    componentWillMount() {
        this.props.registerBrickView(this.props.history, true)
    }

    async componentDidMount() {
        if (this.state.articles.length  == 0) {
            let response
            try {
                response = await fetch('http://' + ((process.env.NODE_ENV !== "production") ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/public/articles')
            } catch(err) {
                console.log(err)
            }
            if (response.status === 200) {
                let articles
                try {
                    articles = await response.json()
                } catch (err) {
                    console.log(err)
                }
                this.setState({articles: articles})
            }
        }
    }


    getArticlesComponents = () => {

        // sort 'most read' articles and get the first three of them
        var trending = this.state.articles.slice()
        trending = trending.sort((a,b) => {
            a.views = (!a.views) ? 0 : a.views
            b.views = (!b.views) ? 0 : b.views
            return b.views - a.views
        }).map( a => a._id).slice(0, 3)

        return this.state.articles.map( (article, index) => {

            var xs = 12, sm = 4, md = 4
            if (index === 0) {
                sm = 12
                md = 8
            } else if (index === 1) {
                md = 4
            }
        
            let coverImage = (article.cover) ? <CardMedia src={ article.cover } /> : ""

            let trendingBadge = ( trending.indexOf(article._id) > -1 && article.views > 3 ) ? <Badge size="small" level="error">most read</Badge> : ""

            return (
               
                <RowItem xs={xs} sm={sm} md={md} key={article._id}  className="article">
                    <Card>
                        { coverImage }
                        <CardItem>
                            { trendingBadge }
                            <Heading size="xlarge">{ article.title }</Heading>
                            <Heading size="small">{ new Date(article.created).toLocaleDateString() } </Heading>
                        </CardItem>
                        <CardItem>
                            <p>{ article.intro }</p>
                        </CardItem>
                        <CardActions>
                            <Link to={ 'article/' + article._id } >
                                <Button variant="text" className="read-more-button" >Read more</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </RowItem>
            
              

            )
        })
    }

    displayNoArticleMessage = () => {
        return (<div style={{textAlign: "center", fontSize: "2rem"}}>No article for the moment <br/> <span style={{fontSize:"1.5rem"}}>Maybe later...</span></div>)
    }

    render() {
        const numberOfArticles = this.state.articles.length
        return ( <Row> { (numberOfArticles > 0) ? this.getArticlesComponents() : this.displayNoArticleMessage()} </Row> )

  }
}

export default Articles



