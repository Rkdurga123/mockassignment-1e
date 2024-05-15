import {Component} from 'react'
import {FaBold, FaItalic, FaUnderline} from 'react-icons/fa'

import './index.css'

import {
  Heading,
  BgContainer,
  Card,
  Image,
  TextEditors,
  ButtonContainer,
  Button,
  Hr,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {textToBold: false, textToItalic: false, textToUnderline: false}

  onChangebold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  onChangeUnderline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state

    const boldBtnColor = textToBold === true ? '#faff00' : '#f8fafc'
    const italicBtnColor = textToItalic === true ? '#faff00' : '#f8fafc'
    const underlineBtnColor = textToUnderline === true ? '#faff00' : '#f8fafc'

    const fontWeightBold = textToBold === true ? 'bold' : 'normal'
    const fontStyleItalic = textToItalic === true ? 'italic' : 'normal'
    const textDecoration = textToUnderline === true ? 'underline' : 'normal'

    return (
      <BgContainer>
        <Card>
          <div>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div>
            <ButtonContainer>
              <ListItem>
                <Button
                  type="button"
                  data-testid="bold"
                  color={boldBtnColor}
                  onClick={this.onChangebold}
                >
                  <FaBold size={30} />
                </Button>
              </ListItem>

              <ListItem>
                <Button
                  type="button"
                  data-testid="italic"
                  color={italicBtnColor}
                  onClick={this.onChangeItalic}
                >
                  <FaItalic size={30} />
                </Button>
              </ListItem>

              <ListItem>
                <Button
                  type="button"
                  data-testid="underline"
                  color={underlineBtnColor}
                  onClick={this.onChangeUnderline}
                >
                  <FaUnderline size={30} />
                </Button>
              </ListItem>
            </ButtonContainer>
            <Hr />
            <TextEditors
              fontStyle={fontStyleItalic}
              fontWeight={fontWeightBold}
              textDecoration={textDecoration}
            />
          </div>
        </Card>
      </BgContainer>
    )
  }
}

export default TextEditor
