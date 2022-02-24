import * as React from "react";
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setDetail,setComments, addComments  } from "../reducer/data/reducer";
import CommentCard from "../components/commentCard";
import Swal from 'sweetalert2'


function Detail() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const detail = useSelector((state) => state.dataPicker.detail)
  const comments = useSelector((state) => state.dataPicker.comments)
  const [inputComment, setInputComments] = React.useState('')
  const {id} = useParams();
  const navigateHome = () => {
      navigate('/')
  }

  const fetchDetails = async() => {
      try{
        const response = await axios({url:`http://localhost:3001/posts/${id}`})
        dispatch(setDetail(response.data))
      }catch(err){
        if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
         }
      }

  }

  const fetchComments = async() => {
      try{
        const response = await axios({url:`http://localhost:3001/comments/`})
        const filter = response.data.filter((el) => el.parentID === Number(id)).sort((a,b) => b.id - a.id)
        dispatch(setComments(filter))
      }catch(err){
        if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
         }
      }

  }

  const addNewComments = async() => {
      const newData ={
        parentID: Number(id),
        comment: inputComment
      }
    const response = await axios({
        url:'http://localhost:3001/comments',
        method:'POST',
        "content-type":"application/json",
        data:newData
    })
    if(response){
        dispatch(addComments(response.data))
        setInputComments('')
        Swal.fire('Comment Posted!', 'Your Comment is successfully Posted!', 'success')

    }
  }

React.useEffect(() => {
    fetchDetails()
    fetchComments()
},[])

    return (
      <Container data-testid="detail-container">
          <Title>{detail.title}</Title>
          <AuthorTitle>by {detail.author}</AuthorTitle>
          <HomeButton onClick={() => navigateHome()}>Back to Home</HomeButton>
          <ImageContainer>
                  <img src={detail.image} alt={detail.content}/>
          </ImageContainer>
        <Content>
            {detail.content}
        </Content>
        <CommentsContainer>
            <CommentTitle>
                Comments
            </CommentTitle>
            <CommentInputContainer>
            <CommentInput onChange={(e) => setInputComments(e.target.value)} value={inputComment}>
            </CommentInput>
            <SubmitButton onClick={() => addNewComments()}>
                Submit
            </SubmitButton>
            </CommentInputContainer>
            <CommentContents>
                {comments.map((el,id) => <CommentCard data={el} key={`${el.comment}-${id}`}/> )}
            </CommentContents>
        </CommentsContainer>
      </Container>
    );
  }

  const Container = styled.div`
  width: 100%;
  height: 94vh;
  display:flex;
  flex-direction: column;
  align-items:center;
  `
  const Title = styled.div`
  font-size: 40px;
  margin-top: 40px;
  font-weight:bold;
  `
  const HomeButton = styled.div`
  color:blue;`

const ImageContainer = styled.div`
width:70%;
margin-top: 30px;
img {
width: 500px;
height: 300px; 
object-fit: cover;
object-position: 0px 74%;
}
`
const Content = styled.div`
margin-top: 30px;
`

const CommentsContainer = styled.div`
margin-top: 60px;
display:flex;
flex-direction:column;
align-items:center;
width: 100%;
background-color:#F6F6F6;
height:100%;
`
const CommentTitle = styled.div`
margin-top: 20px;
font-size: 20px;
font-weight:bold;
text-align:left;
margin-bottom: 20px;
`
const CommentInput = styled.input`
width: 20%;`

const CommentContents = styled.div`
margin-top: 10px;
display:flex;
flex-direction:column;
align-items:center;
width:100%;
overflow-y:auto;
max-height: 300px;
margin-bottom: 20px;
`

const CommentInputContainer = styled.div`
display:flex;
justify-content:center;
width:100%;
`

const SubmitButton = styled.div`
border: 1px solid black;
border-radius:25px;
padding-right: 5px;
padding-left:5px;
margin-left: 10px;
`
const AuthorTitle = styled.div`
margin-bottom: 5px;
`

export default Detail;
