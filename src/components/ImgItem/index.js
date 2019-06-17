import React, { useState } from 'react';
import ReactLoading from 'react-loading';

export default function ImgItem(props) {
	const [imgState, setImgState] = useState(false);

  function handleLoad() {
    setImgState(true)
  }

	return (
		<a href={props.url} target="_block">
			<img
				src={props.imgUrl}
				onLoad={handleLoad}
				data-index={props.index}
				alt=""
				className={props.className || ''}
			/>
			{imgState ? (
				''
			) : (
				<ReactLoading
					className="loading"
					type="bars"
					color="#ffffc2"
					height={'5vw'}
					width={'5vw'}
				/>
			)}
		</a>
  );
}
