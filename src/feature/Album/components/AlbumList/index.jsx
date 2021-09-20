import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <div>
      <ul
        className="grid grid-cols-3 gap-11
       mx-auto max-w-5xl pt-10"
      >
        {albumList.map((album) => (
          <li key="{album.id}">
            <Album album={album} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
