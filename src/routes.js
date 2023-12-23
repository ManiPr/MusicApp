import Albums from "./pages/albums/Albums"
import AlbumDetail from "./pages/album-detail/AlbumDetail"
import Discover from "./pages/discover/Discover"
import Artists from './pages/artists/artists'
import ArtistDetail from './pages/artist-detail/ArtistDetail'
import TopTrack from "./pages/top-track/TopTrack"
import Download from './pages/download/Download'
import History from './pages/history/History'
import FeaturedPlayList from "./pages/featured-playlist/FeaturedPlayList"
import NotFound from './pages/not-found/NotFound'
import Category from "./pages/category/Category"
import CategoryDetail from "./pages/category-detail/CategoryDetail"
let routes = [
    {path: '/albums/*', element: < Albums />},
    {path: '/', element: < Discover />,},
    {path: '/album/:albumId', element: < AlbumDetail />,},
    {path: '/artist', element: < Artists />,},
    {path: '/artist/:artistId', element: < ArtistDetail />,},
    {path: '/toptrack', element: < TopTrack />,},
    {path: '/favorites', element: < Download />,},
    {path: '/history', element: < History />,},
    {path: '/featuredplaylist', element: < FeaturedPlayList />,},
    {path: '/category', element: < Category />,},
    {path: '/categorydetail/:categoryname', element: < CategoryDetail />,},
    {path: '*', element: < NotFound />,},
]

export default routes