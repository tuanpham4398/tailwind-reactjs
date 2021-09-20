import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album : PropTypes.object.isRequired
};

function Album({album}) {
    return (
        <div>
            <img src={album.bgImage} alt="" />
            <p className=" text-center pt-6 break-words">{album.title}</p>
        </div>
    );
}

export default Album;