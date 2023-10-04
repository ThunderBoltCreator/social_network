import styled from 'styled-components/macro'

const Profile = styled.div`
  img {
    width: 100%;
  }
`
const ProfileInfo = styled.div`
  > .img-wrapper {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`
const MyPosts = styled.div``
const Post = styled.div``

export default {Profile, ProfileInfo, MyPosts, Post}