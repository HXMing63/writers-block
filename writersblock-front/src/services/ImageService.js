class ImageService{
    createImgURL(img){
		if (img !== null) {
			const fileTypeRegex = /\.(png|jpe?g)$/i;
			const match = img.name.match(fileTypeRegex);
            const lowerCaseFileType = match[0].toLowerCase()

            let imgType = "";
			let blob = null;

			if (match !== null) {
				const imgData = Uint8Array.from(atob(img.data), (c) =>
					c.charCodeAt(0)
				);

                switch (lowerCaseFileType) {
                    case ".png":
                        imgType = "image/png";
                        break;
                
                    case ".jpg":
                    case "jpeg":
                        imgType = "image/jpeg";
                        break;
                    default:
                        break;
                }

                if (imgType !== ""){
                    blob = new Blob([imgData.buffer], { type: imgType });
                }
			}

			if (blob !== null) {
                return URL.createObjectURL(blob);
			}
		}

        return null;
    }
}

export default new ImageService();