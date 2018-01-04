import React, { Component } from 'react'
import Heading from 'sq-web-components-core-react/elements/Heading'
import Card, {CardMedia, CardItem, CardActions, CardHeader, CardFooter, CardMenu } from 'sq-web-components-core-react/collections/Card'
import Badge from 'sq-web-components-core-react/elements/Badge'
import {IconSentimentSatisfied, IconSentimentNeutral, IconSentimentDissatisfied, IconArrowup } from "sq-web-icons"
import MediaObject, {MediaObjectMedia, MediaObjectImage,MediaObjectContent} from "sq-web-components-core-react/collections/MediaObject"
import List, { ListItem } from "sq-web-components-core-react/collections/List"
import matt from '../assets/images/catalan2.jpg'


class Article extends Component {

    //this.props.history.goBack()

    componentWillMount() {
        this.props.registerBrickView(this.props.location.pathname, this.props.history)
    }

    render() {
        
        return (
        <div className="article">
            <img className="article-cover" src={matt}/>
            <Card>
                <CardItem>
                    <Badge size="small" level="error">breaking news</Badge>
                    <Heading size="xlarge">{ this.props.match.params.id }</Heading>
                    <Heading size="small">{ new Date().toLocaleDateString() }</Heading>
                </CardItem>
                <CardItem className="article-content">
                    <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                    <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.
                    Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.
                    Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                    <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                    <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                    <hr/>
                    <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.
                    Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.
                    Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                    <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                    <p>Swissquote Group Holding Ltd and its subsidiaries provide Online Financial Services that mainly consist of the services provided by Swissquote Bank Ltd through its financial web portal www.swissquote.ch.</p>
                </CardItem>
                <CardItem className="article-sentiment">
                    <Heading size="small" level="3">What's your reaction to that article?</Heading>
                    <IconSentimentSatisfied/>
                    <IconSentimentNeutral/>
                    <IconSentimentDissatisfied/>
                </CardItem>
            </Card>
            <Heading size="xlarge"><IconArrowup/>Trending Articles</Heading>
            <List divided size="large">
                <ListItem>
                    <MediaObject>
                        <MediaObjectContent>
                            <Heading size="large">Large heading is large</Heading>
                            <p>
                                Etiam molestie malesuada ultricies. Etiam posuere sollicitudin enim eget tincidunt.
                                Mauris dui nunc, faucibus et dapibus quis, congue quis diam. Praesent ut dapibus leo, vitae tincidunt odio.
                                Pellentesque tristique dolor nec augue rutrum, et dictum eros eleifend. Ut non pretium diam, quis tincidunt sem.
                                Proin ante augue, auctor eget porta aliquam, lobortis et velit. Donec pretium consequat ornare.
                            </p>
                        </MediaObjectContent>
                    </MediaObject>
                </ListItem>
                <ListItem>
                <MediaObject>
                        <MediaObjectContent>
                            <Heading size="large">Large heading</Heading>
                            <p>
                                Etiam molestie malesuada ultricies. Etiam posuere sollicitudin enim eget tincidunt.
                                Mauris dui nunc, faucibus et dapibus quis, congue quis diam. Praesent ut dapibus leo, vitae tincidunt odio.
                                Pellentesque tristique dolor nec augue rutrum, et dictum eros eleifend. Ut non pretium diam, quis tincidunt sem.
                                Proin ante augue, auctor eget porta aliquam, lobortis et velit. Donec pretium consequat ornare.
                            </p>
                        </MediaObjectContent>
                    </MediaObject>
                </ListItem>
                <ListItem>
                <MediaObject>
                        <MediaObjectContent>
                            <Heading size="large">Large heading</Heading>
                            <p>
                                Etiam molestie malesuada ultricies. Etiam posuere sollicitudin enim eget tincidunt.
                                Mauris dui nunc, faucibus et dapibus quis, congue quis diam. Praesent ut dapibus leo, vitae tincidunt odio.
                                Pellentesque tristique dolor nec augue rutrum, et dictum eros eleifend. Ut non pretium diam, quis tincidunt sem.
                                Proin ante augue, auctor eget porta aliquam, lobortis et velit. Donec pretium consequat ornare.
                            </p>
                        </MediaObjectContent>
                    </MediaObject>
                </ListItem>
            </List>
        </div>
        )       
  }
}

export default Article



