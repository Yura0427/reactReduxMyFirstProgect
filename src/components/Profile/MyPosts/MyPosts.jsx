import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../api/utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';

const maxlength10 = maxLengthCreator(10)

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post key={p.id} massage={p.message} likesCount={p.likesCount} />)
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  let onAddPost = (e) => {
    props.addPost(e.newPostText)
    console.log(e.newPostText)
  }
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddNewPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder='new post text' name="newPostText" component={Textarea} validate={[required, maxlength10 ]}/></div>
      <div><button>Add post</button></div>
    </form>
  )
}
const MyPostsFormRedux = reduxForm({ form: 'ProfileAddNewPostsForm' })(AddNewPostsForm)
export default MyPosts