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
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'

import '../assets/styles.css'

Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)

const modules = {
    toolbar: [
      [{ 'header': [2, false] }],
      ['bold', 'italic', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image']
    ],
    imageDrop: true,
    imageResize: {
        displaySize: true
    }
  }

const formats = [
    'header',
    'bold', 'italic', 'blockquote',
    'list', 'bullet',
    'link', 'image'
  ]

class Article extends Component {

    constructor(props) {
        super(props)
        this.article = {}
        this.article.title = ''
        this.article.content = ''
        this.article.cover = ''
        this.article.intro = ''

        this.state = {title: '', content: '', editMode: false}
        //this.state = { text: '', content: '', coverImage: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        this.props.setBackButton('/articles', this.props.history)
    }

    async componentDidMount() {
        const articleId = this.props.match.params.id
        if (articleId) { 
            await this.fetchArticle(articleId)
            this.setState( { editMode: true } )
        }

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
                this.article = await response.json()
                console.log( this.article )
                this.article = this.article[0]
                this.setState( { title: this.article.title, content: this.article.content, isPosted: this.article.isPosted } )
            } catch (err) {
                console.log(err)
            }
        }
    }

    setTitle = (e) => {
        let title = e.target.value
        this.article.title = title
        this.setState( {title: title } )
    }

   
    handleChange(content, delta, source, editor) {
        // content
        this.article.content = content
        this.setState( {content: content } )
        
        // cover
        const REGEX = /<img[^>]*src="([^"]*)"/g
        const match = REGEX.exec(content)
        if (match && match.length > 0) {
            const coverImage = match[1]
            this.article.cover = coverImage
        } else {
            this.article.cover = ""
        }

        // intro text
        const REGEX_REMOVE_IMG = /<img[^>]+\>/gi
        let tmpContent = content.replace(REGEX_REMOVE_IMG, '')
        tmpContent = tmpContent.replace(`<p><br></p><p>`, '')
        tmpContent = tmpContent.substring(0,400)
        let lastIndexOfDot = (tmpContent.lastIndexOf('.') <= 0) ? tmpContent.length : tmpContent.lastIndexOf('.')
        tmpContent = tmpContent.substring(0, lastIndexOfDot + 1 )
        tmpContent = tmpContent + "</p>"
        let div = document.createElement("div")
        div.innerHTML = tmpContent
        this.article.intro = div.innerText
        

    }

    publish = async (isPosted=true) => {
        if (this.state.editMode) {
            let request
            try {
                const articleId = this.props.match.params.id
                this.article.isPosted = isPosted
                console.log(this.article)
                request = await fetch('http://' + ((process.env.NODE_ENV !== "production") ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/article/' + articleId, {method: "PUT", body: JSON.stringify(this.article) })
            } catch(err) {
                console.log(err)
            }
            console.log(request)
        } else {
            let request
            try {
                this.article.isPosted = isPosted
                request = await fetch('http://' + ((process.env.NODE_ENV !== "production") ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/article', {method: "POST", body: JSON.stringify(this.article) })
            } catch(err) {
                console.log(err)
            }
            console.log(request)
        }
        this.props.history.push('/articles')
    }

    delete = async () => {
        if (this.state.editMode) {
            let request
            try {
                const articleId = this.props.match.params.id
                request = await fetch('http://' + ((process.env.NODE_ENV !== "production") ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/article/' + articleId, { method: "DELETE" })
            } catch(err) {
                console.log(err)
            }
        }
        this.props.history.push('/articles')
    }

    render() {
        
        return (
            <Row>
                <RowItem>
                        <Input value={ this.state.title } onChange={ (event) => this.setTitle(event) } style={ {fontSize: "1.5rem", border: "0", marginLeft: "2rem",  marginRight: "3rem"} } size="large" name="article-title" placeholder="Type the headline of your article here" />
                        <ReactQuill 
                            modules={ modules }
                            formats={ formats }
                            value={  this.state.content }
                            theme= { "bubble" }
                            onChange={ this.handleChange }
                            placeholder={ "... and its content right here" } />
                </RowItem>
                <RowItem>
                    
                </RowItem>
                <RowItem style={ {float: "right", marginTop: "3rem"} }>
                { (!this.state.editMode) ? <span/> : <Button style={{marginRight: "2rem", position: "relative"}} level="error" onClick={ () => this.delete() } >Delete</Button> } 
                    <ButtonGroup>
                        { (this.article.isPosted) ? <span/> : <Button onClick={ () => this.publish(false) } >Save for later</Button> } 
                        <Button level="success"  style={{marginRight: "2rem", position: "relative"}} onClick={ () => this.publish(true) } >{ (this.article.isPosted) ? "Update" : "Publish" }</Button>
                    </ButtonGroup>
                </RowItem>
            </Row> 
        )
  }
}

export default Article



