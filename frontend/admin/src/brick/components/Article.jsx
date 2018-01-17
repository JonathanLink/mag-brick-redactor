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
        this.state = {title: '', content: '', editMode: false}
        //this.state = { text: '', content: '', coverImage: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        this.props.registerBrickView(this.props.history)
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
            response = await fetch('http://' + ((true) ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/article/' + id)
        } catch(err) {
            console.log(err)
        }
        if (response.status === 200) {
            try {
                this.article = await response.json()
                this.article = this.article[0]
                this.setState( { title: this.article.title, content: this.article.content } )
            } catch (err) {
                console.log(err)
            }
        }
    }

    setTitle = (e) => {
        let title = e.target.value
        this.article.title = title
    }

   
    handleChange(content, delta, source, editor) {
        this.article.content = content
        const REGEX = /<img[^>]*src="([^"]*)"/g
        const match = REGEX.exec(content)
        if (match && match.length > 0) {
            const coverImage = match[1]
            this.article.cover = coverImage
        }
    }


    publish = async() => {
        let request
        try {
            this.article.isPosted = true
            request = await fetch('http://' + ((true) ? "127.0.0.1:9000" : location.host) + '/api/brick/redactor/article', {method: "POST", body: JSON.stringify(this.article) })
        } catch(err) {
            console.log(err)
        }
        console.log(request)
    }

    render() {
        
        return (
            <Row>
                <RowItem>
                        <Input value={ this.state.title } onChange={ (event) => this.setTitle(event) } style={ {fontSize: "1.5rem", border: "0"} } size="large" name="article-title" placeholder="Type the headline of your article here" />
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
                    <ButtonGroup>
                        { (this.state.editMode) ? <span/> : <Button>Save for later</Button> } 
                        <Button level="success" onClick={ this.publish } >{ (this.state.editMode) ? "Update" : "Publish" }</Button>
                    </ButtonGroup>
                </RowItem>
            </Row> 
        )
  }
}

export default Article



