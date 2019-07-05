import React, { useState } from 'react';

import './css/style.css'

const Compression = () => {

	const [download] = useState(null)

	let reader = new FileReader();

	let file = null;

	// 后缀名
	let suffix = null;

	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	// 创建下载图片超链接
	const funDownload = (canvas, filename) => {
		// 创建隐藏的可下载链接
		let eleLink = document.createElement('a');
		eleLink.download = filename;
		eleLink.style.display = 'none';
		// 如果是PNG图片，则canvas.toDataURL('image/png')
		eleLink.href = canvas.toDataURL('image/jpeg');
		// 触发点击
		document.body.appendChild(eleLink);
		eleLink.click();
		// 然后移除
		document.body.removeChild(eleLink);
	};

	// 压缩图片
	const compressImg = (img, targetWidth, targetHeight) => {
		// canvas对图片进行缩放
		canvas.width = targetWidth;
		canvas.height = targetHeight;
		// 清除画布
		context.clearRect(0, 0, targetWidth, targetHeight);
		// 图片压缩
    context.drawImage(img, 0, 0, targetWidth, targetHeight);

		// 这里是为了防止同一张图片第二次上传，不能压缩下载的问题
    img = null
	};

	// 获取图片后缀名
	const getSuffix = filename => {
		let index = filename.lastIndexOf('.');
		suffix = filename.substr(index + 1);
	};

	// 图片加载
	const generateImg = () => {
		let img = new Image();

    // 图片信息读取好之后，将结果赋值给img.src
		reader.onload = function(e) {
			img.src = e.target.result;
    };
    
		img.onload = function() {
			// 图片原始尺寸
			let originWidth = this.width;
			let originHeight = this.height;
			// 最大尺寸限制
			let maxWidth = 400,
				maxHeight = 400;
			// 目标尺寸
			let targetWidth = originWidth,
				targetHeight = originHeight;
			// 图片尺寸超过400x400的限制
			if (originWidth > maxWidth || originHeight > maxHeight) {
				if (originWidth / originHeight > maxWidth / maxHeight) {
					// 更宽，按照宽度限定尺寸
					targetWidth = maxWidth;
					targetHeight = Math.round(maxWidth * (originHeight / originWidth));
				} else {
					targetHeight = maxHeight;
					targetWidth = Math.round(maxHeight * (originWidth / originHeight));
				}
			}

			compressImg(img, targetWidth, targetHeight);

      funDownload(canvas, `picture.${suffix}`);
		};
	};

	const handleChange = e => {
		file = e.target.files[0];
		if (file !== undefined) {
			getSuffix(file.name);
			if (file.type.indexOf('image') === 0) {
        reader.readAsDataURL(file);
        generateImg()
			}
			// 为了防止第二次提交同一个文件触发不了第二次事件的bug
			// 这里将第一次文件内容设置为 空 即可
			e.target.value = ''
		}
	};

	return (
		<div className="compress">
			<input
        className='compress__file'
				type="file"
				id="file"
				onChange={handleChange}
				accept=".png,.jpg,.jpeg"
			/>
      <div className="compress__info">
        <i className='iconfont icontupian1'></i>
        <p>Drag PNG & JPG</p>
				<label className="compress__select" htmlFor='file'>{download ? download : 'Select'}</label>
      </div>
		</div>
	);
};

export default Compression;
