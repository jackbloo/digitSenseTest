import React from 'react'
import styled from 'styled-components'


 const CommentCard = ({data}) => {
    return(
        <CardContainer data-testid="comment-card-container">
            {data.comment}
        </CardContainer>

    )
}

const CardContainer = styled.div`
margin-top: 10px;
width:50%;
text-align: left;
border: 1px solid black;
padding: 10px;
`

export default CommentCard;