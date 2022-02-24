import * as React from "react";
import styled from 'styled-components'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";



function NewPost() {
  const navigate = useNavigate()
  const [title, setTitle] = React.useState('')
  const [content, setContent] =React.useState('')
  const [author, setAuthor] =React.useState('')

  const hitData = async() => {
      try{
        const response = await axios({
            url:'http://localhost:3001/posts',
            method:'POST',
            "content-type":"application/json",
            data:{
                title,
                content,
                author,
                image:"https://images.unsplash.com/photo-1645628653101-63bb9d791e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            }
        })
        if(response){
            Swal.fire('Posted!', 'Your Post is successfully Posted!', 'success')
            setTitle('')
            setContent('')
            setAuthor('')
            navigate('/')
        }
      }catch(err){
        if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
         }
      }

  }


    return (
      <Container data-testid="new-post-container">
          <Title>New Post</Title>
          <HomeButton onClick={() => navigate('/')}>Back to Home</HomeButton>
          <BottomContainer>
          <InputContainer>
          <InputTitle>
          Title</InputTitle>
          <InputStyle onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Insert Title"></InputStyle>
          </InputContainer>
          <InputContainer>
          <InputTitle>
          Content</InputTitle>
          <InputArea onChange={(e) => setContent(e.target.value)} value={content} placeholder="Insert Content"></InputArea>
          </InputContainer>
          <InputContainer>
          <InputTitle>
          Author</InputTitle>
          <InputStyle onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Insert Author"></InputStyle>
          </InputContainer>
          <InputContainer>
          <SubmitButton onClick={() => hitData()}>Submit</SubmitButton>
          </InputContainer>

          </BottomContainer>
      </Container>
    );
  }

  const Container = styled.div`
  width: 100%;
  height: 94vh;
  `
  const Title = styled.div`
  font-size: 40px;
  margin-top: 40px;
  `
const BottomContainer = styled.div`
width:100%;
background-color:#F6F6F6;
display:flex;
flex-direction:column;
align-items:center;
height: 94vh;
`
const InputContainer = styled.div`
margin-top: 45px;
`
const InputStyle = styled.input`
`

const InputArea = styled.textarea`
min-height: 200px;
`

const InputTitle = styled.div`
font-weight:bold;
font-size:20px;
`

const SubmitButton = styled.div`
border: 1px solid black;
border-radius:25px;
padding: 10px;`

const HomeButton = styled.div`
color:blue;
margin-bottom: 20px;`


export default NewPost;
