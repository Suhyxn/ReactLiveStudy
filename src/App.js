import { Link, Route, Routes } from 'react-router-dom'
import Posts from './components/Posts'
import PostDetail from './components/Posts/PostDetail'
import PostIndex from './components/Posts/PostIndex'
import Users from './components/Users'
import UserDetail from './components/Users/UserDetail'
import UserIndex from './components/Users/UserIndex'

function App() {
  return (
    <div>
      <nav>
        <Link to="posts">Posts</Link> |<Link to="users">Users</Link>
      </nav>
      {/* Posts -> Posts 컴포넌트를 보여줘 */}
      {/* 5버전 -> / 라는 라우트, /posts 라는 라우트, 중첩적으로 요소가 표시됨 */}
      {/* exact */}
      {/* 6버전 -> 주소가 정확히 일치해야만 요소가 표시되도록 */}
      {/* path 에다가 * 문자를 쓰면 지금 있는 path 일치하지 않는 모든 경우에 대해서 */}
      <Routes>
        <Route path="posts" element={<Posts />}>
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<UserIndex />} />
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  )
}

export default App
