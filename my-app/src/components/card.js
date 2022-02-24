import React from 'react'
import styled from 'styled-components'


const Card = ({data, changeNavigation}) => {
    return(
        <CardContainer data-testid="card-container">
            <LeftContainer>
            <ImageContainer>
                <img src={data.image} alt={data.content}/>
                </ImageContainer>
            </LeftContainer>
            <RightContainer>
              <div>
            <ContentTitle>
                {data.title}
            </ContentTitle>
            <ContentText>
                {data.content}
            </ContentText>
            </div>
            <AuthorName>
            <NextButton onClick={() => changeNavigation(data.id)}>
                Click for More
            </NextButton>
               <div> Author: {data.author}</div>
            </AuthorName>
            </RightContainer>
        </CardContainer>
    )
}


const CardContainer = styled.div`
display:flex;
flex-direction:row;
margin-top:10px;
width:35%;
`

const LeftContainer = styled.div``

const ImageContainer = styled.div`
  width:70%;
img {
  width: 300px;
  height: 200px; 
  object-fit: cover;
  object-position: 0px 74%;
}
`

const RightContainer = styled.div`
display:flex;
flex-direction: column;
text-align:left;
justify-content:space-between;
margin-left:10px;
width:100%;
`

const ContentTitle = styled.div`
font-size:20px;
font-weight: bold;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 15ch;

`

const ContentText = styled.div`
font-size:15px;
overflow: hidden;
text-overflow: ellipsis;
max-width: 30ch;
margin-top: 10px;
`



const AuthorName = styled.div`
text-align:right;
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:10px;
width:100%;
`

const NextButton = styled.div`
font-weight:bold;
color:blue;
`

export default Card;