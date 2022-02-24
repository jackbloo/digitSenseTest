import * as React from "react";
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components'
import { setData } from "../reducer/data/reducer";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Card from "../components/card";



function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector((state) => state.dataPicker.data)
  const changeNavigation = (id) => {
      if(id === 'new'){
        navigate('/new')
      }else{
        navigate(`/detail/${id}`)
      }

  }

  const fetchData = async() => {
      try{
        const response = await axios({url:'http://localhost:3001/posts'})
        dispatch(setData(response.data))
      }catch(err){
        if (err.response) {
           console.log(err.response.status)
           console.log(err.response.data)
        }
      }

  }

  React.useEffect( () => {
    fetchData()
  }, [])


    return (
      <Container data-testid="home-container">
          <ContentContainer>
          <Title>
              DigitSense Exam
          </Title>
          <NewPost onClick={() => changeNavigation('new')}>
              New Post
              <PlusIcon  className="fa fa-plus icon"/>
          </NewPost>
          <Title>
             Post   
            </Title>
          <BottomContainer>
            <BigContainer>
                {data.map((el,i) => <Card data={el} key={`${el}-${i}`} changeNavigation={changeNavigation}/>)}
            </BigContainer>
          </BottomContainer>
          </ContentContainer>
      </Container>
    );
  }

  const Container = styled.div`
  width: 100%;
  height: 94vh;
  `
  const ContentContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
  `

  const BottomContainer = styled.div`
  margin-top: 30px;
  width:100%;
  background-color:#F6F6F6;
  display:flex;
  flex-direction:column;
  align-items:center;
  height: 94vh;
  `

  const Title = styled.div`
  font-size: 40px;
  margin-top: 40px;
  `

  const NewPost = styled.div`
  margin-top:20px;
  font-size:20px;
  border-radius:25px;
  border: 1px solid black;
  padding: 10px;
  `

  const PlusIcon = styled.div`
  margin-left:5px;
  `
  const BigContainer = styled.div`
  margin-top: 20px;
  overflow-y:auto;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  `

export default Home;
