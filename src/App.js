import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PostDetail from './components/Posts/PostDetail'
import PostIndex from './components/Posts/PostIndex'
import Users from './components/Users'
import UserDetail from './components/Users/UserDetail'
import UserIndex from './components/Users/UserIndex'
import Albums from './components/Albums'
import AlbumList from './components/Albums/AlbumList'
import Photos from './components/Albums/Photos'
import PhotoList from './components/Albums/Photos/PhotoList'
import PhotoDetail from './components/Albums/Photos/PhotoDetail'
import Nav from './components/Nav'
import { lazy, Suspense } from 'react'

const Posts = lazy(() => import('./components/Posts'))

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* Posts -> Posts 컴포넌트를 보여줘 */}
      {/* 5버전 -> / 라는 라우트, /posts 라는 라우트, 중첩적으로 요소가 표시됨 */}
      {/* exact */}
      {/* 6버전 -> 주소가 정확히 일치해야만 요소가 표시되도록 */}
      {/* path 에다가 * 문자를 쓰면 지금 있는 path 일치하지 않는 모든 경우에 대해서 */}
      <Routes>
        <Route
          path="posts"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Posts />
            </Suspense>
          }
        >
          <Route index element={<PostIndex />} />
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<UserIndex />} />
          <Route path=":userId" element={<UserDetail />} />
        </Route>
        <Route path="albums" element={<Albums />}>
          <Route index element={<AlbumList />} />
          <Route path=":albumId" element={<Photos />}>
            <Route index element={<PhotoList />} />
            <Route path="photos/:photoId" element={<PhotoDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
