import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import matt from '../assets/images/catalan2.jpg'
import Button from 'sq-web-components-core-react/forms/Button'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Dialog, {DialogHeader, DialogContent, DialogFooter  } from 'sq-web-components-core-react/collections/Dialog'
import Row, {RowItem} from 'sq-web-components-core-react/collections/Row'
import Checkbox from 'sq-web-components-core-react/forms/Checkbox'

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
                response = await fetch('/api/brick/redactor/articles')
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
        return this.state.articles.map( (article, index) => {
            var xs = 12, sm = 6, md = 4, lg = 4
            if (index === 0) {
                sm = 12
                md = 9
                lg = 8
            } else if (index === 1) {
                md = 3
            }
            return (
                <RowItem xs={xs} sm={sm} md={md} lg={lg} key={article._id}>
                    <Card>
                        <CardMedia src={matt} />
                        <CardItem>
                            <Heading size="xlarge">{ article.title }</Heading>
                            <Heading size="small">{ new Date(article.created).toLocaleDateString() } </Heading>
                        </CardItem>
                        <CardItem>
                            <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                        </CardItem>
                        <CardActions>
                            <Link to={ 'article/' + article._id } >
                                <Button variant="text">Read more</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </RowItem>
            )
        })
    }


    render() {
        return ( <Row> {this.getArticlesComponents()} </Row> )
  }
}

export default Articles



