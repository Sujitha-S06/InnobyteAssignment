import './index.css'

const Gallery=()=>{
    return(
        <div className="gallery-container">

            <div className="row">
                <div className="column1">
                    <img src="out.jpg" alt="out-img" width="300" height="500"/>
                </div>
                <div className="column2">
                    <div className="row">
                        <img src="ayodhya.webp" alt="ayodhya" width="550" height="250"/>
                        <img src="large.jpg" alt="large" width="350" height="250"/>
                        <img src="palash.webp" alt="palash" width="350" height="250"/>
                    </div>
                    <div className="row">
                        <img src="small.jpg" alt="small"  width="350" height="250"/>
                        <img src="baranti.webp" alt="baranti" width="550" height="250"/>
                        <img src="recep.jpg" alt="recep"  width="350" height="250"/>
                    </div>
                </div>

            </div>
            <div className="row">
                 <img src="flower.jpg" alt="flower" width="350" height="250" />
                 <img src="room1.jpg" alt="room1" width="550" height="250"/>
                 <img src="mithonDam.webp" alt="mithonDam"  width="350" height="250"/>
            </div>
        </div>
    )
}

export default Gallery