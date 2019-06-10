import React from 'react';

function Gallery(props) {

    var friendsImagesDivs = props.friendsImagesUrls.map((friendImageUrl, index) => {
        return (<div className="col-2" key={index}><img src={friendImageUrl} alt="friend" /></div>)
    });

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        Friends Gallery
                        <button onClick={() => props.randomize()}>Randomize</button>
                    </div>
                </div>
            </div>
            <div className="row">
                {friendsImagesDivs}
            </div>
        </div>
    );
}

export default Gallery;