import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({pos, onDelite, onToggleImportant, onToggleLiked}) => { //получаем пропс
   
    const elements = pos.map((item) => {
        const {id, label, important, like} = item; // можно свернуть {id,...postsItem}
        
        return ( // можно разветнуть и сделать {...postsItem}
            <li key={id} className = "list-group-item"> 
                <PostListItem 
                label ={label} 
                important = {important} 
                like = {like}
                onDelite={() => onDelite(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked = {() => onToggleLiked(id)}/> 
            </li>
        )
    })

    return ( 
        <ListGroup className = "app-list">
               {elements}
        </ListGroup>
    )
}

export default PostList;
 