
import * as C from './style'

const CardDownloadApp = () => {
    return (
        <>
        <C.Container>
            <div className='content'>
                <h5 className='title-card'>A Great App Makes Your Life Better</h5>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <h6 className='download-title'>Download app now</h6>
                <div className='download-apps'>
                    <a href="#">
                        <img src="images/playStoreIcon.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="images/appstoreIcon.png" alt="" />
                    </a>
                </div>
            </div>
        </C.Container>
        </>
    )
}

export default CardDownloadApp