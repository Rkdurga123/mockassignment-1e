import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  background-size: cover;
`
export const Card = styled.div`
  background-color: #1b1c22;
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 50px;
  display: flex;
`
export const Heading = styled.h1`
  font-size: 30px;
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  margin-top: 40px;
  margin-left: 80px;
  margin-bottom: 50px;
`
export const Image = styled.img`
  height: 300px;
  width: 40%;
`
export const TextEditors = styled.div`
  margin: 20px;
  border-radius: 15px;
  background-color: #25262c;
  border: 1px solid #cbd5e1;
`
export const TextInput = styled.textarea`
  font-size= 20px;
  font-family: 'Roboto';
  font-weight: ${props => props.fontWeightBold};
  font-style: ${props => props.fontStyleItalic};
  text-decoration: ${props => props.textDecoration};
`
export const ButtonContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
`
export const Button = styled.Button`
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const ListItem = styled.li`
  display: flex;
  margin: 10px;
`
export const Hr = styled.hr`
  border: 1px solid #cbd5e1;
  width: 100%;
`
