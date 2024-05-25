import Bestsellers from '../components/bestsellers/Bestsellers'
import Gifts from '../components/gifts/gifts'
import PopularTastes from '../components/popular-tastes/PopularTastes'
import Advantages from '../components/advantages/Advantages'

const Root = () => {
    return (<main className="main-container">
        <h1 className="visually-hidden">Продажа мороженого с доставкой</h1>
        <Bestsellers />
        <Gifts />
        <PopularTastes />
        <Advantages />
    </main>)
}

export default Root